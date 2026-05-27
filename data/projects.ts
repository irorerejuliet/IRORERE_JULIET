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
      "A platform that connects startup founders with venture capital opportunities, helping founders build and scale their applications while focusing on growing their business.",
    longDescription:
       "3triving By MyVamnet is an innovative platform designed to bridge the gap between venture capitalists and startup founders. The platform empowers founders by providing the tools, resources, and technical support needed to build and scale their applications efficiently, allowing them to focus more on business growth, strategy, and innovation.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/images/t3rive.jpeg",
    link: "https://www.3trive.com/",
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
    link: "https://exclusive-webapp.vercel.app/",
    github: "https://github.com/irorerejuliet/Exclusive-webapp.git",
  },
];

export const categories = ['All', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'Supabase', ]
