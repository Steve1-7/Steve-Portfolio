"use client";

import { useState } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      {/* ── NAVIGATION ── */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xl font-bold overflow-hidden border-2 border-cyan-400">
              SR
            </div>
            <span className="text-lg font-semibold">Steve Ronald</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`hover:text-cyan-400 transition-colors ${
                  activeSection === item.toLowerCase() ? "text-cyan-400" : "text-slate-300"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-6 pb-6 pt-3 flex flex-col gap-2 border-t border-slate-800 bg-slate-900/98">
            {[
              { label: "About", icon: "👤", href: "#about" },
              { label: "Projects", icon: "💼", href: "#projects" },
              { label: "Skills", icon: "⚡", href: "#skills" },
              { label: "Contact", icon: "📧", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.label.toLowerCase());
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeSection === item.label.toLowerCase()
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    : "text-slate-300 hover:bg-slate-800/80 hover:text-cyan-400 border border-transparent"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
                {activeSection === item.label.toLowerCase() && (
                  <span className="ml-auto w-2 h-2 bg-cyan-400 rounded-full" />
                )}
              </a>
            ))}

            {/* Social Row */}
            <div className="flex gap-3 mt-3 pt-4 border-t border-slate-800">
              <a href="https://github.com/Steve1-7" target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-xl border border-slate-700 text-slate-400 hover:border-cyan-400/50 hover:text-cyan-400 text-sm font-medium transition-all">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/steve-ronald1710s/" target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-xl border border-slate-700 text-slate-400 hover:border-cyan-400/50 hover:text-cyan-400 text-sm font-medium transition-all">
                LinkedIn
              </a>
              <a href="mailto:stevezuluu@gmail.com"
                className="flex-1 text-center py-2.5 rounded-xl border border-slate-700 text-slate-400 hover:border-cyan-400/50 hover:text-cyan-400 text-sm font-medium transition-all">
                Email
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="relative flex items-center justify-center mb-16">
              <div className="absolute w-72 h-72 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
              <div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-cyan-400/50 animate-spin" style={{ animationDuration: "12s" }} />
              <div className="absolute w-56 h-56 rounded-full bg-cyan-500/10 blur-md" />
              <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(56,189,248,0.5)] z-10">
                <img src="https://i.ibb.co/5gRLQG7C/Whats-App-Image-2025-01-08-at-10-16-10-0b7c5513.jpg" alt="Steve Ronald" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute -bottom-4 z-20 bg-slate-900 border border-slate-700 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-slate-300 font-medium">Available for work</span>
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">Steve Ronald</h1>
            <p className="text-2xl text-cyan-400 mb-4 font-semibold">Full-Stack Developer</p>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">Crafting exceptional digital experiences with modern web technologies. Specializing in e-commerce solutions and custom web applications.</p>
            <div className="flex gap-4 mb-8">
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">Get In Touch</a>
              <a href="#projects" className="px-8 py-3 border border-slate-600 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all">View Work</a>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/Steve1-7" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">GitHub</a>
              <a href="https://www.linkedin.com/in/steve-ronald1710s/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">LinkedIn</a>
              <a href="mailto:stevezuluu@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Email</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 px-6 bg-slate-800/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Who I Am</p>
            <h2 className="text-5xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-16">
                <div className="absolute w-72 h-72 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
                <div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-cyan-400/50 animate-spin" style={{ animationDuration: "12s" }} />
                <div className="absolute w-56 h-56 rounded-full bg-cyan-500/10 blur-md" />
                <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(56,189,248,0.5)] z-10">
                  <img src="https://i.ibb.co/1GVHNhmj/hyb.jpg" alt="Steve Ronald" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="absolute -bottom-4 z-20 bg-slate-900 border border-slate-700 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-slate-300 font-medium">Available for work</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full mt-4">
                <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 text-center hover:border-cyan-500/50 transition-all">
                  <p className="text-3xl font-bold text-cyan-400 mb-1">3+</p>
                  <p className="text-xs text-slate-400 leading-tight">Years Experience</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 text-center hover:border-purple-500/50 transition-all">
                  <p className="text-3xl font-bold text-purple-400 mb-1">15+</p>
                  <p className="text-xs text-slate-400 leading-tight">Projects Delivered</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 text-center hover:border-orange-500/50 transition-all">
                  <p className="text-3xl font-bold text-orange-400 mb-1">10+</p>
                  <p className="text-xs text-slate-400 leading-tight">Happy Clients</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">I build things for the <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">web.</span></h3>
              <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                <p>I'm a passionate full-stack developer with a focus on building modern, responsive web applications that drive real business results. I specialize in crafting seamless digital experiences from concept to deployment.</p>
                <p>With deep expertise in both frontend and backend technologies, I've successfully delivered e-commerce platforms, corporate websites, and developer tools for clients across various industries.</p>
                <p>When I'm not coding, I'm constantly learning new technologies and pushing the boundaries of what's possible on the web.</p>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="mailto:stevezuluu@gmail.com" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-all">Hire Me</a>
                <a href="#projects" className="px-6 py-3 border border-slate-600 rounded-lg font-semibold text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all">See My Work</a>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-24" />
          <CareerTimeline />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-24" />
          <CoreStrengths />
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">My Work</p>
            <h2 className="text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">A showcase of my real-world projects — from full e-commerce platforms to corporate websites, design agencies, and developer tools.</p>
          </div>

          {/* Large Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="group relative bg-slate-800/60 rounded-3xl border border-slate-700 overflow-hidden hover:border-amber-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-64 bg-slate-900 overflow-hidden">
                <iframe loading="lazy" src="http://stevemediaco.unaux.com" className="w-full h-full border-0" style={{ width: "133%", height: "133%", transform: "scale(0.75)", transformOrigin: "top left" }} title="King's Barbershop" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-amber-500/90 text-slate-900 text-xs font-bold rounded-full">✂️ Barbershop</span>
                  <span className="px-3 py-1 bg-slate-900/90 text-amber-400 text-xs font-bold rounded-full border border-amber-500/50">🛍️ E-Commerce</span>
                </div>
                <a href="http://stevemediaco.unaux.com" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 px-3 py-1.5 bg-slate-900/90 border border-slate-600 text-xs rounded-lg hover:border-amber-400 hover:text-amber-400 transition-all">Open Site →</a>
              </div>
              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold">King's Barbershop</h3>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">Live</span>
                  </div>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">A full-featured barbershop website with an integrated e-commerce store. Customers can browse services, book appointments online, shop for grooming products, and manage their orders — all in one seamless platform.</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {["Online Booking", "Product Store", "Payment Integration", "Service Listings"].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0" />{f}</div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Next.js", "Stripe", "Tailwind CSS", "MongoDB"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700/80 text-slate-300 rounded-full text-xs">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/Steve1-7" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Code →</a>
                  <a href="http://stevemediaco.unaux.com" target="_blank" rel="noopener noreferrer" className="text-sm text-amber-400 hover:text-amber-300 transition-colors font-medium">Live Demo →</a>
                </div>
              </div>
            </div>

            <div className="group relative bg-slate-800/60 rounded-3xl border border-slate-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-64 bg-slate-900 overflow-hidden">
                <iframe loading="lazy" src="https://tory-cyan-2kxwuiasql.edgeone.app" className="w-full h-full border-0" style={{ width: "133%", height: "133%", transform: "scale(0.75)", transformOrigin: "top left" }} title="Saseka Woodworks" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-emerald-500/90 text-slate-900 text-xs font-bold rounded-full">🪵 Woodworks</span>
                  <span className="px-3 py-1 bg-slate-900/90 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/50">🛍️ E-Commerce</span>
                </div>
                <a href="https://tory-cyan-2kxwuiasql.edgeone.app" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 px-3 py-1.5 bg-slate-900/90 border border-slate-600 text-xs rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-all">Open Site →</a>
              </div>
              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold">Saseka Woodworks</h3>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">Live</span>
                  </div>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">A premium e-commerce platform for custom woodwork products. Showcases handcrafted furniture and décor with a product gallery, custom quote requests, client portfolio, and integrated online payments.</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {["Product Gallery", "Custom Quotes", "E-Commerce Store", "Portfolio Showcase"].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />{f}</div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Node.js", "PostgreSQL", "Stripe"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700/80 text-slate-300 rounded-full text-xs">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/Steve1-7" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Code →</a>
                  <a href="https://tory-cyan-2kxwuiasql.edgeone.app" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium">Live Demo →</a>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "C4 DesignHub", url: "https://c4designhub1.netlify.app", badge: "🎨 Design Agency", badgeColor: "bg-rose-500/90 text-white", border: "hover:border-rose-500/50", glow: "from-rose-500/5", linkColor: "text-rose-400 hover:text-rose-300", tech: ["Next.js", "Sanity CMS", "GSAP"], hoverBorder: "hover:border-rose-400 hover:text-rose-400" },
              { title: "Omnicreva", url: "https://omnicreva.ct.ws/", badge: "🌐 Corporate", badgeColor: "bg-purple-500/90 text-white", border: "hover:border-purple-500/50", glow: "from-purple-500/5", linkColor: "text-purple-400 hover:text-purple-300", tech: ["Next.js", "Framer Motion", "Tailwind"], hoverBorder: "hover:border-purple-400 hover:text-purple-400" },
              { title: "Patient Dashboard", url: "https://patient-dashboard.tiiny.site/", badge: "🏥 HealthTech", badgeColor: "bg-cyan-500/90 text-slate-900", border: "hover:border-cyan-500/50", glow: "from-cyan-500/5", linkColor: "text-cyan-400 hover:text-cyan-300", tech: ["React", "TypeScript", "Chart.js"], hoverBorder: "hover:border-cyan-400 hover:text-cyan-400" },
            ].map((project) => (
              <div key={project.title} className={`group relative bg-slate-800/60 rounded-2xl border border-slate-700 overflow-hidden ${project.border} transition-all duration-500`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative h-44 bg-slate-900 overflow-hidden">
                  <iframe loading="lazy" src={project.url} className="w-full h-full border-0" style={{ width: "133%", height: "133%", transform: "scale(0.75)", transformOrigin: "top left" }} title={project.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent pointer-events-none" />
                  <span className={`absolute top-3 left-3 px-2 py-1 ${project.badgeColor} text-xs font-bold rounded-full`}>{project.badge}</span>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={`absolute top-3 right-3 px-2 py-1 bg-slate-900/90 border border-slate-600 text-xs rounded-lg transition-all ${project.hoverBorder}`}>Open →</a>
                </div>
                <div className="relative z-10 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-green-500/10 border border-green-500/30 rounded-full">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-xs">Live</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-slate-700/80 text-slate-300 rounded-full text-xs">{tech}</span>
                    ))}
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={`text-sm font-medium transition-colors ${project.linkColor}`}>Live Demo →</a>
                </div>
              </div>
            ))}
          </div>

          {/* Small Cards Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative bg-slate-800/60 rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-48 shrink-0 bg-slate-900 overflow-hidden">
                <iframe loading="lazy" src="https://stevemediaco.zya.me" className="w-full h-full border-0" style={{ width: "200%", height: "200%", transform: "scale(0.5)", transformOrigin: "top left" }} title="Stevemediaco" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-800/80 pointer-events-none" />
              </div>
              <div className="relative z-10 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">Stevemediaco</h3>
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-green-500/10 border border-green-500/30 rounded-full">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs">Live</span>
                  </div>
                </div>
                <span className="inline-block mb-3 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">🎬 Media Agency</span>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">Media and creative agency site showcasing services, portfolio, and client work.</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["HTML/CSS", "JavaScript", "Vercel"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-slate-700/80 text-slate-300 rounded-full text-xs">{tech}</span>
                  ))}
                </div>
                <a href="https://stevemediaco.zya.me" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium">Live Demo →</a>
              </div>
            </div>

            <div className="group relative bg-slate-800/60 rounded-2xl border border-slate-700 overflow-hidden hover:border-yellow-500/50 transition-all duration-500 flex">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-48 shrink-0 bg-gradient-to-br from-blue-900/50 to-slate-900 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-5xl mb-2">📊</div>
                  <p className="text-xs text-slate-400">Preview coming soon</p>
                </div>
              </div>
              <div className="relative z-10 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">Dev Career Dashboard</h3>
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="text-yellow-400 text-xs">Building</span>
                  </div>
                </div>
                <span className="inline-block mb-3 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">🚧 Under Development</span>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">Career tracking tool for developers — job applications, skill assessments, and interview prep.</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Next.js", "TypeScript", "Prisma", "tRPC"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-slate-700/80 text-slate-300 rounded-full text-xs">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/Steve1-7" target="_blank" rel="noopener noreferrer" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors font-medium">Watch Progress →</a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-400 mb-4">Want to see more of my work?</p>
            <a href="https://github.com/Steve1-7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 rounded-xl font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all">View All on GitHub →</a>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">What I Know</p>
            <h2 className="text-5xl font-bold mb-6">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">A full toolkit spanning frontend, backend, databases, design, and digital marketing — built through real-world projects and self-driven learning.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="group relative bg-slate-900/60 rounded-3xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/20">🖥️</div>
                  <div>
                    <h3 className="text-2xl font-bold">Frontend</h3>
                    <p className="text-slate-400 text-sm">UI & User Experience</p>
                  </div>
                  <span className="ml-auto px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs rounded-full font-medium">8 Skills</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "HTML / CSS", level: 95, color: "bg-orange-400" },
                    { name: "JavaScript", level: 92, color: "bg-yellow-400" },
                    { name: "React", level: 90, color: "bg-cyan-400" },
                    { name: "Tailwind CSS", level: 90, color: "bg-teal-400" },
                    { name: "Next.js", level: 88, color: "bg-blue-400" },
                    { name: "TypeScript", level: 80, color: "bg-blue-500" },
                    { name: "Figma", level: 75, color: "bg-purple-400" },
                    { name: "Vue.js", level: 70, color: "bg-green-400" },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${skill.color} rounded-full`} style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 w-0 group-hover:w-full transition-all duration-700 rounded-full" />
            </div>

            <div className="group relative bg-slate-900/60 rounded-3xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/20">⚙️</div>
                  <div>
                    <h3 className="text-2xl font-bold">Backend & Databases</h3>
                    <p className="text-slate-400 text-sm">Server & Data Layer</p>
                  </div>
                  <span className="ml-auto px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-full font-medium">6 Skills</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Node.js", level: 85, color: "bg-green-400" },
                    { name: "Express", level: 82, color: "bg-emerald-400" },
                    { name: "MongoDB", level: 78, color: "bg-green-500" },
                    { name: "PostgreSQL", level: 75, color: "bg-blue-400" },
                    { name: "MySQL", level: 72, color: "bg-orange-400" },
                    { name: "PHP", level: 65, color: "bg-indigo-400" },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${skill.color} rounded-full`} style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 w-0 group-hover:w-full transition-all duration-700 rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { title: "Dev Tools", subtitle: "Build & Deploy", icon: "🛠️", color: "from-orange-400 to-red-500", border: "hover:border-orange-500/50", sweep: "from-orange-400 to-red-500", tools: [{ name: "Git", icon: "📦" }, { name: "Docker", icon: "🐳" }, { name: "Vercel", icon: "▲" }, { name: "REST APIs", icon: "🔗" }], toolBorder: "hover:border-orange-500/50" },
              { title: "Design", subtitle: "Visual & Creative", icon: "🎨", color: "from-pink-400 to-rose-500", border: "hover:border-pink-500/50", sweep: "from-pink-400 to-rose-500", tools: [{ name: "Figma", icon: "🖊️" }, { name: "Photoshop", icon: "🖼️" }, { name: "3D Modelling", icon: "🧊" }, { name: "Graphic Design", icon: "✏️" }], toolBorder: "hover:border-pink-500/50" },
              { title: "Marketing", subtitle: "Growth & Visibility", icon: "📣", color: "from-purple-400 to-indigo-500", border: "hover:border-purple-500/50", sweep: "from-purple-400 to-indigo-500", tools: [{ name: "Digital Marketing", icon: "📱" }, { name: "SEO", icon: "🔍" }, { name: "Content Strategy", icon: "📝" }, { name: "Brand Identity", icon: "💎" }], toolBorder: "hover:border-purple-500/50" },
            ].map((group) => (
              <div key={group.title} className={`group relative bg-slate-900/60 rounded-3xl border border-slate-700 ${group.border} transition-all duration-500 overflow-hidden p-8`}>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>{group.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{group.title}</h3>
                      <p className="text-slate-400 text-xs">{group.subtitle}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {group.tools.map((tool) => (
                      <div key={tool.name} className={`flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-xl px-3 py-2.5 ${group.toolBorder} transition-all duration-300`}>
                        <span className="text-lg">{tool.icon}</span>
                        <span className="text-slate-300 text-sm font-medium">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${group.sweep} w-0 group-hover:w-full transition-all duration-700 rounded-full`} />
              </div>
            ))}
          </div>

          <div className="bg-slate-900/60 border border-slate-700 rounded-3xl p-8">
            <p className="text-center text-slate-400 text-sm uppercase tracking-widest mb-6 font-semibold">Full Tech Stack At A Glance</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "React", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
                { name: "Next.js", color: "text-white border-slate-500/50 bg-slate-700/50" },
                { name: "TypeScript", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
                { name: "JavaScript", color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10" },
                { name: "Tailwind CSS", color: "text-teal-400 border-teal-500/30 bg-teal-500/10" },
                { name: "Vue.js", color: "text-green-400 border-green-500/30 bg-green-500/10" },
                { name: "HTML/CSS", color: "text-orange-400 border-orange-500/30 bg-orange-500/10" },
                { name: "Node.js", color: "text-green-400 border-green-500/30 bg-green-500/10" },
                { name: "Express", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
                { name: "PostgreSQL", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
                { name: "MongoDB", color: "text-green-500 border-green-600/30 bg-green-500/10" },
                { name: "MySQL", color: "text-orange-400 border-orange-500/30 bg-orange-500/10" },
                { name: "PHP", color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10" },
                { name: "Git", color: "text-red-400 border-red-500/30 bg-red-500/10" },
                { name: "Docker", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
                { name: "Figma", color: "text-pink-400 border-pink-500/30 bg-pink-500/10" },
                { name: "Photoshop", color: "text-blue-500 border-blue-600/30 bg-blue-500/10" },
                { name: "3D Modelling", color: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
                { name: "Digital Marketing", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
                { name: "SEO", color: "text-rose-400 border-rose-500/30 bg-rose-500/10" },
                { name: "Graphic Design", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
              ].map((tag) => (
                <span key={tag.name} className={`px-4 py-2 rounded-full border text-sm font-medium ${tag.color} hover:scale-110 transition-transform duration-200 cursor-default`}>{tag.name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-slate-400 mb-10">Have a project in mind? I'd love to hear about it. Drop me a line and let's create something amazing together.</p>
          <a href="mailto:stevezuluu@gmail.com" className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all mb-16">Send Message</a>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📧", label: "Email", value: "stevezuluu@gmail.com", href: "mailto:stevezuluu@gmail.com", color: "hover:border-cyan-500/50" },
              { icon: "💼", label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/steve-ronald1710s/", color: "hover:border-blue-500/50" },
              { icon: "💻", label: "GitHub", value: "View my code", href: "https://github.com/Steve1-7", color: "hover:border-purple-500/50" },
            ].map((contact) => (
              <div key={contact.label} className={`bg-slate-800/50 p-6 rounded-xl border border-slate-700 ${contact.color} transition-all`}>
                <div className="text-3xl mb-3">{contact.icon}</div>
                <h3 className="font-bold mb-2">{contact.label}</h3>
                <a href={contact.href} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm">{contact.value}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-2">© 2025 Steve Ronald. Built with Next.js & Tailwind CSS</p>
          <p className="text-sm">Crafted with ❤️ and lots of ☕ | Open to new opportunities</p>
        </div>
      </footer>

    </div>
  );
}

/* ═══════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════ */

function CareerTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const timelineData = [
    { date: "High School", title: "Early Creative Spark", icon: "💡", color: "from-yellow-400 to-orange-500", border: "border-yellow-500/50", glow: "shadow-yellow-500/20", accent: "text-yellow-400", bg: "bg-yellow-500/10", text: "Discovered creativity and curiosity for computers using school systems before owning one personally.", skills: ["Curiosity", "Problem Solving", "Creative Thinking"] },
    { date: "2019", title: "Self-Taught Digital Foundations", icon: "🖥️", color: "from-cyan-400 to-blue-500", border: "border-cyan-500/50", glow: "shadow-cyan-500/20", accent: "text-cyan-400", bg: "bg-cyan-500/10", text: "Independently learned graphic design, digital marketing, and 3D modelling through online platforms.", skills: ["Graphic Design", "Digital Marketing", "3D Modelling"] },
    { date: "2019 – 2020", title: "Greenland Projects", icon: "💼", color: "from-green-400 to-emerald-500", border: "border-green-500/50", glow: "shadow-green-500/20", accent: "text-green-400", bg: "bg-green-500/10", text: "Digital Marketer and Assistant Web Manager until closure during COVID-19 lockdown.", skills: ["Web Management", "Digital Marketing", "Client Work"] },
    { date: "2021 – 2023", title: "Saseka Woodworks", icon: "🪵", color: "from-amber-400 to-orange-500", border: "border-amber-500/50", glow: "shadow-amber-500/20", accent: "text-amber-400", bg: "bg-amber-500/10", text: "Part-time Graphic Designer and Web Manager, strengthening brand identity and online presence.", skills: ["Brand Identity", "Web Design", "Content Creation"] },
    { date: "2024 – 2025", title: "Shagary Petroleum", icon: "⚙️", color: "from-purple-400 to-pink-500", border: "border-purple-500/50", glow: "shadow-purple-500/20", accent: "text-purple-400", bg: "bg-purple-500/10", text: "Web Developer and Graphic Designer, delivering design-led digital solutions.", skills: ["Web Development", "UI Design", "Corporate Branding"] },
    { date: "Present", title: "Freelance Full-Stack Developer", icon: "🚀", color: "from-rose-400 to-red-500", border: "border-rose-500/50", glow: "shadow-rose-500/20", accent: "text-rose-400", bg: "bg-rose-500/10", text: "Building full-stack, AI-driven, and data-powered applications while expanding technical mastery.", skills: ["Full-Stack Dev", "AI Integration", "E-Commerce"] },
  ];

  return (
    <div className="mb-24">
      <div className="text-center mb-16">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">My Journey</p>
        <h3 className="text-4xl font-bold mb-4">Career Timeline</h3>
        <p className="text-slate-400 max-w-xl mx-auto">From early creativity to full-stack development across design, data, AI, and software engineering.</p>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-6" />
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent z-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="group relative cursor-pointer transition-all duration-500"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="hidden lg:flex absolute -top-16 left-1/2 -translate-x-1/2 flex-col items-center z-10">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-xs font-bold text-white shadow-lg`}>{index + 1}</div>
                <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
              </div>
              <div className={`relative bg-slate-900/60 rounded-2xl border p-6 transition-all duration-500 overflow-hidden ${hoveredIndex === index ? `${item.border} shadow-xl` : "border-slate-700"} ${activeIndex === index ? "ring-1 ring-cyan-400/30" : ""}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} opacity-5 rounded-bl-full transition-all duration-500 group-hover:opacity-10 group-hover:w-32 group-hover:h-32`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.bg} ${item.accent} border ${item.border}`}>{item.date}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.text}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-800 text-slate-400 text-xs rounded-full border border-slate-700">{skill}</span>
                    ))}
                  </div>
                  <div className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className={`mt-2 p-4 rounded-xl ${item.bg} border ${item.border}`}>
                      <p className={`text-sm font-semibold ${item.accent} mb-2`}>Key Takeaway</p>
                      <p className="text-slate-300 text-sm">Every step in this journey built the foundation for the next — shaping the developer, designer, and problem solver I am today.</p>
                    </div>
                  </div>
                  <button className={`mt-3 flex items-center gap-1 text-xs font-medium ${item.accent}`}>
                    {activeIndex === index ? <><span>Show less</span><span>↑</span></> : <><span>Learn more</span><span>↓</span></>}
                  </button>
                </div>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${item.color} transition-all duration-700 ${hoveredIndex === index ? "w-full" : "w-0"}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-slate-900/60 border border-slate-700 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-slate-300">Journey Progress</p>
            <p className="text-sm text-cyan-400 font-bold">High School → Present</p>
          </div>
          <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-yellow-400 via-cyan-400 via-green-400 via-amber-400 via-purple-400 to-rose-400 rounded-full animate-pulse" />
          </div>
          <div className="flex justify-between mt-3">
            {timelineData.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${item.color}`} />
                <span className="text-xs text-slate-500 hidden md:block">{item.date.split("–")[0].trim()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CoreStrengths() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Development", "Design", "Marketing"];

  const strengths = [
    { icon: "💻", title: "Web Development", category: "Development", color: "from-cyan-400 to-blue-500", border: "hover:border-cyan-500/50", glow: "from-cyan-500/10 to-blue-500/0", bar: "from-cyan-400 to-blue-500", shadow: "shadow-cyan-500/20", accent: "text-cyan-400", bg: "bg-cyan-500/10", tagBorder: "border-cyan-500/30", description: "Crafting responsive, modern websites with clean architecture and seamless user experiences across all devices.", features: ["Responsive Design", "SEO Optimized", "Fast Load Times", "Cross-browser Compatible"], tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"], stat: "20+ Sites Built" },
    { icon: "📱", title: "App Development", category: "Development", color: "from-violet-400 to-purple-600", border: "hover:border-violet-500/50", glow: "from-violet-500/10 to-purple-500/0", bar: "from-violet-400 to-purple-500", shadow: "shadow-violet-500/20", accent: "text-violet-400", bg: "bg-violet-500/10", tagBorder: "border-violet-500/30", description: "Building full-featured web applications with rich interactivity, real-time data, and scalable backends.", features: ["Real-time Features", "REST & GraphQL APIs", "Authentication", "Cloud Deployment"], tags: ["Node.js", "Express", "MongoDB", "PostgreSQL"], stat: "10+ Apps Launched" },
    { icon: "🛒", title: "E-Commerce", category: "Development", color: "from-emerald-400 to-teal-500", border: "hover:border-emerald-500/50", glow: "from-emerald-500/10 to-teal-500/0", bar: "from-emerald-400 to-teal-500", shadow: "shadow-emerald-500/20", accent: "text-emerald-400", bg: "bg-emerald-500/10", tagBorder: "border-emerald-500/30", description: "End-to-end online stores with payment integration, inventory management, and conversion-optimized UX.", features: ["Payment Gateways", "Inventory Systems", "Order Management", "Product Catalogues"], tags: ["Stripe", "Next.js", "Prisma", "MySQL"], stat: "5+ Stores Live" },
    { icon: "⚙️", title: "Software Development", category: "Development", color: "from-orange-400 to-red-500", border: "hover:border-orange-500/50", glow: "from-orange-500/10 to-red-500/0", bar: "from-orange-400 to-red-500", shadow: "shadow-orange-500/20", accent: "text-orange-400", bg: "bg-orange-500/10", tagBorder: "border-orange-500/30", description: "Developing robust tools, dashboards, and data-driven software solutions tailored to business workflows.", features: ["Custom Dashboards", "Data Pipelines", "Automation Tools", "API Integrations"], tags: ["TypeScript", "Docker", "REST APIs", "Git"], stat: "15+ Tools Built" },
    { icon: "🎨", title: "Graphic Design", category: "Design", color: "from-pink-400 to-rose-500", border: "hover:border-pink-500/50", glow: "from-pink-500/10 to-rose-500/0", bar: "from-pink-400 to-rose-500", shadow: "shadow-pink-500/20", accent: "text-pink-400", bg: "bg-pink-500/10", tagBorder: "border-pink-500/30", description: "Creating compelling visual assets — logos, brand kits, posters, and marketing materials that make an impact.", features: ["Logo Design", "Brand Identity", "Print & Digital", "Social Media Assets"], tags: ["Photoshop", "Figma", "Illustrator", "Canva"], stat: "50+ Designs Made" },
    { icon: "🖊️", title: "UI/UX Design", category: "Design", color: "from-purple-400 to-pink-500", border: "hover:border-purple-500/50", glow: "from-purple-500/10 to-pink-500/0", bar: "from-purple-400 to-pink-500", shadow: "shadow-purple-500/20", accent: "text-purple-400", bg: "bg-purple-500/10", tagBorder: "border-purple-500/30", description: "Designing pixel-perfect, human-centered interfaces that are intuitive, accessible, and beautiful on every screen.", features: ["Wireframing", "Prototyping", "User Research", "Design Systems"], tags: ["Figma", "User Testing", "Accessibility", "Motion"], stat: "30+ UI Projects" },
    { icon: "🧊", title: "3D Modelling", category: "Design", color: "from-sky-400 to-indigo-500", border: "hover:border-sky-500/50", glow: "from-sky-500/10 to-indigo-500/0", bar: "from-sky-400 to-indigo-500", shadow: "shadow-sky-500/20", accent: "text-sky-400", bg: "bg-sky-500/10", tagBorder: "border-sky-500/30", description: "Building 3D assets and visual concepts for products, architectural renders, and creative digital projects.", features: ["Product Renders", "3D Assets", "Visual Concepts", "Scene Composition"], tags: ["Blender", "3D Design", "Rendering", "Texturing"], stat: "3D Since 2019" },
    { icon: "📣", title: "Digital Marketing", category: "Marketing", color: "from-amber-400 to-orange-500", border: "hover:border-amber-500/50", glow: "from-amber-500/10 to-orange-500/0", bar: "from-amber-400 to-orange-500", shadow: "shadow-amber-500/20", accent: "text-amber-400", bg: "bg-amber-500/10", tagBorder: "border-amber-500/30", description: "Driving online growth through strategic campaigns, content planning, and data-driven marketing decisions.", features: ["Campaign Strategy", "Content Planning", "Analytics", "Paid Ads"], tags: ["Meta Ads", "Google Ads", "Analytics", "Email Marketing"], stat: "Since 2019" },
    { icon: "🔍", title: "SEO", category: "Marketing", color: "from-lime-400 to-green-500", border: "hover:border-lime-500/50", glow: "from-lime-500/10 to-green-500/0", bar: "from-lime-400 to-green-500", shadow: "shadow-lime-500/20", accent: "text-lime-400", bg: "bg-lime-500/10", tagBorder: "border-lime-500/30", description: "Optimizing websites to rank higher on search engines, drive organic traffic, and increase visibility.", features: ["On-page SEO", "Technical SEO", "Keyword Research", "Link Building"], tags: ["Google Search", "Schema", "Core Web Vitals", "Analytics"], stat: "Top Rankings Achieved" },
  ];

  const filtered = filter === "All" ? strengths : strengths.filter((s) => s.category === filter);

  return (
    <div>
      <div className="text-center mb-14">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">What I Bring</p>
        <h3 className="text-4xl font-bold mb-4">My Core Strengths</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6" />
        <p className="text-slate-400 mt-4 max-w-xl mx-auto">A multidisciplinary skill set spanning development, design, and digital growth — built to deliver complete solutions from concept to launch.</p>
      </div>
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {filters.map((f) => (
          <button key={f} onClick={() => { setFilter(f); setActiveCard(null); }}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${filter === f ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-lg shadow-cyan-500/25" : "bg-slate-900/60 border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400"}`}>
            {f === "All" && "✦ "}{f === "Development" && "⚙️ "}{f === "Design" && "🎨 "}{f === "Marketing" && "📣 "}
            {f}<span className="ml-2 text-xs opacity-60">({f === "All" ? strengths.length : strengths.filter(s => s.category === f).length})</span>
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, index) => (
          <div key={index} onClick={() => setActiveCard(activeCard === index ? null : index)}
            className={`group relative bg-slate-900/60 rounded-2xl border border-slate-700 ${item.border} p-7 transition-all duration-500 overflow-hidden cursor-pointer ${activeCard === index ? "ring-1 ring-cyan-400/40 scale-[1.02]" : "hover:scale-[1.01]"}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} opacity-5 rounded-bl-full group-hover:opacity-10 group-hover:w-32 group-hover:h-32 transition-all duration-500`} />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg ${item.shadow} group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.bg} ${item.accent} border ${item.tagBorder}`}>{item.category}</span>
                  <span className="text-xs text-slate-500 font-medium">{item.stat}</span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
              <div className="grid grid-cols-2 gap-1.5 mb-4">
                {item.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span className={item.accent}>✓</span>{f}
                  </div>
                ))}
              </div>
              <div className={`overflow-hidden transition-all duration-500 ${activeCard === index ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className={`p-3 rounded-xl ${item.bg} border ${item.tagBorder} mb-3`}>
                  <p className={`text-xs font-semibold ${item.accent} mb-2`}>Tech Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium ${item.accent}`}>{activeCard === index ? "▲ Less info" : "▼ Tech stack"}</span>
                <div className={`h-0.5 bg-gradient-to-r ${item.bar} transition-all duration-700 rounded-full ${activeCard === index ? "w-16" : "w-8 group-hover:w-16"}`} />
              </div>
            </div>
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${item.bar} transition-all duration-700 w-0 group-hover:w-full rounded-full`} />
          </div>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Dev Skills", count: "4", icon: "⚙️", color: "text-cyan-400" },
          { label: "Design Skills", count: "3", icon: "🎨", color: "text-pink-400" },
          { label: "Marketing Skills", count: "2", icon: "📣", color: "text-amber-400" },
          { label: "Years Active", count: "5+", icon: "🚀", color: "text-purple-400" },
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900/60 border border-slate-700 rounded-2xl p-5 text-center hover:border-slate-600 transition-all">
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.count}</div>
            <div className="text-slate-400 text-xs">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-slate-700 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-2xl font-bold mb-2">Ready to start a project?</h4>
          <p className="text-slate-400">I'm currently available for freelance work and exciting new opportunities.</p>
        </div>
        <a href="mailto:stevezuluu@gmail.com" className="shrink-0 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all whitespace-nowrap">Let's Talk →</a>
      </div>
    </div>
  );
}
