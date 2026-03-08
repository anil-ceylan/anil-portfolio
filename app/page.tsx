export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">

      {/* NAVBAR */}

      <nav className="fixed w-full top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="font-semibold text-lg">
            Anıl Ceylan
          </h1>

          <div className="flex gap-6 text-sm text-gray-300">

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#tech" className="hover:text-white transition">
              Tech
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

          </div>

        </div>
      </nav>



      {/* HERO */}

      <section className="h-screen flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
          Muhammet Anıl Ceylan
        </h1>

        <p className="text-xl text-gray-400 mb-6">
          AI Product Builder • Data-Driven Strategy • MIS Student
        </p>

        <p className="text-gray-500 max-w-xl mb-10">
          Building AI tools that transform data and user feedback into
          actionable product insights.
        </p>


        <div className="flex gap-4">

          <a
            href="https://linkedin.com/in/muhammetanilceylan"
            target="_blank"
            className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>


          <a
            href="https://github.com/anil-ceylan"
            target="_blank"
            className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

        </div>

      </section>



      {/* PROJECTS */}

      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-semibold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">


          <div className="border border-white/10 p-6 rounded-xl hover:border-white/30 hover:scale-[1.03] hover:shadow-xl transition">

            <h3 className="text-xl font-semibold mb-3">
              HireFit
            </h3>

            <p className="text-gray-400 mb-4">
              AI resume optimization tool that analyzes CVs and suggests improvements.
            </p>

            <a
              href="https://github.com/anil-ceylan"
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
            >
              View Code →
            </a>

          </div>



          <div className="border border-white/10 p-6 rounded-xl hover:border-white/30 hover:scale-[1.03] hover:shadow-xl transition">

            <h3 className="text-xl font-semibold mb-3">
              ProductLens
            </h3>

            <p className="text-gray-400 mb-4">
              AI tool that analyzes product reviews and extracts product insights.
            </p>

            <a
              href="https://github.com/anil-ceylan"
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
            >
              View Code →
            </a>

          </div>



          <div className="border border-white/10 p-6 rounded-xl hover:border-white/30 hover:scale-[1.03] hover:shadow-xl transition">

            <h3 className="text-xl font-semibold mb-3">
              Market Radar
            </h3>

            <p className="text-gray-400 mb-4">
              AI system that scans markets and identifies new product opportunities.
            </p>

            <a
              href="https://github.com/anil-ceylan"
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
            >
              View Code →
            </a>

          </div>

        </div>

      </section>



      {/* TECH STACK */}

      <section
        id="tech"
        className="text-center py-20 border-t border-white/10"
      >

        <h2 className="text-3xl font-semibold mb-10">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {[
            "Next.js",
            "React",
            "Tailwind",
            "Python",
            "Pandas",
            "AI / NLP"
          ].map((tech) => (

            <span
              key={tech}
              className="px-4 py-2 border border-white/20 rounded-lg text-gray-300"
            >
              {tech}
            </span>

          ))}

        </div>

      </section>



      {/* ABOUT */}

      <section
        id="about"
        className="text-center max-w-2xl mx-auto py-24 px-6"
      >

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

      <section className="text-center pb-24 px-6">

        <h2 className="text-3xl font-semibold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 mb-6">
          Feel free to reach out for collaborations or opportunities.
        </p>

        <a
          href="mailto:muhammetanilceylann@gmail.com"
          className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition shadow-lg hover:shadow-white/20"
        >
          Email Me
        </a>

      </section>



      {/* FOOTER */}

      <footer className="text-center text-gray-500 text-sm pb-8">
        © 2026 Muhammet Anıl Ceylan • Built with Next.js
      </footer>

    </main>
  );
}