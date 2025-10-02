import { Mail, Phone, MapPin } from 'lucide-react';
import { useI18n } from './i18n';
import { useEffect, useState } from 'react';

export const Footer = () => {
  const { t } = useI18n();
  const [isDark, setIsDark] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);


  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-background text-foreground rounded-lg flex items-center justify-center">
                <span className="font-bold">M</span>
              </div> */}
              <img src="/logo2.png" className="w-8 h-auto" style={{ filter: isDark ? 'invert(1)' : 'invert(0)' }} alt="MediTrack Logo" />
              <span className="text-xl font-semibold">MediTrack</span>
            </div>
            <p className="text-background/80 text-sm">
              {t('footer.slogan')}
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('footer.mission')}</h3>
            <p className="text-background/80 text-sm">
              {t('footer.mission.text')}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('footer.links')}</h3>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-background/80 hover:text-background transition-colors text-sm text-left"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-background/80 hover:text-background transition-colors text-sm text-left"
              >
                {t('nav.benefits')}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-background/80 hover:text-background transition-colors text-sm text-left"
              >
                {t('nav.pricing')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-background/80 hover:text-background transition-colors text-sm text-left"
              >
                {t('nav.contact')}
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-background/60" />
                <span className="text-background/80 text-sm">{t('footer.email')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-background/60" />
                <span className="text-background/80 text-sm">Lima, Perú</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-background/60 text-sm">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6">
              <span className="text-background/60 text-sm">HealthSync</span>
              <span className="text-background/60 text-sm">•</span>
              <span className="text-background/60 text-sm">MediTrack IoT Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};