"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GoldenDropsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Cookie Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Track Order</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">English</span>
              <span className="text-xs">🇺🇸</span>
            </div>
            <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center">
              <span className="mr-1">👤</span>
              <span className="hidden sm:inline">My Account</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-2 md:mr-3">
                <span className="text-white text-xl md:text-2xl">💧</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">GOLDEN DROPS</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-0 lg:mx-8 w-full lg:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="I am shopping for..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </button>
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <div className="text-center hidden sm:block">
                <div className="text-xl lg:text-2xl mb-1">⇄</div>
                <span className="text-xs text-gray-600">Compare</span>
              </div>
              <div className="text-center hidden sm:block">
                <div className="text-xl lg:text-2xl mb-1">❤️</div>
                <span className="text-xs text-gray-600">Wishlist</span>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl mb-1 text-red-600">🛒</div>
                <span className="text-xs text-gray-600 hidden sm:inline">TAKAO (0) items</span>
                <span className="text-xs text-gray-600 sm:hidden">(0)</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <button className="flex items-center space-x-2 bg-red-700 px-4 py-2 rounded w-full sm:w-auto justify-center">
              <span>⊞</span>
              <span>Categories</span>
            </button>
            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-6">
              <a href="#" className="hover:text-orange-300 px-2 py-1">Home</a>
              <a href="#" className="hover:text-orange-300 px-2 py-1">Products</a>
              <a href="#" className="hover:text-orange-300 px-2 py-1">About Us</a>
              <a href="#" className="hover:text-orange-300 px-2 py-1">All Categories</a>
              <a href="#" className="hover:text-orange-300 px-2 py-1">Contact</a>
            </div>
            <div className="text-xl sm:text-2xl hidden sm:block">🛒</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0">
            {/* Left Sidebar */}
            <div className="w-full lg:w-1/4 bg-white rounded-lg p-4 lg:p-6 lg:mr-6">
              <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="py-2 border-b border-gray-200">All Categories</div>
                <div className="py-2 border-b border-gray-200">Food Products</div>
                <div className="py-2 border-b border-gray-200">Beverages</div>
                <div className="py-2 border-b border-gray-200">Snacks</div>
                <div className="py-2 border-b border-gray-200">Health Foods</div>
              </div>
            </div>

            {/* Main Banner */}
            <div className="flex-1 bg-white rounded-lg p-4 lg:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50"></div>
              <div className="relative z-10 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">Get the Best</h2>
                  <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-2">TECH DEALS</h2>
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">TODAY!</h2>
                  <div className="mb-6">
                    <span className="text-xl md:text-2xl font-bold text-gray-800">EXTRA </span>
                    <span className="text-xl md:text-2xl font-bold text-orange-500">20% OFF</span>
                  </div>
                  <button className="bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base">
                    TECHLOVE1
                  </button>
                </div>
                <div className="w-full md:w-1/2 relative">
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    <div className="bg-gray-200 rounded-lg h-24 md:h-32 flex items-center justify-center">
                      <span className="text-gray-500 text-2xl md:text-3xl">🍎</span>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-24 md:h-32 flex items-center justify-center">
                      <span className="text-gray-500 text-2xl md:text-3xl">🥤</span>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-24 md:h-32 flex items-center justify-center">
                      <span className="text-gray-500 text-2xl md:text-3xl">🍪</span>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-24 md:h-32 flex items-center justify-center">
                      <span className="text-gray-500 text-2xl md:text-3xl">🥗</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work in Progress Banner */}
          <div className="mt-8 bg-orange-500 text-white p-4 md:p-6 rounded-lg text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">🚧 WORK IN PROGRESS 🚧</h3>
            <p className="text-base md:text-lg">Our food & beverage e-commerce platform is currently under development</p>
            <p className="text-sm mt-2 opacity-90">Stay tuned for the full shopping experience!</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-2 md:mr-3">
                  <span className="text-white text-xl md:text-2xl">💧</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold">GOLDEN DROPS</h3>
              </div>
              <h4 className="text-base md:text-lg font-semibold mb-4">SIGN UP FOR OUR NEWSLETTER</h4>
              <p className="text-gray-400 text-sm mb-4">
                Receive our latest updates about our products and promotions.
              </p>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your Email Address..."
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-800 mb-2 sm:mb-0"
                />
                <button className="bg-red-600 px-4 md:px-6 py-2 rounded-r-lg font-semibold text-sm md:text-base">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-base md:text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-start">
                  <span className="mr-2 mt-1">📍</span>
                  <span>House No. 14/A, Road No. 126, Gulshan-1, Dhaka-1212</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>+8801873980895</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <span>info@goldendropsbd.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-4 text-center text-gray-400 text-xs md:text-sm">
            <p>&copy; 2024 Golden Drops Food & Beverages Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}