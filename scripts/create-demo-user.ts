// scripts/create-demo-user.ts
import { PrismaClient } from '@prisma/client';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';

const prisma = new PrismaClient();

const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: 'postgresql' }),
  emailAndPassword: { enabled: true },
});

async function main() {
  try {
    const existing = await prisma.user.findUnique({
      where: { email: "admin@skillsphere.com" }
    });

    if (existing) {
      console.log("✅ Demo user already exists!");
      return;
    }

    await auth.api.signUpEmail({
      body: {
        name: "Demo Admin",
        email: "admin@skillsphere.com",
        password: "12345678",
      },
    });

    console.log("🎉 Demo user created successfully!");
    console.log("Email    : admin@skillsphere.com");
    console.log("Password : 12345678");
  } catch (error: any) {
    if (error.message?.includes("already exists")) {
      console.log("✅ Demo user already exists");
    } else {
      console.error("❌ Error:", error.message);
    }
  } finally {
    await prisma.$disconnect();
  }
}

main();