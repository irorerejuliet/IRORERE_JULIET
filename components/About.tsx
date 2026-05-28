'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/animations/commonAnimations'

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section heading */}
          <motion.div variants={fadeInUp} className="mb-16">
            <span className="text-accent text-sm font-mono font-semibold tracking-widest uppercase">ABOUT ME</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2">
              Passionate about <span className="text-accent">digital</span> craftsmanship
            </h2>
          </motion.div>

          {/* Main bio */}
          <motion.div variants={fadeInUp} className="max-w-3xl ">
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-6">
              I'm a frontend developer who specializes in creating beautiful, accessible, and performant web experiences. With a deep understanding of React, TypeScript, and modern CSS, I transform complex problems into elegant solutions that users love.
            </p>
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
              My philosophy is simple: code should be clean, interfaces should be intuitive, and experiences should be delightful. Whether it's building responsive layouts, optimizing performance, or crafting smooth animations, I bring both technical skill and creative thinking to every project.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
