"use client";

import { Header } from "@/app/_Components/Header/Header";
import { HeroSection } from "../HeroSection/page";
import About from "../About/page";
import Projects from "../Projects/page";
import Skills from "../Skills/page";
import Contact from "../Contact/page";
import Footer from "@/app/_Components/Footer/Footer";
import { ScrollProgress } from "@/app/_Components/ScrollingProgress/ScrollingProgress";
import ScrollingUpIcon from "@/app/_Components/ScrollingUpIcon/ScrollingUpIcon";

export default function App() {
  return (
    <div className="min-h-screen">
      <main className="bg-white dark:bg-zinc-900 min-h-screen transition-colors duration-300">
        <Header />
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
      <ScrollProgress />
      <ScrollingUpIcon />
    </div>
  );
}
