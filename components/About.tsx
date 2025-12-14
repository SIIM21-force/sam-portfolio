import React from 'react';
import { SKILLS, PERSONAL_INFO, INTERNSHIPS, EDUCATION } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <h2 className="text-6xl md:text-7xl font-bold text-brand-dark dark:text-brand-cream mb-12">about.</h2>
      
      <div className="space-y-16">
        {/* Intro Text */}
        <div className="max-w-4xl text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200 font-medium">
          <p>{PERSONAL_INFO.summary}</p>
        </div>

        {/* Skills Table */}
        <div className="w-full overflow-hidden rounded-xl border-2 border-brand-dark dark:border-brand-cream/20 bg-white/50 dark:bg-brand-dark/50 backdrop-blur-sm shadow-[8px_8px_0px_0px_rgba(26,26,26,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(253,253,234,0.1)]">
          <div className="bg-brand-gray/30 dark:bg-white/5 p-4 border-b-2 border-brand-dark dark:border-brand-cream/20">
            <h3 className="text-xl font-bold font-mono text-brand-dark dark:text-brand-cream">Core Skills & Tech Stack</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-gray/20 dark:bg-white/5 border-b border-brand-dark/20 dark:border-brand-cream/20">
                  <th className="p-4 font-bold w-1/3 border-r border-brand-dark/20 dark:border-brand-cream/20 text-brand-dark dark:text-brand-cream">Category</th>
                  <th className="p-4 font-bold text-brand-dark dark:text-brand-cream">Key Tools & Technologies</th>
                </tr>
              </thead>
              <tbody>
                {SKILLS.map((skill, index) => (
                  <tr key={index} className="border-b border-brand-dark/10 dark:border-brand-cream/10 last:border-0 hover:bg-white dark:hover:bg-white/10 transition-colors">
                    <td className="p-4 font-semibold border-r border-brand-dark/10 dark:border-brand-cream/10 bg-brand-gray/5 dark:bg-white/5 text-brand-dark dark:text-brand-cream">{skill.category}</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">{skill.tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Experience Section */}
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-bold mb-6 border-l-4 border-brand-blue dark:border-brand-yellow pl-4 text-brand-dark dark:text-brand-cream">Internships</h3>
                <div className="space-y-8">
                    {INTERNSHIPS.map((job, idx) => (
                        <div key={idx} className="relative pl-8 border-l border-brand-dark/30 dark:border-brand-cream/30 pb-2">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-blue dark:bg-brand-yellow"></div>
                            <h4 className="text-xl font-bold text-brand-dark dark:text-brand-cream">{job.role}</h4>
                            <a 
                              href={job.url || "#"} 
                              target={job.url ? "_blank" : undefined}
                              rel={job.url ? "noopener noreferrer" : undefined}
                              className="text-brand-blue dark:text-brand-yellow font-semibold underline decoration-dotted hover:decoration-solid"
                            >
                              {job.company}
                            </a>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mt-1 mb-2">{job.period}</p>
                            <ul className="list-disc ml-4 space-y-1 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                                {job.points.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-6 border-l-4 border-brand-blue dark:border-brand-yellow pl-4 text-brand-dark dark:text-brand-cream">Education & Certifications</h3>
                <div className="space-y-8">
                    {EDUCATION.map((edu, idx) => (
                         <div key={idx} className="relative pl-8 border-l border-brand-dark/30 dark:border-brand-cream/30 pb-2">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-dark dark:bg-brand-cream"></div>
                            <h4 className="text-xl font-bold text-brand-dark dark:text-brand-cream">{edu.degree}</h4>
                            {edu.url ? (
                              <a 
                                href={edu.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="font-semibold block hover:text-brand-blue dark:hover:text-brand-yellow hover:underline transition-colors text-gray-800 dark:text-gray-200"
                              >
                                {edu.institution}
                              </a>
                            ) : (
                              <p className="font-semibold text-gray-800 dark:text-gray-200">{edu.institution}</p>
                            )}
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mt-1 mb-2">{edu.period}</p>
                            <p className="text-brand-blue dark:text-brand-yellow font-medium">{edu.details}</p>
                        </div>
                    ))}
                    
                    <div className="relative pl-8 border-l border-brand-dark/30 dark:border-brand-cream/30">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-dark dark:bg-brand-cream"></div>
                        <h4 className="text-lg font-bold text-brand-dark dark:text-brand-cream">Certifications</h4>
                        <ul className="mt-2 space-y-2 list-disc ml-4 text-sm text-gray-700 dark:text-gray-300">
                             <li>
                                <a 
                                  href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=534DAEAB925B4CA8E2990C6F382878105B7D195B0E8FF83D075FCA92E67A1CF9" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="font-semibold hover:text-brand-blue dark:hover:text-brand-yellow hover:underline transition-colors"
                                >
                                  Oracle Cloud Infrastructure (OCI) 2025 DevOps Professional
                                </a>
                             </li>
                             <li>
                                <a 
                                  href="https://drive.google.com/drive/folders/1KTb-yl4HEYdF7aCAjkcrsGj90TmJ49_a?usp=drive_link" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="font-semibold hover:text-brand-blue dark:hover:text-brand-yellow hover:underline transition-colors"
                                >
                                  Certificate of Skill Competency - Cloud Application Developer (NASSCOM/PMKVY)
                                </a>
                             </li>
                             <li>
                                <a 
                                  href="https://www.hackerrank.com/certificates/dec267da8b9c" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="font-semibold hover:text-brand-blue dark:hover:text-brand-yellow hover:underline transition-colors"
                                >
                                  HackerRank - Python (Basic)
                                </a>
                             </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;