import React from 'react';
export default function SectionHeader({index,label,title}) {
  return <div className="mb-14 grid grid-cols-12 gap-4 border-t border-black pt-4"><p className="col-span-3 font-mono text-xs text-neutral-500">/{index}</p><div className="col-span-9"><p className="mb-3 font-mono text-xs uppercase tracking-[.18em] text-orange-600">{label}</p><h2 className="text-5xl font-black leading-[.9] tracking-[-.055em] md:text-8xl">{title}</h2></div></div>;
}