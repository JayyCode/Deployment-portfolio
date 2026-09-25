import React from 'react';
import CertCard from '@/components/portfolio/certifications/CertCard';

const certs = [
  {
    n: '01',
    title: 'Bachelor of Science, Computer Science',
    issuer: 'Southern New Hampshire University',
    date: 'September 1, 2026',
    certNo: null,
    verifyUrl: null,
    fileUrl: 'https://media.base44.com/files/public/6a899874b9c9c8d903d80a8c/7270fb045_e3fd92d4-ab09-11f1-9a85-7f2a58edf34c.pdf',
  },
  {
    n: '02',
    title: 'Procore Certification: Superintendent',
    issuer: 'Procore Technologies',
    date: 'June 26, 2024',
    certNo: 'z8eyuqj772h9',
    verifyUrl: 'https://verify.skilljar.com/c/z8eyuqj772h9',
    fileUrl: 'https://media.base44.com/files/public/6a899874b9c9c8d903d80a8c/09ac9629f_certificate-z8eyuqj772h9-1719402646.pdf',
  },
  {
    n: '03',
    title: 'Procore Certification: Procore Admin',
    issuer: 'Procore Technologies',
    date: 'June 26, 2024',
    certNo: 'srhwxx5ri3q9',
    verifyUrl: 'https://verify.skilljar.com/c/srhwxx5ri3q9',
    fileUrl: 'https://media.base44.com/files/public/6a899874b9c9c8d903d80a8c/cbdab05e7_certificate-srhwxx5ri3q9-1719402547.pdf',
  },
];

export default function CertWallGrid() {
  return (
    <section id="credentials" className="section-shell !pt-16">
      <div className="mx-auto grid max-w-[1500px] gap-x-10 md:grid-cols-3">
        {certs.map(c => <CertCard key={c.n} {...c}/>)}
      </div>
    </section>
  );
}