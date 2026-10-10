'use client';

import { useEffect } from 'react';

export default function FondoAzulMistico() {
  useEffect(() => {
    const stars = document.querySelectorAll('.star');
    stars.forEach((s) => {
      const el = s as HTMLElement;
      const d = (2.5 + Math.random() * 3).toFixed(2) + 's';
      const delay = (Math.random() * 5).toFixed(2) + 's';
      el.style.setProperty('--dur', d);
      el.style.setProperty('--delay', delay);
    });
  }, []);

  return (
    <div className='pointer-events-none fixed inset-0 -z-10 w-screen overflow-hidden'>
      <div className='relative h-full w-full bg-gradient-to-br from-[#020811] via-[#02224e] to-[#00010a]'>
        {/* Nebulosas */}
        <div className='absolute top-[10%] left-[15%] h-[35vw] w-[35vw] rounded-full bg-[#15222a] opacity-20 blur-3xl' />
        <div className='absolute top-[50%] left-[60%] h-[30vw] w-[30vw] rounded-full bg-[#082d47] opacity-20 blur-3xl' />
        <div className='absolute top-[70%] left-[10%] h-[25vw] w-[25vw] rounded-full bg-[#041a2e] opacity-20 blur-3xl' />
        <div className='absolute top-[15%] right-[10%] h-[20vw] w-[20vw] rounded-full bg-[#0a2f4d] opacity-20 blur-3xl' />
        <div className='absolute bottom-[10%] left-[35%] h-[28vw] w-[28vw] rounded-full bg-[#0b3951] opacity-15 blur-3xl' />
        <div className='absolute top-[40%] right-[30%] h-[22vw] w-[22vw] rounded-full bg-[#09324a] opacity-20 blur-2xl' />
        <div className='absolute top-[25%] left-[45%] h-[18vw] w-[18vw] rounded-full bg-[#041826] opacity-20 blur-2xl' />

        {/* Estrellas */}
        <span className='star absolute top-[10%] left-[20%] h-0.5 w-0.5 rounded-full bg-blue-300 opacity-15' />
        <span className='star absolute top-[30%] left-[70%] h-0.5 w-0.5 rounded-full bg-blue-200 opacity-15' />
        <span className='star absolute top-[55%] left-[40%] h-0.5 w-0.5 rounded-full bg-blue-400 opacity-15' />
        <span className='star absolute top-[75%] left-[15%] h-0.5 w-0.5 rounded-full bg-blue-300 opacity-15' />
        <span className='star absolute top-[85%] left-[80%] h-0.5 w-0.5 rounded-full bg-blue-100 opacity-15' />
        <span className='star absolute top-[25%] left-[50%] h-0.5 w-0.5 rounded-full bg-blue-300 opacity-15' />
        <span className='star absolute top-[60%] left-[30%] h-0.5 w-0.5 rounded-full bg-blue-300 opacity-15' />
        <span className='star absolute top-[15%] left-[75%] h-0.5 w-0.5 rounded-full bg-blue-200 opacity-15' />
        <span className='star absolute top-[45%] left-[15%] h-0.5 w-0.5 rounded-full bg-blue-100 opacity-15' />
        <span className='star absolute top-[35%] left-[90%] h-0.5 w-0.5 rounded-full bg-blue-300 opacity-15' />
        <span className='star absolute top-[5%] left-[5%] h-0.5 w-0.5 rounded-full bg-blue-200 opacity-15' />
        <span className='star absolute top-[65%] left-[85%] h-0.5 w-0.5 rounded-full bg-blue-400 opacity-15' />
        <span className='star absolute top-[80%] left-[60%] h-0.5 w-0.5 rounded-full bg-blue-300 opacity-15' />
        <span className='star absolute top-[90%] left-[30%] h-0.5 w-0.5 rounded-full bg-blue-200 opacity-15' />
        <span className='star absolute top-[15%] left-[60%] h-0.5 w-0.5 rounded-full bg-blue-300 opacity-15' />
        <span className='star absolute top-[50%] left-[10%] h-0.5 w-0.5 rounded-full bg-blue-200 opacity-15' />
        <span className='star absolute top-[70%] left-[45%] h-0.5 w-0.5 rounded-full bg-blue-100 opacity-15' />
        <span className='star absolute top-[0%] left-[35%] h-0.5 w-0.5 rounded-full bg-blue-300 opacity-15' />
        <span className='star absolute top-[12%] left-[50%] h-0.5 w-0.5 rounded-full bg-blue-200 opacity-15' />
        <span className='star absolute top-[88%] left-[5%] h-0.5 w-0.5 rounded-full bg-blue-100 opacity-15' />
        <span className='star absolute top-[18%] left-[82%] h-0.5 w-0.5 rounded-full bg-blue-200 opacity-15' />
        <span className='star absolute top-[0%] left-[0%] h-0.5 w-0.5 rounded-full bg-blue-300 opacity-15' />
        <span className='star absolute top-[72%] left-[22%] h-0.5 w-0.5 rounded-full bg-blue-100 opacity-15' />
        <span className='star absolute top-[5%] left-[95%] h-0.5 w-0.5 rounded-full bg-blue-200 opacity-15' />
        <span className='star absolute top-[55%] left-[92%] h-0.5 w-0.5 rounded-full bg-blue-400 opacity-15' />
        <span className='star absolute top-[33%] left-[12%] h-0.5 w-0.5 rounded-full bg-blue-300 opacity-15' />
        <span className='star absolute top-[78%] left-[50%] h-0.5 w-0.5 rounded-full bg-blue-200 opacity-15' />
      </div>
    </div>
  );
}
