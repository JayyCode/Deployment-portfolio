import React from 'react';
import SectionHeader from '@/components/portfolio/SectionHeader';

export default function CertWallHero() {
  return (
    <header className="section-shell !pb-0 pt-32 md:pt-44">
      <SectionHeader index="01" label="Credentials" title="Cert Wall"/>
      <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">Degrees and industry certifications, verified and issued directly by their awarding bodies.</p>
    </header>
  );
}