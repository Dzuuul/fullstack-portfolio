import Hero from "@/components/hero";
import Projects from "@/components/new-projects";
import Skills from "@/components/new-skills";
import Contact from "@/components/new-contact";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}
