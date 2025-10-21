import { useTranslation } from 'react-i18next';
import heroCars from '@/assets/hero-cars.jpg';
import spareParts from '@/assets/spare-parts.jpg';
import dentingPainting from '@/assets/denting-painting.jpg';
import electrical from '@/assets/electrical.jpg';
import generalRepair from '@/assets/general-repair.jpg';
import importExport from '@/assets/import-export.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    { src: heroCars, alt: 'Japanese Cars Showroom', category: 'Cars' },
    { src: spareParts, alt: 'Spare Parts Workshop', category: 'Parts' },
    { src: dentingPainting, alt: 'Denting & Painting', category: 'Services' },
    { src: electrical, alt: 'Electrical Repairs', category: 'Services' },
    { src: generalRepair, alt: 'General Repairs', category: 'Services' },
    { src: importExport, alt: 'Import Export', category: 'Logistics' },
    { src: gallery1, alt: 'Car Showroom Display', category: 'Cars' },
    { src: gallery2, alt: 'Professional Team', category: 'Team' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('nav.gallery')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our facilities, services, and the quality work we deliver
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
