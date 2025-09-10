"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GeneralPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 bg-white/5 backdrop-blur-sm">
        <div className="flex items-center">
          <div className="flex items-center">
            <Image
              src="/bnb-logo.png"
              alt="B&B Group Logo"
              width={80}
              height={40}
              className="h-10 w-auto mr-3"
              priority
            />
            <span className="text-white font-semibold text-lg">BnB GROUP</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 text-white">
          <div className="relative group">
            <a
              href="/pages"
              className="hover:text-orange-500 transition-colors flex items-center"
            >
              About BnB
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2">
              <div className="py-2">
                <a
                  href="/pages"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orange-500"
                >
                  Our Story
                </a>
                <a
                  href="/pages"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orange-500"
                >
                  Leadership
                </a>
                <a
                  href="/pages"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orange-500"
                >
                  Values
                </a>
              </div>
            </div>
          </div>
          <div className="relative group">
            <a
              href="/pages"
              className="hover:text-orange-500 transition-colors flex items-center"
            >
              Companies
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2">
              <div className="py-2">
                <a
                  href="/emirates-lub"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orange-500"
                >
                  Emirates Lub Bangladesh Ltd.
                </a>
                <a
                  href="/golden-drops"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orange-500"
                >
                  Golden Drops Food & Beverages Ltd.
                </a>
                <a
                  href="/bb-power-tech"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orange-500"
                >
                  BB Power & Technology Ltd.
                </a>
                <a
                  href="/lavish-loom-tex"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orange-500"
                >
                  Lavish Loom Tex Ltd.
                </a>
                <a
                  href="/asian-lub"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orange-500"
                >
                  Asian Lub Bangladesh
                </a>
              </div>
            </div>
          </div>
          <a href="/pages" className="hover:text-orange-500 transition-colors">
            Projects
          </a>
          <a href="/pages" className="hover:text-orange-500 transition-colors">
            Media Center
          </a>
          <a href="/pages" className="hover:text-orange-500 transition-colors">
            Sustainability
          </a>
          <a href="/pages" className="hover:text-orange-500 transition-colors">
            Career
          </a>
          <a href="/pages" className="hover:text-orange-500 transition-colors">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-orange-500 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-gray-900/70 to-gray-900/30 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center max-w-4xl bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-8 text-white">
              COMING SOON
            </h1>
            <p className="text-xl text-white/90 mb-8">
              This page is under development. We&apos;re working hard to bring
              you amazing content.
            </p>
            <Link
              href="/"
              className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-colors font-semibold"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
            Page Under Construction
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            We&apos;re building something amazing for you. This page will
            contain detailed information about B&B Group&apos;s services,
            companies, projects, and more. Stay tuned for updates!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-4">
                Coming Features
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Detailed company information</li>
                <li>• Project portfolios</li>
                <li>• Team profiles</li>
                <li>• Contact forms</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-4">
                Sister Companies
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Emirates Lub Bangladesh</li>
                <li>• Golden Drops Food & Beverages</li>
                <li>• BB Power & Technology</li>
                <li>• Lavish Loom Tex</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link
                  href="/"
                  className="block text-orange-500 hover:text-orange-600 transition-colors"
                >
                  ← Back to Home
                </Link>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About BnB Group
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/bnb-logo.png"
                  alt="B&B Group Logo"
                  width={80}
                  height={40}
                  className="h-10 w-auto mr-3"
                />
                <span className="font-semibold text-lg">BnB GROUP</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building excellence through tested & trusted solutions across
                multiple industries in Bangladesh.
              </p>
              <div className="mt-4 text-gray-400 text-xs">
                <p>House-14/A, L-5, Flat-6B</p>
                <p>Road-126, Gulshan-1</p>
                <p>Dhaka-1212, Bangladesh</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">ABOUT B&B GROUP</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="/pages"
                    className="hover:text-white transition-colors"
                  >
                    Board of Directors
                  </a>
                </li>
                <li>
                  <a
                    href="/pages"
                    className="hover:text-white transition-colors"
                  >
                    Management Team
                  </a>
                </li>
                <li>
                  <a
                    href="/pages"
                    className="hover:text-white transition-colors"
                  >
                    Awards
                  </a>
                </li>
                <li>
                  <a
                    href="/pages"
                    className="hover:text-white transition-colors"
                  >
                    Quality
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">OUR POLICIES</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="/pages"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/pages"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/pages"
                    className="hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/pages"
                    className="hover:text-white transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">CONNECT WITH US</h3>
              <div className="flex space-x-4 mb-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <span className="text-sm">f</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <span className="text-sm">t</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <span className="text-sm">in</span>
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Follow us for the latest updates and industry insights.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 BnB Group. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Side Panel */}
      <div
        className={`${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[9999] transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
                <Image
                  src="/bnb-logo.png"
                  alt="B&B Group Logo"
                  width={70}
                  height={35}
                  className="h-9 w-auto mr-3"
                />
                <span className="text-gray-800 font-semibold text-lg">
                  BnB GROUP
                </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="space-y-3 overflow-y-auto h-full">
            <a
              href="/pages"
              className="block text-gray-800 hover:text-orange-500 transition-colors py-2 border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About BnB
            </a>
            <a
              href="/pages"
              className="block text-gray-800 hover:text-orange-500 transition-colors py-2 border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Companies
            </a>
            <a
              href="/pages"
              className="block text-gray-800 hover:text-orange-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="/pages"
              className="block text-gray-800 hover:text-orange-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Media Center
            </a>
            <a
              href="/pages"
              className="block text-gray-800 hover:text-orange-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sustainability
            </a>
            <a
              href="/pages"
              className="block text-gray-800 hover:text-orange-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Career
            </a>
            <a
              href="/pages"
              className="block text-gray-800 hover:text-orange-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
            <Link
              href="/"
              className="block text-orange-500 hover:text-orange-600 transition-colors py-2 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
