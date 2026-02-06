import React, { useState } from 'react'

const webProjects = [
  {
    id: 1,
    title: 'Sistem Terintegrasi Sekolah',
    category: 'Full Stack',
    date: 'November 2024',
    description: 'Website Sistem Informasi Sekolah Terpadu berbasis web yang mengelola seluruh kegiatan akademik dan non-akademik sekolah secara terintegrasi, mulai dari pendataan siswa, pembelajaran, hingga manajemen ekstrakurikuler dan perpustakaan.',
    fullDescription: 'Website Sistem Informasi Sekolah Terpadu merupakan aplikasi berbasis web yang dirancang untuk membantu sekolah dalam mengelola seluruh aktivitas akademik dan non-akademik secara terintegrasi dan sistematis. Sistem ini menyediakan fitur pendataan siswa, guru, kelas, dan mata pelajaran yang menjadi dasar dalam pengelolaan proses pembelajaran di sekolah. Melalui sistem ini, pihak sekolah dapat mengatur kegiatan pembelajaran, pelaksanaan ujian, pengolahan nilai, hingga pencetakan rapor siswa secara digital dengan lebih efisien dan terstruktur. Selain modul akademik, sistem ini juga mendukung pengelolaan kegiatan ekstrakurikuler sekolah, mulai dari pendataan jenis ekstrakurikuler, keikutsertaan siswa, hingga pengelolaan inventaris barang ekstrakurikuler. Fitur inventaris memungkinkan sekolah untuk mencatat, memantau, dan mengelola aset yang digunakan dalam kegiatan ekstrakurikuler agar penggunaannya lebih terkontrol dan terdokumentasi dengan baik. Sistem perpustakaan turut terintegrasi dalam aplikasi ini, sehingga proses peminjaman dan pengembalian buku dapat dilakukan secara teratur dan tercatat secara digital. Seluruh data dan aktivitas yang ada di dalam sistem dikelola dengan mekanisme autentikasi dan hak akses pengguna, sehingga setiap peran seperti admin, guru, dan siswa memiliki akses sesuai dengan kewenangannya masing-masing. Dengan menggabungkan berbagai modul dalam satu platform, Website Sistem Informasi Sekolah Terpadu ini bertujuan untuk meningkatkan efisiensi administrasi, meminimalkan kesalahan pencatatan data, serta membantu sekolah dalam mengelola informasi secara akurat, terpusat, dan berkelanjutan.',
    images: [
      '/projects/web/sistem-terintegrasi/1.jpeg',
      '/projects/web/sistem-terintegrasi/2.jpeg',
      '/projects/web/sistem-terintegrasi/3.jpeg',
      '/projects/web/sistem-terintegrasi/4.jpeg',
      '/projects/web/sistem-terintegrasi/5.jpeg',
      '/projects/web/sistem-terintegrasi/6.jpeg',
    ],
    tech: ['Laravel', 'Tailwind', 'MySQL'],
    github: 'https://github.com/ReEkaF/PPL-project',
  },
  {
    id: 2,
    title: 'JustiBot - AI Legal Consultant',
    category: 'Full Stack',
    date: 'Juli 2025',
    description: 'Website konsultan hukum berbasis AI yang membantu pengguna mendapatkan informasi dan konsultasi hukum secara cepat dan mudah.',
    fullDescription: 'Justibot merupakan website konsultan hukum berbasis web yang dirancang untuk memudahkan masyarakat dalam memperoleh informasi dan layanan hukum secara digital. Website ini berfungsi sebagai platform penghubung antara pengguna dengan pengacara atau kantor hukum, serta sebagai media penyedia informasi hukum yang mudah diakses dan terstruktur. Website Justibot menyediakan fitur pendaftaran bagi pengacara dan kantor hukum, sehingga data pengacara dapat dikelola dan ditampilkan secara sistematis. Melalui sistem ini, admin dapat mengelola daftar pengacara, termasuk melakukan penambahan, pembaruan, dan penghapusan data sesuai kebutuhan. Selain itu, website ini juga dilengkapi dengan halaman artikel hukum yang berisi konten informatif untuk membantu pengguna memahami berbagai topik dan permasalahan hukum. Dari sisi administrasi, Justibot memiliki halaman admin yang memungkinkan pengelolaan data secara terpusat, seperti manajemen data pengacara, artikel, dan konten pendukung lainnya. Sistem autentikasi diterapkan untuk memastikan bahwa hanya pengguna dengan hak akses tertentu yang dapat mengelola data pada halaman admin, sehingga keamanan dan integritas data tetap terjaga. Website ini dikembangkan menggunakan arsitektur frontend dan backend yang terpisah, di mana frontend berfokus pada penyajian antarmuka pengguna yang interaktif dan responsif, sedangkan backend menangani pengolahan data, autentikasi, serta komunikasi dengan database. Dengan struktur ini, Justibot mampu mendukung pengelolaan data secara efisien dan scalable. Secara keseluruhan, Justibot bertujuan untuk memberikan solusi digital dalam layanan konsultasi hukum dengan menyediakan platform yang informatif, terstruktur, dan mudah digunakan, baik bagi masyarakat umum maupun pengacara. Website ini diharapkan dapat meningkatkan aksesibilitas layanan hukum serta mempermudah proses pengelolaan data dan informasi hukum dalam satu sistem terintegrasi.',
    images: [
      '/projects/web/justibot/1.jpeg',
      '/projects/web/justibot/2.jpeg',
      '/projects/web/justibot/3.jpeg',
      '/projects/web/justibot/4.jpeg',
      '/projects/web/justibot/5.jpeg',
      '/projects/web/justibot/6.jpeg',
    ],
    tech: ['React', 'Node.js', 'OpenAI'],
    github: 'https://github.com/adibsya/Project-Justibot',
  },
  {
    id: 3,
    title: 'WAGOS - Wisata Alam Gosari',
    category: 'Frontend',
    date: 'Juni 2023',
    description: 'Landing page untuk destinasi wisata alam Gosari yang menampilkan keindahan alam, fasilitas, dan informasi wisata secara menarik.',
    fullDescription: 'WAGOS (Wisata Alam Gosari) adalah website landing page yang dirancang untuk mempromosikan destinasi wisata alam Gosari. Website ini menampilkan keindahan panorama alam, spot-spot foto instagramable, fasilitas yang tersedia, serta informasi lengkap mengenai lokasi, jam operasional, dan harga tiket. Dengan desain yang modern dan responsif, website ini bertujuan untuk menarik minat wisatawan dan memberikan informasi yang lengkap sebelum berkunjung ke lokasi wisata.',
    images: [
      '/projects/web/wagos/1.jpeg',
      '/projects/web/wagos/2.jpeg',
      '/projects/web/wagos/3.jpeg',
      '/projects/web/wagos/4.jpeg',
      '/projects/web/wagos/5.jpeg',
      '/projects/web/wagos/6.jpeg',
    ],
    tech: ['HTML', 'CSS', 'Tailwind'],
    github: 'https://github.com/NurRohmaWidiyaNingsih/WisataAlamGosari',
  },
]

