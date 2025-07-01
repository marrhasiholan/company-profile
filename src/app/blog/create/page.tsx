"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Simulated auth state (replace with real auth logic)
const isAuthenticated = true; // Set false to test redirect

export default function CreateBlogPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    content: "",
    tags: "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Blog:", form);
    // In production: send to backend, then redirect
    router.push("/blog");
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-pink-600">Create New Blog</h1>
        <p className="text-gray-600">Write and share your latest insights.</p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border rounded-lg focus:outline-pink-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            required
            rows={6}
            className="w-full mt-1 p-3 border rounded-lg focus:outline-pink-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tags (comma separated)
          </label>
          <input
            type="text"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-lg focus:outline-pink-500"
          />
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            Publish Blog
          </button>
        </div>
      </motion.form>
    </main>
  );
}
