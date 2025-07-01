"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  testimonial: string;
  client: string;
  image: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  price,
  testimonial,
  client,
  image,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      className="glassmorphism p-6 rounded-xl shadow-md space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay:index * 0.2 }}
      viewport={{ once: true }}
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="rounded-lg object-cover w-full h-40"
      />
      <h3 className="text-xl font-semibold text-pink-600">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
      <p className="text-gray-900 font-medium">{price}</p>
      <div className="bg-white/30 p-3 rounded-md">
        <p className="italic text-gray-700">“{testimonial}”</p>
        <footer className="mt-2 text-sm font-medium text-pink-500">
          {client}
        </footer>
      </div>
    </motion.div>
  );
}
