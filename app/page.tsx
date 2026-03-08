export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-10">

      {/* HEADER */}
      <h1 className="text-5xl font-bold mb-4">
        Muhammet Anıl Ceylan
      </h1>

      <p className="text-xl text-gray-400 mb-6">
        AI • Product • Strategy
      </p>

      {/* SOCIAL LINKS */}
      <div className="flex gap-4 mb-16">
        <a
          href="https://www.linkedin.com/in/muhammetanilceylan

"
          className="border border-gray-600 px-4 py-2 rounded-lg hover:border-white transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/anil-ceylan"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-600 px-4 py-2 rounded-lg hover:border-white transition"
        >
          GitHub
        </a>
      </div>


      {/* PROJECTS */}
      <div className="max-w-5xl">
        <h2 className="text-2xl font-semibold mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="border border-gray-700 p-6 rounded-xl hover:border-white hover:scale-105 transition transform duration-300">
            <h3 className="text-xl font-semibold mb-2">HireFit</h3>
            <p className="text-gray-400 text-sm">
              AI Resume Optimization Tool that analyzes CVs and suggests improvements.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl hover:border-white hover:scale-105 transition transform duration-300">
            <h3 className="text-xl font-semibold mb-2">ProductLens</h3>
            <p className="text-gray-400 text-sm">
              AI tool that analyzes product reviews to extract insights and feature requests.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl hover:border-white hover:scale-105 transition transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Market Radar</h3>
            <p className="text-gray-400 text-sm">
              AI system that scans markets and identifies new product opportunities.
            </p>
          </div>

        </div>
      </div>


      {/* ABOUT */}
      <div className="mt-20 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">About</h2>

        <p className="text-gray-400">
          I am a Management Information Systems student interested in AI,
          product strategy and business analytics. I enjoy building tools
          that transform data and user feedback into actionable product insights.
        </p>
      </div>

      {/* FOOTER */}
      <div className="mt-20 text-gray-500 text-sm">
        © 2026 Muhammet Anıl Ceylan
      </div>

    </main>
  );
}