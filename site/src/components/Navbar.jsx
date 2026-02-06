import React, { useState } from 'react'

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full top-0 left-0 z-50">
        {/* Glassmorphism background for the bar */}
       <div className="absolute inset-0 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-lg"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 py-4 relative flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex-shrink-0 z-50">
          <a href="#home" onClick={closeMenu} className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent tracking-wider hover:opacity-80 transition-opacity">
            NurR
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 z-50">
          {navLinks.map((link) => (
             <a 
                key={link.title} 
                href={link.href} 
                className="text-gray-300 font-medium hover:text-pink-400 transition-colors duration-300 relative group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
              </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden z-50 relative">
          <button 
            onClick={toggleMenu} 
            className="text-white p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
             {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
             ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
             )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-b border-pink-500/20 shadow-[0_10px_40px_-10px_rgba(236,72,153,0.3)] transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'
        }`}
      >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link, index) => (
               <a 
                 key={link.title}
                 href={link.href} 
                 onClick={closeMenu}
                 className="block text-center text-xl font-bold text-gray-200 hover:text-pink-400 hover:bg-white/5 border border-transparent hover:border-pink-500/30 rounded-lg py-4 transition-all tracking-wider"
                 style={{ transitionDelay: `${isOpen ? index * 50 : 0}ms` }}
               >
                 {link.title}
               </a>
            ))}
          </div>
      </div>
    </nav>
  )
}
