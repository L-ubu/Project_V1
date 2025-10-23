'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';

export function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #1a1a1a 100%)',
        color: 'white'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <Container>
        <div 
          ref={ref}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <Typography 
                variant="h1" 
                color="inherit" 
                gutterBottom
                className="text-6xl md:text-7xl lg:text-8xl font-bold"
              >
                <span className="gradient-text">React Developer</span>
                <br />
                <span className="text-white">Showcase</span>
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <Typography 
                variant="h3" 
                color="inherit" 
                className="text-xl md:text-2xl lg:text-3xl font-light"
                style={{ opacity: 0.9 }}
              >
                Modern Frontend Development with{' '}
                <span className="gradient-text font-semibold">TypeScript</span>,{' '}
                <span className="gradient-text font-semibold">Next.js</span> & More
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <Typography 
                variant="body1" 
                color="inherit" 
                style={{ 
                  opacity: 0.8, 
                  maxWidth: '600px', 
                  margin: '0 auto' 
                }}
              >
                Demonstrating advanced React patterns, state management, testing strategies,
                and modern development practices for enterprise applications.
              </Typography>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex gap-6 justify-center flex-wrap mt-12"
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover-glow group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Explore Features</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button
                variant="outlined"
                size="large"
                color="inherit"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover-glow group relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl backdrop-blur-sm hover:border-white/50 hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Get in Touch</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}