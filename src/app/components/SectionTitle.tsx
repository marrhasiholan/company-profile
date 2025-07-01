"use client"

import { motion } from "framer-motion";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <motion.h2
      className="text-2xl font-bold text-pink-500 text-center mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  );
}
