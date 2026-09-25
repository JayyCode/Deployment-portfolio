import React from 'react';
import { Image } from '@/components/ui/image';

const GRAPH = 'https://base44.app/api/apps/6a899874b9c9c8d903d80a8c/files/mp/public/6a899874b9c9c8d903d80a8c/2c3014f15_03_cmdline_parser_graph.png';

export default function CtfReHero() {
  return (
    <header id="top" className="grid-lines relative min-h-screen overflow-hidden border-b border-black/10 px-5 pb-10 pt-28 md:px-8">
      <div className="mx-auto grid min-h-[80vh] max-w-[1500px] grid-cols-12 items-end gap-4">
        <div className="col-span-12 z-10 md:col-span-8">
          <p className="mb-8 font-mono text-xs uppercase tracking-[.18em] text-neutral-600">CTF • Reverse Engineering • Windows x64</p>
          <h1 className="text-[20vw] font-black leading-[.7] tracking-[-.075em] md:text-[12rem]">CTF<br/><span className="ml-[8vw] text-orange-600">RE</span></h1>
          <p className="mt-10 max-w-xl text-xl leading-relaxed md:ml-[8vw]">Disassembling a 64-bit Windows challenge binary in IDA Pro and Ghidra — mapping the startup path and hunting the routine that holds the flag.</p>
          <div className="mt-8 flex flex-wrap gap-3 md:ml-[8vw]">
            <a className="action-btn" href="#analysis">Analysis log ↓</a>
            <a className="action-btn inverse" href="#pivots">Next pivots ↗</a>
          </div>
        </div>
        <div className="col-span-12 relative mt-10 h-72 overflow-hidden border border-neutral-300 bg-neutral-100 md:col-span-4 md:mb-12 md:h-[52vh]">
          <Image src={GRAPH} fittingType="fit" alt="IDA Pro control-flow graph of the Windows command-line parser" className="h-full w-full"/>
          <span className="absolute bottom-3 left-3 bg-white px-2 py-1 font-mono text-[10px]">IDA / CMDLINE CFG</span>
        </div>
      </div>
    </header>
  );
}