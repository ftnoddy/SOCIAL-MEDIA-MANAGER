import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaShareAlt,
  FaThumbsUp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="md:hidden p-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

      <aside
        className={`bg-white min-h-screen w-64 shadow fixed md:relative z-20 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="py-6 px-6">
          <h2 className="text-lg font-semibold mb-4">Platforms</h2>
          <ul className="space-y-4">
            <li>
              <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                <FaFacebook className="w-5 h-5 text-blue-600" />
                Facebook
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                <FaInstagram className="w-5 h-5 text-pink-500" />
                Instagram
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                <FaLinkedin className="w-5 h-5 text-blue-700" />
                LinkedIn
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                <FaTwitter className="w-5 h-5 text-blue-400" />
                Twitter
              </button>
            </li>
          </ul>
        </div>
        <div className="py-6 px-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <ul className="space-y-4">
            <li>
              <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                <FaHeart className="w-5 h-5 text-red-500" />
                Likes
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                <FaShareAlt className="w-5 h-5 text-green-500" />
                Shares
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                <FaThumbsUp className="w-5 h-5 text-blue-500" />
                Engagement
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
