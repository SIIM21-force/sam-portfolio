import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowUpRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 z-10 order-2 md:order-1">
          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-medium">Hello, I'm Samarth,</p>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight text-brand-blue dark:text-brand-yellow transition-colors duration-300">
            DevOps <br/>
            Engineer
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>
          
          <div className="pt-4">
             {/* Resume Button linked to PDF viewer */}
            <a 
              href="https://drive.google.com/file/d/17Wfcz59_TM7x-yH4bOYw41R0cYSA9QV0/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-yellow px-8 py-3 rounded-md text-brand-dark font-bold text-lg border-2 border-brand-dark dark:border-brand-cream shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] dark:shadow-[4px_4px_0px_0px_rgba(253,253,234,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(253,253,234,1)] hover:border-brand-dark dark:hover:border-brand-cream transition-all"
            >
              Resume
              <Download size={20} />
            </a>
          </div>
        </div>

        {/* Right Image - Styled based on Home.png */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Geometric Decorations */}
            <div className="absolute -top-4 -right-4 text-brand-dark dark:text-brand-cream text-4xl font-mono opacity-50 select-none">++<br/>++</div>
            <div className="absolute bottom-4 -left-8 flex gap-1">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="w-1 h-8 bg-brand-dark/20 dark:bg-brand-cream/20 rotate-12 transform"></div>
               ))}
            </div>

            {/* Main Image Container */}
            <div className="w-full h-full rounded-full border-4 border-brand-cream dark:border-brand-dark shadow-2xl overflow-hidden relative z-10 ring-4 ring-black/5 dark:ring-white/10">
              <img 
                src={`${import.meta.env.BASE_URL}images/WhatsApp Image 2024-09-25 at 14.14.39_dae8b487.jpg`}
                alt="Samarth M Katageri" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Circle Outline Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-dark/30 dark:border-brand-cream/30 rounded-full -z-0"></div>
          </div>
        </div>
      </div>

      {/* Decorative Text */}
      <div className="absolute bottom-10 left-0 w-full text-center md:text-left md:px-20 pointer-events-none opacity-20 hidden md:block">
        <span className="font-mono text-sm tracking-widest uppercase text-brand-dark dark:text-brand-cream">Building Scalable Infrastructure</span>
      </div>
    </section>
  );
};

export default Hero;