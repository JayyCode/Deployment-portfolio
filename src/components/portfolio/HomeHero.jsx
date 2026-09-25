import React from 'react';
import GridWave from '@/components/portfolio/GridWave';
import HomeAnchorIndex from '@/components/portfolio/HomeAnchorIndex';

export default function HomeHero() {
  return (
    <header id="top" className="grid-lines relative min-h-screen overflow-hidden border-b border-black/10 px-5 pb-10 pt-28 md:px-8">
      <GridWave className="pointer-events-none absolute inset-0 z-0 h-full w-full"/>
      <div className="relative mx-auto grid min-h-[80vh] max-w-[1500px] grid-cols-12 items-end gap-4 md:grid-rows-[auto_1fr]">
        <div className="col-span-12 z-10 md:col-span-10 md:row-start-2">
          <p className="mb-8 font-mono text-xs uppercase tracking-[.18em] text-neutral-600">Computer Scientist • Software Engineering & Systems</p>
          <h1 className="text-[clamp(2.75rem,12.5vw,10.5rem)] font-black leading-[.72] tracking-[-.07em]">REGINALD<br/><span className="ml-[8vw] text-orange-600">WILLIAMS</span></h1>
          <p className="mt-10 max-w-xl text-xl leading-relaxed md:ml-[8vw]">A working directory of engineering projects, technical writing, and professional history — built for review.</p>
          <div className="mt-8 flex flex-wrap gap-3 md:ml-[8vw]">
            <a className="action-btn" href="#projects">View projects ↓</a>
            <a className="action-btn inverse" href="#resume">Résumé ↗</a>
          </div>
        </div>
        <div className="z-10 col-span-12 mt-10 md:col-span-4 md:col-start-9 md:row-start-1 md:mt-0 md:self-start">
          <HomeAnchorIndex/>
        </div>
      </div>
    </header>
  );
}