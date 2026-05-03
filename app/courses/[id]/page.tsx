import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  BookOpen,
  Star,
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowLeft,
  Play,
  Lock,
} from "lucide-react";
import { courses } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

export default async function CourseDetailPage({ params }: Props) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  // Check auth
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(`/login?redirect=/courses/${id}`);
  }

  const stars = Math.round(course.rating);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#FF6B00] transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left / Main */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Hero Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-xl">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-[#FF6B00] fill-[#FF6B00] ml-1" />
                </div>
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#FF6B00] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {course.category}
                </span>
              </div>
            </div>

            {/* Title & Instructor */}
            <div>
              <h1
                className="text-2xl md:text-3xl font-bold text-[#1A1A2E] leading-tight mb-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {course.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <Image
                    src={course.instructorAvatar}
                    alt={course.instructor}
                    width={36}
                    height={36}
                    className="rounded-full ring-2 ring-[#FF6B00]/30"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {course.instructor}
                  </span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-1.5 text-sm text-gray-500">
                  <Users className="w-4 h-4 text-[#FF6B00]" />
                  <span>
                    {course.enrolled.toLocaleString()} Enrolled Students
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < stars
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-200 fill-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {course.rating}
                  </span>
                  <span className="text-sm text-gray-400">
                    ({course.reviews.toLocaleString()} ratings)
                  </span>
                </div>
              </div>
            </div>

            {/* Tabs content */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
              <div className="flex border-b border-gray-100">
                {["Description", "Curriculum", "Certification"].map(
                  (tab, i) => (
                    <button
                      key={tab}
                      className={`flex-1 py-4 text-sm font-semibold transition-colors ${
                        i === 0
                          ? "text-[#FF6B00] border-b-2 border-[#FF6B00]"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>

              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h2
                    className="text-lg font-bold text-[#1A1A2E] mb-3"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    Description
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Curriculum */}
                <div>
                  <h2
                    className="text-lg font-bold text-[#1A1A2E] mb-4"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    Curriculum
                  </h2>
                  <ul className="space-y-2.5">
                    {course.curriculum.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-orange-50/40 border border-orange-100/50"
                      >
                        <div className="w-6 h-6 bg-gradient-to-br from-[#FF6B00] to-[#FF4500] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">
                            {i + 1}
                          </span>
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certification */}
                <div>
                  <h2
                    className="text-lg font-bold text-[#1A1A2E] mb-3"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    Certification
                  </h2>
                  <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-[#FF6B00]/20">
                    <Award className="w-8 h-8 text-[#FF6B00] shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        Certificate of Completion
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Earn a verified certificate upon completing all modules
                        and assessments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-card-hover sticky top-24">
              {/* Price */}
              <div className="p-6 border-b border-gray-100">
                <div className="text-3xl font-bold gradient-text mb-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {course.price === "Free" ? "Free" : `$${course.price}.00`}
                </div>
                {typeof course.price === "number" && (
                  <p className="text-sm text-gray-400 line-through">
                    ${Math.round(course.price * 1.2)}.00
                  </p>
                )}
              </div>

              {/* Course Details */}
              <div className="p-6 space-y-3.5">
                {[
                  {
                    icon: Users,
                    label: "Instructor",
                    value: course.instructor,
                  },
                  {
                    icon: Clock,
                    label: "Duration",
                    value: course.duration,
                  },
                  {
                    icon: BookOpen,
                    label: "Lectures",
                    value: course.lectures.toString(),
                  },
                  {
                    icon: Award,
                    label: "Level",
                    value: course.level,
                  },
                  {
                    icon: Globe,
                    label: "Language",
                    value: course.language,
                  },
                  {
                    icon: CheckCircle,
                    label: "Certificate",
                    value: course.certificate ? "Yes" : "No",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2 text-gray-500">
                      <Icon className="w-4 h-4 text-[#FF6B00]" />
                      <span>{label}</span>
                    </div>
                    <span className="font-semibold text-gray-800">{value}</span>
                  </div>
                ))}
              </div>

              {/* Enroll Button */}
              <div className="px-6 pb-6">
                <button className="w-full py-4 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white font-bold rounded-xl shadow-orange hover:shadow-orange-lg transition-all hover:-translate-y-0.5">
                  Enroll Now
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  30-Day Money Back Guarantee
                </p>
              </div>

              {/* Share */}
              <div className="px-6 pb-6">
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Share Course:
                </p>
                <div className="flex gap-2">
                  {["f", "in", "tw", "yt", "ig"].map((s) => (
                    <button
                      key={s}
                      className="w-9 h-9 bg-gray-100 rounded-lg text-xs font-bold text-gray-600 hover:bg-[#FF6B00] hover:text-white transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
