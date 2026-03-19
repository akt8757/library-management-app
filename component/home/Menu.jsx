"use client";
import React from "react";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { Menu as Nav } from "lucide-react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="fixed w-full backdrop-blur-md bg-black/50 border-b border-purple-500/20 z-50">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
          <Link href="/">
            <div className="flex items-center gap-2 text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              <BookOpen className="w-8 h-8 text-brandColor" />
              <div className="text-brandColor">BookNest</div>
            </div>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Nav />}
          </button>
          <div
            className={`${isMenuOpen ? "block" : "hidden"} md:flex items-center gap-8 absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-black/90 md:bg-transparent p-6 md:p-0`}
          >
            <a
              href="#features"
              className="hover:text-brandColor transition text-white"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-brandColor transition text-white"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-brandColor transition text-white"
            >
              Testimonials
            </a>
            <Link href="/register">
              <button className="px-6 py-2 bg-brandColor rounded-lg hover:bg-brandColor/90 transition w-full md:w-auto">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
