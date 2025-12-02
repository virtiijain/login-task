export default function Step1() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <div className="w-full max-w-sm p-8 rounded-2xl shadow-sm border">
        <h1 className="text-3xl font-bold mb-4">Discover Your Experience</h1>
        <p className="text-gray-600 mb-8">
          Seamless login across all your devices.
        </p>

        <a
          href="/Intro/step2"
          className="px-6 py-3 border text-white rounded-xl hover:bg-gray-900 transition w-full block"
        >
          Next
        </a>
      </div>
    </main>
  );
}
