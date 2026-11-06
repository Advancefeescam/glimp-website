import { M3eTheme } from '@m3e/react/theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Themes from './components/Themes';
import Sources from './components/Sources';
import Install from './components/Install';
import Footer from './components/Footer';
import { useSiteTheme } from './hooks/useSiteTheme';

export default function App() {
  const { mode, toggleTheme } = useSiteTheme();

  return (
    <M3eTheme
      className="site"
      data-site-theme={mode}
      color="#3b5fd0"
      scheme={mode}
      variant="tonal-spot"
      motion="expressive"
    >
      <Header mode={mode} onToggleTheme={toggleTheme} />
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
