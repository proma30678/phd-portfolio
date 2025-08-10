"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function BatteryIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="2" y="7" width="18" height="10" rx="2" className="fill-current" />
      <rect x="20" y="10" width="2" height="4" rx="1" className="fill-current" />
      <rect x="4" y="9" width="6" height="6" rx="1" className="fill-white" />
    </svg>
  );
}

const items = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/education", label: "Education" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur shadow-sm">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-gray-900">
          <BatteryIcon />
        </Link>
        <div className="flex gap-8 text-sm">
          {items.map(i => {
            const active = pathname === i.href;
            return (
              <Link
                key={i.href}
                href={i.href}
                className={`transition hover:opacity-80 ${active ? "text-gray-900 font-medium" : "text-gray-500"}`}
              >
                {i.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
