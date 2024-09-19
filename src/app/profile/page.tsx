"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaUserCircle, FaSignOutAlt, FaInfoCircle } from "react-icons/fa";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.post("/api/users/me");
      toast.success("User details fetched successfully");
      setData(res.data.user._id);
    } catch (error: any) {
      toast.error("Failed to fetch user details");
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-10 px-5">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 transition duration-300 hover:shadow-xl transform hover:scale-105">
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-7xl text-gray-500 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Your Profile
          </h1>
          <p className="text-gray-600">Manage your account details below</p>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700">
            {data === "nothing" ? (
              <span className="text-red-500">No user details found</span>
            ) : (
              <Link
                href={`/profile/${data}`}
                className="text-blue-500 hover:underline"
              >
                Profile ID: {data}
              </Link>
            )}
          </h2>
        </div>

        <div className="mt-8">
          <button
            onClick={getUserDetails}
            className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-200 mb-4"
          >
            <FaInfoCircle className="mr-2" />
            Get User Details
          </button>
          <button
            onClick={logout}
            className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
