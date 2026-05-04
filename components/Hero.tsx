"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/animations/commonAnimations";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background z-0">
        <Image
          src="/images/potriat.jpg"
          alt="hero-bg"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/80 to-background" />
      </div>

      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
         
          <div className="text-center lg:text-left max-w-xl">
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-accent/40 rounded-full text-accent text-xs font-mono font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                AVAILABLE FOR WORK
              </span>
            </motion.div>

            
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              I build modern,{" "}
              <span className="text-accent">
                high-performance web applications
              </span>{" "}
              with React & Next.js
            </motion.h1>

            
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed"
            >
              Frontend developer specializing in React, TypeScript & modern UI.
              Turning complex problems into elegant, performant interfaces.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10"
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

           
            <motion.div
              variants={fadeInUp}
              className="flex justify-center lg:justify-start gap-6"
            >
              
            </motion.div>
          </div>

          
          <motion.div
            variants={fadeInUp}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-100 lg:h-100"
          >
            <Image
              src="/images/potriat.jpg" 
              alt="Juliet"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
