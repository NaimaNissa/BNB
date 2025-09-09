"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function EmiratesLubPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
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
              My Account
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-red-600">EMIRATES LUB</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
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
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl mb-1">⇄</div>
                <span className="text-xs text-gray-600">Compare</span>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">❤️</div>
                <span className="text-xs text-gray-600">Wishlist</span>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1 text-red-600">🛒</div>
                <span className="text-xs text-gray-600">TAKAO (0) items</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button className="flex items-center space-x-2 bg-red-700 px-4 py-2 rounded">
              <span>⊞</span>
              <span>Categories</span>
            </button>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-orange-300">Home</a>
              <a href="#" className="hover:text-orange-300">Products</a>
              <a href="#" className="hover:text-orange-300">About Us</a>
              <a href="#" className="hover:text-orange-300">All Categories</a>
              <a href="#" className="hover:text-orange-300">Contact</a>
            </div>
            <div className="text-2xl">🛒</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex">
            {/* Left Sidebar */}
            <div className="w-1/4 bg-white rounded-lg p-6 mr-6">
              <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="py-2 border-b border-gray-200">All Categories</div>
                <div className="py-2 border-b border-gray-200">Engine Oils</div>
                <div className="py-2 border-b border-gray-200">Lubricants</div>
                <div className="py-2 border-b border-gray-200">Hydraulic Fluids</div>
                <div className="py-2 border-b border-gray-200">Greases</div>
              </div>
            </div>

            {/* Main Banner */}
            <div className="flex-1 bg-white rounded-lg p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50"></div>
              <div className="relative z-10 flex">
                <div className="w-1/2">
                  <h2 className="text-4xl font-bold text-gray-800 mb-2">Get the Best</h2>
                  <h2 className="text-5xl font-bold text-orange-500 mb-2">TECH DEALS</h2>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">TODAY!</h2>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-gray-800">EXTRA </span>
                    <span className="text-2xl font-bold text-orange-500">20% OFF</span>
                  </div>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
                    TECHLOVE1
                  </button>
                </div>
                <div className="w-1/2 relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                      <span className="text-gray-500">🛢️</span>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                      <span className="text-gray-500">⚙️</span>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                      <span className="text-gray-500">🔧</span>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                      <span className="text-gray-500">🚗</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work in Progress Banner */}
          <div className="mt-8 bg-orange-500 text-white p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">🚧 WORK IN PROGRESS 🚧</h3>
            <p className="text-lg">Our lubricant e-commerce platform is currently under development</p>
            <p className="text-sm mt-2 opacity-90">Stay tuned for the full shopping experience!</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">EMIRATES LUB</h3>
              <h4 className="text-lg font-semibold mb-4">SIGN UP FOR OUR NEWSLETTER</h4>
              <p className="text-gray-400 text-sm mb-4">
                Receive our latest updates about our products and promotions.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email Address..."
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-800"
                />
                <button className="bg-red-600 px-6 py-2 rounded-r-lg font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>House No. 14/A, Road No. 126, Gulshan-1, Dhaka-1212</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>+8801873980895</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <span>info@emirateslub.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Emirates Lub Bangladesh Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
