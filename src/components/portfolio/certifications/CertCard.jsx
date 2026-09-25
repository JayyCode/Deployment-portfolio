import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';

export default function CertCard({ n, title, issuer, date, certNo, verifyUrl, fileUrl }) {
  return (
    <div className="flex flex-col justify-between border-t border-black py-8">
      <div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-orange-600">{n}</span>
          <span className="border border-black px-2 py-0.5 font-mono text-[10px]">VERIFIED</span>
        </div>
        <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-.04em] md:text-4xl">{title}</h3>
        <p className="mt-2 font-mono text-xs uppercase tracking-[.15em] text-neutral-500">{issuer}</p>
        <div className="mt-4 space-y-1 font-mono text-xs text-neutral-600">
          <p>ISSUED — {date}</p>
          {certNo && <p>CERT NO — {certNo}</p>}
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        {verifyUrl && (
          <a href={verifyUrl} target="_blank" rel="noopener noreferrer" className="text-link inline-flex items-center gap-1">Verify <ArrowUpRight size={12}/></a>
        )}
        <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-link inline-flex items-center gap-1">PDF <Download size={12}/></a>
      </div>
    </div>
  );
}