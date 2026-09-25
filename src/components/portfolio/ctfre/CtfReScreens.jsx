import React from 'react';
import { Image } from '@/components/ui/image';
import SectionHeader from '@/components/portfolio/SectionHeader';

const BASE = 'https://base44.app/api/apps/6a899874b9c9c8d903d80a8c/files/mp/public/6a899874b9c9c8d903d80a8c/';

const shots = [
  { n:'01', file:'7f7776929_01_IDA_Debug_py_raw_view.png', title:'Debug.py raw view', body:'IDA opened on Debug.py — source visible as raw bytes and data.' },
  { n:'02', file:'93501c9eb_02_main_entry_prologue.png', title:'main entry prologue', body:'Native x64 main() startup wrapper and stack frame.' },
  { n:'03', file:'2c3014f15_03_cmdline_parser_graph.png', title:'Command-line parser', body:'Raw Windows command-line parsing logic as a control-flow graph.' },
  { n:'04', file:'8cbef38d3_04_cmdline_startup_to_WinMain.png', title:'Handoff to WinMain', body:'GetStartupInfoA and the transfer into WinMain.' },
  { n:'05', file:'387095492_05_WinMain_window_setup.png', title:'Window class setup', body:'WNDCLASS setup and RegisterClassW registration.' },
  { n:'06', file:'0f6e7496e_06_WinMain_message_loop.png', title:'Message loop', body:'CreateWindowExW, ShowWindow, UpdateWindow, GetMessageA loop.' },
];

export default function CtfReScreens() {
  return (
    <section id="evidence" className="section-shell bg-[#f4f4f1]">
      <SectionHeader index="02" label="Evidence" title="IDA captures"/>
      <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-3">
        {shots.map(s => (
          <figure key={s.n}>
            <div className="aspect-[4/3] overflow-hidden border border-neutral-300 bg-neutral-100">
              <Image src={BASE + s.file} fittingType="fit" alt={`${s.title} — IDA Pro screenshot`} className="h-full w-full"/>
            </div>
            <figcaption className="mt-3">
              <p className="font-mono text-[10px] text-orange-600">{s.n} / IDA</p>
              <h3 className="mt-1 text-lg font-black tracking-tight">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">{s.body}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}