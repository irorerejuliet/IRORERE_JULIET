"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/animations/commonAnimations";
import { useContactMutation } from "@/hooks/useContactMutation";

export function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { mutate, isPending } = useContactMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(formData, {
      onSuccess: () => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(true);

        setTimeout(() => setSubmitted(false), 5000);
      },
      onError: () => {
        alert("Failed to send message");
      },
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* HEADER */}
          <motion.div variants={fadeInUp} className="text-center">
            <span className="text-accent text-sm font-mono font-semibold tracking-widest uppercase">
              CONTACT
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-6">
              Let&apos;s work <span className="text-accent">together</span>
            </h2>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have a project in mind? I&apos;m always excited to collaborate on
              interesting work.
            </p>
          </motion.div>

          {/* FORM */}
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-6 max-w-2xl mx-auto"
          >
            {/* GRID INPUTS */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* NAME */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none"
                  placeholder="Name"
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isPending || submitted}
              className="w-full px-6 py-3 bg-accent text-black font-semibold rounded-lg disabled:opacity-50"
            >
              {isPending
                ? "Sending..."
                : submitted
                  ? "Message Sent!"
                  : "Send Message"}
            </motion.button>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-green-500"
              >
                Message sent successfully! I’ll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
