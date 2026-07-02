import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <div className="relative z-10 w-full pt-10">
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
