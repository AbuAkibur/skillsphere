"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Award, Users, BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-pattern pt-16">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF6B00]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#FF8A33]/6 rounded-full blur-3xl" />

      {/* Animated dots */}
      <div className="absolute top-32 left-8 flex flex-col gap-2 opacity-40">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-2">
            {[...Array(5)].map((_, j) => (
              <div
                key={j}
                className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full"
              />
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-[#FF6B00]/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#FF6B00]">
                #1 Online Learning Platform
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Upgrade Your{" "}
                <span className="gradient-text relative">
                  Skills
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    fill="none"
                  >
                    <path
                      d="M0 4 Q50 0 100 4 Q150 8 200 4"
                      stroke="#FF6B00"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                Today 🚀
              </h1>
            </div>

            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
              Learn from{" "}
              <span className="font-semibold text-gray-700">
                600+ Industry Experts
              </span>
              . Master in-demand skills with hands-on projects. Transform your
              career with our expert-curated curriculum.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white font-bold rounded-xl shadow-orange hover:shadow-orange-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Browse Courses
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-2.5 px-7 py-3.5 text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all duration-200">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B00] to-[#FF4500] rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 text-white fill-white" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { icon: BookOpen, value: "3.2K+", label: "Courses" },
                { icon: Users, value: "50K+", label: "Students" },
                { icon: Award, value: "600+", label: "Experts" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div>
                    <p
                      className="font-bold text-[#1A1A2E] text-base"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main image container */}
            <div className="relative">
              {/* Bg circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full scale-90 blur-2xl opacity-70" />

              {/* Person image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 animate-float">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80"
                  alt="Student learning online"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B00]/20 to-transparent rounded-3xl" />
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -left-8 bg-white rounded-2xl shadow-card-hover p-3.5 flex items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B00] to-[#FF4500] rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total Courses</p>
                  <p className="text-sm font-bold text-gray-900">1,235+</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl shadow-card-hover p-3.5 animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-500">Average Rating</p>
                <p className="text-sm font-bold text-gray-900">4.8 / 5.0</p>
              </div>

              {/* Students count card */}
              <div className="absolute top-1/2 -right-10 bg-gradient-to-br from-[#FF6B00] to-[#FF4500] rounded-2xl shadow-orange p-3.5 text-white animate-float" style={{ animationDelay: "0.5s" }}>
                <Users className="w-5 h-5 mb-1" />
                <p className="text-xs opacity-80">Students</p>
                <p className="text-sm font-bold">50K+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40L60 35C120 30 240 20 360 25C480 30 600 50 720 50C840 50 960 30 1080 25C1200 20 1320 30 1380 35L1440 40V60H0V40Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
