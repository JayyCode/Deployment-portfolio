import React from 'react';
import Shell from '@/components/portfolio/Shell';
import SafeStopHero from '@/components/portfolio/safestop/SafeStopHero';
import SafeStopOverview from '@/components/portfolio/safestop/SafeStopOverview';
import SafeStopScreens from '@/components/portfolio/safestop/SafeStopScreens';
import SafeStopFeatures from '@/components/portfolio/safestop/SafeStopFeatures';
import SafeStopStatus from '@/components/portfolio/safestop/SafeStopStatus';
import Footer from '@/components/portfolio/Footer';

export default function SafeStop() {
  return (
    <Shell
      brand="DIRECTORY"
      backTo="/"
      links={[['overview','Overview'],['screens','Screens'],['features','Capabilities'],['status','Status']]}
      indexLabel="INDEX / 01—04"
    >
      <SafeStopHero/>
      <main>
        <SafeStopOverview/>
        <SafeStopScreens/>
        <SafeStopFeatures/>
        <SafeStopStatus/>
      </main>
      <Footer
        headline="DOCUMENT. ORGANIZE. CONNECT."
        links={[['Overview ↑','#overview'],['Alpha screens ↑','#screens'],['Capabilities ↑','#features']]}
        meta={['SAFESTOP','ALPHA BUILD']}
        copyright={['© 2026','SAFESTOP']}
      />
    </Shell>
  );
}