'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { Grid } from '@/components/ui/Grid';
import { 
  Zap, 
  Shield, 
  Target, 
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';

const metrics = [
  {
    icon: Zap,
    value: '< 100ms',
    title: 'First Contentful Paint',
    description: 'Optimized loading performance with code splitting and lazy loading',
  },
  {
    icon: Target,
    value: '98%',
    title: 'Lighthouse Score',
    description: 'Consistent high performance across all Core Web Vitals metrics',
  },
  {
    icon: Shield,
    value: 'A+',
    title: 'Security Rating',
    description: 'Enterprise-grade security with comprehensive input validation',
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    title: 'Uptime',
    description: 'Reliable deployment with automated monitoring and error tracking',
  },
  {
    icon: Clock,
    value: '< 2s',
    title: 'Build Time',
    description: 'Fast CI/CD pipeline with optimized build processes and caching',
  },
  {
    icon: CheckCircle,
    value: '100%',
    title: 'Test Coverage',
    description: 'Comprehensive testing strategy with unit, integration, and E2E tests',
  },
];

export function PerformanceMetrics() {
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
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(99,102,241,0.1)_60deg,transparent_120deg)] animate-spin"></div>
      
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
              Performance &{' '}
              <span className="gradient-text">Quality</span>
              <br />
              <span className="text-4xl md:text-5xl">Metrics</span>
            </Typography>
            <Typography 
              variant="body1" 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Demonstrating commitment to performance, security, and code quality
              through measurable metrics and best practices.
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
            {metrics.map((metric, index) => (
              <motion.div key={metric.title} variants={itemVariants}>
                <Card className="group text-center h-full glass hover:transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 border border-white/10 hover:border-indigo-500/50">
                  <div 
                    className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg group-hover:shadow-indigo-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  >
                    <metric.icon size={28} />
                  </div>
                  <Typography 
                    variant="h3" 
                    gutterBottom
                    className="text-4xl font-bold gradient-text mb-4"
                  >
                    {metric.value}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    className="text-white font-semibold text-lg mb-3"
                  >
                    {metric.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    className="text-gray-300 leading-relaxed"
                  >
                    {metric.description}
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