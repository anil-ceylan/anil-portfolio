import Spotlight from "./Spotlight";

export default function Home() {
  return (
    <>
      <Spotlight />

      <main className="relative min-h-screen overflow-hidden font-sans text-white">

        {/* BACKGROUND LIGHTS */}

        <div className="absolute left-20 top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />



        {/* NAVBAR */}

        <nav className="fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur">

          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

            <h1 className="text-lg font-semibold tracking-wide hover:text-gray-300 transition">
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

        <section className="flex h-screen flex-col items-center justify-center px-6 text-center">

          <h1 className="mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
            Muhammet Anıl Ceylan
          </h1>

          <p className="mb-6 text-xl text-gray-300">
            AI Product Builder • Data-Driven Strategy • MIS Student
          </p>

          <p className="mb-10 max-w-xl text-gray-400">
            Building AI tools that transform data and user feedback into actionable product insights.
          </p>


          {/* SOCIAL BUTTONS */}

          <div className="flex gap-4">

            <a
              href="https://www.linkedin.com/in/muhammetanilceylan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 shadow-xl backdrop-blur transition-all duration-300 hover:bg-white hover:text-black"
            >
              💼 LinkedIn
            </a>

            <a
              href="https://github.com/anil-ceylan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 shadow-xl backdrop-blur transition-all duration-300 hover:bg-white hover:text-black"
            >
              🐙 GitHub
            </a>

          </div>



          {/* HERO CTA */}

          <a
            href="#projects"
            className="mt-8 text-blue-400 hover:text-blue-300 transition"
          >
            View Projects ↓
          </a>

        </section>



        {/* PROJECTS */}

        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">

          <h2 className="mb-16 text-center text-3xl font-semibold">
            Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-3">



            {/* HireFit */}

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:scale-105 hover:border-white/30 hover:shadow-2xl hover:shadow-blue-500/20">

              <h3 className="mb-3 text-xl font-semibold">
                ⚡ HireFit
              </h3>

              <p className="mb-4 text-gray-400">
                AI resume optimization tool that analyzes CVs and suggests improvements.
              </p>

              <div className="flex gap-4 mt-4">

<a
href="https://hirefit-ai.vercel.app"
target="_blank"
className="text-blue-400 hover:text-blue-300"
>
🚀 Try Live
</a>

<a
href="https://github.com/anil-ceylan/hirefit-ai"
target="_blank"
className="text-gray-400 hover:text-white"
>
💻 GitHub
</a>

</div>

              <div className="flex gap-4">

                <a
                  href="https://github.com/anil-ceylan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  View Code
                </a>

                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  Live Demo
                </a>

              </div>

            </div>



            {/* ProductLens */}

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:scale-105 hover:border-white/30">

              <h3 className="mb-3 text-xl font-semibold">
                🧠 ProductLens
              </h3>

              <p className="mb-4 text-gray-400">
                AI tool that analyzes product reviews and extracts product insights.
              </p>

              <div className="flex gap-4">

                <a
                  href="https://github.com/anil-ceylan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  View Code
                </a>

                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  Live Demo
                </a>

              </div>

            </div>



            {/* Market Radar */}

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:scale-105 hover:border-white/30">

              <h3 className="mb-3 text-xl font-semibold">
                📡 Market Radar
              </h3>

              <p className="mb-4 text-gray-400">
                AI system that scans markets and identifies new product opportunities.
              </p>

              <div className="flex gap-4">

                <a
                  href="https://github.com/anil-ceylan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  View Code
                </a>

                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        </section>



        {/* TECH STACK */}

        <section id="tech" className="border-t border-white/10 py-20 text-center">

          <h2 className="mb-10 text-3xl font-semibold">
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
                className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-gray-300 backdrop-blur"
              >
                {tech}
              </span>

            ))}

          </div>

        </section>



        {/* ABOUT */}

        <section id="about" className="mx-auto max-w-2xl px-6 py-24 text-center">

          <h2 className="mb-6 text-3xl font-semibold">
            About
          </h2>

          <p className="leading-relaxed text-gray-400">
            I am a Management Information Systems student focused on AI,
            product strategy and business analytics. I enjoy building tools
            that transform user feedback and data into actionable product insights.
          </p>

        </section>



        {/* CONTACT */}

        <section className="px-6 pb-24 text-center">

          <h2 className="mb-6 text-3xl font-semibold">
            Contact
          </h2>

          <p className="mb-6 text-gray-400">
            Feel free to reach out for collaborations or opportunities.
          </p>

          <a
            href="mailto:muhammetanilceylann@gmail.com"
            className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 shadow-xl backdrop-blur transition-all duration-300 hover:bg-white hover:text-black"
          >
            Email Me
          </a>

        </section>



        {/* FOOTER */}

        <footer className="mt-20 border-t border-white/10 py-10 text-center text-sm text-gray-400">

          <div className="mb-3 flex justify-center gap-6">

            <a href="https://linkedin.com/in/muhammetanilceylan" target="_blank">
              💼 LinkedIn
            </a>

            <a href="https://github.com/anil-ceylan" target="_blank">
              🐙 GitHub
            </a>

            <a href="mailto:muhammetanilceylann@gmail.com">
              ✉ Email
            </a>

          </div>

          <p>
            © 2026 Muhammet Anıl Ceylan • Built with Next.js
          </p>

        </footer>



      </main>
    </>
  );
}