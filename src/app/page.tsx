import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-100">
      <Hero />
      <div className="bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617] relative z-10 w-full pt-10">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
