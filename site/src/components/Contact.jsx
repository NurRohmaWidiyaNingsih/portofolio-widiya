import React, { useState } from 'react';

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contacts = [
    {
      id: 'email',
      name: 'Email',
      detail: 'nurrohmawidiyaningsih@gmail.com',
      tagline: 'Send me an email',
      link: 'mailto:nurrohmawidiyaningsih@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      color: 'from-red-400 to-orange-500',
      hoverBg: 'hover:bg-red-50'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      detail: 'rwidiya',
      tagline: 'Connect with me',
      link: 'https://linkedin.com/in/rwidiya',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-700',
      hoverBg: 'hover:bg-blue-50'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      detail: '@r.widiyaa',
      tagline: 'Follow me on IG',
      link: 'https://instagram.com/r.widiyaa',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'from-pink-500 to-purple-600',
      hoverBg: 'hover:bg-pink-50'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      detail: '+62 857-4561-2946',
      tagline: 'Chat with me',
      link: 'https://wa.me/6285745612946',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      ),
      color: 'from-green-400 to-green-600',
      hoverBg: 'hover:bg-green-50'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob1"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob2"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto font-medium">
            Jangan ragu untuk menghubungi saya! Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar say hello 👋
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/50 
                transition-all duration-300 hover:bg-white/50 hover:-translate-y-2 hover:shadow-lg
                flex flex-col items-center justify-center min-h-[200px]`}
              onMouseEnter={() => setHoveredCard(contact.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon with gradient background on hover */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3
                transition-all duration-300 
                ${hoveredCard === contact.id 
                  ? `bg-gradient-to-br ${contact.color} text-white scale-110` 
                  : 'bg-pink-100 text-pink-500'}`}
              >
                {contact.icon}
              </div>

              {/* Platform name */}
              <span className={`font-bold text-lg transition-all duration-300
                ${hoveredCard === contact.id ? 'text-pink-600' : 'text-gray-700'}`}>
                {contact.name}
              </span>

              {/* Detail (username/email/number) */}
              <span className="text-white text-sm mt-1 text-center break-all px-2">
                {contact.detail}
              </span>

              {/* Tagline */}
              <span className="text-pink-500 text-xs mt-2 font-medium">
                {contact.tagline}
              </span>

              {/* Connect text overlay */}
              <div className={`absolute inset-0 rounded-2xl flex items-center justify-center
                backdrop-blur-md bg-pink-100/80 border border-pink-200
                transition-all duration-300 
                ${hoveredCard === contact.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                <div className="text-center">
                  <span className="text-xl font-bold tracking-wide text-pink-600">Connect</span>
                  <div className="mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto animate-bounce text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
