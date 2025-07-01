import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20 py-12 border-t">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm text-gray-600">
        {/* Company Info */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-pink-600">MAXIFY</h2>
          <p>
            Building digital experiences that delight and perform.
          </p>
          <p>© {new Date().getFullYear()} MAXIFY. All rights reserved.</p>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800">Navigation</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-pink-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-pink-600">About Us</Link></li>
            <li><Link href="/services" className="hover:text-pink-600">Services</Link></li>
            <li><Link href="/blog" className="hover:text-pink-600">Blog</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800">Follow Us</h3>
          <div className="flex gap-4 text-pink-500 text-lg">
            <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}