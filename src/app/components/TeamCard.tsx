"use client"


import Image from "next/image";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <motion.div
      className="glassmorphism p-4 rounded-xl text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <Image
        src={image}
        alt={`Team member ${name}`}
        width={100}
        height={100}
        className="rounded-full mx-auto mb-2 object-cover"
      />
      <h4 className="font-semibold text-pink-600">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </motion.div>
  );
}