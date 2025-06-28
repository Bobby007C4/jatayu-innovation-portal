
import { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Robotics', 'IoT', 'AI/ML', 'Mechanical', 'Embedded Systems', 'Web/Software'];

  const projects = [
    {
      title: 'Autonomous Warehouse Robot',
      category: 'Robotics',
      year: '2024',
      description: 'Advanced autonomous navigation system for warehouse inventory management using SLAM algorithms and computer vision.',
      techStack: ['ROS2', 'Python', 'OpenCV', 'LIDAR', 'C++'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Smart Irrigation System',
      category: 'IoT',
      year: '2024',
      description: 'IoT-based precision agriculture solution with soil moisture monitoring, weather prediction, and automated irrigation control.',
      techStack: ['Arduino', 'LoRaWAN', 'Node.js', 'MongoDB', 'React'],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Predictive Maintenance AI',
      category: 'AI/ML',
      year: '2023',
      description: 'Machine learning system for industrial equipment maintenance prediction using vibration analysis and sensor fusion.',
      techStack: ['TensorFlow', 'Python', 'Pandas', 'scikit-learn', 'Docker'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Adaptive Prosthetic Arm',
      category: 'Mechanical',
      year: '2023',
      description: 'EMG-controlled prosthetic arm with adaptive grip strength and gesture recognition for improved user experience.',
      techStack: ['SolidWorks', 'Arduino', 'EMG Sensors', '3D Printing', 'C++'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Drone Swarm Coordination',
      category: 'Embedded Systems',
      year: '2023',
      description: 'Multi-drone coordination system for search and rescue operations with real-time communication and obstacle avoidance.',
      techStack: ['PX4', 'MAVLink', 'C++', 'Python', 'ROS'],
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Smart Campus Platform',
      category: 'Web/Software',
      year: '2022',
      description: 'Comprehensive campus management system with real-time room booking, energy monitoring, and student services integration.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Robotic Arm Manipulator',
      category: 'Robotics',
      year: '2022',
      description: '6-DOF robotic arm with computer vision for precise object manipulation and assembly tasks in manufacturing environments.',
      techStack: ['ROS', 'MoveIt', 'OpenCV', 'Python', 'Gazebo'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Environmental Monitoring Network',
      category: 'IoT',
      year: '2022',
      description: 'City-wide air quality monitoring network with real-time data collection, analysis, and public dashboard visualization.',
      techStack: ['ESP32', 'InfluxDB', 'Grafana', 'Python', 'MQTT'],
      image: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=600&h=400&fit=crop',
      github: '#',
      demo: '#'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-jatayu-text-primary">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-jatayu-text-secondary leading-relaxed">
              From concept to creation, explore our journey of innovation through diverse engineering projects 
              that solve real-world problems and push technological boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-jatayu-accent text-white shadow-lg shadow-jatayu-accent/25'
                    : 'bg-jatayu-gray text-jatayu-text-secondary hover:bg-jatayu-gray-light hover:text-jatayu-text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-jatayu-gray rounded-xl overflow-hidden card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jatayu-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm">
                      <Tag className="w-4 h-4 text-jatayu-accent" />
                      <span className="text-jatayu-accent">{project.category}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-jatayu-text-muted text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-playfair text-jatayu-text-primary">
                    {project.title}
                  </h3>

                  <p className="text-jatayu-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-jatayu-text-primary">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-jatayu-dark text-jatayu-text-secondary px-3 py-1 rounded-full text-xs border border-jatayu-gray-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-jatayu-text-secondary hover:text-jatayu-accent transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-jatayu-text-secondary hover:text-jatayu-accent transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-jatayu-gray/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-jatayu-text-primary">
              Ready to Collaborate?
            </h2>
            <p className="text-xl text-jatayu-text-secondary leading-relaxed">
              We're always excited to work on new projects and challenges. 
              Get in touch to discuss potential collaborations or learn more about our work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="/about" className="btn-secondary">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
