import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  Bell,
  ChevronDown,
  User,
  Globe,
  LogOut,
  Settings,
  Mail,
} from "lucide-react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { use } from "react";

const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
const navigate = useNavigate();
  // Refs for dropdown menus
  const langRef = useRef(null);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (langRef.current && !langRef.current.contains(event.target)) {
  //       setLangDropdownOpen(false);
  //     }
  //     if (notificationRef.current && !notificationRef.current.contains(event.target)) {
  //       setNotificationOpen(false);
  //     }
  //     if (profileRef.current && !profileRef.current.contains(event.target)) {
  //       setProfileOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, []);

  const navItems = [
    "Data Collection Toolkit",
    "Grievance Toolkit",
    "Dashboard",
    "Schemes",
    "Scheme Master",
    "My Forms",
    "Citizen Appointment List",
    "Citizen Feedback",
    "Workflow",
    "Broadcast Notification",
  ];

  const notifications = [
    { id: 1, text: "New application submitted", time: "5m ago" },
    { id: 2, text: "System update completed", time: "1h ago" },
    { id: 3, text: "New feedback received", time: "2h ago" },
  ];

const NavigationLinks = (item) => {
  if(item==="My Forms"){
    navigate("/poform");
  }
  else
  navigate(`/${item}`);
};

  return (
    <div className="  w-100 flex  bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-orange-500 text-white transition-all duration-300 ease-in-out`}
      >
        {/* Logo Section */}
        <div className="p-4 border-b border-orange-600">
          <div className="flex items-center space-x-2">
            <div type="button" onClick={()=>{navigate("/")}} className="w-8 h-8 bg-white rounded-full flex-shrink-0" />
            {isSidebarOpen && <span  onClick={()=>{navigate("/")}} className="font-semibold cursor-pointer  hover:text-blue-700 ">IPeG</span>}
          </div>
        </div>

        {/* Department Info */}
        {isSidebarOpen && (
          <div className="p-4 border-b border-orange-600">
            <div className="text-sm">
              Skill Development, Technical Education & Employment Department
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="mt-4">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`px-4 py-3 hover:bg-orange-600 cursor-pointer ${
                item === "Workflow" ? "bg-orange-600" : ""
              } flex items-center`}
              title={!isSidebarOpen ? item : ""}
              onClick={()=>{NavigationLinks(item)}}
            >
              <span className="w-6 h-6 flex-shrink-0">•</span>
              {isSidebarOpen && <span className="ml-2">{item}</span>}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Top Navigation Bar */}
        <div className="bg-white h-20 flex items-center justify-between px-4 shadow-sm">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
            >
              <Menu className="h-6 w-6" />
            </button>
            <span className="font-semibold">WorkFlow</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center border rounded-md px-2 py-1 hover:bg-gray-50"
              >
                <Globe className="h-4 w-4 mr-2" />
                <span>English</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-50">
                  {["English", "Hindi", "Marathi"].map((lang) => (
                    <button
                      key={lang}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => setLangDropdownOpen(false)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setNotificationOpen(!isNotificationOpen)}
                className="relative hover:bg-gray-100 p-2 rounded-full"
              >
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>

              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50">
                  <div className="py-2">
                    <div className="px-4 py-2 border-b">
                      <p className="text-lg font-semibold">Notifications</p>
                    </div>
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                      >
                        <p className="text-sm">{notification.text}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    ))}
                    <div className="px-4 py-2 border-t text-center">
                      <button className="text-sm text-blue-600 hover:text-blue-800">
                        View all notifications
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-1 hover:bg-gray-100 rounded-lg p-1"
              >
                <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center">
                  S
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </button>
                    <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </button>
                    <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Messages
                    </button>
                    <div className="border-t border-gray-100">
                      <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Your page content would go here */}

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
