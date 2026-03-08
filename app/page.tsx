export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-28">

        <h1 className="text-6xl font-bold mb-6">
          Muhammet Anil Ceylan
        </h1>

        <p className="text-2xl text-gray-400 mb-10">
          AI • Product • Strategy
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://linkedin.com/in/muhammetanilceylan"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-6 py-2 rounded-lg hover:border-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/anil-ceylan"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-6 py-2 rounded-lg hover:border-white transition"
          >
            GitHub
          </a>
        </div>

      </section>


      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto mb-28">

        <h2 className="text-3xl font-semibold text-center mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border border-gray-800 p-8 rounded-xl hover:scale-105 hover:border-white transition duration-300">
            <h3 className="text-xl font-semibold mb-3">HireFit</h3>
            <p className="text-gray-400">
              AI resume optimization tool that analyzes CVs and suggests improvements.
            </p>
          </div>

          <div className="border border-gray-800 p-8 rounded-xl hover:scale-105 hover:border-white transition duration-300">
            <h3 className="text-xl font-semibold mb-3">ProductLens</h3>
            <p className="text-gray-400">
              AI tool that analyzes product reviews and extracts product insights.
            </p>
          </div>

          <div className="border border-gray-800 p-8 rounded-xl hover:scale-105 hover:border-white transition duration-300">
            <h3 className="text-xl font-semibold mb-3">Market Radar</h3>
            <p className="text-gray-400">
              AI system that scans markets and identifies new product opportunities.
            </p>
          </div>

        </div>

      </section>


      {/* TECH STACK */}
      <section className="max-w-4xl mx-auto text-center mb-28">

        <h2 className="text-3xl font-semibold mb-8">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4 text-gray-400">

          <span className="border border-gray-700 px-4 py-2 rounded-lg">
            Next.js
          </span>

          <span className="border border-gray-700 px-4 py-2 rounded-lg">
            React
          </span>

          <span className="border border-gray-700 px-4 py-2 rounded-lg">
            Tailwind
          </span>

          <span className="border border-gray-700 px-4 py-2 rounded-lg">
            Python
          </span>

          <span className="border border-gray-700 px-4 py-2 rounded-lg">
            Pandas
          </span>

          <span className="border border-gray-700 px-4 py-2 rounded-lg">
            AI / NLP
          </span>

        </div>

      </section>


      {/* ABOUT */}
      <section className="max-w-3xl mx-auto text-center mb-20">

        <h2 className="text-3xl font-semibold mb-6">
          About
        </h2>

        <p className="text-gray-400 leading-relaxed">
          I am a Management Information Systems student focused on AI,
          product strategy and business analytics. I enjoy building tools
          that transform user feedback and data into actionable product insights.
        </p>

      </section>


      {/* FOOTER */}
      <footer className="text-center text-gray-600 text-sm">
        © 2026 Muhammet Anıl Ceylan
      </footer>

    </main>
  );
}