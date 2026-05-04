'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects, categories } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations/commonAnimations'

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter((p) => p.tags.includes(selectedCategory))

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section header */}
          <motion.div variants={fadeInUp}>
            <span className="text-accent text-sm font-mono font-semibold tracking-widest uppercase">SELECTED WORK</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2">Recent <span className="text-accent">Projects</span></h2>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card border border-border text-foreground hover:border-accent/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-foreground/60 text-lg">No projects found for this category.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
