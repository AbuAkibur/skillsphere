"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const stats = [
  { value: "3.2K+", label: "Online Course" },
  { value: "600+", label: "Expert Members" },
  { value: "1K+", label: "Rating & Review" },
];

const features = [
  "Learn at your own pace, anytime anywhere",
  "Access to 600+ industry expert instructors",
  "Earn certificates recognized by top companies",
  "Lifetime access to purchased course materials",
];

export default function ELearningSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-cream to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80"
                alt="E-learning"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/10 to-transparent" />
            </div>

            {/* Floating stats cards */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl shadow-card-hover p-4">
              <div className="flex justify-between">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center flex-1">
                    <p
                      className="text-2xl font-bold text-[#FF6B00]"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="space-y-6 mt-8 lg:mt-0">
            <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-1.5 rounded-full">
              <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
                About Us
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1A2E]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Explore The{" "}
              <span className="gradient-text">eLearning Institute</span>
            </h2>

            <p className="text-gray-500 leading-relaxed">
              SkillSphere brings together the world's best educators and
              learners. Our platform makes it easy to develop new skills, earn
              recognized certificates, and advance your career — all from
              anywhere in the world.
            </p>

            <p className="text-gray-500 leading-relaxed">
              With over 3,200 courses across 20+ categories, we provide the
              most comprehensive learning experience tailored to your goals and
              learning style.
            </p>

            {/* Features list */}
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="px-8 py-3.5 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white font-bold rounded-xl shadow-orange hover:shadow-orange-lg transition-all hover:-translate-y-0.5">
              Read More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
