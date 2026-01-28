
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { ArrowLeft, User, GraduationCap, Code, Briefcase, Users, Layout } from 'lucide-react';

interface FullPortfolioProps {
  onBack: () => void;
}

const FullPortfolio: React.FC<FullPortfolioProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-10 sm:pb-20">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base font-medium">Balik ke Terminal Aja 🙏🏻</span>
          </button>
          <div className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-black to-gray-500">
            Matthew Priantara
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 space-y-16 sm:space-y-24">
        <div className="flex justify-center items-center h-[70vh] text-5xl gap-2">
          <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400">WAIT YAA IT'S STILL IN PROCESS</h1>
          <span>😁</span>
        </div>
        {/* Hero / About */}
        {/* <section id="about" className="flex flex-col md:grid md:grid-cols-3 gap-8 sm:gap-12 items-start">
          <div className="w-full md:col-span-1">
            <div className="md:sticky md:top-28">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <User className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-600" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 sm:mb-2 leading-tight">Matthew Hayunaji Priantara</h1>
              <p className="text-indigo-600 text-sm sm:text-base font-semibold mb-4 sm:mb-6">Software Engineer & UI/UX Designer</p>
              <div className="space-y-2 sm:space-y-4">
                <div className="flex items-center space-x-3 text-slate-500">
                  <span className="text-xs sm:text-sm">📍 Sleman, Yogyakarta</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-500">
                  <span className="text-xs sm:text-sm">🎂 October 7, 2025</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-[10px] sm:text-xs font-bold tracking-widest text-indigo-500 uppercase mb-3 sm:mb-4">About Me</h2>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-light">
              {PORTFOLIO_DATA.personalInfo}
            </p>
          </div>
        </section> */}

        {/* Education & Skills */}
        {/* <div className="flex flex-col md:grid md:grid-cols-2 gap-12 sm:gap-16">
          <section id="education">
            <div className="flex items-center space-x-3 mb-6 sm:mb-8">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
              <h2 className="text-xl sm:text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {PORTFOLIO_DATA.education.map((edu, i) => (
                <div key={i} className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 group">
                  <div className="absolute -left-[7px] sm:-left-[9px] top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-slate-200 group-hover:bg-indigo-600 transition-colors"></div>
                  <p className="text-base sm:text-lg font-semibold text-slate-800 leading-snug">{edu}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="skills">
            <div className="flex items-center space-x-3 mb-6 sm:mb-8">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
              <h2 className="text-xl sm:text-2xl font-bold">Skills</h2>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {PORTFOLIO_DATA.skills.map((skill, i) => (
                <div key={i} className="p-5 sm:p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">{skill.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div> */}

        {/* Experience */}
        {/* <section id="experience">
          <div className="flex items-center space-x-3 mb-10 sm:mb-12">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
            <h2 className="text-xl sm:text-2xl font-bold">Experience</h2>
          </div>
          
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 sm:gap-12">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-400 mb-6 flex items-center">
                <Users className="w-4 h-4 mr-2" /> Organizational
              </h3>
              <div className="space-y-6 sm:space-y-8">
                {PORTFOLIO_DATA.organizationalExperience.map((org, i) => (
                  <div key={i} className="group">
                    <span className="text-[10px] sm:text-xs font-bold text-indigo-600 px-2 py-0.5 bg-indigo-50 rounded mb-2 inline-block">
                      {org.period}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                      {org.title}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
                      {org.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <h3 className="text-base sm:text-lg font-bold text-slate-400 mb-6 flex items-center">
                <Briefcase className="w-4 h-4 mr-2" /> Work & Events
              </h3>
              <div className="space-y-6 sm:space-y-8">
                {PORTFOLIO_DATA.workExperience.map((work, i) => (
                  <div key={i} className="group">
                    <span className="text-[10px] sm:text-xs font-bold text-indigo-600 px-2 py-0.5 bg-indigo-50 rounded mb-2 inline-block">
                      {work.period}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                      {work.title}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Project Highlights */}
        {/* <section id="projects">
          <div className="flex items-center space-x-3 mb-10 sm:mb-12">
            <Layout className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
            <h2 className="text-xl sm:text-2xl font-bold">Project Highlights</h2>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PORTFOLIO_DATA.projectHighlights.map((project, i) => (
              <div key={i} className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="h-40 sm:h-48 bg-slate-100 flex items-center justify-center overflow-hidden">
                   <img 
                    src={`https://picsum.photos/seed/${project.title}/600/400`} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">{project.title}</h3>
                    {project.achievement && (
                      <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shrink-0 ml-2">
                        🏆 Winner
                      </span>
                    )}
                  </div>
                  <p className="text-indigo-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
                    {project.role}
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section> */}
      </main>

      <footer className="mt-20 sm:mt-32 border-t border-slate-200 pt-10 sm:pt-12 text-center text-slate-400 text-[10px] sm:text-xs uppercase tracking-widest">
        <p>© 2026 Matthew Hayunaji Priantara</p>
      </footer>
    </div>
  );
};

export default FullPortfolio;
