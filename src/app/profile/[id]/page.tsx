"use client";

import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 p-8">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 transition transform hover:scale-105 duration-300">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-8xl text-gray-500 mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            User Profile
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Welcome to your profile page!
          </p>
        </div>

        {/* Profile Details */}
        <div className="flex flex-col items-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-700">
            Profile ID:
            <span className="ml-2 p-2 rounded bg-orange-500 text-black text-xl">
              {params.id}
            </span>
          </h2>
        </div>

        {/* Profile Card Animation */}
        <div className="mt-8">
          <p className="text-center text-gray-600 text-base">
            Here you can manage your account details and view your activities.
          </p>
        </div>
      </div>
    </div>
  );
}
