"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/data";

const categories = [
  "All",
  "Web Development",
  "Design",
  "Data Science",
  "Marketing",
  "Finance",
  "Photography",
  "Business",
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Filter by search
    if (search.trim()) {
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.instructor.toLowerCase().includes(search.toLowerCase()) ||
          c.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((c) => c.category === selectedCategory);
    }

    // Sort
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      result.sort((a, b) => {
        const aPrice = a.price === "Free" ? 0 : a.price;
        const bPrice = b.price === "Free" ? 0 : b.price;
        return aPrice - bPrice;
      });
    } else if (sortBy === "price-high") {
      result.sort((a, b) => {
        const aPrice = a.price === "Free" ? 0 : a.price;
        const bPrice = b.price === "Free" ? 0 : b.price;
        return bPrice - aPrice;
      });
    }

    return result;
  }, [search, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2D2D] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#FF6B00]/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-xs font-bold text-[#FF8A33] uppercase tracking-wider">
                Our Catalog
              </span>
            </div>
            <h1
              className="text-3xl md:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              All <span className="text-[#FF6B00]">Courses</span>
            </h1>
            <p className="text-gray-400">
              Explore {courses.length} courses designed by world-class experts.
              Find your perfect learning path.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-card p-4 mb-8 flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses, instructors..."
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 outline-none transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="py-3 px-4 rounded-xl border border-gray-200 text-sm focus:border-[#FF6B00] outline-none text-gray-700 bg-white cursor-pointer"
            >
              <option value="rating">Top Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white shadow-orange"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#FF6B00] hover:text-[#FF6B00]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredCourses.length}
            </span>{" "}
            course{filteredCourses.length !== 1 ? "s" : ""}
            {search && (
              <span>
                {" "}
                for &quot;
                <span className="text-[#FF6B00]">{search}</span>&quot;
              </span>
            )}
          </p>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-[#FF6B00]" />
            </div>
            <h3
              className="text-xl font-bold text-gray-800 mb-2"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              No courses found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or category filter.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="px-6 py-3 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white font-semibold rounded-xl"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
