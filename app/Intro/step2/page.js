export default function Step2() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <div className="w-full max-w-sm p-8 rounded-2xl shadow-sm border">
        <h1 className="text-3xl font-bold mb-4">Connect Faster</h1>

        <p className="text-gray-600 mb-8">One-tap login with phone or email.</p>

        <a
          href="/Intro/step3"
          className="px-6 py-3 border rounded-xl hover:bg-gray-900 transition w-full block"
        >
          Next
        </a>
      </div>
    </main>
  );
}
