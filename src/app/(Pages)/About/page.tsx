"use client";
import { motion, useAnimation } from "framer-motion";
import Profile from "../../../../public/assets/Profile.jpg";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import CVDownLoad from "../../_Components/CVDownLoad/CVDownLoad";
import { useEffect } from "react";
// grid lg:grid-cols-2 gap-16
export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-28">
      <section
        id="About"
        className="py-28 bg-gray-50 dark:bg-gray-900  container mx-auto px-10"
      >
        <div className="flex lg:flex-row flex-col justify-around justify-items-center mx-auto items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[700]"
          >
            <h2 className="text-4xl md:text-3xl font-bold dark:text-white text-black mb-6">
              My Name is Nourhan Farid
            </h2>
            <p className="text-lg text-gray-600 dark:text-white/80 mb-6 leading-relaxed max-w-[600]">
              I’m a Frontend Developer skilled in React, Next.js, TypeScript,
              and Tailwind CSS. I focus on building clean, responsive, and
              user-friendly interfaces with strong attention to detail and
              modern best practices. Passionate about solving problems and
              creating seamless digital experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-white/80 mb-8 leading-relaxed max-w-[600]">
              I approach each task with precision and adaptability. Beyond
              technical skills, I value clarity, collaboration, and continuous
              learning. I enjoy sharing knowledge, exploring new tools, and
              pushing boundaries to deliver interfaces that not only work
              flawlessly but also inspire users.
            </p>
            <button className="bg-[#003783] hover:bg-[#0356cb] text-white px-6 py-2 rounded-full transition-colors font-medium">
              <CVDownLoad />
            </button>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative ms-0 mt-7 lg:mt-0 lg:ms-10 "
          >
            <Image
              width={400}
              height={400}
              src={Profile}
              alt="Professional developer workspace with modern MacBook, sketch notebooks, color swatches, and minimal desk setup with plants"
              className="rounded-full shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-8 bg-[#003783] text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold mb-1">3+ Years</div>
              <div className="text-sm text-teal-100">Experience</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
