
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Competitions', path: '/competitions' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-jatayu-dark/95 backdrop-blur-lg border-b border-jatayu-gray shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo with enhanced animations */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-jatayu-accent to-jatayu-accent-hover rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 pulse-glow">
              <span className="text-white font-bold text-lg font-playfair">J</span>
            </div>
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <h1 className="text-xl font-bold font-playfair text-jatayu-text-primary group-hover:text-jatayu-accent transition-colors duration-300">Team Jatayu</h1>
              <p className="text-xs text-jatayu-text-muted -mt-1 group-hover:text-jatayu-text-secondary transition-colors duration-300">Innovation Takes Flight</p>
            </div>
          </Link>

          {/* Desktop Navigation with enhanced hover effects */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-jatayu-text-primary hover:text-jatayu-accent transition-all duration-300 hover:scale-110"
          >
            <div className="relative">
              {isOpen ? (
                <X size={24} className="animate-scale-in" />
              ) : (
                <Menu size={24} className="animate-scale-in" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation with slide animation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-jatayu-dark/95 backdrop-blur-lg border-b border-jatayu-gray animate-slide-up">
            <div className="py-4 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-jatayu-text-secondary hover:text-jatayu-text-primary hover:bg-jatayu-gray/50 transition-all duration-300 hover:translate-x-2 animate-slide-in-left ${
                    isActive(link.path) ? 'text-jatayu-accent bg-jatayu-gray/30' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
