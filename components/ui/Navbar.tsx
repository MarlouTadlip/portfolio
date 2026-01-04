"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`navbar fixed top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-base-100/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost flex items-center gap-5">
          <div className="flex flex-col items-start">
            <span className="text-xl font-bold">Marlou.</span>
          </div>
        </Link>
      </div>

      <div className="navbar-end gap-2">
        <Link href="/about" className="btn btn-ghost">
          About
        </Link>
        <Link href="/contact" className="btn btn-primary">
          Contact
        </Link>
      </div>
    </nav>
  );
}
