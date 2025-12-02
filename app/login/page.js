import { Phone, Mail, Facebook, Chrome } from "lucide-react";

export default function LoginHome() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="flex flex-row gap-2 items-center mb-8">
        <div className="w-12 h-12 border rounded-xl flex items-center justify-center text-white text-xl font-semibold shadow-sm">
          B
        </div>
        <p className="text-base text-gray-500 tracking-wide">
          Welcome to Bridge
        </p>
      </div>

      <div className="w-full max-w-sm p-6 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold text-center mb-2">
          Login to your account
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm leading-relaxed">
          Access your dashboard, manage your profile, and stay connected.
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="/login/phone"
            className="flex items-center gap-3 px-4 py-3 border rounded-xl transition shadow-sm"
          >
            <Phone size={20} />
            <span className="flex-1 text-center font-medium">
              Continue with Phone
            </span>
          </a>

          <a
            href="/login/email"
            className="flex items-center gap-3 px-4 py-3 border rounded-xl transition shadow-sm"
          >
            <Mail size={20} />
            <span className="flex-1 text-center font-medium">
              Continue with Email
            </span>
          </a>

          <div className="relative my-2">
            <div className="border-t"></div>
            <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-white rounded px-2 text-xs text-gray-500">
              OR CONTINUE WITH
            </span>
          </div>

          <a
            href="/login/google"
            className="flex items-center gap-3 px-4 py-3 border rounded-xl transition shadow-sm"
          >
            <Mail size={20} />
            <span className="flex-1 text-center font-medium">
              Login with Google
            </span>
          </a>

          <a
            href="/login/facebook"
            className="flex items-center gap-3 px-4 py-3 border rounded-xl transition shadow-sm"
          >
            <Mail size={20} />
            <span className="flex-1 text-center font-medium">
              Login with FaceBook
            </span>
          </a>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          By continuing, you agree to our{" "}
          <a href="#" className="underline">
            Terms
          </a>{" "}
          &{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      <p className="text-sm text-gray-600 mt-6">
        Don’t have an account?{" "}
        <a href="#" className="font-medium underline">
          Sign up
        </a>
      </p>
    </main>
  );
}
