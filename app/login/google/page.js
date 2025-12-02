"use client";
import { Loader2, Chrome, ArrowLeft } from "lucide-react";

export default function GoogleLogin() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6">
      <a
        href="/login"
        className="absolute top-6 left-6 text-gray-600 hover:text-white"
      >
        <ArrowLeft size={22} />
      </a>

      <div className="p-8 rounded-2xl shadow-lg border w-full max-w-sm text-center">
        <Chrome size={50} className="mx-auto mb-4" />

        <h2 className="text-2xl font-bold mb-2">Signing in with Google</h2>
        <p className="text-gray-500 text-sm mb-6">
          Please wait while we connect your Google account…
        </p>

        <Loader2 size={30} className="animate-spin mx-auto text-white" />

        <a
          href="/confirmation"
          className="mt-6 block w-full border text-white py-3 rounded-lg"
        >
          Continue
        </a>
      </div>
    </main>
  );
}
