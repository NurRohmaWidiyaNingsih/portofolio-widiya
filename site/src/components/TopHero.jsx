import React from 'react'
import heroBg from '../assets/hero-bg.jpeg'

export default function TopHero(){
  return (
    <header 
      id="home" 
      className="relative pt-16 pb-4 text-white flex items-center justify-center bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(63,51,80,0.85), rgba(63,51,80,0.85)), url(${heroBg})`
      }}
    >
      <div className="w-[min(1200px,94%)] mx-auto flex flex-col items-center justify-center text-center gap-2" role="banner">
        <div className="max-w-[820px]">
          <p className="text-white/85 mb-3 font-bold tracking-widest">HELLO, I AM</p>

          <h1 className="mb-2 font-black leading-none">
            <span className="block text-6xl md:text-7xl text-pink-400 tracking-wide uppercase">ROHMA</span>
            <span className="block text-6xl md:text-7xl text-white tracking-wider uppercase">WIDIYA</span>
          </h1>

          <p className="max-w-[720px] text-white/90 text-base mt-2 mx-auto leading-relaxed">I craft elegant, accessible interfaces and build tidy front-end code. I combine visual design with practical development to ship delightful, usable products.</p>

          <div className="mt-3 mb-2">
            <a className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-pink-400 to-pink-300 shadow-lg hover:shadow-xl transition-shadow" href="/assets/Rohma_Widiya_CV.pdf" download>Download CV</a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-2">
            <a aria-label="github" href="https://github.com/NurRohmaWidiyaNingsih" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white font-bold hover:bg-white/10 transition-colors">GH</a>
            <a aria-label="email" href="mailto:nurrohmawidiyaningsih@gmail.com" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white font-bold hover:bg-white/10 transition-colors">✉</a>
            <a aria-label="linkedin" href="https://linkedin.com/in/rwidiya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white font-bold hover:bg-white/10 transition-colors">in</a>
          </div>
        </div>
      </div>
    </header>
  )
}
