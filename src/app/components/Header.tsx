// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Company Logo" className="h-8 w-8 object-cover" />
          <span className="font-bold text-lg text-pink-600">MAXIFY</span>
        </div>
        <nav className="space-x-6">
          <Link href="/about" className="text-gray-700 hover:text-pink-500">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-pink-500">Services</Link>
          <Link href="/blog" className="text-gray-700 hover:text-pink-500">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
