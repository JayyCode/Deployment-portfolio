import React from 'react';
import { Image } from '@/components/ui/image';
import SectionHeader from '@/components/portfolio/SectionHeader';

const screens = [
  { n:'01', src:'https://media.base44.com/images/public/6a899874b9c9c8d903d80a8c/7c2bfea23_3407.png', title:'Incident map', body:'Geotagged incidents on a dark Mapbox layer with time-frame and incident-type filters.' },
  { n:'02', src:'https://media.base44.com/images/public/6a899874b9c9c8d903d80a8c/1b9044ab8_3408.png', title:'Officer directory', body:'Searchable officer and department records with badge, unit, duty status, and encounter counts.' },
  { n:'03', src:'https://media.base44.com/images/public/6a899874b9c9c8d903d80a8c/ea0c59dc0_3409.png', title:'Encounter analytics', body:'Outcome mix, force and complaint rates, and corroboration metrics — sample size always shown.' },
];

export default function SafeStopScreens() {
  return (
    <section id="screens" className="section-shell bg-black text-white">
      <SectionHeader index="02" label="Alpha UI" title="Screens"/>
      <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-3">
        {screens.map(s => (
          <figure key={s.n}>
            <div className="aspect-[9/19] overflow-hidden border border-white/15 bg-[#0d1317]">
              <Image src={s.src} fittingType="fit" alt={`${s.title} — SafeStop alpha screen`} className="h-full w-full"/>
            </div>
            <figcaption className="mt-4">
              <p className="font-mono text-[10px] text-orange-500">{s.n} / ALPHA</p>
              <h3 className="mt-1 text-xl font-black tracking-tight">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-400">{s.body}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}