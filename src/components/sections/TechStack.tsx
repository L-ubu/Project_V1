'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Grid } from '@/components/ui/Grid';
import { Badge } from '@/components/ui/Badge';

const techCategories = [
  {
    title: 'Frontend Core',
    technologies: [
      'React 18',
      'TypeScript',
      'Next.js 14',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'State Management',
    technologies: [
      'Redux Toolkit',
      'React Query',
      'Zustand',
      'Context API',
      'SWR',
    ],
  },
  {
    title: 'Styling & UI',
    technologies: [
      'Styled Components',
      'Tailwind CSS',
      'Material-UI',
      'Framer Motion',
      'CSS Modules',
      'Sass/SCSS',
    ],
  },
  {
    title: 'Testing',
    technologies: [
      'Jest',
      'React Testing Library',
      'Cypress',
      'Playwright',
      'Storybook',
      'Testing Library',
    ],
  },
  {
    title: 'Build Tools',
    technologies: [
      'Webpack',
      'Vite',
      'ESLint',
      'Prettier',
      'Babel',
      'SWC',
    ],
  },
  {
    title: 'DevOps & CI/CD',
    technologies: [
      'GitHub Actions',
      'Docker',
      'Vercel',
      'Netlify',
      'AWS',
      'Git',
    ],
  },
];

export function TechStack() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-32 relative" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.05)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse"></div>
      
      <Container>
        <div className="text-center mb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h2" 
              gutterBottom
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Technology{' '}
              <span className="gradient-text">Stack</span>
            </Typography>
            <Typography 
              variant="body1" 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive expertise across the modern frontend development ecosystem,
              from core React patterns to advanced tooling and deployment strategies.
            </Typography>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Grid columns={{ xs: 1, md: 2 }} gap="xl">
            {techCategories.map((category, index) => (
              <motion.div key={category.title} variants={itemVariants}>
                <div className="mb-20 group">
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    className="inline-block pb-3 text-2xl font-bold text-white mb-6 relative"
                  >
                    {category.title}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                  </Typography>
                  <div className="flex flex-wrap gap-3">
                    {category.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        size="lg"
                        className="group-hover:scale-105 transition-all duration-300 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 border border-gray-600 hover:border-indigo-500 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}