import { useTranslation } from 'react-i18next';
import { Heart, HandHeart, Users, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('testimonials.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Community Work Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-pakistan text-white">
            <CardContent className="p-8">
              <Heart className="h-12 w-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-3">Charitable Initiatives</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                For over four decades, Hameed Sacho has been actively involved in charitable work, providing support to underprivileged families, organizing community events, and contributing to causes that uplift the Pakistani community in Japan.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary text-white">
            <CardContent className="p-8">
              <Briefcase className="h-12 w-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-3">Employment Support</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Recognizing the challenges faced by job seekers, especially newcomers to Japan, our founder has facilitated employment opportunities for hundreds of individuals, connecting them with reputable employers and providing mentorship.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Community Impact Stats */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Making a Difference</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pakistan/10 mb-4">
                <Users className="h-10 w-10 text-pakistan" />
              </div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-lg text-muted-foreground">Families Supported</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <p className="text-lg text-muted-foreground">Jobs Facilitated</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-japan/10 mb-4">
                <HandHeart className="h-10 w-10 text-japan" />
              </div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-lg text-muted-foreground">Community Projects</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="border-2 border-primary">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Community</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              "Building a successful business is important, but building a strong, supportive community is essential. Every person we help, every connection we facilitate, and every charitable initiative we support brings us closer to creating a harmonious environment where both Pakistani and Japanese communities can thrive together."
            </p>
            <p className="text-xl font-semibold mt-6 text-primary">- Hameed Sacho</p>
            <p className="text-muted-foreground">Founder, Pak United Trading Corporation</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Testimonials;
