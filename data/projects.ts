export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "3triving By MyVamnet",
    description:
      "Full-featured admin dashboard with real-time analytics, product management, and order tracking.",
    longDescription:
      "A modern e-commerce platform built with Next.js and TypeScript. Features include real-time inventory management, Stripe payment integration, user authentication, and a comprehensive admin dashboard for managing products and orders.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/images/t3rive.jpeg",
    link: "https://www.angycarehome.com/",
    github: "https://github.com/myvamsnet/angy-care-provider-app.git",
  },
  {
    id: "2",
    title: "Angy Care for Providers",
    description:
      "Angy Care connects caregivers, chefs, doctors, and cleaners with tools to streamline care, appointments, and daily tasks in one secure, easy‑to‑use platform.",
    longDescription:
      "A collaborative task management application featuring real-time synchronization, team workspaces, and smart notifications. Built with React, Firebase, and Tailwind CSS for a seamless user experience.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/angy-care.jpeg",
    link: "https://www.angycarehome.com/",
    github: "https://github.com/myvamsnet/angy-care-provider-app.git",
  },
  {
    id: "3",
    title: "Exclusive — Modern E-commerce Web Application",
    description:
      "A full-featured e-commerce web app focused on seamless user experience, advanced filtering, and scalable frontend architecture.",

    longDescription:
      "Exclusive is a modern e-commerce web app built with Next.js and TypeScript, featuring cart, favorites, and advanced filtering (price, category, debounced search). It integrates Supabase and a custom API, with a focus on clean architecture, performance, and seamless user experience.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "REST API",
      "E-commerce",
      "Frontend Architecture",
      "State Management",
      "Filtering System",
      "Responsive Design",
    ],
    image: "/images/exclusive-project.jpeg",
    link: "https://example.com",
    github: "https://github.com/irorerejuliet/Exclusive-webapp.git",
  },
  
  
  
 
];

export const categories = ['All', 'Next.js', 'React', 'TypeScript', 'Supabase', ]
