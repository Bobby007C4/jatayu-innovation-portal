
import { useState } from 'react';
import { X, Play, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Competitions', 'Projects', 'Team Events', 'Workshops'];

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
      title: 'Autonomous Robot Testing',
      category: 'Projects',
      description: 'Testing our latest autonomous navigation system in the lab environment.'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      title: 'Circuit Board Design',
      category: 'Projects',
      description: 'Custom PCB design for our IoT sensor network project.'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      title: 'Programming Session',
      category: 'Team Events',
      description: 'Late night coding session during competition preparation.'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop',
      title: 'Drone Racing Competition',
      category: 'Competitions',
      description: 'Team preparing for the International Drone Racing League competition.'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      title: 'Prosthetic Arm Development',
      category: 'Projects',
      description: 'Working on the adaptive prosthetic arm with EMG control system.'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
      title: 'Solar Panel Optimization',
      category: 'Projects',
      description: 'Testing our AI-driven solar panel efficiency optimization system.'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop',
      title: 'Smart City Workshop',
      category: 'Workshops',
      description: 'Presenting our smart city solutions at the innovation workshop.'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
      title: 'Autonomous Vehicle Testing',
      category: 'Competitions',
      description: 'Field testing our autonomous vehicle for the national competition.'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      title: 'Team Collaboration',
      category: 'Team Events',
      description: 'Team brainstorming session for our next innovative project.'
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit=crop',
      title: 'Environmental Monitoring',
      category: 'Projects',
      description: 'Deploying our environmental monitoring sensors around campus.'
    },
    {
      id: 11,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      title: 'Award Ceremony',
      category: 'Competitions',
      description: 'Celebrating our first place win at the National Robotics Championship.'
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      title: 'Code Review Session',
      category: 'Team Events',
      description: 'Weekly code review and knowledge sharing session.'
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  const openLightbox = (media: any) => {
    setSelectedMedia(media);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-jatayu-text-primary">
              Our <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl text-jatayu-text-secondary leading-relaxed">
              A visual journey through our projects, competitions, and team moments. 
              Every image tells a story of innovation, dedication, and teamwork.
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

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-jatayu-gray rounded-xl overflow-hidden cursor-pointer card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(item)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-jatayu-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-jatayu-accent/20 text-jatayu-accent px-2 py-1 rounded text-xs">
                        {item.category}
                      </span>
                      <ImageIcon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-jatayu-dark/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-jatayu-accent transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Media Content */}
            <div className="bg-jatayu-gray rounded-xl overflow-hidden">
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              
              {/* Media Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-playfair text-jatayu-text-primary">
                    {selectedMedia.title}
                  </h3>
                  <span className="bg-jatayu-accent/20 text-jatayu-accent px-3 py-1 rounded-full text-sm">
                    {selectedMedia.category}
                  </span>
                </div>
                <p className="text-jatayu-text-secondary leading-relaxed">
                  {selectedMedia.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
