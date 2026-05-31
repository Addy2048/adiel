import Ambient from "@/components/ambient";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Skills from "@/components/skills";
import Work from "@/components/work";
import Journey from "@/components/journey";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Ambient />
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Journey />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
