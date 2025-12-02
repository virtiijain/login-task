"use client";

import { motion } from "framer-motion";

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border shadow-xl rounded-2xl p-8 max-w-sm w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="mb-6 flex items-center justify-center"
        >
          <div className="h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center">
            <span className="text-3xl">✔</span>
          </div>
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-300 mb-2">
          You're all set!
        </h1>

        <p className="text-gray-500 mb-6">
          Your account has been verified successfully. Welcome to the app!
        </p>

        <a
          href="/"
          className="w-full block py-3 rounded-xl font-medium border transition"
        >
          Go to Home
        </a>
      </motion.div>
    </main>
  );
}
