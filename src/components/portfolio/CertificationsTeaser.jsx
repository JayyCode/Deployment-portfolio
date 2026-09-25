import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/portfolio/SectionHeader';

export default function CertificationsTeaser() {
  return (
    <section id="certifications" className="section-shell bg-[#f4f4f1]">
      <SectionHeader index="04" label="Credentials" title="Cert Wall"/>
      <Link to="/certifications" className="group flex items-center justify-between gap-4 border-t border-black py-8 hover:bg-white">
        <p className="text-neutral-700">Degree and industry certifications, verified and issued directly by their awarding bodies.</p>
        <span className="action-btn shrink-0">View Certifications <ArrowUpRight size={14} className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/></span>
      </Link>
    </section>
  );
}