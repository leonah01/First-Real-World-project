"use client"; // Add this directive at the top of the file

import React from 'react';
import CountUp from 'react-countup';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <span className="text-xl font-bold text-indigo-600">CraftConnect</span>
              </a>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
                Contact
              </a>
            </div>
            <div className="hidden sm:flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4">
            <p className="text-xl">Hello welcome,</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              WE ARE CRAFTCONNECT
            </h1>
            <p className="text-xl">We Specialize In</p>
            <p className="text-lg sm:text-xl">
              Connecting skilled craftsmen with clients who need their services
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors animate-bounce"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Skills That Define Us</h3>
              <p className="text-gray-600">
                Our platform connects you with skilled craftsmen who have years of experience in their respective fields. We ensure quality, reliability, and professional service delivery.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-indigo-600">
                  <CountUp end={5} duration={2} />+
                </div>
                <div className="text-gray-600">Years of<br />Experience</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-medium">Verification Process</div>
                <div className="text-indigo-600 font-bold">
                  <CountUp end={99} duration={2} />%
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-medium">Client Satisfaction</div>
                <div className="text-indigo-600 font-bold">
                  <CountUp end={95} duration={2} />%
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-medium">Project Completion</div>
                <div className="text-indigo-600 font-bold">
                  <CountUp end={90} duration={2} />%
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-medium">Quality Assurance</div>
                <div className="text-indigo-600 font-bold">
                  <CountUp end={100} duration={2} />%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Craftsman Verification</h3>
              <p className="text-gray-600">We thoroughly verify all craftsmen to ensure quality and reliability.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p className="text-gray-600">End-to-end project management and tracking for all services.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Safe and secure payment processing for all transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic">"CraftConnect made it so easy to find a skilled carpenter for my home renovation. Highly recommended!"</p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-500">Homeowner</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic">"The platform is user-friendly, and the craftsmen are top-notch. Great experience!"</p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">Jane Smith</p>
                  <p className="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic">"I found reliable help for my plumbing issues within minutes. Thank you, CraftConnect!"</p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">Michael Brown</p>
                  <p className="text-sm text-gray-500">Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Connect with skilled craftsmen or find your next project opportunity today.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors">
              Find a Craftsman
            </a>
            <a href="#" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-medium border border-indigo-600 hover:bg-indigo-50 transition-colors">
              Register as Craftsman
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p>Phone: +263 78 6414 606/</p>
                <p>Email: contact@craftconnect.com</p>
                <p>Follow us on social media</p>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-gray-400">© 2025 CraftConnect. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}