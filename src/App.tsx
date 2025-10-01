import { I18nProvider } from './components/i18n';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}