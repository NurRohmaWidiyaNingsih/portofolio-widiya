import React from 'react'

export default function Navbar(){
  return (
    <nav className="w-full fixed top-0 left-0 z-40 bg-transparent backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-4 py-3 relative flex items-center justify-between">
        {/* left: brand */}
        <div className="flex items-center">
          <a href="#home" className="text-white font-bold text-lg" aria-label="home">NurR</a>
        </div>

        {/* center: links (centered on md+) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-6">
          <a href="#home" className="text-white hover:text-pink-300">Home</a>
          <a href="#about" className="text-white hover:text-pink-300">About</a>
          <a href="#projects" className="text-white hover:text-pink-300">Projects</a>
          <a href="#contact" className="text-white hover:text-pink-300">Contact</a>
        </div>

        {/* right: mobile menu button (visible on small screens) */}
        <div className="flex items-center">
          <div className="hidden md:block w-6" />
          <div className="md:hidden">
            <button aria-label="open menu" className="text-white">☰</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
