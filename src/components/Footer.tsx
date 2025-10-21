import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Pak United Trading Corporation Japan
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('footer.description')}
            </p>
            <div className="space-y-2">
              <a
                href="https://wa.me/819074210923?text=Hello%20Pak%20United%20Trading%20Japan!%20I%20need%20information%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-[#25D366] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+81 90-7421-0923</span>
              </a>
              <a
                href="mailto:info@pakunitedjapan.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@pakunitedjapan.com</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Tokyo, Japan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.ourServices')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/japanese-cars"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('services.car_sales.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/spare-parts"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('services.spare_parts.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/denting-painting"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('services.denting.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/import-export"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('services.import.title')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pak United Trading Corporation Japan. {t('footer.rights')}
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
