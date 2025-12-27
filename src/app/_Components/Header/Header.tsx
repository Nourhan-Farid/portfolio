"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
export const Header: React.FC = () => {
  const logoText = "Nourhan Farid";
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "#About" },
    { name: "Projects", href: "#Projects" },
    { name: "Skills", href: "#Skills" },
    { name: "Contact", href: "#Contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 px-4 transition-all duration-300 py-4 ${
        scrolled ? "backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="md:container mx-auto px-0 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1 rounded-lg"
        >
          <motion.div className="text-[#003783] dark:text-white font-bold text-2xl hover:scale-100 transition-transform duration-250">
            {logoText}
          </motion.div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-bold text-[#003783] dark:text-white hover:text-[#003783] hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1 rounded-lg transform  hover:-translate-y-0.5 active:scale-95 active:text-[#003783] transition-all duration-200 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
          {/* Theme Toggle */}

          <ThemeToggle />
          <button className="bg-[#003783] hover:bg-[#0356cb] text-white px-6 py-2 rounded-full transition-colors font-medium">
            <a href={"mailto:nourhanfarid883@gmail.com"}>Hire Me</a>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <motion.button
            className="p-2 rounded-lg active:scale-95 transition-all duration-200 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-[#003783] dark:text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-[#003783] dark:text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-y-2 py-1 border-zinc-100 dark:border-gray-900 overflow-hidden"
          >
            <div className="mx-auto px-1 flex flex-col items-center space-y-4 w-full">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#003783] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 w-full mx-auto flex justify-center py-2 items-center text-lg font-semibold "
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