const dataProjects = [
  {
    id: 1,
    title: 'COVID-19 Analytics Dashboard',
    category: 'Machine Learning',
    date: 'Agustus 2024',
    description: 'Platform analisis COVID-19 dengan fitur prediksi lonjakan kasus, klasifikasi tingkat keparahan, dan clustering peta wilayah.',
    fullDescription: 'COVID-19 Analytics Dashboard adalah platform analisis data COVID-19 yang komprehensif dengan tiga fitur utama. Pertama, fitur Prediksi Lonjakan Kasus yang menggunakan model time series untuk memprediksi tren kasus COVID-19 hingga 6 bulan ke depan, membantu pemerintah dan masyarakat dalam mempersiapkan antisipasi. Kedua, fitur Klasifikasi Tingkat Keparahan yang menganalisis data pasien untuk mengklasifikasikan tingkat keparahan COVID berdasarkan gejala, usia, dan riwayat kesehatan menggunakan model Naive Bayes. Ketiga, fitur Clustering Peta Wilayah yang mengelompokkan wilayah berdasarkan tingkat keparahan penyebaran COVID menggunakan algoritma K-Means clustering, ditampilkan dalam bentuk peta interaktif untuk memudahkan visualisasi zona dengan 5 kluster mulai dari sangat tinggi hingga sangat rendah.',
    images: [
      '/projects/data/covid-analysis/1.jpeg',
      '/projects/data/covid-analysis/2.jpeg',
      '/projects/data/covid-analysis/3.jpeg',
      '/projects/data/covid-analysis/4.jpeg',
      '/projects/data/covid-analysis/5.jpeg',
      '/projects/data/covid-analysis/6.jpeg',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    github: 'https://github.com/NurRohmaWidiyaNingsih/AnalisisCovid19',
  },
  {
    id: 2,
    title: 'Dashboard Prediksi Hasil Panen Padi Madura',
    category: 'Machine Learning',
    date: 'Desember 2025',
    description: 'Dashboard prediksi hasil panen padi di Madura menggunakan berbagai model machine learning dengan optimasi PSO.',
    fullDescription: 'Dashboard Prediksi Hasil Panen Padi Madura adalah aplikasi berbasis web yang dirancang untuk memprediksi hasil panen padi di wilayah Madura. Dashboard ini menyediakan berbagai fitur mulai dari upload data, imputasi missing value, split data, hingga pemodelan dan prediksi. Sistem ini mengimplementasikan empat model machine learning yaitu Double Exponential Smoothing (DES), DES dengan optimasi Particle Swarm Optimization (DES-PSO), Support Vector Regression (SVR), dan SVR dengan optimasi PSO (SVR-PSO) menggunakan 4 variabel yaitu Luas sawah (ha), Luas Tanam (ha), Produktivitas (ton/ha), Luas Panen(ha) sebagai variabel input dan Produksi sebagai variabel target (output). Setelah dilakukan perbandingan performa, model SVR-PSO terbukti memberikan hasil prediksi terbaik dengan nilai error terendah dengan MAPE 14,09% (Kategori Baik), sehingga digunakan sebagai model utama untuk fitur prediksi manual. Pengguna dapat memasukkan data secara manual dan mendapatkan prediksi hasil panen berdasarkan model SVR-PSO yang telah dilatih.',
    images: [
      '/projects/data/prediksi-padi/1.jpeg',
      '/projects/data/prediksi-padi/2.jpeg',
      '/projects/data/prediksi-padi/3.jpeg',
      '/projects/data/prediksi-padi/4.jpeg',
      '/projects/data/prediksi-padi/5.jpeg',
      '/projects/data/prediksi-padi/6.jpeg',
    ],
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'PSO'],
    github: 'https://github.com/NurRohmaWidiyaNingsih/PrediksiHasilPanenPadiMadura',
  },
  {
    id: 3,
    title: 'Sentiment Analysis',
    category: 'NLP',
    date: 'November 2025',
    description: 'Analisis sentimen review produk menggunakan NLP.',
    fullDescription: 'Sistem analisis sentimen otomatis untuk review produk e-commerce.',
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    ],
    tech: ['Python', 'NLTK', 'TensorFlow'],
    github: 'https://github.com/username/sentiment-analysis',
  },
]

