import React from 'react';
import SectionHeader from '@/components/portfolio/SectionHeader';

const pillars = [
  { n:'01', title:'Document', body:'Capture interactions as structured, timestamped records instead of scattered notes and memory.' },
  { n:'02', title:'Organize', body:'Keep the evidence, filings, and timeline of your own legal matter in one private workspace.' },
  { n:'03', title:'Connect', body:'Reach official legal resources and representation directly from the record you built.' },
];

export default function SafeStopOverview() {
  return (
    <section id="overview" className="section-shell">
      <SectionHeader index="01" label="Overview" title="What it does"/>
      <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12">
        <p className="text-2xl leading-snug text-neutral-800 md:col-span-5">SafeStop is an alpha-stage civic-tech platform for documenting police interactions, managing a personal legal case, and reaching official legal help — built so the record exists before anyone needs it.</p>
        <div className="grid gap-6 md:col-span-7">
          {pillars.map(p => (
            <div key={p.n} className="grid grid-cols-12 gap-4 border-t border-black pt-5">
              <span className="col-span-2 font-mono text-xs text-orange-600 md:col-span-1">{p.n}</span>
              <h3 className="col-span-10 text-xl font-black tracking-tight md:col-span-3">{p.title}</h3>
              <p className="col-span-12 text-neutral-600 md:col-span-8">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}