import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroCars from '@/assets/hero-cars.jpg';
import spareParts from '@/assets/spare-parts.jpg';
import dentingPainting from '@/assets/denting-painting.jpg';
import electrical from '@/assets/electrical.jpg';
import generalRepair from '@/assets/general-repair.jpg';
import importExport from '@/assets/import-export.jpg';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { t } = useTranslation();

  const serviceData: Record<string, any> = {
    'japanese-cars': {
      image: heroCars,
      key: 'car_sales',
      features: [
        'Premium selection of Japanese vehicles',
        'Competitive pricing and financing options',
        'Complete vehicle history and inspection reports',
        'Expert consultation on model selection',
        'Warranty and after-sales support',
      ],
    },
    'spare-parts': {
      image: spareParts,
      key: 'spare_parts',
      features: [
        'Authentic Japanese auto parts',
        'Precision cutting and customization',
        'Wide inventory of OEM and aftermarket parts',
        'Fast delivery and installation services',
        'Quality guarantee on all parts',
      ],
    },
    'denting-painting': {
      image: dentingPainting,
      key: 'denting',
      features: [
        'Professional body work and dent removal',
        'High-quality paint matching and refinishing',
        'Advanced color-matching technology',
        'Rust treatment and prevention',
        'Insurance claim assistance',
      ],
    },
    'electrical': {
      image: electrical,
      key: 'electrical',
      features: [
        'Comprehensive electrical system diagnosis',
        'Battery and alternator testing & replacement',
        'Wiring repair and upgrade services',
        'Audio and electronics installation',
        'Advanced diagnostic equipment',
      ],
    },
    'general-repair': {
      image: generalRepair,
      key: 'general',
      features: [
        'Complete vehicle maintenance services',
        'Engine repair and rebuilding',
        'Brake and suspension work',
        'Transmission service and repair',
        'Regular maintenance and tune-ups',
      ],
    },
    'import-export': {
      image: importExport,
      key: 'import',
      features: [
        'International vehicle trading expertise',
        'Customs clearance and documentation',
        'Shipping and logistics coordination',
        'Quality inspection before export',
        'Competitive international pricing',
      ],
    },
  };

  const service = serviceData[serviceId || ''];

  if (!service) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-elegant h-[400px]">
            <img
              src={service.image}
              alt={t(`services.${service.key}.title`)}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{t(`services.${service.key}.title`)}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t(`services.${service.key}.description`)}
            </p>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Service Features</h2>
                <ul className="space-y-3">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex gap-4 flex-wrap">
              <Link to="/quote">
                <Button size="lg">Get a Quote</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
