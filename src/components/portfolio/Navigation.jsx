import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [['self-assessment','Self-Assessment'],['code-review','Code Review'],['artifacts','Artifact'],['enhancements','Enhancements'],['outcomes','Outcomes'],['downloads','Downloads']];
export default function Navigation() {
  const [open,setOpen] = useState(false);
  const go = (id) => { setOpen(false); setTimeout(() => document.getElementById(id)?.scrollIntoView({behavior:'smooth'}), 80); };
  return <>
    <a href="#top" className="fixed left-5 top-5 z-40 font-mono text-[11px] font-bold tracking-[.18em] md:left-8">RW / CS499</a>
    <button onClick={() => setOpen(true)} className="fixed right-5 top-4 z-40 flex items-center gap-2 border border-black bg-white px-4 py-2 font-mono text-xs font-bold hover:bg-orange-600 hover:text-white md:right-8" aria-label="Open index"><Menu size={15}/> INDEX</button>
    <div className={`fixed inset-0 z-50 bg-[#ff4d00] text-white transition-transform duration-500 ${open?'translate-y-0':'-translate-y-full'}`} aria-hidden={!open}>
      <button onClick={() => setOpen(false)} className="absolute right-5 top-4 flex items-center gap-2 border border-white px-4 py-2 font-mono text-xs md:right-8"><X size={15}/> CLOSE</button>
      <nav className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6" aria-label="Site index">
        <p className="mb-8 font-mono text-xs tracking-[.2em]">INDEX / 01—06</p>
        {links.map(([id,label],i) => <button key={id} onClick={() => go(id)} className="group flex border-t border-white/40 py-3 text-left text-4xl font-black tracking-[-.05em] sm:text-6xl md:text-7xl"><span className="mr-6 font-mono text-xs font-normal tracking-normal">0{i+1}</span><span className="group-hover:translate-x-4 transition-transform">{label}</span></button>)}
      </nav>
    </div>
  </>;
}