"use client"


import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      {/* hero */}
      <motion.header
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600">
          About Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our story, values, and the passionate team behind our work.
        </p>
      </motion.header>

      {/* our story */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/about.jpg"
            alt="About us"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle title="Our Story" />
          <p className="text-gray-700">
            Founded with the vision to simplify digital transformation, our
            company began as a small team of tech enthusiasts and has grown into
            a trusted partner for businesses worldwide. We believe in
            craftsmanship, innovation, and long-term impact.
          </p>
        </motion.div>
      </section>

      {/* milestones */}
      <section className="space-y-8">
        <SectionTitle title="Company Milestones" />
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { year: "2018", event: "Founded in Jakarta, Indonesia" },
            { year: "2020", event: "Launched our first SaaS platform" },
            { year: "2022", event: "Expanded to international clients" },
            { year: "2024", event: "Surpassed 100+ successful projects" },
          ].map((item) => (
            <motion.div
              key={item.year}
              className="glassmorphism p-4 rounded-xl space-y-2 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-pink-600">{item.year}</h3>
              <p className="text-sm text-gray-700">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* culture */}
      <section className="text-center space-y-6">
        <SectionTitle title="Our Culture & Values" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Innovation",
              desc: "We embrace change and continuously seek smarter solutions.",
            },
            {
              title: "Integrity",
              desc: "We value honesty, transparency, and accountability.",
            },
            {
              title: "Collaboration",
              desc: "We believe in the power of teamwork to achieve great results.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glassmorphism p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-pink-600 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* team */}
      <section className="text-center space-y-6">
        <SectionTitle title="Meet Our Team" />
        <p className="text-gray-600 max-w-xl mx-auto">
          Talented, passionate, and committed to helping you succeed.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { image: "/team1.jpg", name: "Nina", role: "CEO" },
            { image: "/team2.jpg", name: "Reza", role: "CTO" },
            { image: "/team3.jpg", name: "Kevin", role: "Product Designer" },
            { image: "/team4.jpg", name: "Lia", role: "Frontend Dev" },
          ].map((member, i) => (
            <TeamCard
              key={i}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
