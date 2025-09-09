"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
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
            <span className="text-white font-semibold text-lg">B&B GROUP</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 text-white">
          <div className="relative group">
            <a
              href="/pages"
              className="hover:text-orange-500 transition-colors flex items-center"
            >
              About B&B
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
      <section className="relative h-screen bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-8 text-white drop-shadow-2xl animate-fade-in-up opacity-0 animation-delay-500">
              TESTED & TRUSTED
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto animate-slide-in-left opacity-0 animation-delay-1000"></div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8 leading-tight">
                DECADES OF EXCELLENCE
                <br />
                AND PIONEERING INNOVATIONS
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                The journey began as a shared vision to establish a lasting
                legacy. Today, B&B Group stands as one of the largest
                socio-economic infrastructure based business conglomerates with
                a diverse investment portfolio spanning across multiple sectors
                in Bangladesh.
              </p>
              <div className="flex items-center bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors cursor-pointer inline-flex btn-swipe">
                <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                <span className="font-medium">LEARN MORE</span>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center h-full">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                FOLLOW US
              </h3>
              <div className="flex space-x-4">
                <a
                  href="/pages"
                  className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href="/pages"
                  className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
                <a
                  href="/pages"
                  className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <span className="text-sm font-bold">Yt</span>
                </a>
                <a
                  href="/pages"
                  className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <span className="text-sm font-bold">ig</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="py-20 bg-gray-900 text-white relative bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center scroll-animate stats-section">
        <div className="absolute inset-0 bg-gray-900/85"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-light mb-16 text-center">
            AT A GLANCE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <span className="text-orange-500 text-2xl">🏢</span>
              </div>
              <div
                className="text-4xl md:text-5xl font-light mb-2 counter"
                data-target="7"
              >
                0
              </div>
              <div className="text-gray-400 text-sm">Sister Companies</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <span className="text-orange-500 text-2xl">👥</span>
              </div>
              <div
                className="text-4xl md:text-5xl font-light mb-2 counter"
                data-target="1000"
              >
                0
              </div>
              <div className="text-gray-400 text-sm">Employees</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <span className="text-orange-500 text-2xl">⚡</span>
              </div>
              <div
                className="text-4xl md:text-5xl font-light mb-2 counter"
                data-target="2500"
              >
                0
              </div>
              <div className="text-gray-400 text-sm">MW Power Portfolio</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <span className="text-orange-500 text-2xl">🏗️</span>
              </div>
              <div
                className="text-4xl md:text-5xl font-light mb-2 counter"
                data-target="50"
              >
                0
              </div>
              <div className="text-gray-400 text-sm">Active Projects</div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Divisions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800">
              OUR DIVISIONS
            </h2>
            <div className="w-8 h-8 bg-orange-500 flex items-center justify-center">
              <span className="text-white text-sm">→</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-gray-200 relative overflow-hidden group cursor-pointer division-card bg-[url('https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center division-card">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🛢️</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Lubricants</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Emirates Lub Bangladesh - Premium lubricant solutions
                  </p>
                  <a
                    href="/pages"
                    className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm btn-swipe"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-300 relative overflow-hidden group cursor-pointer division-card bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🥤</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Food & Beverages
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    Golden Drops - Quality food and beverage solutions
                  </p>
                  <a
                    href="/pages"
                    className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm btn-swipe"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-400 relative overflow-hidden group cursor-pointer division-card bg-[url('https://plus.unsplash.com/premium_photo-1661934660615-4918f28476f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2luZG1pbGx8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">⚡</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Power & Technology
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    BB Power & Technology - Advanced power solutions
                  </p>
                  <a
                    href="/pages"
                    className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm btn-swipe"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-500 relative overflow-hidden group cursor-pointer division-card bg-[url('https://media.istockphoto.com/id/82659764/photo/people-working-in-a-shoe-factory.webp?a=1&b=1&s=612x612&w=0&k=20&c=1gOdswHnwb7G-65rUqAC-mG7bDw7NgF1XM5tAUxXn80=')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🧥</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Textiles</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Lavish Loom Tex - Premium textile manufacturing
                  </p>
                  <a
                    href="/pages"
                    className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm btn-swipe"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-600 relative overflow-hidden group cursor-pointer division-card bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🏢</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Enterprise</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Emirates Enterprise - Business solutions and consulting
                  </p>
                  <a
                    href="/pages"
                    className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm btn-swipe"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-700 relative overflow-hidden group cursor-pointer division-card bg-[url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">💻</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Technology</h3>
                  <p className="text-sm opacity-90 mb-4">
                    B&B Technology - Innovative tech solutions
                  </p>
                  <a
                    href="/pages"
                    className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm btn-swipe"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-800 relative overflow-hidden group cursor-pointer division-card bg-[url('https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🌏</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Asian Lub</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Asian Lub Bangladesh - Regional lubricant expertise
                  </p>
                  <a
                    href="/pages"
                    className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm btn-swipe"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-900 relative overflow-hidden group cursor-pointer division-card bg-[url('https://plus.unsplash.com/premium_photo-1673002094103-b2657755f800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2NlYW4lMjB3YXZlc3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🥤</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Golden Drops</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Golden Drops Food & Beverages - Premium F&B solutions
                  </p>
                  <a
                    href="/pages"
                    className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm btn-swipe"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800">
              OUR BRANDS
            </h2>
            <div className="w-8 h-8 bg-orange-500 flex items-center justify-center">
              <span className="text-white text-sm">→</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 font-bold text-sm">
                EMIRATES LUB
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 font-bold text-sm">
                GOLDEN DROPS
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-purple-600 font-bold text-sm">BB POWER</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-600 font-bold text-sm">
                LAVISH LOOM
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-red-600 font-bold text-sm">ASIAN LUB</div>
            </div>
          </div>
        </div>
      </section>
      {/* Watch Our World Section */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light mb-8">
              WATCH OUR WORLD
            </h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative bg-[url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors group">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  B&B Group Corporate Overview
                </h3>
                <p className="text-sm opacity-90">
                  Discover our journey of excellence across multiple industries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800">
              NEWS
            </h2>
            <div className="w-8 h-8 bg-orange-500 flex items-center justify-center">
              <span className="text-white text-sm">→</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  B&B GROUP EXPANDS OPERATIONS WITH NEW TECHNOLOGY INITIATIVES
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our latest expansion in technology and infrastructure
                  showcases innovative solutions that drive growth across
                  multiple industries in Bangladesh.
                </p>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="ml-3 text-orange-500 font-medium text-sm">
                    CONTINUE
                  </span>
                </div>
              </div>
            </article>

            <div className="space-y-6">
              <div className="bg-gray-900 text-white p-6 rounded-lg">
                <div className="text-center">
                  <div className="text-4xl font-light mb-2">RETAIL</div>
                  <div className="text-orange-500 text-sm">
                    Experiential Retailer
                  </div>
                </div>
              </div>

              <article className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Latest Industry Updates and Innovations
                </h3>
                <p className="text-gray-600 text-sm">
                  Stay updated with the latest developments in our industry and
                  discover how we&apos;re leading the way forward.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* Life at United Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800">
              LIFE AT B&B
            </h2>
            <div className="w-8 h-8 bg-orange-500 flex items-center justify-center">
              <span className="text-white text-sm">→</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-light mb-2">4</div>
                  <div className="text-sm">YEARS</div>
                  <div className="text-xs mt-2">B&B</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-medium text-gray-800 mb-2">
                  MEET PRASHANT KUMAR MEGHWAR - CHIEF CIVIL ENGINEER
                </h3>
                <div className="flex items-center mt-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="ml-3 text-orange-500 font-medium text-sm">
                    CONTINUE
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-light mb-2">4</div>
                  <div className="text-sm">YEARS</div>
                  <div className="text-xs mt-2">B&B</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-medium text-gray-800 mb-2">
                  MEET CHANDRA SEKHAR PRASAD - CHAIRMAN AND MANAGING DIRECTOR
                </h3>
                <div className="flex items-center mt-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="ml-3 text-orange-500 font-medium text-sm">
                    CONTINUE
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-light mb-2">∞</div>
                  <div className="text-sm">OPPORTUNITIES</div>
                  <div className="text-xs mt-2">B&B</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-medium text-gray-800 mb-2">
                  BE A PART OF OUR TEAM - EXPLORE NEW CAREER OPPORTUNITIES
                </h3>
                <div className="flex items-center mt-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="ml-3 text-orange-500 font-medium text-sm">
                    CONTINUE
                  </span>
                </div>
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
                <span className="font-semibold text-lg">B&B GROUP</span>
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
                  href="/pages"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <span className="text-sm">f</span>
                </a>
                <a
                  href="/pages"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <span className="text-sm">t</span>
                </a>
                <a
                  href="/pages"
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
            <p>&copy; 2024 B&B Group. All rights reserved.</p>
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
                  B&B GROUP
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
              About B&B
            </a>
            <div className="pl-4 space-y-2">
              <a
                href="/pages"
                className="block text-gray-600 hover:text-orange-500 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Story
              </a>
              <a
                href="/pages"
                className="block text-gray-600 hover:text-orange-500 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Leadership
              </a>
              <a
                href="/pages"
                className="block text-gray-600 hover:text-orange-500 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Values
              </a>
            </div>
            <a
              href="/pages"
              className="block text-gray-800 hover:text-orange-500 transition-colors py-2 border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Companies
            </a>
            <div className="pl-4 space-y-2">
              <a
                href="/emirates-lub"
                className="block text-gray-600 hover:text-orange-500 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Emirates Lub Bangladesh
              </a>
              <a
                href="/golden-drops"
                className="block text-gray-600 hover:text-orange-500 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Golden Drops Food & Beverages
              </a>
              <a
                href="/bb-power-tech"
                className="block text-gray-600 hover:text-orange-500 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                BB Power & Technology
              </a>
              <a
                href="/lavish-loom-tex"
                className="block text-gray-600 hover:text-orange-500 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lavish Loom Tex
              </a>
              <a
                href="/asian-lub"
                className="block text-gray-600 hover:text-orange-500 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Asian Lub Bangladesh
              </a>
            </div>
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
          </div>
        </div>
      </div>
      {/* Animation Scripts */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          // Counter Animation
          function animateCounters() {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
              const target = parseInt(counter.getAttribute('data-target'));
              const increment = target / 100;
              let current = 0;
              
              const updateCounter = () => {
                if (current < target) {
                  current += increment;
                  if (target > 1000) {
                    counter.textContent = Math.ceil(current) + '+';
                  } else {
                    counter.textContent = Math.ceil(current);
                  }
                  setTimeout(updateCounter, 20);
                } else {
                  if (target > 1000) {
                    counter.textContent = target + '+';
                  } else {
                    counter.textContent = target + (target === 50 ? '+' : '');
                  }
                }
              };
              updateCounter();
            });
          }

          // Scroll Animation Observer
          function initScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('animate');
                  if (entry.target.classList.contains('stats-section')) {
                    setTimeout(animateCounters, 500);
                  }
                }
              });
            }, { threshold: 0.1 });

            document.querySelectorAll('.scroll-animate').forEach(el => {
              observer.observe(el);
            });
          }

          // Initialize animations when DOM is loaded
          document.addEventListener('DOMContentLoaded', function() {
            initScrollAnimations();
          });
        `,
        }}
      />
    </div>
  );
}
