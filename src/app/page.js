"use client";

import About from "@/components/about/About";
import Home_Blog from "@/components/blog/Home_Blog";
import Contact from "@/components/contact/Contact";
import Link_tree from "@/components/contact/Link_tree";
import Homepage from "@/components/homepage/Homepage";
import Navigation_bar from "@/components/homepage/Navigation_bar";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/skills/Experience";
import Skills from "@/components/skills/Skills";
import Skills_2 from "@/components/skills/Skills_2";
import Image from "next/image";

export default function Home() {
  return (
    <main className="" style={{ scrollBehavior: "smooth" }}>
      <Navigation_bar />
      <main className="xs:snap-y snap-y snap-mandatory h-screen overflow-scroll font-raleway">
        <div id="home" className="snap-start  w-full h-screen ">
          <Homepage />
        </div>
        <div
          id="about"
          className="snap-start  w-full h-screen flex items-center justify-center "
        >
          <About />
        </div>
        <div id="skills" className="snap-start w-screen h-screen">
          <Skills />
        </div>
        <div className="snap-start w-screen h-screen">
          <Skills_2 />
        </div>
        <div className="snap-start w-screen h-screen">
          <Experience />
        </div>
        <div id="project" className="snap-start w-screen h-screen">
          <Projects />
        </div>
        <div className="snap-start w-screen h-screen">
          <Home_Blog />
        </div>
        <div id="contact" className="snap-start w-screen h-screen">
          <Contact />
        </div>
        <div className="snap-start w-screen h-screen">
          <Link_tree />
        </div>
      </main>
    </main>
  );
}
