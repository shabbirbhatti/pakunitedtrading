import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Car, Wrench, Truck, Zap, PaintBucket, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import heroCars from '@/assets/hero-cars.jpg';
import spareParts from '@/assets/spare-parts.jpg';
import dentingPainting from '@/assets/denting-painting.jpg';
import electrical from '@/assets/electrical.jpg';
import generalRepair from '@/assets/general-repair.jpg';
import importExport from '@/assets/import-export.jpg';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCars}
            alt="Japanese Cars Showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-2 opacity-95">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            {t('hero.description')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/quote">
              <Button size="lg" className="text-lg">
                {t('hero.cta')}
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                {t('hero.ctaSecondary')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title={t('services.car_sales.title')}
              description={t('services.car_sales.description')}
              icon={<Car className="h-6 w-6" />}
              image={heroCars}
              link="/services/japanese-cars"
            />
            <ServiceCard
              title={t('services.spare_parts.title')}
              description={t('services.spare_parts.description')}
              icon={<Package className="h-6 w-6" />}
              image={spareParts}
              link="/services/spare-parts"
            />
            <ServiceCard
              title={t('services.denting.title')}
              description={t('services.denting.description')}
              icon={<PaintBucket className="h-6 w-6" />}
              image={dentingPainting}
              link="/services/denting-painting"
            />
            <ServiceCard
              title={t('services.electrical.title')}
              description={t('services.electrical.description')}
              icon={<Zap className="h-6 w-6" />}
              image={electrical}
              link="/services/electrical"
            />
            <ServiceCard
              title={t('services.general.title')}
              description={t('services.general.description')}
              icon={<Wrench className="h-6 w-6" />}
              image={generalRepair}
              link="/services/general-repair"
            />
            <ServiceCard
              title={t('services.import.title')}
              description={t('services.import.description')}
              icon={<Truck className="h-6 w-6" />}
              image={importExport}
              link="/services/import-export"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">40+</div>
              <div className="text-lg opacity-90">{t('about.experience')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">{t('about.community')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">{t('about.jobsHelped')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for professional automotive services you can trust.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg">{t('nav.contact')}</Button>
            </Link>
            <Link to="/quote">
              <Button size="lg" variant="outline">{t('nav.quote')}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
