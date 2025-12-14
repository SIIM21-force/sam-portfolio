import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Offset for fixed header (approx 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-20 py-6 transition-all duration-300 backdrop-blur-md bg-brand-cream/80 dark:bg-brand-dark/80 border-b border-brand-dark/5 dark:border-brand-cream/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, '#home')}
          className="text-xl font-bold text-brand-blue dark:text-brand-yellow tracking-tight hover:opacity-80 transition-opacity"
        >
          Samarth M Katageri
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-sm font-mono uppercase tracking-wider text-brand-dark dark:text-brand-cream hover:text-brand-blue dark:hover:text-brand-yellow hover:underline decoration-2 underline-offset-4 transition-all cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-brand-dark dark:text-brand-cream"
            aria-label="Toggle Dark Mode"
          >
            {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;