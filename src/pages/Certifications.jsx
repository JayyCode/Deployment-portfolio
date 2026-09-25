import React from 'react';
import Shell from '@/components/portfolio/Shell';
import CertWallHero from '@/components/portfolio/certifications/CertWallHero';
import CertWallGrid from '@/components/portfolio/certifications/CertWallGrid';
import Footer from '@/components/portfolio/Footer';

export default function Certifications() {
  return (
    <Shell brand="DIRECTORY" backTo="/">
      <CertWallHero/>
      <main>
        <CertWallGrid/>
      </main>
      <Footer/>
    </Shell>
  );
}