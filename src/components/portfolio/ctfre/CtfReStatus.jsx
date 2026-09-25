import React from 'react';
import { FileArchive, FileText, Github } from 'lucide-react';
import SectionHeader from '@/components/portfolio/SectionHeader';

const items = [
  { icon: FileArchive, label:'CTF RE project bundle', note:'Attached' },
  { icon: FileText, label:'Full technical write-up', note:'In progress' },
  { icon: Github, label:'Source & artifacts repository', note:'Pending' },
];

export default function CtfReStatus() {
  return (
    <section id="status" className="section-shell bg-[#f4f4f1]">
      <SectionHeader index="05" label="Status" title="In progress"/>
      <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <span className="inline-flex items-center gap-2 border border-orange-600 px-3 py-1 font-mono text-[10px] uppercase tracking-[.18em] text-orange-600">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600"/> Active
          </span>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-neutral-700">This is a live reverse-engineering engagement. The startup path is mapped; the write-up and repository links will land here as the WndProc analysis completes.</p>
        </div>
        <div className="md:col-span-6">
          {items.map(({ icon: Icon, label, note }) => (
            <div key={label} className="flex items-center gap-4 border-t border-neutral-300 py-4">
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