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
    <nav aria-label="Jump to a section" className="flex h-full flex-col border border-black bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-black px-4 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[.18em]">Index</span>
        <span className="font-mono text-[10px] text-neutral-500">04 SECTIONS</span>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        {SECTIONS.map(s => (
          <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-3 border-b border-black/10 px-4 py-3 transition-colors last:border-b-0 hover:bg-orange-600 hover:text-white">
            <span className="font-mono text-[10px] text-orange-600 group-hover:text-white">{s.n}</span>
            <span className="flex-1">
              <span className="block text-lg font-black leading-tight tracking-[-.03em] md:text-xl">{s.label}</span>
              <span className="block font-mono text-[10px] text-neutral-500 group-hover:text-white/80">{s.note}</span>
            </span>
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-1"/>
          </a>
        ))}
      </div>
    </nav>
  );
}