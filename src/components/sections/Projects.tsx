'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { Grid } from '@/components/ui/Grid';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
    imageUrl: '/api/placeholder/400/200',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Real-time Chat Application',
    description: 'Modern chat application with real-time messaging, file sharing, and video calls. Built with React, Socket.io, and WebRTC.',
    imageUrl: '/api/placeholder/400/200',
    technologies: ['React', 'Socket.io', 'WebRTC', 'Express', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Project Management Dashboard',
    description: 'Comprehensive project management tool with task tracking, team collaboration, and analytics. Features drag-and-drop interface and real-time updates.',
    imageUrl: '/api/placeholder/400/200',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for data analysis and visualization. Supports multiple chart types, real-time data updates, and custom filtering.',
    imageUrl: '/api/placeholder/400/200',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Mobile-First PWA',
    description: 'Progressive Web Application with offline capabilities, push notifications, and native-like performance. Optimized for mobile devices.',
    imageUrl: '/api/placeholder/400/200',
    technologies: ['React', 'PWA', 'Service Workers', 'IndexedDB', 'Web Push'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Microservices Architecture',
    description: 'Scalable microservices architecture with API gateway, service discovery, and container orchestration. Demonstrates advanced backend patterns.',
    imageUrl: '/api/placeholder/400/200',
    technologies: ['Docker', 'Kubernetes', 'Node.js', 'Redis', 'Nginx'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

export function Projects() {
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
      className="py-32 relative"
      style={{ backgroundColor: '#111111' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.1),transparent_50%)]"></div>
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
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </Typography>
            <Typography 
              variant="body1" 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              A showcase of complex, production-ready applications demonstrating
              full-stack development capabilities and modern architecture patterns.
            </Typography>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Grid columns={{ xs: 1, md: 2, lg: 3 }} gap="lg">
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="group h-full flex flex-col glass hover:transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 border border-white/10 hover:border-indigo-500/50 overflow-hidden">
                  <div 
                    className="w-full h-48 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 relative overflow-hidden group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  
                  <div className="flex-1 flex flex-col p-6 relative z-10">
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      className="text-white font-bold text-xl mb-3"
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      className="text-gray-300 flex-1 mb-6 leading-relaxed"
                    >
                      {project.description}
                    </Typography>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          size="sm"
                          className="bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 border border-gray-500 hover:border-indigo-500 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="flex items-center gap-2 border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-white hover:bg-indigo-600/20 transition-all duration-300"
                      >
                        <Github size={16} />
                        Code
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}