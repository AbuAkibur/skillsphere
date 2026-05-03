"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, User, ImageIcon, Save } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

interface UpdateProfileClientProps {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
  };
}

export default function UpdateProfileClient({ user }: UpdateProfileClientProps) {
  const [name, setName] = useState(user.name || "");
  const [photoURL, setPhotoURL] = useState(user.image || "");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(user.image || "");
  const router = useRouter();

  const handlePhotoURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoURL(e.target.value);
    setPreview(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    setLoading(true);
    try {
      await authClient.updateUser({
        name,
        image: photoURL || undefined,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Profile updated successfully! ✨");
            router.push("/profile");
            router.refresh();
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Failed to update profile");
          },
        },
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        {/* Back */}
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#FF6B00] transition-colors font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Profile
        </Link>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-card-hover overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF4500] p-8 text-white">
            <h1
              className="text-2xl font-bold"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Update Profile
            </h1>
            <p className="text-orange-100 text-sm mt-1">
              Keep your information up to date
            </p>
          </div>

          {/* Form */}
          <div className="p-8">
            {/* Avatar Preview */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-[#FF6B00]/20 shadow-lg">
                  {preview ? (
                    <Image
                      src={preview}
                      alt="Profile preview"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      onError={() => setPreview("")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#FF6B00] to-[#FF4500] flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">
                        {name?.charAt(0)?.toUpperCase() || "U"}
                      </span>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#FF6B00] rounded-xl flex items-center justify-center shadow-orange">
                  <ImageIcon className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email (read-only) */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm bg-gray-50 text-gray-400 cursor-not-allowed"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Email address cannot be changed
                </p>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Photo URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Profile Photo URL
                </label>
                <div className="relative">
                  <ImageIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="url"
                    value={photoURL}
                    onChange={handlePhotoURLChange}
                    placeholder="https://example.com/your-photo.jpg"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 outline-none transition-all"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Paste a direct image URL. Preview updates automatically.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <Link
                  href="/profile"
                  className="flex-1 py-3.5 text-center text-sm font-semibold text-gray-700 border-2 border-gray-200 rounded-xl hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3.5 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white text-sm font-bold rounded-xl shadow-orange hover:shadow-orange-lg transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
