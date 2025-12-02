"use client";
import { useState } from "react";
import { KeyRound, ArrowLeft } from "lucide-react";

export default function OTPPage() {
  const [otp, setOtp] = useState("");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6">
      <a
        href="/login/phone"
        className="absolute top-6 left-6 text-gray-600 hover:text-black"
      >
        <ArrowLeft size={22} />
      </a>

      <div className="w-full max-w-sm p-8 rounded-2xl shadow-lg border">
        <div className="flex flex-col items-center mb-6">
          <KeyRound size={38} className="text-white mb-2" />
          <h2 className="text-2xl font-bold">Enter OTP</h2>
          <p className="text-gray-500 text-sm mt-1">
            We sent a 4-digit code to your number
          </p>
        </div>

        <input
          type="text"
          placeholder="----"
          maxLength="4"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border p-4 rounded-lg w-full mb-4 text-center text-xl tracking-widest focus:outline-none focus:ring-2 focus:ring-black"
        />

        <a
          href="/confirmation"
          className="px-6 py-3 text-white rounded-lg w-full block text-center bg-gray-900 transition shadow-sm"
        >
          Continue
        </a>

        <p className="text-center text-gray-500 text-sm mt-4">
          Didn’t receive it?{" "}
          <a className="underline cursor-pointer">Resend OTP</a>
        </p>
      </div>
    </main>
  );
}
