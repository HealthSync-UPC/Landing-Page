import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.benefits': 'Beneficios',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',

    // Hero Section
    'hero.title': 'Transformando la Gestión de Inventarios Médicos',
    'hero.subtitle': 'MediTrack utiliza IoT para monitorear en tiempo real las condiciones de medicamentos e insumos médicos, garantizando seguridad y eficiencia.',
    'hero.cta': 'Comenzar Ahora',
    'hero.demo': 'Ver Demo',

    // Benefits Section
    'benefits.title': '¿Por qué elegir MediTrack?',
    'benefits.realtime.title': 'Monitoreo en Tiempo Real',
    'benefits.realtime.desc': 'Sensores IoT que monitorean temperatura, humedad y ubicación 24/7',
    'benefits.alerts.title': 'Alertas Automáticas',
    'benefits.alerts.desc': 'Notificaciones inmediatas ante cualquier anomalía o riesgo',
    'benefits.analytics.title': 'Acceso Multiplataforma',
    'benefits.analytics.desc': 'Consulta y gestiona el inventario desde app móvil o web, en cualquier lugar y momento.',
    'benefits.compliance.title': 'Cumplimiento Normativo',
    'benefits.compliance.desc': 'Garantiza el cumplimiento de normas sanitarias y regulaciones',
    'benefits.efficiency.title': 'Eficiencia Operativa',
    'benefits.efficiency.desc': 'Reduce pérdidas y optimiza la gestión de inventarios',
    'benefits.security.title': 'Seguridad del Paciente',
    'benefits.security.desc': 'Asegura la calidad de medicamentos e insumos críticos',

    // Pricing Section
    'pricing.title': 'Planes y Precios',
    'pricing.subtitle': 'Selecciona el plan que mejor se adapte a tu institución',
    'pricing.basic.title': 'Básico',
    'pricing.basic.price': '$299/mes',
    'pricing.basic.desc': 'Ideal para clínicas pequeñas',
    'pricing.basic.features': 'Hasta 50 sensores,Monitoreo básico,Reportes mensuales,Soporte por email',
    'pricing.pro.title': 'Profesional',
    'pricing.pro.price': '$599/mes',
    'pricing.pro.desc': 'Para hospitales medianos',
    'pricing.pro.features': 'Hasta 200 sensores,Reportes en tiempo real,Soporte prioritario,API personalizada',
    'pricing.enterprise.title': 'Empresarial',
    'pricing.enterprise.price': 'Personalizado',
    'pricing.enterprise.desc': 'Para grandes instituciones',
    'pricing.enterprise.features': 'Sensores ilimitados,Integración completa,Soporte dedicado,Personalización total',
    'pricing.cta': 'Elegir Plan',
    'pricing.contact': 'Contactar',

    // Contact Section
    'contact.title': 'Contactanos',
    'contact.subtitle': '¿Listo para transformar tu gestión de inventarios médicos?',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',

    // Footer
    'footer.mission': 'Misión',
    'footer.mission.text': 'Optimizar la administración de inventarios médicos mediante soluciones IoT que garanticen disponibilidad, conservación y trazabilidad.',
    'footer.links': 'Enlaces',
    'footer.contact': 'Contacto',
    'footer.email': 'contacto@healthsync.com',
    'footer.rights': '© 2025 HealthSync. Todos los derechos reservados.',
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.benefits": "Benefits",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Transforming Medical Inventory Management",
    "hero.subtitle": "MediTrack uses IoT to monitor in real time the conditions of medicines and medical supplies, ensuring safety and efficiency.",
    "hero.cta": "Get Started",
    "hero.demo": "View Demo",

    // Benefits Section
    "benefits.title": "Why choose MediTrack?",
    "benefits.realtime.title": "Real-Time Monitoring",
    "benefits.realtime.desc": "IoT sensors that monitor temperature, humidity, and location 24/7",
    "benefits.alerts.title": "Automatic Alerts",
    "benefits.alerts.desc": "Instant notifications for any anomaly or risk",
    "benefits.analytics.title": "Multi-Platform Access",
    "benefits.analytics.desc": "Check and manage inventory from mobile app or web, anywhere, anytime.",
    "benefits.compliance.title": "Regulatory Compliance",
    "benefits.compliance.desc": "Ensures compliance with health standards and regulations",
    "benefits.efficiency.title": "Operational Efficiency",
    "benefits.efficiency.desc": "Reduces losses and optimizes inventory management",
    "benefits.security.title": "Patient Safety",
    "benefits.security.desc": "Ensures the quality of medicines and critical supplies",

    // Pricing Section
    "pricing.title": "Plans & Pricing",
    "pricing.subtitle": "Choose the plan that best suits your institution",
    "pricing.basic.title": "Basic",
    "pricing.basic.price": "$299/month",
    "pricing.basic.desc": "Ideal for small clinics",
    "pricing.basic.features": "Up to 50 sensors,Basic monitoring,Monthly reports,Email support",
    "pricing.pro.title": "Professional",
    "pricing.pro.price": "$599/month",
    "pricing.pro.desc": "For medium-sized hospitals",
    "pricing.pro.features": "Up to 200 sensors,Real-time reports,Priority support,Custom API",
    "pricing.enterprise.title": "Enterprise",
    "pricing.enterprise.price": "Custom",
    "pricing.enterprise.desc": "For large institutions",
    "pricing.enterprise.features": "Unlimited sensors,Full integration,Dedicated support,Total customization",
    "pricing.cta": "Choose Plan",
    "pricing.contact": "Contact",

    // Contact Section
    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to transform your medical inventory management?",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",

    // Footer
    "footer.mission": "Mission",
    "footer.mission.text": "Optimize medical inventory management through IoT solutions that ensure availability, preservation, and traceability.",
    "footer.links": "Links",
    "footer.contact": "Contact",
    "footer.email": "contact@healthsync.com",
    "footer.rights": "© 2025 HealthSync. All rights reserved."
  }
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};