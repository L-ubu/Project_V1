'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Grid } from '@/components/ui/Grid';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Download
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+32 123 456 789',
    href: 'tel:+32123456789',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Antwerpen, Belgium',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/yourusername',
    label: 'Twitter',
  },
];

export function Contact() {
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
      id="contact"
      className="py-32 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #1a1a1a 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <Container>
        <div className="text-center mb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h2" 
              color="inherit" 
              gutterBottom
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Let's Work{' '}
              <span className="gradient-text">Together</span>
            </Typography>
            <Typography 
              variant="body1" 
              color="inherit" 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ opacity: 0.9 }}
            >
              Ready to bring your ideas to life with modern React development?
              Let's discuss how we can create something amazing together.
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
            <motion.div variants={itemVariants}>
              <Card 
                className="text-white glass group hover:transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <Typography 
                  variant="h4" 
                  color="inherit" 
                  gutterBottom
                  className="text-2xl font-bold text-white mb-6"
                >
                  Get In Touch
                </Typography>
                <Typography 
                  variant="body1" 
                  color="inherit" 
                  className="text-gray-300 mb-6 leading-relaxed"
                  style={{ opacity: 0.9 }}
                >
                  I'm always interested in new opportunities and exciting projects.
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </Typography>
                
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4 mb-6 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <Typography variant="body2" color="inherit" className="text-gray-400 text-sm" style={{ opacity: 0.8 }}>
                        {info.label}
                      </Typography>
                      <Typography variant="body1" color="inherit" className="text-white font-medium">
                        {info.value}
                      </Typography>
                    </div>
                  </div>
                ))}

                <div className="flex gap-4 justify-center mt-8">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 text-gray-300 border border-gray-600 hover:border-indigo-500 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card 
                className="text-white glass group hover:transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <Typography 
                  variant="h4" 
                  color="inherit" 
                  gutterBottom
                  className="text-2xl font-bold text-white mb-6"
                >
                  Download Resume
                </Typography>
                <Typography 
                  variant="body1" 
                  color="inherit" 
                  className="text-gray-300 mb-8 leading-relaxed"
                  style={{ opacity: 0.9 }}
                >
                  View my complete professional experience, skills, and achievements
                  in a downloadable PDF format.
                </Typography>
                
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={() => {
                    // In a real application, this would download the actual resume
                    console.log('Download resume');
                  }}
                  className="group/btn relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Download size={20} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span>Download Resume (PDF)</span>
                </Button>

                <Typography 
                  variant="body2" 
                  color="inherit" 
                  className="text-gray-400 text-center mt-6"
                  style={{ opacity: 0.8 }}
                >
                  Available in English and Dutch
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}