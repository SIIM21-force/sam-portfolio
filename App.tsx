import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={`relative min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'dark text-brand-cream selection:bg-brand-yellow selection:text-brand-dark' : 'text-brand-dark selection:bg-brand-yellow/50 selection:text-brand-dark'}`}>
      <Background theme={theme} />
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      
      <main className="relative z-0">
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400 font-mono border-t border-brand-dark/5 dark:border-brand-cream/10">
        <p>© {new Date().getFullYear()} Samarth M Katageri. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;