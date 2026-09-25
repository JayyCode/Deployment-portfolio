import React from 'react';
import Shell from '@/components/portfolio/Shell';
import HomeHero from '@/components/portfolio/HomeHero';
import ProjectsDirectory from '@/components/portfolio/ProjectsDirectory';
import ResumePanel from '@/components/portfolio/ResumePanel';
import EmploymentHistory from '@/components/portfolio/EmploymentHistory';
import CertificationsTeaser from '@/components/portfolio/CertificationsTeaser';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <Shell brand="RW / PORTFOLIO" links={[['projects','Projects'],['resume','Resume'],['employment','Employment'],['certifications','Certifications']]} indexLabel="INDEX / 01—04">
      <HomeHero/>
      <main>
        <ProjectsDirectory/>
        <ResumePanel/>
        <EmploymentHistory/>
        <CertificationsTeaser/>
      </main>
      <Footer
        headline="ENGINEER WITH INTENT."
        links={[['Projects ↑','#projects'],['Résumé ↑','#resume'],['Employment ↑','#employment'],['Certifications ↑','#certifications']]}
        meta={['REGINALD WILLIAMS','PORTFOLIO']}
        copyright={['© 2026','PORTFOLIO']}
      />
    </Shell>
  );
}