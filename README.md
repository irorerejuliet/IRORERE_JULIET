# Exceptional Frontend Developer Portfolio

A stunning modern portfolio website built with Next.js 16, React 19, Framer Motion, and Tailwind CSS. Features a dark navy theme with vibrant cyan accents, smooth animations, project filtering, and a contact form.

## Features

- ✨ **Exceptional Design** - Dark navy theme with cyan accents, matching modern portfolio trends
- 🎬 **Smooth Animations** - Scroll-triggered animations and Framer Motion effects throughout
- 📱 **Fully Responsive** - Mobile-first design that works perfectly on all devices
- 🔍 **Project Filtering** - Filter projects by technology tags
- 📧 **Contact Form** - Functional contact form with validation
- ♿ **Accessible** - Semantic HTML and ARIA labels throughout
- 🎯 **SEO Optimized** - Metadata and structured content
- 🚀 **Performance** - Optimized images and smooth scrolling

## Customization Guide

### 1. Update Personal Information

**Update your name and title in:**
- `components/Navigation.tsx` - Line 49: Change "IRENE JULIET" to your name
- `components/Footer.tsx` - Update the branding section with your name
- `app/layout.tsx` - Update the page title and description metadata

### 2. Add Your Projects

Open `/data/projects.ts` and update the projects array with your own projects:

```typescript
{
  id: '1',
  title: 'Your Project Title',
  description: 'Short description',
  longDescription: 'Longer description',
  tags: ['React', 'Next.js', 'TypeScript'],
  image: '/projects/your-project.jpg',
  link: 'https://your-project.com',
  github: 'https://github.com/your-repo',
}
```

### 3. Add Project Images

Place your project images in the `/public/projects/` directory and reference them in the projects data.

### 4. Update Skills

Edit `/data/skills.ts` to customize skill categories and items:

```typescript
{
  name: 'Your Category',
  skills: ['Skill 1', 'Skill 2', 'Skill 3'],
}
```

### 5. Update About Section

Edit `components/About.tsx` to change:
- The about text content
- The highlights/features (currently 4 items)

### 6. Update Contact Information

Edit `components/Contact.tsx` to update:
- Email address
- Phone number
- Location
- Contact form handling

### 7. Update Navigation Links

The navigation automatically highlights the current section based on scroll position. Links are configured in `components/Navigation.tsx`.

### 8. Customize Colors

Edit `/app/globals.css` to change the color scheme. The current colors are:

```css
:root {
  --background: hsl(220 25% 8%);        /* Dark navy */
  --foreground: hsl(0 0% 95%);          /* Light text */
  --accent: hsl(178 100% 50%);          /* Cyan */
}
```

To change the accent color to your brand:
1. Open `app/globals.css`
2. Find `--accent: hsl(178 100% 50%);` in both `:root` and `.dark` sections
3. Replace with your desired color (use HSL format)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── Navigation.tsx       # Header with navigation
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase with filtering
│   ├── ProjectCard.tsx     # Individual project card
│   ├── Skills.tsx          # Skills section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer with social links
├── data/
│   ├── projects.ts         # Project data and types
│   └── skills.ts           # Skills categories
├── animations/
│   └── commonAnimations.ts # Framer Motion animation variants
└── public/
    └── projects/           # Project images
```

## Technologies Used

- **Next.js 16** - React framework with SSR
- **React 19** - UI library
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS
- **TypeScript** - Type safety
- **React Intersection Observer** - Scroll detection

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Update personal information in the data files and components (see Customization Guide above)

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
pnpm build
pnpm start
```

## Deployment

The portfolio is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically build and deploy

### Environment Variables

No environment variables are required for basic functionality.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Optimize your project images (recommended: 400x300px for project thumbnails)
- Use modern image formats (WebP)
- Keep descriptions concise for better readability
- Test animations on older devices to ensure smooth performance

## Accessibility

The portfolio includes:
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Reduced motion support for users who prefer it

## Future Enhancements

- Dark/Light mode toggle
- Blog section
- Client testimonials
- Case studies with detailed writeups
- Analytics integration
- Newsletter signup

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository.

---

**Happy coding! Feel free to customize this portfolio to match your personal brand.**
