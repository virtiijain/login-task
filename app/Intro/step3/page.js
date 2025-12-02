export default function Step3() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <div className="w-full max-w-sm p-8 rounded-2xl shadow-sm border">
        <h1 className="text-3xl font-bold mb-4">Secure & Smart</h1>

        <p className="text-gray-600 mb-8">Your data stays protected always.</p>

        <a
          href="/login"
          className="px-6 py-3 border text-white rounded-xl hover:bg-gray-900 transition w-full block"
        >
          Get Started
        </a>
      </div>
    </main>
  );
}
