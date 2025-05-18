import Title from "@/components/Title";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Education from "@/sections/Education";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skill from "@/sections/Skill";

export default function Home() {
  return (
    <>
      <Hero />
      <Title title="About ME" />
      <About/>
<Education/>
<Skill/>
      <Projects />
      <Contact />
    </>
  );
}
