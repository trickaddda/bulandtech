import { motion } from 'framer-motion';
import { Code, Palette, Music, Zap, Target, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Full-Stack Development', icon: Code, color: 'from-primary to-primary/60' },
    { name: 'UI/UX Design', icon: Palette, color: 'from-secondary to-secondary/60' },
    { name: 'Music Production', icon: Music, color: 'from-accent to-accent/60' },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started journey as a developer, learning and experimenting with various technologies.'
    },
    {
      year: '2021',
      title: 'Expanding Horizons',
      description: 'Diversified into graphic design, video editing, and music production.'
    },
    {
      year: '2022',
      title: 'BulandTech Born',
      description: 'Established BulandTech to offer comprehensive digital solutions.'
    },
    {
      year: '2023-Present',
      title: 'Growing & Thriving',
      description: 'Serving clients across India with innovative tech and creative solutions.'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">About BulandTech</h1>
          <p className="text-lg text-muted-foreground">
            Where Technology Meets Creativity
          </p>
        </motion.div>

        {/* Founder Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-2xl">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Meet Sonu Saifi</h2>
              <p className="text-muted-foreground">Founder & Lead Developer</p>
            </div>
          </div>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Based in Bulandshahr, Uttar Pradesh, I'm Sonu Saifi — a passionate full-stack developer 
              and creative professional with a vision to empower businesses and individuals through 
              technology and design.
            </p>
            <p>
              My journey in tech started with a curiosity for how things work digitally. Over the years, 
              this curiosity evolved into a comprehensive skill set spanning mobile app development, 
              web technologies, graphic design, music production, and digital marketing.
            </p>
            <p>
              BulandTech (meaning "Rising Tech") was born from the belief that quality digital solutions 
              shouldn't be limited to big cities. I created this platform to bring world-class tech 
              services to clients everywhere, combining technical expertise with creative vision.
            </p>
            <p>
              What sets BulandTech apart is the personal touch. Every project I take on receives my 
              full attention and dedication. Whether it's developing an app, creating a brand identity, 
              or producing music, I approach each project as an opportunity to create something 
              exceptional.
            </p>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform"
              >
                <div className={`bg-gradient-to-br ${skill.color} p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:shadow-lg transition-shadow`}>
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-primary to-secondary px-4 py-2 rounded-lg font-bold">
                    {item.year}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="glass-card p-8">
            <div className="bg-gradient-to-br from-primary to-primary/60 p-3 rounded-xl w-fit mb-4">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses and individuals with innovative digital solutions that 
              drive growth, enhance creativity, and make technology accessible to everyone, 
              regardless of their location.
            </p>
          </div>

          <div className="glass-card p-8">
            <div className="bg-gradient-to-br from-secondary to-secondary/60 p-3 rounded-xl w-fit mb-4">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become a leading digital solutions provider recognized for quality, 
              creativity, and customer satisfaction. We envision a future where exceptional 
              tech services are available to everyone, everywhere.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
