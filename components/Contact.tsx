import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 max-w-7xl mx-auto mb-20">
      <h2 className="text-6xl md:text-7xl font-bold text-brand-dark dark:text-brand-cream mb-12">contact.</h2>

      <div className="grid md:grid-cols-2 gap-12 bg-brand-yellow/20 dark:bg-brand-yellow/10 rounded-3xl p-6 md:p-12 border border-brand-dark/10 dark:border-brand-cream/10">
        
        <div className="space-y-8">
            <h3 className="text-3xl font-bold text-brand-dark dark:text-brand-cream">Let's build something scalable together.</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm always open to discussing new opportunities, collaborations, or innovative DevOps challenges. Whether you're hiring or just want to connect about IaC and automation, feel free to reach out.
            </p>

            <a 
                href={`mailto:${SOCIAL_LINKS[0].href.replace('mailto:', '')}`}
                className="inline-flex max-w-full items-center gap-2 md:gap-3 text-lg sm:text-2xl md:text-3xl font-bold underline decoration-brand-yellow decoration-4 underline-offset-4 hover:text-brand-blue dark:hover:text-brand-yellow transition-colors text-brand-dark dark:text-brand-cream break-all"
            >
                {SOCIAL_LINKS[0].href.replace('mailto:', '')}
                <Send className="-rotate-45 shrink-0 w-5 h-5 md:w-6 md:h-6" />
            </a>
        </div>

        <div className="flex flex-col justify-center space-y-6">
            {SOCIAL_LINKS.slice(1).map((link, index) => (
                <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-brand-dark/10 dark:border-brand-cream/10 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all group"
                >
                    <div className="p-3 bg-brand-cream dark:bg-brand-dark rounded-full text-brand-dark dark:text-brand-yellow group-hover:bg-brand-yellow/50 transition-colors">
                        <link.icon size={24} />
                    </div>
                    <div>
                        <span className="block text-sm text-gray-500 dark:text-gray-400 font-mono">{link.label}</span>
                        <span className="block font-bold text-lg text-brand-dark dark:text-brand-cream break-all">{link.display}</span>
                    </div>
                </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;