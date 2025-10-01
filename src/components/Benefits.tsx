import { Activity, Bell, TrendingUp, Shield, Zap, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useI18n } from './i18n';

export const Benefits = () => {
  const { t } = useI18n();

  const benefits = [
    {
      icon: Activity,
      titleKey: 'benefits.realtime.title',
      descKey: 'benefits.realtime.desc',
    },
    {
      icon: Bell,
      titleKey: 'benefits.alerts.title',
      descKey: 'benefits.alerts.desc',
    },
    {
      icon: TrendingUp,
      titleKey: 'benefits.analytics.title',
      descKey: 'benefits.analytics.desc',
    },
    {
      icon: Shield,
      titleKey: 'benefits.compliance.title',
      descKey: 'benefits.compliance.desc',
    },
    {
      icon: Zap,
      titleKey: 'benefits.efficiency.title',
      descKey: 'benefits.efficiency.desc',
    },
    {
      icon: Heart,
      titleKey: 'benefits.security.title',
      descKey: 'benefits.security.desc',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('benefits.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-video relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBzZW5zb3JzJTIwbWVkaWNhbCUyMGRldmljZXN8ZW58MXx8fHwxNzU5MzM3NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="IoT Sensors Medical Devices"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{t(benefit.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {t(benefit.descKey)}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Image */}
        <div className="relative">
          <div className="aspect-[16/6] relative rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1606618871497-d848be8dc159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MzM3NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Healthcare Professionals Technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-8 md:px-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Tecnología IoT Avanzada
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Nuestros sensores inteligentes se integran perfectamente con tu infraestructura existente, proporcionando datos precisos y confiables las 24 horas del día.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-accent">1000+</div>
                    <div className="text-sm text-muted-foreground">Sensores Activos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-accent">50+</div>
                    <div className="text-sm text-muted-foreground">Hospitales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-accent">99.8%</div>
                    <div className="text-sm text-muted-foreground">Precisión</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};