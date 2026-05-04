'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillCategories } from '@/data/skills'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations/commonAnimations'

export function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section header */}
          <motion.div variants={fadeInUp}>
            <span className="text-accent text-sm font-mono font-semibold tracking-widest uppercase">SKILLS</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2">Technologies &amp; <span className="text-accent">Tools</span></h2>
          </motion.div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">{category.name}</h3>
                <motion.div
                  variants={staggerContainer}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      variants={staggerItem}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 bg-primary/10 text-accent border border-accent/30 rounded-full text-sm font-medium hover:bg-accent/10 hover:border-accent/60 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
