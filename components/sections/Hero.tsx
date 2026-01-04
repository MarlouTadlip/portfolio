"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          buttonRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6 },
          "-=0.3"
        );

      // Subtle breathing animation
      gsap.to(heroRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-3xl" ref={heroRef}>
          <h1
            ref={titleRef}
            className="text-6xl md:text-7xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Hi, I&apos;m Marlou Tadlip
          </h1>
          <h2
            ref={subtitleRef}
            className="text-2xl md:text-3xl font-semibold mt-6 text-base-content"
          >
            Aspiring Software Engineer
          </h2>
          <p ref={descRef} className="py-6 text-lg text-base-content/80">
            Specializing in modern JavaScript frameworks, building scalable and
            user-friendly applications.
          </p>
          <div ref={buttonRef} className="flex gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get in Touch
            </Link>
            <Link href="/about" className="btn btn-outline btn-lg">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
