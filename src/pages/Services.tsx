import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import { 
  Smartphone, Apple, Monitor, Globe, Music, Video, 
  Palette, Sparkles, TrendingUp, Search, Film, Bot 
} from 'lucide-react';

const Services = () => {
  const iconMap: Record<string, any> = {
    Smartphone,
    Apple,
    Monitor,
    Globe,
    Music,
    Video,
    Palette,
    Sparkles,
    TrendingUp,
    Search,
    Film,
    Bot
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs. From apps to marketing, 
            we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Smartphone;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="glass-card p-6 block hover:scale-105 transition-all duration-300 group h-full"
                >
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-fit mb-4 group-hover:shadow-lg group-hover:shadow-primary/50 transition-shadow">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Delivery:</span>
                      <span className="font-medium">{service.deliveryTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Starting at:</span>
                      <span className="font-semibold text-primary">{service.priceRange.split('-')[0]}</span>
                    </div>
                  </div>

                  <div className="mt-6 text-primary font-semibold flex items-center gap-2">
                    View Details →
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center glass-card p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-6">
            Don't see exactly what you're looking for? We specialize in custom solutions 
            tailored to your unique requirements.
          </p>
          <Link to="/contact" className="btn-primary">
            Discuss Your Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
