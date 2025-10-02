import { Check, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useI18n } from './i18n';

export const Pricing = () => {
  const { t } = useI18n();

  const plans = [
    {
      titleKey: 'pricing.basic.title',
      priceKey: 'pricing.basic.price',
      descKey: 'pricing.basic.desc',
      featuresKey: 'pricing.basic.features',
      ctaKey: 'pricing.cta',
      popular: false,
    },
    {
      titleKey: 'pricing.pro.title',
      priceKey: 'pricing.pro.price',
      descKey: 'pricing.pro.desc',
      featuresKey: 'pricing.pro.features',
      ctaKey: 'pricing.cta',
      popular: true,
    },
    {
      titleKey: 'pricing.enterprise.title',
      priceKey: 'pricing.enterprise.price',
      descKey: 'pricing.enterprise.desc',
      featuresKey: 'pricing.enterprise.features',
      ctaKey: 'pricing.contact',
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const features = t(plan.featuresKey).split(',');
            return (
              <Card
                key={index}
                className={`relative ${plan.popular
                  ? 'border-primary ring-1 ring-primary shadow-lg scale-105'
                  : 'border-border'
                  } transition-all duration-300 hover:shadow-lg`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-xl mb-2">{t(plan.titleKey)}</CardTitle>
                  <div className="mb-2">
                    <span className="text-3xl font-bold">{t(plan.priceKey)}</span>
                  </div>
                  <CardDescription>{t(plan.descKey)}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={scrollToContact}
                  >
                    {t(plan.ctaKey)}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 p-6 bg-muted/20 rounded-xl">
          <p className="text-muted-foreground">
            <strong>{t('pricing.custom.title')}</strong> {t('pricing.custom.desc')}
          </p>
        </div>
      </div>
    </section>
  );
};