import React from 'react';
import { MapPin, Shield, BarChart3, FolderLock, Scale, Lock } from 'lucide-react';
import SectionHeader from '@/components/portfolio/SectionHeader';

const features = [
  { icon: MapPin, title:'Incident mapping', body:'Pin, filter, and review geotagged incidents on a dark map layer with time-frame and type controls.' },
  { icon: Shield, title:'Officer & department records', body:'Search officer profiles by name, department, badge, or unit, with duty status and documented encounters.' },
  { icon: BarChart3, title:'Encounter analytics', body:'Outcome mix, force and complaint rates, corroboration, and median stop duration.' },
  { icon: FolderLock, title:'Personal case workspace', body:'Organize your own legal matter — evidence, filings, correspondence, and timeline in one place.' },
  { icon: Scale, title:'Direct legal help', body:'Route from a documented record straight to official legal resources and representation.' },
  { icon: Lock, title:'Privacy-first by design', body:'Sensitive records stay permissioned and local-first, with explicit control over what leaves the device.' },
];

export default function SafeStopFeatures() {
  return (
    <section id="features" className="section-shell bg-[#f4f4f1]">
      <SectionHeader index="03" label="Capabilities" title="Inside the build"/>
      <div className="mx-auto grid max-w-[1500px] gap-px bg-neutral-300 md:grid-cols-3">
        {features.map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-[#f4f4f1] p-8">
            <Icon className="text-orange-600" size={22}/>
            <h3 className="mt-6 text-xl font-black tracking-tight">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}