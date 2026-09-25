import React from 'react';
import SectionHeader from '@/components/portfolio/SectionHeader';

const pivots = [
  'Follow the lpfnWndProc function pointer and identify message cases — WM_COMMAND, WM_CREATE, WM_PAINT, WM_KEYDOWN, WM_DESTROY.',
  'Inspect Strings for flag-like text, filenames, prompts, error messages, registry paths, URLs, and encoded blobs.',
  'Review Imports for APIs that reveal behavior: file I/O, crypto, registry, networking, process creation, anti-debugging, resource loading.',
  'Check cross-references from unusual strings and imported APIs into custom functions.',
  'Inspect the .rsrc section for dialogs, embedded files, icons, manifests, or hidden challenge data.',
  'Rename recovered functions and variables in IDA as their purpose becomes clear.',
  'Decompile custom functions with F5 where available — then verify important conditions against assembly.',
];

export default function CtfRePivots() {
  return (
    <section id="pivots" className="section-shell">
      <SectionHeader index="04" label="Next" title="Open pivots"/>
      <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {pivots.map((p, i) => (
            <div key={i} className="flex gap-5 border-t border-neutral-300 py-4">
              <span className="font-mono text-xs text-orange-600">0{i + 1}</span>
              <p className="text-neutral-700">{p}</p>
            </div>
          ))}
        </div>
        <div className="md:col-span-5">
          <div className="border border-black p-6">
            <p className="font-mono text-xs uppercase tracking-[.18em] text-orange-600">Working conclusion</p>
            <p className="mt-4 leading-relaxed text-neutral-700">The inspected native code is mostly standard Windows startup and GUI initialization. No flag-checking, decoding, credential logic, or challenge-specific algorithm has been demonstrated yet — the likely next breakthrough sits inside WndProc or the functions it calls.</p>
            <p className="mt-6 font-mono text-xs text-neutral-500">STATUS — STARTUP PATH MAPPED</p>
          </div>
        </div>
      </div>
    </section>
  );
}