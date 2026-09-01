import React from 'react';
import { Download } from 'lucide-react';
import SectionHeader from '@/components/portfolio/SectionHeader';

const fields = ['Education','Technical skills','Certifications','Contact'];

export default function ResumePanel() {
  return (
    <section id="resume" className="section-shell">
      <SectionHeader index="02" label="Document" title="Résumé"/>
      <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="font-mono text-xs text-orange-600">PENDING UPLOAD</p>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-neutral-700">Full résumé documentation is pending. Once provided, this section will present education, skills, certifications, and a downloadable PDF.</p>
          <div className="mt-10 space-y-1">
            {fields.map((h,i) => (
              <div key={h} className="flex items-center gap-6 border-t border-neutral-300 py-4 opacity-60">
                <span className="font-mono text-xs text-neutral-500">0{i+1}</span>
                <span className="flex-1 text-neutral-600">{h}</span>
                <span className="font-mono text-[10px] text-neutral-400">PENDING</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-4">
          <button disabled className="action-btn w-full opacity-40"><Download size={16}/> Download PDF</button>
          <p className="mt-3 font-mono text-[10px] text-neutral-400">Link pending</p>
        </div>
      </div>
    </section>
  );
}