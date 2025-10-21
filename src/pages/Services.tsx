import { useTranslation } from 'react-i18next';
import { Car, Wrench, Truck, Zap, PaintBucket, Package } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import heroCars from '@/assets/hero-cars.jpg';
import spareParts from '@/assets/spare-parts.jpg';
import dentingPainting from '@/assets/denting-painting.jpg';
import electrical from '@/assets/electrical.jpg';
import generalRepair from '@/assets/general-repair.jpg';
import importExport from '@/assets/import-export.jpg';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
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
    </div>
  );
};

export default Services;
