import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import UpdateProfileClient from "./UpdateProfileClient";

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login?redirect=/profile/update");
  }

  return <UpdateProfileClient user={session.user} />;
}
