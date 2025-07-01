"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      {/* hero section */}
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Build Better Experiences <br />
          <span className="text-pink-500">With Our Digital Team</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          We craft beautiful and functional websites to help you grow online.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="#contact"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-medium"
          >
            Contact Us
          </Link>
          <Link
            href="#services"
            className="border border-pink-500 hover:bg-pink-50 text-pink-600 px-6 py-3 rounded-full font-medium"
          >
            Our Services
          </Link>
        </div>
        <Image
          src="/hero.jpg"
          alt="Hero"
          width={1200}
          height={600}
          className="rounded-3xl shadow-xl mt-10 mx-auto"
        />
      </motion.section>

      {/* services section */}
      <section id="services" className="text-center space-y-10">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Web Development", "UI/UX Design", "SEO & Analytics"].map(
            (title, i) => (
              <motion.div
                key={title}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2 text-pink-500">
                  {title}
                </h3>
                <p className="text-gray-600">
                  {[
                    "Modern and responsive websites.",
                    "Pixel-perfect design & interaction.",
                    "Optimize performance and growth."
                  ][i]}
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* testimonials section */}
      <motion.section
        className="bg-gray-100 rounded-3xl p-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-2xl font-bold mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Working with them transformed our digital presence. Highly recommend!", "Professional, responsive, and creative from start to finish."].map(
            (quote, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="italic text-gray-700">“{quote}”</p>
                <footer className="mt-4 text-sm font-medium text-pink-500">
                  — {i === 0 ? "Clara, CEO @ FinTechX" : "Malik, Head of Ops @ StartupBee"}
                </footer>
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* logo strip */}
      <motion.section
        className="flex justify-center items-center gap-10 opacity-60 flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {["google", "spotify", "amazon", "airbnb"].map((logo) => (
          <Image
            key={logo}
            src={`/logos/${logo}.svg`}
            alt={logo}
            width={100}
            height={30}
            className="h-10 grayscale opacity-70 hover:opacity-100 transition"
          />
        ))}
      </motion.section>

      {/* CTA footer */}
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold">Ready to Work With Us?</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Let's bring your next idea to life — from concept to code.
        </p>
        <Link
          href="#contact"
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold"
        >
          Let’s Talk
        </Link>
      </motion.section>
    </main>
  );
}
