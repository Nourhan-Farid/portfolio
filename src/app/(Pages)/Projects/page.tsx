"use client";

import Image from "next/image";
import Shopifya from "../../../../public/assets/Shopifya.png";
import QuoteVerse from "../../../../public/assets/QuoteVerse.png";
import Bookmarker from "../../../../public/assets/Bookmarker.png";
import Onea from "../../../../public/assets/Onea.png";
import Daniels from "../../../../public/assets/Daniels.png";
import PixelView from "../../../../public/assets/PixelView.png";
import Calculator from "../../../../public/assets/Calculator.png";
import DevFolio from "../../../../public/assets/DevFolio.png";
import RealState from "../../../../public/assets/RealState.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Shopifya E-Commerce",
      description: "Complete brand overhaul for a modern tech startup",
      href: "https://shopifya-e-commerce.vercel.app/",
      image: Shopifya,
    },
    {
      id: 2,
      title: "Daniels Portfolio",
      description: "Elegant visual identity for fine dining establishment",
      href: "https://nourhan-farid.github.io/Daniels-Portfolio/",
      image: Daniels,
    },
    {
      id: 3,
      title: "Onea. Home Decor",
      description: "Bold, interactive website with stunning animations",
      href: "https://nourhan-farid.github.io/Onea.-Platform/",
      image: Onea,
    },
    {
      id: 4,
      title: "RealState Project",
      description: "Data visualization with intuitive user experience",
      href: "https://real-state-property.vercel.app/",
      image: RealState,
    },
    {
      id: 5,
      title: "DevFolio Project",
      description: "Data visualization with intuitive user experience",
      href: "https://nourhan-farid.github.io/DevFolio/",
      image: DevFolio,
    },
    {
      id: 6,
      title: "PixelView",
      description: "Data visualization with intuitive user experience",
      href: "https://nourhan-farid.github.io/CodeAlpha_ImageGallery/",
      image: PixelView,
    },
    {
      id: 7,
      title: "Bookmarker Web Design",
      description: "Calming interface for meditation and mindfulness",
      href: "https://nourhan-farid.github.io/Bookmarker_App/",
      image: Bookmarker,
    },

    {
      id: 8,
      title: "Simple Calculator",
      description: "Data visualization with intuitive user experience",
      href: "https://nourhan-farid.github.io/CodeAlpha-Calculator/",
      image: Calculator,
    },
    {
      id: 9,
      title: "QuoteVerse App",
      description: "Redesigned shopping experience with focus on conversion",
      href: "https://nourhan-farid.github.io/QuoteVerse/",
      image: QuoteVerse,
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // delay between each child
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <section id="Projects" className="py-24 container  mx-auto px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003783] dark:text-white mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-blue-50 max-w-2xl mx-auto">
            A selection of projects that showcase my creative approach and
            problem-solving skills
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <motion.div
              variants={item}
              transition={{ duration: 0.6, ease: "easeOut" }}
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200/20"
            >
              <div className="aspect-4/3 overflow-hidden transition-all duration-300">
                <Image
                  width={500}
                  height={400}
                  src={project.image}
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <button className="bg-[#003783] items-center w-fit hover:bg-[#0356cb] text-white px-6 py-2 rounded-full transition-colors font-medium">
                  <a href={project.href} target="_blank">
                    View Demo
                  </a>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
