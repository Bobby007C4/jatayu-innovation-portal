
import { Trophy, Calendar, Medal, Users } from 'lucide-react';

const Competitions = () => {
  const competitions = [
    {
      name: 'National Robotics Championship',
      year: '2024',
      rank: '1st Place',
      description: 'Autonomous robot navigation and manipulation tasks in complex environments. Our team developed an advanced computer vision system integrated with precise mechanical control.',
      category: 'Robotics',
      participants: 150,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop'
    },
    {
      name: 'International Drone Racing League',
      year: '2024',
      rank: '2nd Place',
      description: 'High-speed autonomous drone racing through obstacle courses. Featured custom flight control algorithms and real-time path optimization.',
      category: 'Aerospace',
      participants: 200,
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop'
    },
    {
      name: 'Smart City Innovation Challenge',
      year: '2023',
      rank: '1st Place',
      description: 'IoT-based solution for urban traffic optimization using machine learning and real-time data analytics. Implemented across 5 test intersections.',
      category: 'IoT/Smart Systems',
      participants: 120,
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop'
    },
    {
      name: 'Sustainable Energy Hackathon',
      year: '2023',
      rank: '3rd Place',
      description: 'Developed a solar panel efficiency optimization system using AI-driven angle adjustment and weather prediction algorithms.',
      category: 'Renewable Energy',
      participants: 180,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop'
    },
    {
      name: 'Autonomous Vehicle Challenge',
      year: '2023',
      rank: '2nd Place',
      description: 'Self-driving car competition featuring LIDAR-based navigation, obstacle detection, and traffic sign recognition in urban environments.',
      category: 'Automotive',
      participants: 90,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop'
    },
    {
      name: 'Biomedical Engineering Symposium',
      year: '2022',
      rank: '1st Place',
      description: 'Assistive technology device for mobility-impaired individuals featuring EMG signal processing and adaptive control systems.',
      category: 'Biomedical',
      participants: 75,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop'
    }
  ];

  const getRankColor = (rank: string) => {
    if (rank.includes('1st')) return 'text-yellow-400';
    if (rank.includes('2nd')) return 'text-gray-300';
    if (rank.includes('3rd')) return 'text-amber-600';
    return 'text-jatayu-accent';
  };

  const getRankIcon = (rank: string) => {
    if (rank.includes('1st')) return '🥇';
    if (rank.includes('2nd')) return '🥈';
    if (rank.includes('3rd')) return '🥉';
    return '🏆';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-jatayu-text-primary">
              Our <span className="gradient-text">Competitions</span>
            </h1>
            <p className="text-xl text-jatayu-text-secondary leading-relaxed">
              A timeline of excellence, innovation, and competitive spirit. Each competition has pushed 
              our boundaries and strengthened our commitment to engineering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Competition Timeline */}
      <section className="section-padding">
        <div className="container">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-jatayu-accent hidden lg:block" />

            <div className="space-y-16">
              {competitions.map((competition, index) => (
                <div
                  key={competition.name}
                  className={`relative lg:pl-24 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-jatayu-accent rounded-full border-4 border-jatayu-dark hidden lg:block" />

                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Competition Image */}
                    <div className="lg:col-span-1">
                      <div className="relative overflow-hidden rounded-xl group">
                        <img
                          src={competition.image}
                          alt={competition.name}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-jatayu-dark/60 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="flex items-center space-x-2 text-white">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium">{competition.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Competition Details */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold font-playfair text-jatayu-text-primary mb-2">
                            {competition.name}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="bg-jatayu-accent/20 text-jatayu-accent px-3 py-1 rounded-full">
                              {competition.category}
                            </span>
                            <div className="flex items-center space-x-1 text-jatayu-text-muted">
                              <Users className="w-4 h-4" />
                              <span>{competition.participants} teams</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{getRankIcon(competition.rank)}</span>
                          <div className="text-right">
                            <div className={`text-lg font-bold ${getRankColor(competition.rank)}`}>
                              {competition.rank}
                            </div>
                            <div className="text-jatayu-text-muted text-sm">{competition.year}</div>
                          </div>
                        </div>
                      </div>

                      <p className="text-jatayu-text-secondary leading-relaxed">
                        {competition.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-jatayu-gray/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-jatayu-text-primary mb-4">
              Competition Statistics
            </h2>
            <p className="text-jatayu-text-secondary">
              Our track record speaks to our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2 animate-fade-in">
              <div className="w-16 h-16 mx-auto bg-yellow-400/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🥇</span>
              </div>
              <div className="text-3xl font-bold font-playfair text-yellow-400">3</div>
              <p className="text-jatayu-text-secondary text-sm">First Places</p>
            </div>

            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto bg-gray-300/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🥈</span>
              </div>
              <div className="text-3xl font-bold font-playfair text-gray-300">2</div>
              <p className="text-jatayu-text-secondary text-sm">Second Places</p>
            </div>

            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto bg-amber-600/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🥉</span>
              </div>
              <div className="text-3xl font-bold font-playfair text-amber-600">1</div>
              <p className="text-jatayu-text-secondary text-sm">Third Places</p>
            </div>

            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 mx-auto bg-jatayu-accent/20 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-jatayu-accent" />
              </div>
              <div className="text-3xl font-bold font-playfair text-jatayu-accent">15+</div>
              <p className="text-jatayu-text-secondary text-sm">Total Competitions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competitions;
