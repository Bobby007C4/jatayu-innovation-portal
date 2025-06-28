
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
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-jatayu-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-jatayu-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair">
                <span className="gradient-text">Innovation</span>
                <br />
                <span className="text-jatayu-text-primary">Takes Flight</span>
              </h1>
              <p className="text-xl md:text-2xl text-jatayu-text-secondary max-w-2xl mx-auto leading-relaxed">
                We are Team Jatayu - engineering excellence through collaboration, innovation, and the relentless pursuit of technical mastery.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/about" className="btn-primary group">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/projects" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-jatayu-text-secondary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-jatayu-text-secondary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-jatayu-gray/30">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center space-y-4 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto bg-jatayu-gray rounded-full flex items-center justify-center group-hover:bg-jatayu-accent/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-jatayu-accent" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold font-playfair text-jatayu-text-primary mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-jatayu-text-secondary">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-jatayu-text-primary">
                Engineering the Future
              </h2>
              <p className="text-lg text-jatayu-text-secondary leading-relaxed">
                From concept to creation, we transform innovative ideas into reality. Our multidisciplinary team combines cutting-edge engineering with creative problem-solving to tackle tomorrow's challenges today.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-jatayu-accent rounded-full" />
                  <span className="text-jatayu-text-secondary">Advanced Robotics & Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-jatayu-accent rounded-full" />
                  <span className="text-jatayu-text-secondary">Sustainable Technology Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-jatayu-accent rounded-full" />
                  <span className="text-jatayu-text-secondary">Competitive Engineering Excellence</span>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center text-jatayu-accent hover:text-jatayu-accent-hover transition-colors group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative bg-jatayu-gray rounded-2xl p-8 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-jatayu-accent/20 to-transparent rounded-2xl" />
                <div className="relative space-y-6">
                  <h3 className="text-2xl font-bold font-playfair text-jatayu-text-primary">
                    Latest Achievement
                  </h3>
                  <p className="text-jatayu-text-secondary">
                    Recently secured 1st place in the National Robotics Championship, showcasing our team's technical prowess and innovative approach to complex engineering challenges.
                  </p>
                  <Link to="/competitions" className="inline-flex items-center text-jatayu-accent hover:text-jatayu-accent-hover transition-colors group">
                    View All Competitions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
