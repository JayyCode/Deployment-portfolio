import React from 'react';
import { Download } from 'lucide-react';
import SectionHeader from '@/components/portfolio/SectionHeader';

const skills = [
  'Linux', 'Windows Server', 'Proxmox VE', 'Python', 'Java', 'C/C++',
  'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'SQL', 'MySQL',
  'SQLite', 'MongoDB', 'REST APIs', 'ETL workflows', 'web crawling',
  'API integration', 'webhooks', 'n8n', 'Zoho CRM', 'Odoo',
  'Stripe integrations', 'workflow automation', 'vulnerability assessment',
  'penetration testing', 'SQL injection testing', 'XSS testing',
  'Wireshark', 'Splunk', 'Security Onion', 'Burp Suite', 'Nmap',
  'Metasploit', 'llama.cpp', 'local LLM deployment', 'OpenAI-compatible endpoints',
];

const contact = [
  { label: 'Email', value: 'jayycoding@gmail.com', href: 'mailto:jayycoding@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/jayycoding', href: 'https://linkedin.com/in/jayycoding/' },
  { label: 'GitHub', value: 'github.com', href: 'https://github.com' },
  { label: 'Phone', value: '912-831-2217', href: 'tel:9128312217' },
];

const PDF_URL = 'https://media.base44.com/files/public/6a899874b9c9c8d903d80a8c/1542487df_RESU.pdf';

export default function ResumePanel() {
  return (
    <section id="resume" className="section-shell">
      <SectionHeader index="02" label="Document" title="Résumé"/>
      <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12">

        {/* Summary */}
        <div className="md:col-span-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-[.18em] text-orange-600">Professional Summary</p>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-700">
            Technical professional with experience across systems administration, infrastructure deployment,
            automation scripting, backend API integration, and cybersecurity testing. Skilled in Linux, Windows,
            Proxmox, Python, MySQL, REST APIs, cloud-hosted workflows, network troubleshooting, vulnerability
            assessment, and secure coding concepts.
          </p>

          {/* Education */}
          <div className="mt-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-[.18em] text-neutral-500">Education</p>
            <div className="border-t border-black py-6">
              <p className="font-mono text-xs text-orange-600">JUN 2023 – AUG 2026</p>
              <h4 className="mt-1 text-2xl font-black tracking-tight">Bachelor's in Computer Science</h4>
              <p className="mt-1 text-neutral-600">Southern New Hampshire University</p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[.18em] text-neutral-500">Contact</p>
            <div className="grid gap-1">
              {contact.map(c => (
                <div key={c.label} className="flex items-center gap-6 border-t border-neutral-200 py-3">
                  <span className="w-20 font-mono text-xs text-neutral-400">{c.label}</span>
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="text-sm hover:text-orange-600">{c.value}</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills + Download */}
        <div className="md:col-span-4">
          <a href={PDF_URL} target="_blank" rel="noopener" className="action-btn flex w-full items-center justify-center gap-2">
            <Download size={16}/> Download PDF
          </a>

          <div className="mt-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-[.18em] text-neutral-500">Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map(s => (
                <span key={s} className="border border-neutral-300 px-2 py-1 font-mono text-[10px] text-neutral-700">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}