export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Core Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "JSX",
    ],
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
    name: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Vercel",
      "npm/pnpm",
      "webpack",
      "Vite",
      "ReactHook Form",
      "Tanstack Query",
    ],
  },
  {
    name: "UI/UX & Design",
    skills: [
      "Responsive Design",
      "Accessibility (a11y)",
      "Component Design",
      "User Experience",
      "Web Performance",
      "Mobile-First",
    ],
  },
];
