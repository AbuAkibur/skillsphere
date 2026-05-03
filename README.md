# SkillSphere 🎓

> **Upgrade Your Skills Today 🚀** — A modern, full-stack e-learning platform built with Next.js 15.

## 🌐 Live URL

[https://skillsphere.vercel.app](https://skillsphere.vercel.app) *(deploy and replace with your URL)*

---

## ✨ Key Features

- 🏠 **Beautiful Home Page** — Hero section, popular courses, stats, tips, and instructor showcase
- 📚 **All Courses Page** — Search, filter by category, sort by rating/price
- 🔒 **Protected Course Details** — Auth-guarded with redirect-back after login
- 👤 **User Profile** — View stats, enrolled courses, and personal info
- ✏️ **Profile Update** — Change name and profile photo
- 🔑 **BetterAuth Authentication** — Email/password + Google OAuth
- 🎨 **Orange-themed Design** — Vibrant, modern UI with Tailwind CSS + DaisyUI
- 📱 **Fully Responsive** — Mobile, tablet, and desktop
- 🔔 **Toast Notifications** — React Hot Toast for all user feedback
- 🚫 **Custom 404 Page** — Friendly not-found page

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** (App Router) | Framework & routing |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **DaisyUI** | Component library |
| **BetterAuth** | Authentication (email + Google OAuth) |
| **Prisma** | ORM for database |
| **SQLite** | Database (dev) |
| **React Hot Toast** | Notifications |
| **Lucide React** | Icons |
| **Framer Motion** | Animations |

---

## 📁 Project Structure

```
skillsphere/
├── app/
│   ├── api/auth/[...all]/route.ts   # BetterAuth API handler
│   ├── courses/
│   │   ├── page.tsx                 # All courses page
│   │   └── [id]/page.tsx            # Course details (protected)
│   ├── login/page.tsx               # Login page
│   ├── register/page.tsx            # Register page
│   ├── profile/
│   │   ├── page.tsx                 # Profile page (protected)
│   │   ├── ProfileClient.tsx        # Profile client component
│   │   └── update/
│   │       ├── page.tsx             # Update profile page
│   │       └── UpdateProfileClient.tsx
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Root layout
│   ├── not-found.tsx                # Custom 404 page
│   └── page.tsx                     # Home page
├── components/
│   ├── Navbar.tsx                   # Navigation bar
│   ├── Footer.tsx                   # Footer
│   ├── CourseCard.tsx               # Reusable course card
│   ├── HeroSection.tsx              # Home hero
│   ├── PopularCourses.tsx           # Top 3 courses section
│   ├── ELearningSection.tsx         # About/stats section
│   ├── TipsSection.tsx              # Blog/tips section
│   ├── InstructorsSection.tsx       # Instructor showcase
│   └── LoadingSpinner.tsx           # Loading component
├── lib/
│   ├── auth.ts                      # BetterAuth server config
│   ├── auth-client.ts               # BetterAuth client config
│   └── data.ts                      # Course & instructor data
├── prisma/
│   └── schema.prisma                # Database schema
├── .env.example                     # Environment variables template
└── README.md
```

---

## ⚙️ Setup & Run Instructions

### Prerequisites
- Node.js 18+ installed
- Git installed
- A Google Cloud Console project (for Google OAuth)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/skillsphere.git
cd skillsphere
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
BETTER_AUTH_SECRET=your-random-secret-minimum-32-chars
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
DATABASE_URL="file:./dev.db"
```

> **Get Google OAuth credentials:**  
> Go to [Google Cloud Console](https://console.cloud.google.com) → APIs & Services → Credentials → Create OAuth 2.0 Client ID  
> Add `http://localhost:3000/api/auth/callback/google` as Authorized redirect URI

### 4. Set Up the Database

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add your environment variables in Vercel dashboard
4. Deploy!

For production database, replace SQLite with PostgreSQL (e.g., Neon, Supabase) and update `DATABASE_URL` and prisma schema `provider`.

---

## 📝 Git Commit History

This project was built with **15 meaningful commits**:

1. `feat: initialize Next.js 15 project with TypeScript and Tailwind CSS`
2. `feat: add DaisyUI theme config and global CSS with orange design system`
3. `feat: set up Prisma schema and BetterAuth server/client configuration`
4. `feat: create BetterAuth API route handler`
5. `feat: build responsive Navbar with auth state and mobile menu`
6. `feat: build Footer with newsletter, categories, and social links`
7. `feat: create course data file with 8 realistic courses and instructors`
8. `feat: build reusable CourseCard and LoadingSpinner components`
9. `feat: implement Hero section with floating cards and animated stats`
10. `feat: build Home page with Popular Courses, eLearning, Tips, Instructors`
11. `feat: create All Courses page with search, filter, and sort`
12. `feat: build protected Course Details page with auth redirect`
13. `feat: implement Login page with email/password and Google OAuth`
14. `feat: implement Register page with full form validation`
15. `feat: build Profile and Update Profile pages with BetterAuth`
16. `feat: add custom 404 Not Found page`
17. `docs: add comprehensive README with setup instructions`

---

## 📸 Screenshots

| Page | Description |
|---|---|
| Home | Hero, courses, stats, tips, instructors |
| Courses | Search + filter grid |
| Course Detail | Protected, full course info |
| Login/Register | Auth forms with Google OAuth |
| Profile | User dashboard with enrolled courses |

---

## 📄 License

MIT License — feel free to use this project for learning purposes.

---

*All rights reserved by abuakibur@gmail.com*
