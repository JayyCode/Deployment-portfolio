import React from 'react';
import { Image } from '@/components/ui/image';

export default function SafeStopHero() {
  return (
    <header id="top" className="grid-lines relative min-h-screen overflow-hidden border-b border-black/10 px-5 pb-10 pt-28 md:px-8">
      <div className="mx-auto grid min-h-[80vh] max-w-[1500px] grid-cols-12 items-end gap-4">
        <div className="col-span-12 z-10 md:col-span-8">
          <p className="mb-8 font-mono text-xs uppercase tracking-[.18em] text-neutral-600">Alpha build • Civic-tech mobile application</p>
          <h1 className="text-[20vw] font-black leading-[.7] tracking-[-.075em] md:text-[12rem]">SAFE<br/><span className="ml-[8vw] text-orange-600">STOP</span></h1>
          <p className="mt-10 max-w-xl text-xl leading-relaxed md:ml-[8vw]">Document police interactions, manage your own legal case, and reach official legal help — from a single record you control.</p>
          <div className="mt-8 flex flex-wrap gap-3 md:ml-[8vw]">
            <a className="action-btn" href="#screens">Explore the build ↓</a>
            <a className="action-btn inverse" href="#status">Build status ↗</a>
          </div>
        </div>
        <div className="col-span-12 relative mt-10 h-72 overflow-hidden border border-neutral-300 bg-[#0d1317] md:col-span-4 md:mb-12 md:h-[52vh]">
          <Image src="https://media.base44.com/images/public/6a899874b9c9c8d903d80a8c/7c2bfea23_3407.png" fittingType="fit" alt="SafeStop incident map screen" className="h-full w-full"/>
          <span className="absolute bottom-3 left-3 bg-white px-2 py-1 font-mono text-[10px]">ALPHA / MAP VIEW</span>
        </div>
      </div>
    </header>
  );
}