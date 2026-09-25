import React from 'react';
import Shell from '@/components/portfolio/Shell';
import CtfReHero from '@/components/portfolio/ctfre/CtfReHero';
import CtfReOverview from '@/components/portfolio/ctfre/CtfReOverview';
import CtfReScreens from '@/components/portfolio/ctfre/CtfReScreens';
import CtfReTimeline from '@/components/portfolio/ctfre/CtfReTimeline';
import CtfRePivots from '@/components/portfolio/ctfre/CtfRePivots';
import CtfReStatus from '@/components/portfolio/ctfre/CtfReStatus';
import Footer from '@/components/portfolio/Footer';

export default function ReverseEngineering() {
  return (
    <Shell
      brand="DIRECTORY"
      backTo="/"
      links={[['overview','Targets'],['evidence','Captures'],['analysis','Walkthrough'],['pivots','Pivots'],['status','Status']]}
      indexLabel="INDEX / 01—05"
    >
      <CtfReHero/>
      <main>
        <CtfReOverview/>
        <CtfReScreens/>
        <CtfReTimeline/>
        <CtfRePivots/>
        <CtfReStatus/>
      </main>
      <Footer
        headline="FOLLOW THE CODE."
        links={[['Targets ↑','#overview'],['IDA captures ↑','#evidence'],['Walkthrough ↑','#analysis']]}
        meta={['CTF','REVERSE ENGINEERING']}
        copyright={['© 2026','CTF / RE']}
      />
    </Shell>
  );
}