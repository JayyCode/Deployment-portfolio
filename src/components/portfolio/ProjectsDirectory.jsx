import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/portfolio/SectionHeader';

const projects = [
  { n:'01', title:'StockPro', desc:'Android inventory application enhanced across software engineering, algorithms, and databases for the CS 499 capstone.', tags:'Java · Android · SQLite · Algorithms', status:'LIVE', to:'/stockpro' },
  { n:'02', title:'SafeStop', desc:'Alpha civic-tech app for documenting police interactions, managing personal legal cases, and reaching official legal help.', tags:'Mapbox · Mobile · Civic Tech', status:'ALPHA', to:'/safestop' },
  { n:'03', title:'Project Three', desc:'Documentation pending. Link and materials to follow.', tags:'—', status:'PENDING', to:null }
];

export default function ProjectsDirectory() {
  return (
    <section id="projects" className="section-shell bg-[#f4f4f1]">
      <SectionHeader index="01" label="Directory" title="Projects"/>
      <div className="mx-auto max-w-[1500px]">
        {projects.map(p => p.to ? (
          <Link key={p.n} to={p.to} className="group grid grid-cols-12 items-center gap-4 border-t border-black py-8 hover:bg-white">
            <span className="col-span-2 font-mono text-xs text-orange-600 md:col-span-1">{p.n}</span>
            <div className="col-span-10 md:col-span-4">
              <h3 className="flex items-center gap-3 text-3xl font-black tracking-[-.04em] md:text-5xl">{p.title}<span className="border border-black px-2 py-0.5 font-mono text-[10px] font-normal">{p.status}</span></h3>
            </div>
            <p className="col-span-12 text-neutral-700 md:col-span-5">{p.desc}</p>
            <span className="col-span-12 flex items-center justify-between gap-3 md:col-span-2 md:justify-end"><span className="font-mono text-xs">{p.tags}</span><ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/></span>
          </Link>
        ) : (
          <div key={p.n} className="grid grid-cols-12 items-center gap-4 border-t border-neutral-300 py-8 opacity-50">
            <span className="col-span-2 font-mono text-xs text-neutral-500 md:col-span-1">{p.n}</span>
            <div className="col-span-10 md:col-span-4">
              <h3 className="flex items-center gap-3 text-3xl font-black tracking-[-.04em] text-neutral-500 md:text-5xl">{p.title}<span className="border border-neutral-400 px-2 py-0.5 font-mono text-[10px] font-normal">{p.status}</span></h3>
            </div>
            <p className="col-span-12 text-neutral-500 md:col-span-5">{p.desc}</p>
            <span className="col-span-12 font-mono text-xs md:col-span-2 md:text-right">{p.tags}</span>
          </div>
        ))}
      </div>
    </section>
  );
}