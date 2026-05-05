"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/animations/commonAnimations";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="hero-bg"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* CONTENT GRID */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* LEFT SIDE (TEXT) */}
        <div className="text-left">
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-accent/40 rounded-full text-accent text-xs font-mono font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight"
          >
            I build modern{" "}
            <span className="text-accent">
              high-performance web applications
            </span>{" "}
            with React & Next.js
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground mb-12 max-w-xl leading-relaxed"
          >
            Frontend developer specializing in React, TypeScript & modern UI.
            Turning complex problems into elegant, performant interfaces.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              href="#projects"
              className="group px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              View Work
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>

            <Link
              href="#contact"
              className="px-8 py-4 border border-accent/50 text-foreground font-semibold rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeInUp} className="flex gap-6">
            <Link
              href="https://github.com/irorerejuliet"
              target="_blank"
              className="p-3 border border-muted rounded-lg hover:border-accent hover:text-accent transition-all duration-300"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/irorere-juliet-092b92320"
              target="_blank"
              className="p-3 border border-muted rounded-lg hover:border-accent hover:text-accent transition-all duration-300"
            >
              LinkedIn
            </Link>
            <Link
              href="https://x.com/irorerejuliet1"
              target="_blank"
              className="p-3 border border-muted rounded-lg hover:border-accent hover:text-accent transition-all duration-300"
            >
              Twitter
            </Link>
          </motion.div>
        </div>

        {/* RIGHT SIDE (BIG IMAGE) */}
        <motion.div
          variants={fadeInUp}
          className="relative w-full h-125 md:h-175"
        >
          <Image
            src="/images/juliet.jpg"
            alt="Juliet portrait"
            fill
            priority
            className="object-cover object-top rounded-2xl shadow-2xl border border-accent/20"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
