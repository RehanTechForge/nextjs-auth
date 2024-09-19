"use client";
import Link from "next/link";

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-gray-700 mb-6">
          Welcome to AuthApp. These Terms of Service ("Terms") govern your use
          of our website and services. By accessing or using our services, you
          agree to comply with these Terms. Please read them carefully.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-600 mb-4">
          By using our website and services, you agree to these Terms and our
          Privacy Policy. If you do not agree to these Terms, you must not use
          our services.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          2. User Responsibilities
        </h2>
        <p className="text-gray-600 mb-4">
          You agree to use our services only for lawful purposes and in a manner
          that does not infringe the rights of, or restrict or inhibit the use
          and enjoyment of, our services by any third party.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          3. Account Security
        </h2>
        <p className="text-gray-600 mb-4">
          You are responsible for maintaining the confidentiality of your
          account and password and for restricting access to your account. You
          agree to accept responsibility for all activities that occur under
          your account.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          4. Intellectual Property
        </h2>
        <p className="text-gray-600 mb-4">
          All content and materials on our website, including text, graphics,
          logos, and images, are the property of AuthApp or its licensors and
          are protected by intellectual property laws.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          5. Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-4">
          To the maximum extent permitted by law, AuthApp shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages, or any loss of profits or data, arising out of or related to
          your use of our services.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          6. Termination
        </h2>
        <p className="text-gray-600 mb-4">
          We may terminate or suspend your access to our services immediately,
          without prior notice, if you breach any of these Terms.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          7. Changes to Terms
        </h2>
        <p className="text-gray-600 mb-4">
          We may update these Terms from time to time. Any changes will be
          posted on this page, and we encourage you to review them periodically.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          8. Governing Law
        </h2>
        <p className="text-gray-600 mb-6">
          These Terms shall be governed by and construed in accordance with the
          laws of the jurisdiction in which AuthApp operates.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">9. Contact Us</h2>
        <p className="text-gray-600 mb-8">
          If you have any questions about these Terms, please contact us at{" "}
          <strong>support@authapp.com</strong>.
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
