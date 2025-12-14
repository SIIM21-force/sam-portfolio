import React from 'react';
import { PROJECTS } from '../constants';
import { Star, GitFork, ExternalLink } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <h2 className="text-6xl md:text-7xl font-bold text-brand-dark dark:text-brand-cream mb-12">projects.</h2>

      <div className="grid grid-cols-1 gap-8">
        {PROJECTS.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white dark:bg-white/5 border-2 border-brand-dark dark:border-brand-cream/20 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(253,253,234,1)] hover:-translate-y-1"
          >
            <div className="flex flex-col md:flex-row h-full">
                {/* Decorative Left Side (Visualizing Repo Image) */}
                <div className="md:w-64 bg-blue-50/50 dark:bg-brand-blue/10 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-brand-dark/10 dark:border-brand-cream/10 group-hover:bg-blue-100/50 dark:group-hover:bg-brand-blue/20 transition-colors">
                     <div className="w-24 h-24 bg-brand-blue/10 dark:bg-brand-yellow/10 rounded-full flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="w-6 h-6 bg-brand-blue dark:bg-brand-yellow rounded-sm opacity-60"></div>
                            <div className="w-6 h-6 bg-brand-blue dark:bg-brand-yellow rounded-sm opacity-80"></div>
                            <div className="w-6 h-6 bg-brand-blue dark:bg-brand-yellow rounded-sm opacity-40"></div>
                            <div className="w-6 h-6 bg-brand-blue dark:bg-brand-yellow rounded-sm"></div>
                        </div>
                     </div>
                </div>

                {/* Content Side */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start">
                             <h3 className="text-sm font-mono text-brand-blue dark:text-brand-yellow mb-1">{project.link.replace("https://github.com/", "")}</h3>
                             <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-dark dark:text-brand-cream" />
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:underline decoration-brand-yellow decoration-4 underline-offset-4">
                            {project.title}
                        </h2>
                        
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-brand-gray/30 dark:bg-white/10 rounded-full text-xs font-semibold text-brand-dark dark:text-brand-cream uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm font-mono">
                            <div className="flex items-center gap-1">
                                <Star size={16} />
                                <span>{project.stats?.stars}</span>
                            </div>
                             <div className="flex items-center gap-1">
                                <GitFork size={16} />
                                <span>{project.stats?.forks}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;