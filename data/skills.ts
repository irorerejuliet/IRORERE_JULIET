export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Core Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS"],
  },
  {
    name: "Styling & Animation",
    skills: [
      "Tailwind CSS",
      "Framer Motion",
      "CSS Animations",
      "Styled Components",
      "CSS Grid",
      "Flexbox",
    ],
  },
  {
    name: "Backend & APIs",
    skills: [
      "Supabase",
      "REST API Integration",
      "Authentication",
      "Database Design",
    ],
  },
  {
    name: "Tools & Development",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "npm",
      "pnpm",
      "Vite",
      "Webpack",
    ],
  },
  {
    name: "UI/UX & Design",
    skills: [
      "Responsive Design",
      "Accessibility (a11y)",
      "Component Design",
      "Web Performance",
    ],
  },
];