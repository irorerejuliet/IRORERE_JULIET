"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateOnScroll = () => {
      const sections = [
        "hero",
        "about",
        "projects",
        "experience",
        "skills",
        "contact",
      ];

      const scrollPosition = window.scrollY + 120;

      // Scroll progress calculation
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOnScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-[60]">
        <motion.div
          className="h-full bg-accent"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-lg font-bold text-accent tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              IRORERE JULIET
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === link.href.replace("#", "")
                      ? "text-accent"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.label}

                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              ))}

              {/* Resume Button (Upgraded) */}
              <motion.a
                href="/Juliet_Irorere_Resume.pdf"
                target="_blank"
                className="text-sm font-semibold px-5 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                📄 Resume
              </motion.a>

              {/* Contact CTA */}
              <motion.a
                href="#contact"
                className="text-sm font-semibold px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Let&apos;s Talk
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4 space-y-2"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-accent/10 text-accent"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* Resume Mobile */}
              <a
                href="/Juliet_Irorere_Resume.pdf"
                target="_blank"
                className="block px-3 py-2 rounded-md text-sm font-medium text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                📄 Resume
              </a>

              {/* Contact CTA */}
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-sm font-medium bg-accent text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
