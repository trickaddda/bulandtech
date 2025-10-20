import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { 
  ArrowLeft, Check, Clock, DollarSign, MessageCircle, Phone,
  Smartphone, Apple, Monitor, Globe, Music, Video, 
  Palette, Sparkles, TrendingUp, Search, Film, Bot 
} from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const iconMap: Record<string, any> = {
    Smartphone, Apple, Monitor, Globe, Music, Video,
    Palette, Sparkles, TrendingUp, Search, Film, Bot
  };

  const IconComponent = iconMap[service.icon] || Smartphone;

  const handleContactScroll = () => {
    const formElement = document.getElementById('enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          {/* Hero */}
          <div className="glass-card p-8 md:p-12 mb-8">
            <div className="bg-gradient-to-br from-primary to-secondary p-5 rounded-2xl w-fit mb-6">
              <IconComponent className="h-12 w-12 text-primary-foreground" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              {service.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Delivery Time</p>
                  <p className="font-semibold">{service.deliveryTime}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Price Range</p>
                  <p className="font-semibold">{service.priceRange}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://wa.me/918265999762"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors font-medium"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:+918265999762"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Service</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {service.detailedDescription}
            </p>
          </div>

          {/* Benefits */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-primary/20 p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {service.tools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-muted px-4 py-2 rounded-lg font-medium text-sm"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div id="enquiry-form" className="glass-card p-8 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Contact us now to discuss your project and get a personalized quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate('/contact', { state: { selectedService: service.title } })}
                className="btn-primary"
              >
                Send Enquiry
              </button>
              <a
                href="https://wa.me/918265999762"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle className="mr-2 h-5 w-5 inline" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
