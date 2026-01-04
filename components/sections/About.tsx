"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  C,
  CSharp,
  ExpressJsLight,
  Git,
  GitHubLight,
  MySQL,
  NextJs,
  NodeJs,
  Prisma,
  React,
  TailwindCSS,
  TypeScript,
} from "developer-icons";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );

      const skills = skillsRef.current;
      if (skills) {
        gsap.fromTo(
          skills,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-base-100 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg text-base-content/70">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div ref={imageRef} className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-primary to-secondary rounded-full blur-2xl opacity-30"></div>
              <div className="avatar relative">
                <div className="w-64 md:w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-base-300 rounded-full">
                      <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                  )}
                  <Image
                    src="/images/profile.jpg"
                    alt="Marlou Tadlip"
                    className="object-cover"
                    height={320}
                    width={320}
                    quality={100}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="space-y-6">
            <h2 className="text-3xl font-bold">
              Hi, I&apos;m Marlou C. Tadlip!
            </h2>
            <p className="text-lg leading-relaxed text-base-content/80">
              I&apos;m an aspiring software engineer with a passion for building
              innovative solutions and creating beautiful digital experiences. I
              love turning ideas into reality through clean, efficient code.
            </p>
            <p className="text-lg leading-relaxed text-base-content/80">
              Currently focused on web development, I&apos;m constantly learning
              new technologies and improving my skills. When I&apos;m not
              coding, you can find me exploring new tech trends, contributing to
              open source, or working on personal projects.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="/contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a
                href="/Tadlip_Resume.pdf"
                download
                className="btn btn-outline btn-primary"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Skills & Technologies
          </h2>
          <div
            ref={skillsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <React />
                <h3 className="card-title text-lg">React</h3>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <NextJs />
                <h3 className="card-title text-lg">Next.js</h3>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <NodeJs />
                <h3 className="card-title text-lg">Node.js</h3>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <TailwindCSS />
                <h3 className="card-title text-lg">TailwindCSS</h3>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <TypeScript />
                <h3 className="card-title text-lg">TypeScript</h3>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <ExpressJsLight />
                <h3 className="card-title text-lg">Express.js</h3>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <Prisma />
                <h3 className="card-title text-lg">Prisma</h3>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <Git />
                <h3 className="card-title text-lg">Git</h3>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <GitHubLight />
                <h3 className="card-title text-lg">GitHub</h3>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <CSharp />
                <h3 className="card-title text-lg">C#</h3>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <MySQL />
                <h3 className="card-title text-lg">MySQL</h3>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <C />
                <h3 className="card-title text-lg">C</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
