// src/pages/Settings.js
import React from "react";
import { FaUser, FaEnvelope, FaLock, FaPalette, FaBell, FaShieldAlt } from "react-icons/fa";

export default function Settings() {
  return (
    <main className="flex-1 p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Settings</h2>
          <p className="text-gray-600">Manage your account and application settings.</p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <label htmlFor="username" className="font-semibold flex items-center gap-2">
              <FaUser className="text-black-500" /> Username
            </label>
            <input
              id="username"
              type="text"
              defaultValue="@shadcn"
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="font-semibold flex items-center gap-2">
              <FaEnvelope className="text-black-500" /> Email
            </label>
            <input
              id="email"
              type="email"
              defaultValue="shadcn@example.com"
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="font-semibold flex items-center gap-2">
              <FaLock className="text-black-500" /> Password
            </label>
            <input
              id="password"
              type="password"
              defaultValue="********"
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="theme" className="font-semibold flex items-center gap-2">
              <FaPalette className="text-black-500" /> Theme
            </label>
            <select
              id="theme"
              defaultValue="system"
              className="p-2 border border-gray-300 rounded-lg"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="notifications" className="font-semibold flex items-center gap-2">
              <FaBell className="text-black-500" /> Notifications
            </label>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="notifications"
                className="h-5 w-5 text-black-600"
              />
              <span>Enable notifications</span>
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="two-factor" className="font-semibold flex items-center gap-2">
              <FaShieldAlt className="text-black-500" /> Two-Factor Authentication
            </label>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="two-factor"
                className="h-5 w-5 text-black-600"
              />
              <span>Enable two-factor authentication</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button className="px-4 py-2 bg-black-500 text-white rounded-lg hover:bg-black-600">Save Changes</button>
        </div>
      </div>
    </main>
  );
}
