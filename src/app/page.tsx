import { personalInfo, stats, experience, skillCategories, featuredProjects } from "@/data/resume-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-6 sm:px-24">
      {/* Hero Section */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center mt-12 mb-24 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-md pb-2 text-gradient">
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
          {personalInfo.title}
        </h2>
        <p className="max-w-2xl text-lg text-gray-400 mb-12 leading-relaxed">
          {personalInfo.summary}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-neural-surface border border-neural-border p-6 rounded-xl shadow-lg glow-cyan transition-transform hover:-translate-y-1 duration-300">
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="w-full max-w-5xl mb-24">
        <h3 className="text-3xl font-bold mb-12 text-center border-b border-neural-border pb-4 w-full">Career Architecture</h3>
        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row gap-8 items-start group">
              {/* Timeline dot/line */}
              <div className="hidden md:flex flex-col items-center h-full pt-2">
                <div 
                  className="w-4 h-4 rounded-full z-10 transition-shadow duration-500 delay-100" 
                  style={{ backgroundColor: exp.domainColor, boxShadow: `0 0 10px ${exp.domainColor}, 0 0 20px ${exp.domainColor}` }} 
                />
                {idx !== experience.length - 1 && <div className="w-0.5 h-full bg-neural-border mt-2 flex-grow" />}
              </div>
              
              <div className="flex-1 bg-neural-surface border border-neural-border rounded-2xl p-8 hover:border-neural-cyan transition-colors duration-300 group-hover:glow-cyan">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-1 text-white">{exp.title}</h4>
                    <span className="text-lg font-medium tracking-wide" style={{ color: exp.domainColor }}>{exp.company}</span>
                    <span className="text-gray-500 text-sm ml-2 px-2 py-1 bg-neural-bg rounded-md border border-neural-border tracking-wider">{exp.domain}</span>
                  </div>
                  <div className="text-gray-400 font-medium bg-neural-card px-4 py-2 rounded-lg border border-neural-border text-sm flex items-center">
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 font-medium text-[15px] leading-relaxed border-l-2 pl-4 border-neural-purple">
                  {exp.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start text-gray-400">
                      <span className="mr-2 opacity-50 block mt-1">▸</span>
                      <span className="text-[14.5px] leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neural-border/50">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-xs font-semibold px-3 py-1 bg-neural-card text-gray-300 rounded border border-neural-border uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                  <div className="ml-auto text-xs flex items-center gap-2">
                    <span className="opacity-70 text-gray-400">ACCURACY:</span>
                    <span className="font-mono text-green-400">{exp.accuracy}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="w-full max-w-5xl mb-24">
        <h3 className="text-3xl font-bold mb-12 text-center border-b border-neural-border pb-4 w-full">Skill Matrix</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-neural-surface rounded-xl p-6 border border-neural-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-[50px] transition-opacity duration-500 group-hover:opacity-30" style={{ backgroundColor: cat.color }} />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <span className="text-2xl">{cat.icon}</span>
                <h4 className="text-xl font-bold">{cat.name}</h4>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 rounded-md text-sm font-medium border border-opacity-30 transition-colors"
                    style={{ backgroundColor: `${cat.color}10`, borderColor: cat.color, color: "#f8fafc" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="w-full max-w-5xl mb-24">
        <h3 className="text-3xl font-bold mb-12 text-center border-b border-neural-border pb-4 w-full">Featured Architecture</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((proj, idx) => (
            <div key={idx} className="bg-neural-surface border border-neural-border rounded-xl p-6 flex flex-col h-full hover:glow-cyan transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold leading-tight" style={{ color: proj.domainColor }}>{proj.title}</h4>
                <div className="text-xs px-2 py-1 rounded bg-neural-card border border-neural-border tracking-wider opacity-80 whitespace-nowrap ml-2">
                  {proj.client}
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4 flex-grow loading-relaxed">{proj.description}</p>
              <div className="text-sm font-medium text-white mb-6 p-3 bg-neural-card rounded-lg border-l-2" style={{ borderLeftColor: proj.domainColor }}>
                <span className="opacity-50 block text-xs uppercase tracking-wider mb-1">Impact</span>
                {proj.impact}
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs bg-neural-bg px-2 py-1 rounded border border-neural-border text-gray-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Attribution */}
      <footer className="w-full mt-12 py-8 border-t border-neural-border text-center text-gray-500 text-sm flex flex-col justify-center items-center gap-2">
        <div className="font-mono opacity-60">System.out.println("Powered by Data.");</div>
        <div>
          Built by <a href="https://www.intelliforge.tech/" target="_blank" rel="noreferrer" className="text-neural-cyan hover:underline font-medium hover:text-white transition-colors">IntelliForge AI</a>
        </div>
        <div className="mt-2 text-xs">
          Want a premium profile like this? <a href="https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t" target="_blank" rel="noreferrer" className="text-neural-purple hover:underline hover:text-white">Join our community</a>
        </div>
      </footer>
    </main>
  );
}
