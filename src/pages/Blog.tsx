
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Revolutionizing Autonomous Navigation with Advanced SLAM Algorithms',
      excerpt: 'Deep dive into our latest breakthrough in Simultaneous Localization and Mapping for autonomous robots, featuring real-time performance optimizations and accuracy improvements.',
      author: 'Alex Rodriguez',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'Robotics',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
      slug: 'autonomous-navigation-slam-algorithms'
    },
    {
      id: 2,
      title: 'Building Resilient IoT Networks for Smart City Applications',
      excerpt: 'Exploring our approach to creating fault-tolerant IoT infrastructure for urban environments, including mesh networking protocols and edge computing integration.',
      author: 'Sarah Chen',
      date: '2024-03-08',
      readTime: '12 min read',
      category: 'IoT',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop',
      slug: 'resilient-iot-networks-smart-cities'
    },
    {
      id: 3,
      title: 'Machine Learning in Predictive Maintenance: Lessons Learned',
      excerpt: 'Our journey implementing ML algorithms for industrial equipment monitoring, including data preprocessing challenges, model selection, and deployment strategies.',
      author: 'Priya Patel',
      date: '2024-02-28',
      readTime: '10 min read',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
      slug: 'machine-learning-predictive-maintenance'
    },
    {
      id: 4,
      title: 'Designing Human-Centered Prosthetic Interfaces',
      excerpt: 'The intersection of engineering and human factors in developing intuitive control systems for adaptive prosthetics, focusing on user experience and accessibility.',
      author: 'Marcus Johnson',
      date: '2024-02-20',
      readTime: '15 min read',
      category: 'Biomedical',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
      slug: 'human-centered-prosthetic-interfaces'
    },
    {
      id: 5,
      title: 'Optimizing Solar Panel Efficiency Through AI',
      excerpt: 'Technical insights into our solar panel optimization system, covering weather prediction algorithms, sun tracking mechanisms, and energy yield improvements.',
      author: 'Emma Wilson',
      date: '2024-02-12',
      readTime: '9 min read',
      category: 'Renewable Energy',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop',
      slug: 'optimizing-solar-panel-efficiency-ai'
    },
    {
      id: 6,
      title: 'Collaborative Robotics in Modern Manufacturing',
      excerpt: 'Exploring the future of human-robot collaboration in industrial settings, safety protocols, and the integration of collaborative robots in existing workflows.',
      author: 'David Kim',
      date: '2024-02-05',
      readTime: '11 min read',
      category: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
      slug: 'collaborative-robotics-manufacturing'
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-jatayu-text-primary">
              Engineering <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-jatayu-text-secondary leading-relaxed">
              Technical deep dives, project updates, and insights from Team Jatayu. 
              Sharing our engineering journey and lessons learned along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="bg-jatayu-gray rounded-2xl overflow-hidden card-hover animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-jatayu-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-sm text-jatayu-text-muted">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <div>
                      <span className="bg-jatayu-accent/20 text-jatayu-accent px-3 py-1 rounded-full text-sm mb-4 inline-block">
                        {featuredPost.category}
                      </span>
                      <h2 className="text-2xl lg:text-3xl font-bold font-playfair text-jatayu-text-primary mb-4">
                        {featuredPost.title}
                      </h2>
                      <p className="text-jatayu-text-secondary leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-jatayu-text-muted" />
                        <span className="text-jatayu-text-secondary text-sm">{featuredPost.author}</span>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center text-jatayu-accent hover:text-jatayu-accent-hover transition-colors group"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-jatayu-gray/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-jatayu-text-primary mb-4">
              Latest Articles
            </h2>
            <p className="text-jatayu-text-secondary max-w-2xl mx-auto">
              Stay updated with our latest technical insights, project updates, and engineering discoveries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-jatayu-gray rounded-xl overflow-hidden card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-jatayu-accent/20 text-jatayu-accent px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-jatayu-text-muted">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-playfair text-jatayu-text-primary line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-jatayu-text-secondary text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-jatayu-gray-light">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-jatayu-text-muted" />
                      <span className="text-jatayu-text-secondary text-sm">{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-jatayu-accent hover:text-jatayu-accent-hover transition-colors text-sm group"
                    >
                      Read More
                      <ArrowRight className="inline ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center bg-jatayu-gray rounded-2xl p-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-jatayu-text-primary mb-4">
              Stay Updated
            </h2>
            <p className="text-jatayu-text-secondary mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest technical insights, project updates, 
              and engineering innovations from Team Jatayu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-jatayu-dark border border-jatayu-gray-light rounded-lg text-jatayu-text-primary placeholder-jatayu-text-muted focus:outline-none focus:border-jatayu-accent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
