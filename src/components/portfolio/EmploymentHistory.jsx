import React from 'react';
import SectionHeader from '@/components/portfolio/SectionHeader';

const rows = ['Role • Company','Role • Company','Role • Company'];

export default function EmploymentHistory() {
  return (
    <section id="employment" className="section-shell bg-black text-white">
      <SectionHeader index="03" label="History" title="Employment"/>
      <div className="ml-auto max-w-5xl">
        {rows.map((r,i) => (
          <div key={i} className="grid grid-cols-12 gap-4 border-t border-white/25 py-8 opacity-60">
            <span className="col-span-2 font-mono text-xs text-orange-500 md:col-span-1">0{i+1}</span>
            <h3 className="col-span-10 text-2xl font-bold tracking-tight text-neutral-400 md:col-span-5">{r}</h3>
            <p className="col-span-12 font-mono text-xs text-neutral-500 md:col-span-4">DATES — PENDING</p>
            <p className="col-span-12 text-neutral-500 md:col-span-2 md:text-right">Details pending</p>
          </div>
        ))}
      </div>
    </section>
  );
}