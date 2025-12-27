"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaCss3Alt,
  FaAccessibleIcon,
  FaBootstrap,
  FaFigma,
  FaHtml5,
  FaJs,
  FaSass,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMui,
} from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { TbApi } from "react-icons/tb";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    description: "Cascading Style Sheets",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-600 text-4xl" />,
    description: "Cascading Style Sheets",
  },
  {
    name: "JS",
    icon: <FaJs className="text-yellow-300 text-4xl" />,
    description: "Cascading Style Sheets",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-500 text-4xl" />,
    description:
      "Building dynamic, component-based UIs with hooks and state management.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white text-4xl" />,
    description:
      "Server-side rendering, routing, and performance optimization.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-4xl" />,
    description: "Strong typing for scalable and maintainable frontend code.",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-600 text-4xl" />,
    description: "State management for complex applications.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 text-4xl" />,
    description:
      "Utility-first styling with responsive design and dark mode support.",
  },
  {
    name: "Accessibility",
    icon: <FaAccessibleIcon className="text-green-600 text-4xl" />,
    description:
      "Ensuring inclusive, keyboard-friendly, and WCAG-compliant interfaces.",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-600 text-4xl" />,
    description:
      "Sleek, intuitive, and powerful front-end framework for faster and easier web development.",
  },
  {
    name: "JQuery",
    icon: <DiJqueryLogo className="text-blue-500 text-4xl" />,
    description: "A fast, small, and feature-rich JavaScript library..",
  },
  {
    name: "REST APIs",
    icon: <TbApi className="text-orange-400 text-4xl" />,
    description:
      "predefined plan for connecting web services using HTTP methods and data types.",
  },
  {
    name: "MUI",
    icon: <SiMui className="text-blue-500 text-4xl" />,
    description:
      "Provides a simple, customizable, and accessible library of React components.",
  },
  {
    name: "Sass",
    icon: <FaSass className="text-pink-400 text-4xl" />,
    description:
      "The most mature, stable, and powerful professional grade CSS extension language in the world.",
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-black dark:text-white  text-4xl" />,
    description: "Design platform for building meaningful products.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section
      id="Skills"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6 py-24"
    >
      <h1 className="text-4xl font-bold mb-8 text-[#003783] dark:text-white">
        My Skills
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transform transition"
          >
            {skill.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
              {skill.name}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
