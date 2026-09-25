import React from 'react';
import { ArrowDown } from 'lucide-react';

const SECTIONS = [
  { id: 'projects', n: '01', label: 'Projects', note: 'Directory of engineering work' },
  { id: 'resume', n: '02', label: 'Résumé', note: 'Skills, education, contact' },
  { id: 'employment', n: '03', label: 'Employment', note: 'Professional history' },
  { id: 'certifications', n: '04', label: 'Certifications', note: 'Credential wall' }
];

export default function HomeAnchorIndex() {
  return (
    <nav aria-label="Jump to a section" className="border border-black bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-black px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[.18em]">Index</span>
        <span className="font-mono text-[10px] text-neutral-500">04 SECTIONS</span>
      </div>
      {SECTIONS.map(s => (
        <a key={s.id} href={`#${s.id}`} className="group flex items-start gap-3 border-b border-black/10 px-4 py-2.5 transition-colors last:border-b-0 hover:bg-orange-600 hover:text-white">
          <span className="mt-[3px] font-mono text-[10px] text-orange-600 group-hover:text-white">{s.n}</span>
          <span className="flex-1">
            <span className="block text-base font-black leading-tight tracking-[-.03em] md:text-lg">{s.label}</span>
            <span className="block font-mono text-[10px] text-neutral-500 group-hover:text-white/80">{s.note}</span>
          </span>
          <ArrowDown size={14} className="mt-[3px] shrink-0 transition-transform group-hover:translate-y-1"/>
        </a>
      ))}
    </nav>
  );
}