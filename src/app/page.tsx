import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-3xl font-extrabold text-indigo-600">AuthApp</div>
          <div className="space-x-6">
            <Link href="/login" className="text-gray-700 hover:text-blue-500">
              Login
            </Link>
            <Link href="/signup" className="text-gray-700 hover:text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold tracking-tight">
            Your Secure Login Solution
          </h1>
          <p className="mt-4 text-lg text-gray-100">
            Seamlessly sign up, verify your email, and enjoy secure access to
            your profile.
          </p>
          <div className="mt-8 space-x-4">
            <Link href="/signup">
              <button className="px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-lg shadow-lg hover:bg-gray-100 transition-all">
                Get Started
              </button>
            </Link>
            <Link href="/login">
              <button className="px-8 py-4 bg-transparent border border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-indigo-600 transition-all">
                Login
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Sign Up */}
            <div className="bg-gray-50 p-10 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
              <FaUserPlus className="text-indigo-600 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                1. Sign Up
              </h3>
              <p className="text-gray-600">
                Create your account by providing your email and a secure
                password.
              </p>
            </div>

            {/* Step 2: Verify Email */}
            <div className="bg-gray-50 p-10 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
              <FaEnvelope className="text-indigo-600 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                2. Verify Email
              </h3>
              <p className="text-gray-600">
                Check your inbox for a verification link. Click it to confirm
                your email.
              </p>
            </div>

            {/* Step 3: Secure Login */}
            <div className="bg-gray-50 p-10 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
              <FaLock className="text-indigo-600 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                3. Secure Login
              </h3>
              <p className="text-gray-600">
                Once verified, log in with your credentials and access your
                profile securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold">Ready to get started?</h2>
          <p className="mt-4 text-lg">
            Join us today and enjoy the peace of mind that comes with secure
            authentication.
          </p>
          <div className="mt-8 space-x-4">
            <Link href="/signup">
              <button className="px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-lg shadow-lg hover:bg-gray-100 transition-all">
                Sign Up Now
              </button>
            </Link>
            <Link href="/login">
              <button className="px-8 py-4 bg-transparent border border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-indigo-600 transition-all">
                Login
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-bold text-gray-200">AuthApp</p>
          <div className="mt-4 space-x-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            © 2024 AuthApp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
