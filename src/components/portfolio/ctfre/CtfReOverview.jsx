import React from 'react';
import SectionHeader from '@/components/portfolio/SectionHeader';

const contexts = [
  { n:'01', title:'Debug.py', tag:'PLAIN-TEXT PYTHON', body:'IDA was pointed at a .py file, so the readable source shows up in Hex View as raw data. There is no meaningful native control-flow graph — source belongs in an editor or formatter, not a disassembler.' },
  { n:'02', title:'Native x64 binary', tag:'WINDOWS PE', body:'A genuine x86-64 executable with real disassembly and control flow. The visible startup sequence matches a MinGW/GCC-style runtime wrapper that eventually transfers control to WinMain.' },
];

export default function CtfReOverview() {
  return (
    <section id="overview" className="section-shell">
      <SectionHeader index="01" label="Scope" title="Two targets"/>
      <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12">
        <p className="text-2xl leading-snug text-neutral-800 md:col-span-5">The session set out to recover challenge behavior from a captured artifact set — disassembling and decompiling in IDA Pro and Ghidra to separate runtime scaffolding from the code that actually matters.</p>
        <div className="grid gap-6 md:col-span-7">
          {contexts.map(c => (
            <div key={c.n} className="border-t border-black pt-5">
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-mono text-xs text-orange-600">{c.n}</span>
                <h3 className="text-xl font-black tracking-tight">{c.title}</h3>
                <span className="border border-neutral-400 px-2 py-0.5 font-mono text-[10px] text-neutral-500">{c.tag}</span>
              </div>
              <p className="mt-3 text-neutral-600">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}