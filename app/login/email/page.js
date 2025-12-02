"use client";
import { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";

export default function EmailLogin() {
  const [email, setEmail] = useState("");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6">
      <a
        href="/login"
        className="absolute top-6 left-6 text-gray-600 hover:text-white"
      >
        <ArrowLeft size={22} />
      </a>
      <div className="w-full max-w-sm  p-8 rounded-2xl shadow-lg border">
        <div className="flex flex-col items-center mb-6">
          <Mail size={38} className="text-white mb-2" />
          <h2 className="text-2xl font-bold">Email Login</h2>
          <p className="text-gray-500 text-sm mt-1">
            Enter your email to receive OTP
          </p>
        </div>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <a
          href="/login/otp"
          className="px-6 py-3 border text-white rounded-lg w-full block text-center hover:bg-gray-900 transition shadow-sm"
        >
          Send OTP
        </a>
      </div>
    </main>
  );
}
