"use client";

import { useParams, notFound } from "next/navigation";
import { blogs } from "@/app/data/blogs";
import Link from "next/link";

export default function BlogDetailPage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 space-y-6">
      <h1 className="text-4xl font-bold text-pink-600">{blog.title}</h1>
      <p className="text-gray-500 text-sm">
        By {blog.author} — {new Date(blog.date).toLocaleDateString()}
      </p>
      <div className="prose prose-p:text-gray-700 max-w-none">
        {blog.content}
      </div>

      <div className="pt-10">
        <Link
          href="/blog"
          className="text-pink-500 hover:text-pink-600 underline text-sm"
        >
          ← Back to Blog List
        </Link>
      </div>
    </main>
  );
}
