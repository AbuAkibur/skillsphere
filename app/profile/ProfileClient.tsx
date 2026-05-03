"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Edit3,
  BookOpen,
  Award,
  Clock,
  User,
  Shield,
} from "lucide-react";
import { courses } from "@/lib/data";

interface ProfileClientProps {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
    emailVerified: boolean;
  };
}

export default function ProfileClient({ user }: ProfileClientProps) {
  const enrolledCourses = courses.slice(0, 3); // Simulated enrolled courses

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2D2D] h-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 -mt-20">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-card-hover overflow-hidden mb-6">
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-end gap-5">
            {/* Avatar */}
            <div className="relative shrink-0 mt-4">
              <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#FF6B00] to-[#FF4500] flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      {user.name?.charAt(0)?.toUpperCase() || "U"}
                    </span>
                  </div>
                )}
              </div>
              {user.emailVerified && (
                <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                  <Shield className="w-3 h-3 text-white" />
                </div>
              )}
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h1
                className="text-2xl font-bold text-[#1A1A2E]"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {user.name}
              </h1>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-1 text-gray-500 text-sm">
                <Mail className="w-4 h-4" />
                <span>{user.email}</span>
                {user.emailVerified && (
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">
                    Verified
                  </span>
                )}
              </div>
            </div>

            <Link
              href="/profile/update"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white text-sm font-semibold rounded-xl shadow-orange hover:shadow-orange-lg transition-all hover:-translate-y-0.5"
            >
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </Link>
          </div>

          {/* Stats */}
          <div className="border-t border-gray-100 grid grid-cols-3 divide-x divide-gray-100">
            {[
              { icon: BookOpen, label: "Enrolled", value: "3" },
              { icon: Award, label: "Certificates", value: "1" },
              { icon: Clock, label: "Hours Learned", value: "42" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="p-4 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Icon className="w-4 h-4 text-[#FF6B00]" />
                </div>
                <p
                  className="text-xl font-bold text-[#1A1A2E]"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {value}
                </p>
                <p className="text-xs text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info Cards Row */}
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {/* Personal Info */}
          <div className="bg-white rounded-2xl shadow-card p-6 border border-gray-100">
            <h2
              className="font-bold text-gray-900 mb-4 flex items-center gap-2"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <User className="w-4 h-4 text-[#FF6B00]" />
              Personal Information
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Full Name</span>
                <span className="font-medium text-gray-900">{user.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Email</span>
                <span className="font-medium text-gray-900 max-w-40 truncate text-right">
                  {user.email}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Email Verified</span>
                <span
                  className={`font-medium ${user.emailVerified ? "text-green-500" : "text-orange-500"}`}
                >
                  {user.emailVerified ? "Yes ✓" : "Pending"}
                </span>
              </div>
            </div>
          </div>

          {/* Account Security */}
          <div className="bg-white rounded-2xl shadow-card p-6 border border-gray-100">
            <h2
              className="font-bold text-gray-900 mb-4 flex items-center gap-2"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <Shield className="w-4 h-4 text-[#FF6B00]" />
              Account Security
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Account Type</span>
                <span className="font-medium text-gray-900">Standard</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Member Since</span>
                <span className="font-medium text-gray-900">2024</span>
              </div>
            </div>
            <Link
              href="/profile/update"
              className="mt-4 block text-center text-sm font-semibold text-[#FF6B00] py-2.5 border-2 border-[#FF6B00]/30 rounded-xl hover:bg-[#FF6B00] hover:text-white transition-all"
            >
              Update Profile
            </Link>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="bg-white rounded-2xl shadow-card p-6 border border-gray-100">
          <h2
            className="font-bold text-gray-900 mb-5 flex items-center gap-2"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <BookOpen className="w-4 h-4 text-[#FF6B00]" />
            My Enrolled Courses
          </h2>
          <div className="space-y-3">
            {enrolledCourses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-orange-50 transition-colors group"
              >
                <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-[#FF6B00] transition-colors">
                    {course.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {course.instructor}
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-[#FF6B00]/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#FF6B00]">
                      {Math.floor(Math.random() * 80 + 20)}%
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/courses"
            className="mt-4 block text-center text-sm font-semibold text-[#FF6B00] hover:underline"
          >
            Browse More Courses →
          </Link>
        </div>
      </div>
    </div>
  );
}
