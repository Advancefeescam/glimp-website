import { M3eTheme } from '@m3e/react/theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Board from './components/Board';
import Features from './components/Features';
import Themes from './components/Themes';
import Sources from './components/Sources';
import Install from './components/Install';
import Footer from './components/Footer';

// M3eTheme genereert het volledige Material 3-kleurenpalet uit één basiskleur.
// De kleur komt overeen met het blauw van de app zelf.
export default function App() {
  return (
    <M3eTheme className="site" color="#4a6bb0" scheme="dark" variant="tonal-spot" motion="expressive">
      <Header />
      <main id="main">
        <Hero />
        <Board />
        <Features />
        <Themes />
        <Sources />
        <Install />
      </main>
      <Footer />
    </M3eTheme>
  );
}
