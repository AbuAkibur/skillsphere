import Link from "next/link";
import {
  BookOpen,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const categories = [
    "Web Development",
    "UI/UX Design",
    "Data Science",
    "Digital Marketing",
    "Photography",
    "Finance & Business",
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "All Courses" },
    { href: "/login", label: "Sign In" },
    { href: "/register", label: "Sign Up" },
  ];

  return (
    <footer className="bg-[#1A1A2E] text-gray-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF4500] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Ready to Start Learning?
              </h3>
              <p className="text-orange-100 mt-1">
                Join 50,000+ students already learning on SkillSphere
              </p>
            </div>
            <Link
              href="/register"
              className="px-8 py-3.5 bg-white text-[#FF6B00] font-bold rounded-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 text-sm"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-[#FF6B00] to-[#FF4500] rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Skill<span className="text-[#FF6B00]">Sphere</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Empowering learners worldwide with expert-led courses in
              technology, design, business, and creative skills.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" />
                <span className="text-gray-400">123 Learning Lane, SF, CA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <a
                  href="mailto:abuakibur@gmail.com"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                >
                  abuakibur@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span className="text-gray-400">+1 (415) 555-0182</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4
              className="text-white font-bold text-base mb-5"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Categories
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href="/courses"
                    className="text-sm text-gray-400 hover:text-[#FF6B00] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-[#FF6B00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-bold text-base mb-5"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#FF6B00] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-[#FF6B00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="text-white font-bold text-base mb-5"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest courses and tips delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
              />
              <button className="w-full py-3 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white text-sm font-bold rounded-xl hover:shadow-orange transition-all hover:-translate-y-0.5">
                Subscribe Now
              </button>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#FF6B00] hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
            <p>
              © 2026 SkillSphere. All rights reserved by{" "}
              <a
                href="mailto:abuakibur@gmail.com"
                className="text-[#FF6B00] hover:underline"
              >
                abuakibur@gmail.com
              </a>
            </p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-[#FF6B00] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#FF6B00] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#FF6B00] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
