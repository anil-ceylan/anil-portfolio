export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 py-4 px-10 flex justify-between items-center z-50">

        <span className="font-semibold">
          Anıl Ceylan
        </span>

        <div className="flex gap-6 text-gray-400">

          <a href="#projects" className="hover:text-white transition duration-300">
            Projects
          </a>

          <a href="#stack" className="hover:text-white transition duration-300">
            Tech
          </a>

          <a href="#about" className="hover:text-white transition duration-300">
            About
          </a>

        </div>

      </nav>


      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-28 mt-24">

        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
          Muhammet Anıl Ceylan
        </h1>

        <p className="text-2xl text-gray-400 mb-6">
          AI Product Builder • Data-Driven Strategy • MIS Student
        </p>

        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          Building AI tools that transform data and user feedback into actionable product insights.
        </p>

        <div className="flex justify-center gap-4">

          <a
            href="https://linkedin.com/in/muhammetanilceylan"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-6 py-2 rounded-lg hover:border-white hover:scale-105 transition duration-300"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/anil-ceylan"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-6 py-2 rounded-lg hover:border-white hover:scale-105 transition duration-300"
          >
            GitHub
          </a>

        </div>

      </section>


      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto mb-28">

        <h2 className="text-3xl font-semibold text-center mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


          <a
            href="https://github.com/anil-ceylan"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 p-8 rounded-xl hover:scale-105 hover:border-white hover:shadow-xl transition duration-300 block"
          >
            <h3 className="text-xl font-semibold mb-3">
              HireFit
            </h3>

            <p className="text-gray-400">
              AI resume optimization tool that analyzes CVs and suggests improvements.
            </p>

            <p className="text-sm text-blue-400 mt-4">
              View Code →
            </p>

          </a>


          <a
            href="https://github.com/anil-ceylan"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 p-8 rounded-xl hover:scale-105 hover:border-white hover:shadow-xl transition duration-300 block"
          >
            <h3 className="text-xl font-semibold mb-3">
              ProductLens
            </h3>

            <p className="text-gray-400">
              AI tool that analyzes product reviews and extracts product insights.
            </p>

            <p className="text-sm text-blue-400 mt-4">
              View Code →
            </p>

          </a>


          <a
            href="https://github.com/anil-ceylan"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 p-8 rounded-xl hover:scale-105 hover:border-white hover:shadow-xl transition duration-300 block"
          >
            <h3 className="text-xl font-semibold mb-3">
              Market Radar
            </h3>

            <p className="text-gray-400">
              AI system that scans markets and identifies new product opportunities.
            </p>

            <p className="text-sm text-blue-400 mt-4">
              View Code →
            </p>

          </a>

        </div>

      </section>


      {/* TECH STACK */}
      <section id="stack" className="max-w-4xl mx-auto text-center mb-28">

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
      <section id="about" className="max-w-3xl mx-auto text-center mb-20">

        <h2 className="text-3xl font-semibold mb-6">
          About
        </h2>

        <p className="text-gray-400 leading-relaxed">
          I am a Management Information Systems student focused on AI,
          product strategy and business analytics. I enjoy building tools
          that transform user feedback and data into actionable product insights.
        </p>

      </section>


      {/* CONTACT */}
      <section className="text-center mb-20">

        <h2 className="text-3xl font-semibold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 mb-6">
          Feel free to reach out for collaborations or opportunities.
        </p>

        <a
          href="mailto:youremail@gmail.com"
          className="border border-gray-700 px-6 py-2 rounded-lg hover:border-white transition"
        >
          Email Me
        </a>

      </section>


      {/* FOOTER */}
      <footer className="text-center text-gray-600 text-sm mt-20">
        © 2026 Muhammet Anıl Ceylan • Built with Next.js
      </footer>

    </main>
  );
}