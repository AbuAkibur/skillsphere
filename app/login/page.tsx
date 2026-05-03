"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, BookOpen } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function LoginPage() {
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
      const result = await authClient.signIn.email({
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
    <div className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-cream to-orange-50/40 px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex">
        {/* Left - Illustration */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-orange-50 to-[#FFE0C2] items-center justify-center p-10 relative">
          {/* Circle decoration */}
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
              <h2
                className="text-2xl font-bold text-[#1A1A2E]"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Welcome Back!
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Continue your learning journey
              </p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B00] to-[#FF4500] rounded-xl flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-lg font-bold"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Skill<span className="gradient-text">Sphere</span>
            </span>
          </Link>

          <h1
            className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-2"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Login{" "}
            <span className="gradient-text underline-orange">Now</span>
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[#FF6B00] font-semibold hover:underline"
            >
              Register here
            </Link>
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
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

            {/* Password */}
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
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="text-right">
              <a
                href="#"
                className="text-xs text-[#FF6B00] hover:underline font-medium"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white font-bold rounded-xl shadow-orange hover:shadow-orange-lg transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">
              or continue with
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full py-3.5 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 text-sm flex items-center justify-center gap-3 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {googleLoading ? (
              <div className="w-4 h-4 border-2 border-gray-300 border-t-[#FF6B00] rounded-full animate-spin" />
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            )}
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
