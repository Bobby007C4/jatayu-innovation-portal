
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-jatayu-darker border-t border-jatayu-gray">
      <div className="container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-jatayu-accent to-jatayu-accent-hover rounded-full flex items-center justify-center">
                <span className="text-white font-bold font-playfair">J</span>
              </div>
              <h3 className="text-lg font-bold font-playfair text-jatayu-text-primary">Team Jatayu</h3>
            </div>
            <p className="text-jatayu-text-secondary text-sm leading-relaxed">
              Engineering excellence through innovation, collaboration, and the relentless pursuit of technical mastery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-jatayu-text-primary">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Competitions', 'Projects', 'Gallery'].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="block text-jatayu-text-secondary hover:text-jatayu-accent transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-jatayu-text-primary">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-jatayu-text-secondary">
                <Mail size={16} />
                <span>team@jatayu.dev</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-jatayu-text-secondary">
                <MapPin size={16} />
                <span>Innovation Lab, Engineering Campus</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-jatayu-text-primary">Connect</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center space-x-3 text-sm text-jatayu-text-secondary hover:text-jatayu-accent transition-colors"
              >
                <Instagram size={16} />
                <span>@team_jatayu</span>
              </a>
              <button className="flex items-center space-x-3 text-sm text-jatayu-text-secondary hover:text-jatayu-accent transition-colors">
                <Download size={16} />
                <span>Download Portfolio</span>
              </button>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-jatayu-gray">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-jatayu-text-muted text-sm">
              © 2024 Team Jatayu. All rights reserved.
            </p>
            <p className="text-jatayu-text-muted text-sm">
              Innovation Takes Flight
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
