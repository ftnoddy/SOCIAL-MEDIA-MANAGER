// src/pages/LandingPage.js
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="bg-gradient-to-r from-white to-gray-100 text-gray-800 py-20 px-6 md:px-12">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4">Manage Your Social Media Effortlessly</h2>
            <p className="text-xl mb-6">All-in-one tool to streamline your social media presence.</p>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300">Start Free Trial</button>
          </div>
        </section>

        <section id="features" className="py-20 px-6 md:px-12 bg-white text-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-10">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <FaFacebook className="text-blue-600 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Automate Posts</h3>
                <p>Schedule and automate posts across all your social media platforms with ease.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <FaInstagram className="text-pink-600 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Analyze Performance</h3>
                <p>Get detailed analytics and insights to track the performance of your content.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <FaLinkedin className="text-blue-700 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Engage Audience</h3>
                <p>Engage with your audience in real-time and boost your social media presence.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-gray-50 py-20 px-6 md:px-12 text-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-10">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="mb-4">"This tool has completely transformed the way I manage my social media. It's a game-changer!"</p>
                <p className="font-bold">- Sarah Johnson</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="mb-4">"The analytics feature is fantastic. I can see exactly how my posts are performing in real-time."</p>
                <p className="font-bold">- Mike Brown</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="mb-4">"Scheduling posts has never been easier. I save so much time every week thanks to SM-Manager."</p>
                <p className="font-bold">- Emily Davis</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-r from-white to-gray-100 text-gray-800 px-6 md:px-12">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
            <p className="text-xl mb-6">Join thousands of users who are already managing their social media effortlessly with SM-Manager.</p>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300">Sign Up Now</button>
          </div>
        </section>

        <footer className="bg-gray-100 text-gray-800 py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 SM-Manager. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
