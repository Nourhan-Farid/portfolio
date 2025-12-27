"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";
import Socials from "../../_Components/Socials/Socials";

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text-char",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: "power4.out",
          delay: 0.5,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="hero-text-char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      id="Home"
      ref={containerRef}
      className="relative min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-6 py-20 overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-white/30 to-white/10 dark:from-gray-900/80 dark:via-gray-700/30 dark:to-gray-600/30  animate-spin-slow" />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden">
            <h2 className="text-xl md:text-2xl font-medium text-zinc-800 dark:text-white/80 mb-4">
              Hello, I'm a Nourhan Farid
            </h2>
            <h1
              ref={textRef}
              className="text-5xl md:text-7xl lg:text-8xl font-bold dark:text-white text-[#003783] leading-tight tracking-tight"
            >
              {splitText("Frontend Developer")}
            </h1>
          </div>

          <motion.p
            className="text-xl md:text-2xl text-zinc-800 dark:text-white/80  max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Crafting interactive, eye‑catching web experiences with code and
            creativity.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Link
              href="/Projects"
              className="flex items-center justify-center px-8 py-4 bg-[#003783]  text-white  rounded-full font-medium hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span className="mr-2">View Work</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/Contact"
              className="flex items-center justify-center px-8 py-4 border border-zinc-200  bg-white  text-zinc-900  rounded-full font-medium hover:bg-zinc-50  hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Contact Me</span>
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6 pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <Socials />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ChevronDown className="w-8 h-8 text-zinc-400" />
      </motion.div>
    </section>
  );
};
