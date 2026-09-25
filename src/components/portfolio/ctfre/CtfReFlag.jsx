import React from 'react';
import { Terminal } from 'lucide-react';
import SectionHeader from '@/components/portfolio/SectionHeader';

const FLAG = 'flag{...}';

const phases = [
  { n:'01', title:'Breakpoint on the comparison', body:'With WndProc mapped, the submit handler led to the routine that compares the candidate input against a transformed reference. A breakpoint was placed on the conditional branch that decides pass or fail.' },
  { n:'02', title:'Logic capture at the break', body:'On the hit, execution froze before the branch resolved. The candidate pointer, its length, and the transform result were all live in registers — stepping over would have collapsed that state, so the register file was captured as-is.' },
  { n:'03', title:'Register enumeration', body:'The register file was walked in order, following each pointer into the buffer it referenced. The flag was reconstructed byte-by-byte from the enumerated values rather than guessed from static strings.' },
];

const registers = [
  { reg:'RAX', note:'Accumulator — read first for the transform result.' },
  { reg:'RCX', note:'First argument — candidate buffer pointer.' },
  { reg:'RDX', note:'Second argument — candidate string length.' },
  { reg:'RSI', note:'Source index walked across the candidate buffer.' },
  { reg:'RDI', note:'Destination index for the reconstructed output.' },
  { reg:'RBP', note:'Frame base — used to walk locals on the stack.' },
  { reg:'RSP', note:'Stack top — boundary of the captured frame.' },
  { reg:'R8–R11', note:'Volatile scratch — per-byte transform key.' },
  { reg:'R12–R15', note:'Callee-saved — loop counters and bounds.' },
  { reg:'RIP', note:'Instruction pointer — confirmed the exact branch site.' },
  { reg:'EFLAGS', note:'Zero flag — the pass/fail decision point.' },
];

export default function CtfReFlag() {
  return (
    <section id="flag" className="section-shell bg-[#f4f4f1]">
      <SectionHeader index="05" label="Result" title="Flag extraction"/>
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-6 md:grid-cols-3">
          {phases.map(p => (
            <div key={p.n} className="border-t border-black pt-5">
              <span className="font-mono text-xs text-orange-600">{p.n}</span>
              <h3 className="mt-2 text-xl font-black tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[.18em] text-neutral-500">Register enumeration</p>
            <div className="mt-4">
              {registers.map(r => (
                <div key={r.reg} className="grid grid-cols-12 gap-4 border-t border-neutral-300 py-3">
                  <span className="col-span-4 font-mono text-xs text-orange-600 md:col-span-3">{r.reg}</span>
                  <span className="col-span-8 text-sm text-neutral-700 md:col-span-9">{r.note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[.18em] text-neutral-500">Recovered</p>
            <div className="mt-4 bg-black p-8 text-white">
              <Terminal size={18} className="text-orange-500"/>
              <p className="mt-6 break-all font-mono text-2xl font-bold tracking-tight md:text-3xl">{FLAG}</p>
              <p className="mt-6 font-mono text-[10px] text-neutral-500">REGISTER ENUMERATION · BREAKPOINT LOGIC CAPTURE</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">The flag was recovered without patching the binary — the comparison was never forced, only observed at the moment of decision.</p>
          </div>
        </div>
      </div>
    </section>
  );
}