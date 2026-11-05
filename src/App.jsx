import { useEffect, useState } from 'react';
import { M3eTheme } from '@m3e/react/theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Themes from './components/Themes';
import Sources from './components/Sources';
import Install from './components/Install';
import Footer from './components/Footer';

const STORAGE_KEY = 'glimp-website-theme';

function getInitialTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    // De website blijft werken zonder opslag.
  }
  return 'light';
}

export default function App() {
  const [mode, setMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.style.colorScheme = mode;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', mode === 'dark' ? '#101722' : '#f7f9ff');
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Lokale opslag is optioneel.
    }
  }, [mode]);

  return (
    <M3eTheme
      className="site"
      data-site-theme={mode}
      color="#3b5fd0"
      scheme={mode}
      variant="tonal-spot"
      motion="expressive"
    >
      <Header mode={mode} onToggleTheme={() => setMode((value) => value === 'dark' ? 'light' : 'dark')} />
      <main id="main">
        <Hero />
        <Features />
        <Themes />
        <Sources />
        <Install />
      </main>
      <Footer />
    </M3eTheme>
  );
}
