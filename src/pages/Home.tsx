
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Trophy, Rocket } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Team Members', value: '10' },
    { icon: Trophy, label: 'Competitions', value: '15+' },
    { icon: Rocket, label: 'Projects', value: '25+' },
    { icon: Zap, label: 'Innovations', value: '50+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-jatayu-accent/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-jatayu-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-jatayu-accent/15 rounded-full blur-2xl animate-bounce-gentle" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Heading with enhanced animations */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair animate-slide-up">
                <span className="gradient-text block">Innovation</span>
                <br />
                <span className="text-jatayu-text-primary animate-slide-in-right" style={{ animationDelay: '0.3s' }}>Takes Flight</span>
              </h1>
              <p className="text-xl md:text-2xl text-jatayu-text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
                We are Team Jatayu - engineering excellence through collaboration, innovation, and the relentless pursuit of technical mastery.
              </p>
            </div>

            {/* CTA Buttons with enhanced hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-zoom-in" style={{ animationDelay: '0.9s' }}>
              <Link to="/about" className="btn-primary group">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
              <Link to="/projects" className="btn-secondary group">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-jatayu-text-secondary rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-jatayu-accent rounded-full mt-2 animate-pulse-glow" />
          </div>
        </div>
      </section>

      {/* Stats Section with staggered animations */}
      <section className="section-padding bg-jatayu-gray/30">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center space-y-4 group animate-fade-in card-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto bg-jatayu-gray rounded-full flex items-center justify-center group-hover:bg-jatayu-accent/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <stat.icon className="w-8 h-8 text-jatayu-accent group-hover:animate-pulse" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold font-playfair text-jatayu-text-primary mb-1 group-hover:text-jatayu-accent transition-colors duration-300">
                    {stat.value}
                  </h3>
                  <p className="text-jatayu-text-secondary group-hover:text-jatayu-text-primary transition-colors duration-300">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content with enhanced animations */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-jatayu-text-primary">
                Engineering the <span className="gradient-text">Future</span>
              </h2>
              <p className="text-lg text-jatayu-text-secondary leading-relaxed">
                From concept to creation, we transform innovative ideas into reality. Our multidisciplinary team combines cutting-edge engineering with creative problem-solving to tackle tomorrow's challenges today.
              </p>
              <div className="space-y-4">
                {[
                  'Advanced Robotics & Automation',
                  'Sustainable Technology Solutions',
                  'Competitive Engineering Excellence'
                ].map((item, index) => (
                  <div 
                    key={item}
                    className="flex items-center space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  >
                    <div className="w-2 h-2 bg-jatayu-accent rounded-full animate-pulse-glow" />
                    <span className="text-jatayu-text-secondary hover:text-jatayu-text-primary transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center text-jatayu-accent hover:text-jatayu-accent-hover transition-colors group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative bg-jatayu-gray rounded-2xl p-8 card-hover pulse-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-jatayu-accent/20 to-transparent rounded-2xl animate-shimmer" />
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-jatayu-accent rounded-full animate-pulse" />
                    <div className="w-6 h-6 border-2 border-jatayu-accent rounded-full animate-rotate-slow" />
                  </div>
                  <h3 className="text-2xl font-bold font-playfair text-jatayu-text-primary">
                    Latest Achievement
                  </h3>
                  <p className="text-jatayu-text-secondary">
                    Recently secured 1st place in the National Robotics Championship, showcasing our team's technical prowess and innovative approach to complex engineering challenges.
                  </p>
                  <Link to="/competitions" className="inline-flex items-center text-jatayu-accent hover:text-jatayu-accent-hover transition-colors group">
                    View All Competitions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
