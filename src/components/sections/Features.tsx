'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { Grid } from '@/components/ui/Grid';
import { 
  Code, 
  Zap, 
  Shield, 
  Smartphone, 
  GitBranch, 
  TestTube,
  Palette,
  Database
} from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Modern React Patterns',
    description: 'Advanced hooks, context, and component composition patterns for scalable applications.',
  },
  {
    icon: Code,
    title: 'TypeScript Excellence',
    description: 'Strong typing, interfaces, and advanced TypeScript features for robust development.',
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Code splitting, lazy loading, memoization, and bundle optimization techniques.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Security best practices, input validation, and secure authentication patterns.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first approach with advanced CSS techniques and responsive patterns.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline',
    description: 'Automated testing, deployment, and continuous integration workflows.',
  },
  {
    icon: TestTube,
    title: 'Comprehensive Testing',
    description: 'Unit, integration, and E2E testing with Jest, RTL, and Cypress.',
  },
  {
    icon: Palette,
    title: 'Design System',
    description: 'Consistent UI components with Storybook documentation and theming.',
  },
  {
    icon: Database,
    title: 'State Management',
    description: 'Redux Toolkit, React Query, and advanced state management patterns.',
  },
];

export function Features() {
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
    <section 
      id="features"
      className="py-32 relative"
      style={{ backgroundColor: '#111111' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
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
              Advanced{' '}
              <span className="gradient-text">Frontend</span>
              <br />
              Capabilities
            </Typography>
            <Typography 
              variant="body1" 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Demonstrating modern React development practices, TypeScript expertise,
              and enterprise-level frontend architecture with cutting-edge technologies.
            </Typography>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Grid columns={{ xs: 1, sm: 2, lg: 3 }} gap="lg">
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="group h-full text-center glass hover:transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 border border-white/10 hover:border-indigo-500/50">
                  <div 
                    className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg group-hover:shadow-indigo-500/50 group-hover:scale-110 transition-all duration-300"
                  >
                    <feature.icon size={32} className="group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    className="text-white font-semibold text-xl mb-4"
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    className="text-gray-300 leading-relaxed"
                  >
                    {feature.description}
                  </Typography>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}