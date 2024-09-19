"use client";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-3xl font-extrabold text-indigo-600">AuthApp</div>
          <div className="space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-blue-500">
              Login
            </Link>
            <Link href="/signup" className="text-gray-700 hover:text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold text-indigo-600 text-center mb-8">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-6">
          At AuthApp, we are committed to protecting your personal information
          and your right to privacy. If you have any questions or concerns about
          our policy or our practices regarding your personal information,
          please contact us.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We collect personal information that you voluntarily provide to us
          when registering on the App, expressing an interest in obtaining
          information about us or our products and services, or otherwise
          contacting us.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We use personal information collected via our App for a variety of
          business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations.
        </p>

        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>To facilitate account creation and the login process.</li>
          <li>To send you marketing and promotional communications.</li>
          <li>To respond to user inquiries and offer customer support.</li>
          <li>To enforce our terms, conditions, and policies.</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Sharing Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We only share your information with your consent, to comply with laws,
          to protect your rights, or to fulfill business obligations.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-600 mb-4">
          We may use cookies and similar tracking technologies to access or
          store information. Specific information about how we use such
          technologies and how you can refuse certain cookies is set out in our
          Cookie Policy.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Data Security</h2>
        <p className="text-gray-600 mb-4">
          We have implemented appropriate technical and organizational security
          measures designed to protect the security of any personal information
          we process. However, please also remember that we cannot guarantee
          that the internet itself is 100% secure. Although we will do our best
          to protect your personal information, the transmission of personal
          information to and from our App is at your own risk.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-600 mb-4">
          We may update this privacy policy from time to time. We will notify
          you of any changes by posting the new privacy policy on this page. You
          are advised to review this Privacy Policy periodically for any
          changes.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at <strong>support@authapp.com</strong>.
        </p>

        <div className="text-center">
          <Link href="/" className="text-indigo-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-bold text-gray-200">AuthApp</p>
          <div className="mt-4 space-x-6">
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
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
