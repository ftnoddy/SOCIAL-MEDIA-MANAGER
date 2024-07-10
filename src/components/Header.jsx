import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

export default function Header() {
  return (
    <header className="bg-white shadow py-4 px-6 border-b-2 border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className="text-2xl font-bold hover:text-gray-800 border-b-2 border-transparent hover:border-gray-800 pb-1"
          >
            SM-Manager
          </NavLink>
        </div>
        <nav className="flex-1 flex justify-center items-center gap-4">
          <NavLink
            to="/dashboard"
            className="text-gray-600 hover:text-black mx-4 border-b-2 border-transparent hover:border-gray-800 pb-1"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/content"
            className="text-gray-600 hover:text-black mx-4 border-b-2 border-transparent hover:border-gray-800 pb-1"
          >
            Content
          </NavLink>
          <NavLink
            to="/analytics"
            className="text-gray-600 hover:text-black mx-4 border-b-2 border-transparent hover:border-gray-800 pb-1"
          >
            Analytics
          </NavLink>
          <NavLink
            to="/settings"
            className="text-gray-600 hover:text-black mx-4 border-b-2 border-transparent hover:border-gray-800 pb-1"
          >
            Settings
          </NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-200">
            <FaPlus className="w-5 h-5 text-gray-600" />
          </button>
          <Menu
            menuButton={
              <MenuButton>
                <img
                  src="/placeholder-user.jpg"
                  alt="Avatar"
                  className="h-9 w-9 rounded-full"
                />
              </MenuButton>
            }
          >
            <MenuItem>My Account</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
}
