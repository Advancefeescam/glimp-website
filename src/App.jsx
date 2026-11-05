import { M3eTheme } from '@m3e/react/theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Board from './components/Board';
import Features from './components/Features';
import Spotlight from './components/Spotlight';
import Themes from './components/Themes';
import Sources from './components/Sources';
import Install from './components/Install';
import Footer from './components/Footer';

// Eén M3E kleurbron. De website gebruikt de lichte tonal-spot-kleuren,
// terwijl de donkere hero en downloadsectie doelbewust contrasteren.
export default function App() {
  return (
    <M3eTheme className="site" color="#4168ce" scheme="light" variant="tonal-spot" motion="expressive">
      <Header />
      <main id="main">
        <Hero />
        <Board />
        <Features />
        <Spotlight />
        <Themes />
        <Sources />
        <Install />
      </main>
      <Footer />
    </M3eTheme>
  );
}
