import React from 'react';
import SectionHeader from '@/components/portfolio/SectionHeader';

const steps = [
  { n:'01', title:'Plain-text Python in IDA', body:'IDA was pointed at Debug.py, so the readable source appears in Hex View as raw data. Expected — a .py file stores source text directly, and IDA reads it as bytes rather than instructions.', note:'Takeaway: use an editor or formatter for source. IDA earns its keep on compiled targets.' },
  { n:'02', title:'Native main startup wrapper', body:"The binary's main establishes a stack frame, stores the incoming arguments, runs compiler and runtime initialization, obtains the executable image base, and pulls the raw command line through __p__acmdln.", note:'RCX, RDX and R8 confirm the x86-64 Windows calling convention; __main and __p__acmdln point to GCC/MinGW-family startup code.' },
  { n:'03', title:'Command-line parsing', body:'The raw command line is scanned one byte at a time — 0x20 checked as space, 0x22 as a quote, with a local flag toggled on quotes so spaces survive inside a quoted executable path.', note:'IsDBCSLeadByte guards multibyte characters; the parser advances past the executable name, then skips separator whitespace.' },
  { n:'04', title:'Startup info to WinMain', body:'The wrapper calls GetStartupInfoA, checks STARTF_USESHOWWINDOW, selects either the provided wShowWindow value or SW_SHOWDEFAULT, and then hands control to WinMain.', note:'This marks the transition from runtime startup code into the application\'s meaningful GUI entry point.' },
  { n:'05', title:'WinMain: window-class setup', body:'WinMain initializes a WNDCLASS/WNDCLASSW structure — lpfnWndProc, hInstance, cursor loading via LoadCursorA, and class name storage — then registers it with RegisterClassW.', note:'The repeated pxor xmm0 / movaps sequence is simply an optimized structure zero-initialization pattern.' },
  { n:'06', title:'Window creation and message loop', body:'CreateWindowExW, a null-HWND check, ShowWindow, UpdateWindow, then a standard GetMessageA loop with TranslateMessage and DispatchMessageA, returning Msg.wParam after WM_QUIT.', note:'The last of the boilerplate before challenge-specific logic can appear.' },
];

export default function CtfReTimeline() {
  return (
    <section id="analysis" className="section-shell bg-black text-white">
      <SectionHeader index="03" label="Analysis log" title="Walkthrough"/>
      <div className="mx-auto max-w-[1500px]">
        {steps.map(s => (
          <article key={s.n} className="grid grid-cols-12 gap-4 border-t border-white/20 py-8">
            <span className="col-span-2 font-mono text-xs text-orange-500 md:col-span-1">{s.n}</span>
            <h3 className="col-span-10 text-2xl font-black tracking-tight md:col-span-4">{s.title}</h3>
            <div className="col-span-12 md:col-span-7">
              <p className="leading-relaxed text-neutral-300">{s.body}</p>
              <p className="mt-3 font-mono text-xs leading-relaxed text-neutral-500">{s.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}