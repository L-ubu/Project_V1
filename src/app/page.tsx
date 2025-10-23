'use client';

import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { TechStack } from '@/components/sections/TechStack';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { PerformanceMetrics } from '@/components/sections/PerformanceMetrics';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <TechStack />
      <Projects />
      <PerformanceMetrics />
      <Contact />
    </main>
  );
}