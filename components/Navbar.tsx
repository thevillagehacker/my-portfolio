"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Me" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-semibold">
          TheVillageHacker
        </Link>

        <div className="flex space-x-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${
                pathname === href ? "text-blue-600 font-medium" : "text-gray-700"
              } hover:text-blue-500 transition-colors`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
