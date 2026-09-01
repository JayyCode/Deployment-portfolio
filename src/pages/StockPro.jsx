import React from 'react';
import Shell from '@/components/portfolio/Shell';
import Hero from '@/components/portfolio/Hero';
import SelfAssessment from '@/components/portfolio/SelfAssessment';
import CodeReview from '@/components/portfolio/CodeReview';
import Artifact from '@/components/portfolio/Artifact';
import Enhancements from '@/components/portfolio/Enhancements';
import Outcomes from '@/components/portfolio/Outcomes';
import Downloads from '@/components/portfolio/Downloads';
import Footer from '@/components/portfolio/Footer';

export default function StockPro() {
  return (
    <Shell brand="DIRECTORY" backTo="/">
      <Hero/>
      <main>
        <SelfAssessment/>
        <CodeReview/>
        <Artifact/>
        <Enhancements/>
        <Outcomes/>
        <Downloads/>
      </main>
      <Footer/>
    </Shell>
  );
}