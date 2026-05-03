import Link from "next/link";
import { BookOpen, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-orange-50/40 flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-lg">
        {/* 404 Graphic */}
        <div className="relative mb-8">
          <div
            className="text-9xl font-black gradient-text select-none"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#FF6B00] to-[#FF4500] rounded-2xl flex items-center justify-center shadow-orange-lg opacity-10 scale-150" />
          </div>
        </div>

        {/* Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B00] to-[#FF4500] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-orange">
          <Search className="w-10 h-10 text-white" />
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-3"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white font-bold rounded-xl shadow-orange hover:shadow-orange-lg transition-all hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[#FF6B00] text-[#FF6B00] font-semibold rounded-xl hover:bg-[#FF6B00] hover:text-white transition-all duration-200"
          >
            <BookOpen className="w-4 h-4" />
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
