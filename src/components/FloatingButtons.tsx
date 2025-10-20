import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/918265999762"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-accent rounded-full shadow-lg hover:shadow-accent/50 transition-shadow"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-accent-foreground" />
      </motion.a>

      <motion.a
        href="tel:+918265999762"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg hover:shadow-primary/50 transition-shadow"
        aria-label="Call now"
      >
        <Phone className="h-6 w-6 text-primary-foreground" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
