import React from 'react';

export default function Footer({ headline='ENGINEER WITH INTENT.', links=[['Code review ↗','https://youtu.be/X7DWghwCRyA'],['Submission manifest ↑','#downloads']], meta=['REGINALD WILLIAMS','COMPUTER SCIENCE'], copyright=['© 2026','CS 499 EPORTFOLIO'] }) {
  return (
    <footer className="bg-[#ff4d00] px-5 py-24 text-white md:px-8 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-xs tracking-[.2em]">CLOSING STATEMENT / 2026</p>
        <h2 className="my-12 max-w-6xl text-6xl font-black leading-[.85] tracking-[-.06em] md:text-[9rem]">{headline}</h2>
        <div className="grid gap-8 border-t border-white/50 pt-6 font-mono text-xs md:grid-cols-3">
          <p>{meta[0]}<br/>{meta[1]}</p>
          <div className="flex flex-col gap-2">
            {links.map(([label,href],i) => (
              <a key={i} className="hover:underline" href={href} target={href.startsWith('http')?'_blank':undefined} rel={href.startsWith('http')?'noopener':undefined}>{label}</a>
            ))}
          </div>
          <p className="md:text-right">{copyright[0]}<br/>{copyright[1]}</p>
        </div>
      </div>
    </footer>
  );
}