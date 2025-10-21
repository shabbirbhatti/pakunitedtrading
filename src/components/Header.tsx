import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import pakistanFlag from '@/assets/pakistan-flag.png';
import japanFlag from '@/assets/japan-flag.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Flags */}
          <div className="flex items-center gap-3">
            <img src={pakistanFlag} alt="Pakistan Flag" className="h-8 w-8 object-contain rounded" />
            <img src={japanFlag} alt="Japan Flag" className="h-8 w-8 object-contain rounded" />
          </div>

          {/* Logo/Brand */}
          <Link to="/" className="flex-1 text-center">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Pak United Trading
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              {t('nav.services')}
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">
              {t('nav.gallery')}
            </Link>
            <Link to="/testimonials" className="text-foreground hover:text-primary transition-colors">
              {t('nav.testimonials')}
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </Link>
            <Link to="/quote">
              <Button size="sm">{t('nav.quote')}</Button>
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-2 ml-4">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <button
              onClick={() => changeLanguage('en')}
              className={`text-sm px-2 py-1 rounded transition-colors ${
                i18n.language === 'en' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('ja')}
              className={`text-sm px-2 py-1 rounded transition-colors ${
                i18n.language === 'ja' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              }`}
            >
              日本語
            </button>
            <button
              onClick={() => changeLanguage('ur')}
              className={`text-sm px-2 py-1 rounded transition-colors ${
                i18n.language === 'ur' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              }`}
            >
              اردو
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-4">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/services"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.services')}
            </Link>
            <Link
              to="/gallery"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.gallery')}
            </Link>
            <Link
              to="/testimonials"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.testimonials')}
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <Link to="/quote" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">{t('nav.quote')}</Button>
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 pt-4 border-t">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <button
                onClick={() => changeLanguage('en')}
                className={`text-sm px-3 py-1.5 rounded transition-colors ${
                  i18n.language === 'en' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('ja')}
                className={`text-sm px-3 py-1.5 rounded transition-colors ${
                  i18n.language === 'ja' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                日本語
              </button>
              <button
                onClick={() => changeLanguage('ur')}
                className={`text-sm px-3 py-1.5 rounded transition-colors ${
                  i18n.language === 'ur' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                اردو
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
