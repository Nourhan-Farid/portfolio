"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_pqv08se", // Replace with your EmailJS Service ID
        "template_tw7azge", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "nourhanfarid883@gmail.com", // Your email to receive messages
        },
        "fF--nn66W8SSAwUIF" // Replace with your EmailJS Public Key
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="bg-white dark:bg-gray-900">
      <section id="Contact" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#003783] dark:text-white mb-4">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-600 dark:text-white/80">
                Have a project in mind? Let's discuss how I can help bring your
                vision to life.
              </p>
            </div>
          </motion.div>
          <motion.form
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="max-w-[700] mx-auto"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold ms-1 mb-2 text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent px-4 py-3 rounded-xl text-gray-800 dark:text-white border border-gray-300 focus:border-[#003783] focus:ring-2 focus:ring-[#003783]/70 outline-none transition-all"
                placeholder="Enter your Name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold ms-1 mb-2 text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent px-4 py-3 rounded-xl text-gray-800 dark:text-white border border-gray-300 focus:border-[#003783] focus:ring-2 focus:ring-[#003783]/70 outline-none transition-all"
                placeholder="Enter your Email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 ms-1 text-gray-900 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent px-4 py-3 rounded-xl text-gray-800 dark:text-white border border-gray-300 focus:border-[#003783] focus:ring-2 focus:ring-[#003783]/70 outline-none transition-all"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#003783] hover:bg-[#085dd4] text-white px-8 py-4 rounded-xl transition-colors font-medium flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="mt-4 text-sm text-center text-green-600 dark:text-green-400">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
}
