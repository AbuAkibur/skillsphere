"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, BookOpen, Star } from "lucide-react";
import type { Course } from "@/lib/data";

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

// Reliable fallback images per category
const FALLBACKS: Record<string, string> = {
  "Web Development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  "Design":         "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  "Data Science":   "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "Marketing":      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "Finance":        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  "Photography":    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
  "Business":       "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  "default":        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
};

export default function CourseCard({ course, featured = false }: CourseCardProps) {
  const [imgSrc, setImgSrc]       = useState(course.image);
  const [avatarSrc, setAvatarSrc] = useState(course.instructorAvatar);
  const stars = Math.round(course.rating);

  const handleImgError = () => {
    const fallback = FALLBACKS[course.category] ?? FALLBACKS["default"];
    if (imgSrc !== fallback) setImgSrc(fallback);
  };

  const handleAvatarError = () => {
    setAvatarSrc(
      `https://ui-avatars.com/api/?name=${encodeURIComponent(course.instructor)}&background=FF6B00&color=fff&size=64`
    );
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group ${
        featured ? "border-2 border-[#FF6B00]/20" : "border border-gray-100"
      }`}
    >
      {/* Course Image */}
      <div className="relative overflow-hidden h-48 bg-orange-50">
        <Image
          src={imgSrc}
          alt={course.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={handleImgError}
        />
        {featured && (
          <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white text-xs font-bold px-3 py-1 rounded-full">
            ⭐ Top Rated
          </div>
        )}
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-white/90 backdrop-blur-sm text-[#FF6B00] text-xs font-semibold px-3 py-1 rounded-full border border-[#FF6B00]/20">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Instructor */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className="relative w-7 h-7 rounded-full overflow-hidden ring-2 ring-[#FF6B00]/20 shrink-0">
            <Image
              src={avatarSrc}
              alt={course.instructor}
              fill
              unoptimized
              className="object-cover"
              onError={handleAvatarError}
            />
          </div>
          <span className="text-sm text-gray-500 font-medium">{course.instructor}</span>
        </div>

        {/* Title */}
        <h3
          className="font-semibold text-gray-900 text-base leading-snug mb-3 line-clamp-2 group-hover:text-[#FF6B00] transition-colors"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {course.title}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>{course.lectures} Lectures</span>
          </div>
        </div>

        <div className="h-px bg-gray-100 mb-4" />

        {/* Price & Rating */}
        <div className="flex items-center justify-between">
          <span
            className={`text-lg font-bold ${
              course.price === "Free" ? "text-green-500" : "text-[#FF6B00]"
            }`}
          >
            {course.price === "Free" ? "Free" : `$${course.price}.00`}
          </span>
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < stars ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-gray-600">{course.rating}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/courses/${course.id}`}
          className="mt-4 block w-full py-2.5 text-center text-sm font-semibold text-[#FF6B00] border-2 border-[#FF6B00]/30 rounded-xl hover:bg-[#FF6B00] hover:text-white hover:border-[#FF6B00] transition-all duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
