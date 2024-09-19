"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState({ found: false, message: "" });

  const verifyUserEmail = async () => {
    try {
      const response = await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
      toast.success("Email verified successfully!");
    } catch (error: any) {
      setError({ found: true, message: "Invalid Token" });
      toast.error("Invalid Token");
      console.log(error.response.data.error);
    }
  };
  // const [error, setError] = useState(false);

  // const verifyUserEmail = async () => {
  //   try {
  //     const response = await axios.post("/api/users/verifyemail", { token });
  //     setVerified(true);
  //     toast.success(response.data.message);
  //   } catch (error: any) {
  //     setError(true);
  //     toast.error(error.response.data.error);
  //     console.log(error.response.data.error);
  //   }
  // };

  // useEffect(() => {
  //   const urlToken = window.location.search.split("=")[1];
  //   setToken(urlToken || "");
  //   if (token === "") {
  //     console.log("Token Not Found");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (token.length > 0) {
  //     verifyUserEmail();
  //   }
  // }, [token]);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1]; // Get token from URL
    if (!urlToken) {
      setError({ found: true, message: "Token Not Found" }); // Show message if token is missing
    } else {
      setToken(urlToken);
    }
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Verify Your Email
        </h1>

        {verified ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-green-600">
              Email Verified Successfully!
            </h2>
            <p className="text-gray-600">
              Your email has been verified. You can now log in.
            </p>
            <Link
              href="/login"
              className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
            >
              Go to Login
            </Link>
          </div>
        ) : error ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-red-600">
              Verification Failed
            </h2>
            <p className="text-gray-600">
              There was an error verifying your email. Please try again later.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Go to Home
            </Link>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-medium text-yellow-500">
              Verifying...
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
