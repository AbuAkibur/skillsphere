import Image from "next/image";
import { Calendar, Heart } from "lucide-react";
import { tips } from "@/lib/data";

export default function TipsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
              Blog & Tips
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1A1A2E]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Educational Tips &{" "}
            <span className="gradient-text">Tricks</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <article
              key={tip.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <Image
                    src={tip.authorAvatar}
                    alt={tip.author}
                    width={28}
                    height={28}
                    className="rounded-full ring-2 ring-[#FF6B00]/20"
                  />
                  <span className="text-sm text-gray-500 font-medium">
                    {tip.author}
                  </span>
                  <span className="ml-auto text-xs px-2.5 py-1 bg-orange-50 text-[#FF6B00] rounded-full font-medium border border-[#FF6B00]/10">
                    {tip.category}
                  </span>
                </div>

                <h3
                  className="font-semibold text-gray-900 leading-snug mb-3 group-hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {tip.title}
                </h3>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{tip.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5" />
                    <span>{tip.likes.toLocaleString()}+</span>
                  </div>
                </div>

                <button className="mt-4 text-sm font-semibold text-[#FF6B00] hover:underline">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
