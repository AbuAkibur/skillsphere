# SkillSphere 🎓

> **Upgrade Your Skills Today 🚀** — A modern, full-stack e-learning platform built with Next.js 15.

## 🌐 Live URL

[https://skillsphere-elearing.vercel.app](https://skillsphere-elearing.vercel.app)

---

## 🔑 Demo Access (For Reviewers)

To check the protected features (Profile, Course Details) without creating an account, use the **"Try Guest Access"** button on the Login page or use:

- **Email:** `guest@skillsphere.com`
- **Password:** `GuestPassword123!`

---

## ✨ Key Features

- 🏠 **Beautiful Home Page** — Hero section, popular courses, and instructor showcase.
- 📚 **All Courses Page** — Search, filter by category, and sorting.
- 🔒 **Protected Routes** — Auth-guarded course details and profiles.
- 🔑 **BetterAuth** — Secure Email/Password + Google OAuth.
- 📱 **Fully Responsive** — Mobile-first design using Tailwind CSS & DaisyUI.

---

## 🛠 Tech Stack

| Technology             | Purpose                          |
| ---------------------- | -------------------------------- |
| **Next.js 15.1.4+**    | Framework (patched for security) |
| **BetterAuth**         | Authentication                   |
| **Prisma & SQLite**    | Database Management              |
| **Tailwind & DaisyUI** | Styling                          |

---

## ⚙️ Setup Instructions

1. `npm install`
2. Configure `.env.local` with `BETTER_AUTH_SECRET`, `GOOGLE_CLIENT_ID`, and `DATABASE_URL`.
3. `npx prisma db push`
4. `npm run dev`

---

_All rights reserved by Abu MD Akibur Rahman. email: abuakibur@gmail.com_
