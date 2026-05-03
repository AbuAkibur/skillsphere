"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { courses } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function PopularCourses() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Top 3 by rating
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
              Top Picks
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Discover Our{" "}
            <span className="gradient-text">Popular Courses</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Hand-picked courses from our top instructors. Start learning with
            the highest-rated content on SkillSphere.
          </p>
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {topCourses.map((course) => (
              <CourseCard key={course.id} course={course} featured />
            ))}
          </div>
        )}

        {/* See All button */}
        <div className="text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#FF6B00] text-[#FF6B00] font-semibold rounded-xl hover:bg-[#FF6B00] hover:text-white transition-all duration-200"
          >
            See All Courses
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
