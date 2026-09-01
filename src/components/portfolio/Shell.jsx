import React, { useEffect, useState } from 'react';
import Navigation from '@/components/portfolio/Navigation';

export default function Shell({ brand='RW / CS499', links, indexLabel, backTo, children }) {
  const [progress,setProgress] = useState(0);
  const [cursor,setCursor] = useState({x:-20,y:-20});
  useEffect(()=>{
    const scroll = () => setProgress((window.scrollY/(document.documentElement.scrollHeight-window.innerHeight))*100);
    const move = e => setCursor({x:e.clientX,y:e.clientY});
    window.addEventListener('scroll',scroll);
    window.addEventListener('mousemove',move);
    return () => { window.removeEventListener('scroll',scroll); window.removeEventListener('mousemove',move); };
  },[]);
  return (
    <div className="overflow-hidden bg-white text-[#121212]">
      <div className="fixed left-0 top-0 z-[60] h-1 bg-orange-600" style={{width:`${progress}%`}}/>
      <div className="pointer-events-none fixed z-[70] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 border border-orange-600 md:block" style={{left:cursor.x,top:cursor.y}}/>
      <Navigation brand={brand} links={links} indexLabel={indexLabel} backTo={backTo}/>
      {children}
    </div>
  );
}