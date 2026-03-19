"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  BookOpen,
  Users,
  Zap,
  BarChart3,
  Shield,
  Clock,
  Sparkles,
  CheckCircle,
  Rocket,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 via-transparent to-pink-600/20 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm">AI-Powered Library Management</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Manage Your Library{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Effortlessly
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            The next-generation platform for modern library management.
            Streamline borrowing, tracking, and inventory with intelligent
            automation and real-time insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-purple-500/50 rounded-lg font-semibold hover:bg-purple-500/10 transition">
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 text-left">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">10K+</div>
              <div className="text-gray-400 text-sm">Libraries Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-400 text-sm">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Inventory Management",
                desc: "Real-time tracking of all books and resources",
              },
              {
                icon: Users,
                title: "Member Management",
                desc: "Manage borrowers and track lending history",
              },
              {
                icon: Zap,
                title: "Smart Automation",
                desc: "Auto-reminders and overdue notifications",
              },
              {
                icon: BarChart3,
                title: "Analytics",
                desc: "Detailed insights into library usage patterns",
              },
              {
                icon: Shield,
                title: "Secure Access",
                desc: "Role-based access control and data security",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                desc: "Dedicated support team always available",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-lg hover:bg-purple-500/10 hover:border-purple-400/40 transition group"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 border-t border-purple-500/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Loved by Libraries
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "LibraryPro transformed how we manage our collections. Highly
                  recommended!"
                </p>
                <div className="font-semibold">Library Manager {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Simple Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$99",
                features: [
                  "Up to 5,000 books",
                  "Basic analytics",
                  "Email support",
                ],
              },
              {
                name: "Professional",
                price: "$299",
                features: [
                  "Up to 50,000 books",
                  "Advanced analytics",
                  "Priority support",
                ],
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Unlimited books",
                  "Custom features",
                  "Dedicated support",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-8 rounded-lg border ${
                  plan.highlight
                    ? "bg-linear-to-br from-purple-600/20 to-pink-600/20 border-purple-400/50"
                    : "bg-purple-500/5 border-purple-500/20"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.highlight
                      ? "bg-linear-to-r from-purple-600 to-pink-600 hover:opacity-90"
                      : "border border-purple-400 hover:bg-purple-500/10"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-purple-500/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Library?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join thousands of libraries already using LibraryPro
          </p>
          <button className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 mx-auto">
            Start Your Free Trial <Rocket className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/10 py-12 text-center text-gray-500">
        <p>&copy; 2024 LibraryPro. All rights reserved.</p>
      </footer>
    </div>
  );
}
