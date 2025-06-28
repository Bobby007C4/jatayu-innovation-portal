
import { Users, Target, Eye, Award } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'Team Lead & Mechanical Engineer',
      bio: 'Specialized in robotics design and system integration with 3 years of competitive experience.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Sarah Chen',
      role: 'Software Architect',
      bio: 'Expert in AI/ML algorithms and embedded systems programming for autonomous applications.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Marcus Johnson',
      role: 'Electronics Lead',
      bio: 'Hardware design specialist focusing on power systems and sensor integration.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Priya Patel',
      role: 'Controls Engineer',
      bio: 'Advanced control systems and automation expert with aerospace engineering background.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'David Kim',
      role: 'Design Engineer',
      bio: 'CAD modeling and simulation specialist, bringing concepts from design to reality.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emma Wilson',
      role: 'Research Lead',
      bio: 'Innovation researcher focusing on emerging technologies and sustainable solutions.',
      image: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Ryan Thompson',
      role: 'Manufacturing Engineer',
      bio: 'Rapid prototyping and advanced manufacturing techniques specialist.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Lisa Chang',
      role: 'Systems Integration',
      bio: 'Complex system integration and testing with focus on reliability and performance.',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Jake Martinez',
      role: 'Project Manager',
      bio: 'Agile project management and team coordination for multi-disciplinary engineering projects.',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Nina Andersson',
      role: 'Quality Assurance',
      bio: 'Testing protocols and quality systems ensuring excellence in every deliverable.',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To push the boundaries of engineering excellence through innovative solutions, collaborative teamwork, and relentless pursuit of technical mastery in competitive and real-world applications.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To become a leading force in engineering innovation, inspiring the next generation of engineers while creating technologies that make a meaningful impact on society.'
    },
    {
      icon: Award,
      title: 'Values',
      description: 'Excellence, Innovation, Collaboration, Integrity, Sustainability, and Continuous Learning form the foundation of everything we do as Team Jatayu.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-jatayu-text-primary">
              About <span className="gradient-text">Team Jatayu</span>
            </h1>
            <p className="text-xl text-jatayu-text-secondary leading-relaxed">
              We are a multidisciplinary engineering team united by our passion for innovation, 
              technical excellence, and the belief that engineering can solve the world's most challenging problems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-jatayu-gray/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-jatayu-gray rounded-xl p-8 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-jatayu-accent/20 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-jatayu-accent" />
                </div>
                <h3 className="text-2xl font-bold font-playfair text-jatayu-text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-jatayu-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-jatayu-text-primary mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-jatayu-text-secondary max-w-3xl mx-auto">
              Ten dedicated engineers, each bringing unique expertise and perspectives to create 
              innovative solutions that push the boundaries of what's possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-jatayu-gray rounded-xl overflow-hidden card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-playfair text-jatayu-text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-jatayu-accent text-sm mb-3 font-medium">
                    {member.role}
                  </p>
                  <p className="text-jatayu-text-secondary text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-jatayu-gray/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-jatayu-text-primary">
                Our Journey
              </h2>
              <div className="space-y-4 text-jatayu-text-secondary leading-relaxed">
                <p>
                  Founded in 2021, Team Jatayu emerged from a shared vision among engineering students 
                  who believed that innovation happens at the intersection of diverse disciplines and perspectives.
                </p>
                <p>
                  Named after the mythical bird Jatayu, known for its courage and determination, our team 
                  embodies these qualities in every project we undertake. From our first small-scale robotics 
                  project to competing in national championships, we've grown into a formidable force in the 
                  engineering community.
                </p>
                <p>
                  Today, we continue to push boundaries, mentor upcoming engineers, and contribute to 
                  open-source projects that benefit the global engineering community.
                </p>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="bg-jatayu-gray rounded-2xl p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-playfair text-jatayu-text-primary">
                    By the Numbers
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold font-playfair text-jatayu-accent mb-1">50+</div>
                      <div className="text-jatayu-text-secondary text-sm">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold font-playfair text-jatayu-accent mb-1">15+</div>
                      <div className="text-jatayu-text-secondary text-sm">Competitions Won</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold font-playfair text-jatayu-accent mb-1">100+</div>
                      <div className="text-jatayu-text-secondary text-sm">Open Source Contributions</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold font-playfair text-jatayu-accent mb-1">25+</div>
                      <div className="text-jatayu-text-secondary text-sm">Students Mentored</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
