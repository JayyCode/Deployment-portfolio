import React from 'react';
import { Image } from '@/components/ui/image';

export default function HomeHero() {
  return (
    <header id="top" className="grid-lines relative min-h-screen overflow-hidden border-b border-black/10 px-5 pb-10 pt-28 md:px-8">
      <div className="mx-auto grid min-h-[80vh] max-w-[1500px] grid-cols-12 items-end gap-4">
        <div className="col-span-12 z-10 md:col-span-8">
          <p className="mb-8 font-mono text-xs uppercase tracking-[.18em] text-neutral-600">Computer Scientist • Software Engineering & Systems</p>
          <h1 className="text-[20vw] font-black leading-[.7] tracking-[-.075em] md:text-[12rem]">REGINALD<br/><span className="ml-[8vw] text-orange-600">WILLIAMS</span></h1>
          <p className="mt-10 max-w-xl text-xl leading-relaxed md:ml-[8vw]">A working directory of engineering projects, technical writing, and professional history — built for review.</p>
          <div className="mt-8 flex flex-wrap gap-3 md:ml-[8vw]">
            <a className="action-btn" href="#projects">View projects ↓</a>
            <a className="action-btn inverse" href="#resume">Résumé ↗</a>
          </div>
        </div>
        <div className="col-span-12 relative mt-10 h-64 overflow-hidden md:col-span-4 md:mb-12 md:h-[52vh]">
          <Image src="https://media.base44.com/images/public/6a899874b9c9c8d903d80a8c/0c461dd1e_generated_eb3512a0.png" alt="Abstract glass data structure connected with orange lines" className="h-full w-full grayscale transition duration-700 hover:scale-105 hover:grayscale-0"/>
          <span className="absolute bottom-3 left-3 bg-white px-2 py-1 font-mono text-[10px]">DIRECTORY / 03 SECTIONS</span>
        </div>
      </div>
    </header>
  );
}