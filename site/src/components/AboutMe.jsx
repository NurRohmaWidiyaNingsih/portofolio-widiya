import React from 'react'
import ProfilePhoto from '../assets/profile.jpeg'

// Skills data dengan ikon dari skill-icons (lebih colorful & modern)
const skills = [
  { name: 'Laravel', icon: 'https://skillicons.dev/icons?i=laravel' },
  { name: 'PHP', icon: 'https://skillicons.dev/icons?i=php' },
  { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
  { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
  { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind' },
  { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
  { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
  { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
  { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
  { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
  { name: 'HTML5', icon: 'https://skillicons.dev/icons?i=html' },
  { name: 'CSS3', icon: 'https://skillicons.dev/icons?i=css' },
  { name: 'Figma', icon: 'https://skillicons.dev/icons?i=figma' },
  { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
]

export default function AboutMe() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#3f3350] py-16">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[480px] h-[480px] rounded-full blur-[48px] opacity-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,111,181,0.14),transparent_40%)] -left-28 -top-20 animate-blob1"></div>
        <div className="absolute w-[340px] h-[340px] rounded-full blur-[48px] opacity-10 bg-[radial-gradient(circle_at_40%_40%,rgba(255,198,223,0.10),transparent_40%)] -right-16 -top-5 animate-blob2"></div>
      </div>

      <div className="w-[min(1100px,94%)] mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-pink-400 text-center mb-10">About Me</h2>

        {/* Card Container */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Photo */}
            <div className="md:w-2/5 p-6 md:p-10 flex items-center justify-center bg-gradient-to-br from-pink-400/20 to-purple-500/20">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white/20">
                <img 
                  src={ProfilePhoto} 
                  alt="Nur Rohma Widiya Ningsih" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Profile */}
            <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Nur Rohma Widiya Ningsih</h3>
              <p className="text-pink-300 font-semibold text-lg mb-4">Desainer & Developer</p>

              <p className="text-white/90 leading-relaxed mb-6">
                Halo! Aku adalah seorang desainer dan developer yang kreatif, rapi, dan penuh rasa ingin tahu. 
                Aku membuat produk digital yang berfokus pada UX dan estetika — menggabungkan desain visual yang halus 
                dengan kode yang bersih untuk membangun pengalaman yang berkesan.
              </p>

              {/* Info List */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-pink-400 font-semibold w-24">Lokasi</span>
                  <span className="text-white/80">Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-pink-400 font-semibold w-24">Fokus</span>
                  <span className="text-white/80">UI/UX Design, Web Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-pink-400 font-semibold w-24">Minat</span>
                  <span className="text-white/80">Creative Design, Clean Code</span>
                </div>
              </div>

              {/* Skills Marquee */}
              <div>
                <p className="text-pink-400 font-semibold mb-3">Skills</p>
                <div className="relative overflow-hidden rounded-xl py-3">
                  {/* Gradient fade edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/10 to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/10 to-transparent z-10 pointer-events-none"></div>
                  
                  {/* Marquee container */}
                  <div className="flex animate-marquee">
                    {/* First set */}
                    {skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 mx-4 flex-shrink-0">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-6 h-6"
                        />
                        <span className="text-white/80 text-xs font-medium whitespace-nowrap">{skill.name}</span>
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {skills.map((skill, idx) => (
                      <div key={`dup-${idx}`} className="flex items-center gap-1.5 mx-4 flex-shrink-0">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-6 h-6"
                        />
                        <span className="text-white/80 text-xs font-medium whitespace-nowrap">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
