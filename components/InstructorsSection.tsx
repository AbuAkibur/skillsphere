import Image from "next/image";
import { Star, BookOpen, Users } from "lucide-react";
import { instructors } from "@/lib/data";

export default function InstructorsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#1A1A2E] to-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FF6B00]/20 px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold text-[#FF8A33] uppercase tracking-wider">
              Our Team
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Meet Our Successful{" "}
            <span className="text-[#FF6B00]">Instructors</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Learn from industry veterans who are passionate about sharing their
            expertise and helping you reach your goals.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3
                  className="font-semibold text-white text-sm"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {instructor.name}
                </h3>
                <p className="text-[#FF8A33] text-xs mt-0.5">
                  {instructor.specialty}
                </p>

                <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>{instructor.courses} Courses</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-white font-semibold">
                      {instructor.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-1.5 text-xs text-gray-400">
                  <Users className="w-3 h-3" />
                  <span>{(instructor.students / 1000).toFixed(1)}K Students</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-3.5 border-2 border-[#FF6B00] text-[#FF6B00] font-semibold rounded-xl hover:bg-[#FF6B00] hover:text-white transition-all duration-200">
            View All Instructors
          </button>
        </div>
      </div>
    </section>
  );
}
