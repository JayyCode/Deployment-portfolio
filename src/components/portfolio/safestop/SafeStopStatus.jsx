import React from 'react';
import { FileText, Github, Play } from 'lucide-react';
import SectionHeader from '@/components/portfolio/SectionHeader';

const pending = [
  { icon: FileText, label:'Technical documentation', note:'Pending' },
  { icon: Github, label:'Source repository', note:'Pending' },
  { icon: Play, label:'Demo walkthrough', note:'Pending' },
];

export default function SafeStopStatus() {
  return (
    <section id="status" className="section-shell">
      <SectionHeader index="04" label="Status" title="Alpha build"/>
      <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <span className="inline-flex items-center gap-2 border border-orange-600 px-3 py-1 font-mono text-[10px] uppercase tracking-[.18em] text-orange-600">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600"/> Alpha
          </span>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-neutral-700">SafeStop is in active alpha. The interfaces above are working builds — documentation, source, and demo links are on the way.</p>
        </div>
        <div className="md:col-span-6">
          {pending.map(({ icon: Icon, label, note }) => (
            <div key={label} className="flex items-center gap-4 border-t border-neutral-300 py-4 opacity-60">
              <Icon size={16} className="text-neutral-500"/>
              <span className="flex-1 text-neutral-700">{label}</span>
              <span className="font-mono text-[10px] text-neutral-400">{note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}