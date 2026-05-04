"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, BookOpen, UserCheck } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

function LoginFormContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      await authClient.signIn.email({
        email,
        password,
        callbackURL: redirect,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Welcome back! 🎉");
            router.push(redirect);
            router.refresh();
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Invalid email or password");
          },
        },
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setLoading(true);
    try {
      await authClient.signIn.email({
        email: "guest@skillsphere.com",
        password: "GuestPassword123!",
        callbackURL: redirect,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged in as Guest! 🚀");
            router.push(redirect);
            router.refresh();
          },
          onError: () => {
            toast.error("Guest account not found. Please register it first on the site.");
          },
        },
      });
    } catch {
      toast.error("Guest login failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: redirect,
      });
    } catch {
      toast.error("Google sign-in failed. Please try again.");
      setGoogleLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex">
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-orange-50 to-[#FFE0C2] items-center justify-center p-10 relative">
        <div className="absolute w-64 h-64 bg-[#FF6B00]/10 rounded-full top-10 -left-20" />
        <div className="absolute w-48 h-48 bg-[#FF8A33]/10 rounded-full bottom-10 right-0" />
        <div className="relative text-center">
          <div className="relative w-72 h-72 mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80"
              alt="Student"
              fill
              className="object-cover rounded-3xl shadow-xl"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-[#1A1A2E]" style={{ fontFamily: "Syne, sans-serif" }}>
              Welcome Back!
            </h2>
            <p className="text-gray-500 mt-2 text-sm">Continue your learning journey</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B00] to-[#FF4500] rounded-xl flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold" style={{ fontFamily: "Syne, sans-serif" }}>
            Skill<span className="gradient-text">Sphere</span>
          </span>
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
          Login <span className="gradient-text underline-orange">Now</span>
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-[#FF6B00] font-semibold hover:underline">
            Register here
          </Link>
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 outline-none transition-all"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-11 pr-11 py-3.5 rounded-xl border border-gray-200 text-sm focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 outline-none transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          <div className="text-right">
            <a href="#" className="text-xs text-[#FF6B00] hover:underline font-medium">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white font-bold rounded-xl shadow-orange hover:shadow-orange-lg transition-all hover:-translate-y-0.5 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">or continue with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full py-3 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 text-sm flex items-center justify-center gap-3 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all"
          >
            Login with Google
          </button>

          <button
            type="button"
            onClick={handleGuestLogin}
            className="w-full py-3 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl font-bold text-gray-500 text-sm flex items-center justify-center gap-2 hover:bg-orange-50 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all"
          >
            <UserCheck className="w-4 h-4" />
            Try Guest Access
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-cream to-orange-50/40 px-4">
      <Suspense
        fallback={
          <div className="text-[#FF6B00] animate-pulse font-bold">
            Loading SkillSphere...
          </div>
        }
      >
        <LoginFormContent />
      </Suspense>
    </div>
  );
}