function ProjectModal({ project, onClose }) {
  const [currentImage, setCurrentImage] = useState(0)
  if (!project) return null
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[#2a2438] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-[fadeIn_0.3s_ease-out] scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} onClick={(e) => e.stopPropagation()}>
        <div className="relative bg-gray-900 rounded-t-3xl overflow-hidden">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            {project.images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`${project.title} ${idx + 1}`} 
                className={`absolute inset-0 w-full h-full object-contain rounded-t-3xl transition-all duration-500 ease-in-out ${
                  idx === currentImage 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              />
            ))}
          </div>
          {/* Bottom gradient accent */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#2a2438] via-[#2a2438]/70 to-transparent"></div>
          
          {/* Image counter */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium z-10">
            {currentImage + 1} / {project.images.length}
          </div>
          
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {project.images.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentImage(idx)} className={`h-2 rounded-full transition-all duration-300 ${idx === currentImage ? 'bg-pink-400 w-6' : 'bg-white/50 w-2'}`} />
            ))}
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-pink-400/20 text-pink-400 rounded-full text-sm font-medium">{project.category}</span>
            <span className="text-white/50 text-sm">{project.date}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-white/80 leading-relaxed mb-6">{project.fullDescription}</p>
          <div className="mb-6">
            <p className="text-pink-400 font-semibold mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 bg-white/10 rounded-full text-sm text-white font-medium">{tech}</span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
            <a 
              href={project.github || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
            <button 
              onClick={onClose}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, onClick }) {
  return (
    <div className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer" onClick={onClick}>
      <div className="aspect-[4/3] overflow-hidden relative">
        <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <span className="flex items-center gap-2 px-5 py-2.5 backdrop-blur-md bg-white/20 text-white font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border border-white/30">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Details
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-pink-400 text-sm font-medium">{project.category}</span>
          <span className="text-white/50 text-xs">{project.date}</span>
        </div>
        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-pink-300 transition-colors">{project.title}</h4>
        <p className="text-white/70 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('web')
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="bg-[#3f3350] py-20">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-400 text-center mb-4">Projects</h2>
        <p className="text-white/70 text-center mb-10 max-w-2xl mx-auto">Berikut adalah beberapa proyek yang telah saya kerjakan.</p>
        <div className="flex justify-center gap-4 mb-10">
          <button onClick={() => setActiveTab('web')} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'web' ? 'bg-gradient-to-r from-pink-400 to-pink-300 text-white shadow-lg' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            Web Development
          </button>
          <button onClick={() => setActiveTab('data')} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'data' ? 'bg-gradient-to-r from-pink-400 to-pink-300 text-white shadow-lg' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            Data Science
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'web' ? webProjects : dataProjects).map(project => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
