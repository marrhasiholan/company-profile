"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

export default function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Simulasi fetch data blog
    setPosts([
      {
        id: 1,
        title: "Why UX Matters in Modern Web Design",
        excerpt:
          "Discover how thoughtful design can boost conversions and user loyalty.",
        author: "Jane Doe",
        date: "2024-06-01",
      },
      {
        id: 2,
        title: "Top 5 Frontend Frameworks in 2025",
        excerpt:
          "Explore the most powerful and popular tools for building user interfaces.",
        author: "John Smith",
        date: "2024-06-15",
      },
      {
        id: 3,
        title: "The Rise of Headless CMS: What You Need to Know",
        excerpt:
          "Learn the benefits of using headless architecture for content management.",
        author: "Maria Gonzalez",
        date: "2024-07-01",
      },
    ]);
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-12">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-pink-600">Our Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Insights, tips, and updates from our team to help you stay ahead in the
          digital world.
        </p>
      </div>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold text-pink-600">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              By {post.author} — {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.id}`}
              className="text-pink-500 hover:underline font-medium"
            >
              Read More →
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}