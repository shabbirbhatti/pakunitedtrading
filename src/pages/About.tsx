import { useTranslation } from 'react-i18next';
import { Award, Heart, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import hameedSacho from '@/assets/hameed-sacho.png';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl text-muted-foreground">{t('about.subtitle')}</p>
        </div>

        {/* Owner Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={hameedSacho}
                alt="Hameed Sacho"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">{t('about.ownerTitle')}</h2>
            <p className="text-lg text-primary font-semibold mb-4">{t('about.ownerSubtitle')}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.ownerDescription')}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2">40+</div>
              <p className="text-muted-foreground">{t('about.experience')}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pakistan/10 mb-4">
                <Heart className="h-8 w-8 text-pakistan" />
              </div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-muted-foreground">{t('about.community')}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-japan/10 mb-4">
                <Users className="h-8 w-8 text-japan" />
              </div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-muted-foreground">{t('about.jobsHelped')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Values */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Our Mission & Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Excellence in Service</h3>
              <p className="text-muted-foreground">
                We are committed to providing the highest quality automotive services, combining Japanese precision with Pakistani hospitality. Every vehicle we service receives the care and attention it deserves.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-muted-foreground">
                Beyond business, we believe in giving back. Supporting job seekers, facilitating cultural exchange, and contributing to charitable causes are at the heart of what we do.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Integrity & Trust</h3>
              <p className="text-muted-foreground">
                Built on 40+ years of honest dealings, we maintain transparency in all our transactions. Our reputation is our most valuable asset, earned through decades of reliable service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Bridging Cultures</h3>
              <p className="text-muted-foreground">
                We serve as a bridge between Pakistan and Japan, fostering understanding and cooperation. Our bilingual services make automotive solutions accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
