import React, { useState } from 'react';
import SectionHeader from '@/components/portfolio/SectionHeader';
import { ChevronDown } from 'lucide-react';

const jobs = [
  {
    n: '01',
    dates: 'JUN 2024 – PRESENT',
    title: 'Senior Systems Administrator',
    company: 'GS Construction',
    location: 'Norcross, GA',
    bullets: [
      'Administer ERP, HRIS, and business-critical platforms by troubleshooting application issues, managing user access, resolving workflow failures, and coordinating vendor or internal remediation.',
      'Provide Tier I–III technical support across endpoints, user accounts, cloud services, local infrastructure, hardware, software, printers, scanners, network access, and business application environments.',
      'Manage local infrastructure and cloud-based systems, including directory administration, account provisioning, permissions, endpoint configuration, security maintenance, and operational support.',
      'Perform IDS monitoring, security triage, and incident review to identify suspicious activity, validate alerts, document findings, and support remediation of potential cyber threats.',
      'Develop automation scripts, macros, and workflow tools to reduce repetitive manual processes, improve data handling, and streamline IT, ERP, and administrative operations.',
      'Build and maintain API integrations, webhooks, and platform orchestration workflows to connect internal systems, automate data transfer, and improve operational efficiency.',
      'Evaluate and integrate AI-assisted tools into internal workflows to improve automation, data processing, documentation, troubleshooting, and technical support efficiency.',
    ],
  },
  {
    n: '02',
    dates: 'DEC 2023 – FEB 2024',
    title: 'SaaS Engineer',
    company: 'AquaFinder',
    location: 'Atlanta, GA',
    bullets: [
      'Built Python automation scripts for web crawling, data retrieval, ETL processing, data validation, and MySQL database population.',
      'Designed and maintained a MySQL relational database with 15,000+ records, automating ingestion, deduplication, normalization, and quality-control workflows.',
      'Integrated backend API services with front-end web applications to support data access, application features, and automated request handling.',
      'Assisted with AWS and Azure deployment workflows, including server configuration, application hosting, Git-based collaboration, and deployment troubleshooting.',
      'Developed modular Python libraries and reusable application components to improve code maintainability, scalability, and development efficiency.',
    ],
  },
  {
    n: '03',
    dates: 'SEP 2022 – MAY 2023',
    title: 'Jr. Penetration Tester',
    company: 'Georgia State University',
    location: 'Atlanta, GA',
    bullets: [
      'Performed authorized penetration testing, vulnerability assessment, and exploit validation across simulated enterprise systems, web applications, exposed services, and Linux-based environments.',
      'Tested and documented vulnerabilities involving SQL injection, cross-site scripting, insecure authentication, remote code execution concepts, buffer overflow concepts, privilege escalation, and weak SSH exposure.',
      'Conducted network traffic monitoring, service enumeration, and attack-surface analysis to identify misconfigured ports, suspicious activity, insecure services, and potential intrusion paths.',
      'Applied reverse engineering and binary analysis concepts using IDA-style tooling to inspect application behavior and support memory-safety vulnerability research.',
      'Created technical reports for senior cybersecurity personnel detailing findings, risk impact, reproduction summaries, and remediation recommendations.',
    ],
  },
];

function JobRow({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-white/20">
      <button
        className="group w-full grid grid-cols-12 items-center gap-4 py-8 text-left hover:opacity-80"
        onClick={() => setOpen(o => !o)}
      >
        <span className="col-span-2 font-mono text-xs text-orange-500 md:col-span-1">{job.n}</span>
        <div className="col-span-9 md:col-span-7">
          <h3 className="text-2xl font-black tracking-tight md:text-3xl">{job.title}</h3>
          <p className="mt-0.5 font-mono text-xs text-neutral-400">{job.company} — {job.location}</p>
        </div>
        <p className="col-span-12 font-mono text-xs text-neutral-500 md:col-span-3 md:text-right">{job.dates}</p>
        <ChevronDown className={`col-span-1 ml-auto text-neutral-400 transition-transform ${open ? 'rotate-180' : ''}`} size={16}/>
      </button>
      {open && (
        <ul className="pb-8 pl-8 space-y-3 border-t border-white/10 pt-4 md:pl-16">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm text-neutral-300 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500"/>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function EmploymentHistory() {
  return (
    <section id="employment" className="section-shell bg-black text-white">
      <SectionHeader index="03" label="History" title="Employment"/>
      <div className="mx-auto max-w-[1500px]">
        {jobs.map(job => <JobRow key={job.n} job={job}/>)}
      </div>
    </section>
  );
}