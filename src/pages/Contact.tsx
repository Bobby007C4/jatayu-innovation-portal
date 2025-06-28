
import { useState } from 'react';
import { Mail, MapPin, Download, Send, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - this would be connected to your backend
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'team@jatayu.dev',
      href: 'mailto:team@jatayu.dev'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Innovation Lab, Engineering Campus',
      href: '#'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@team_jatayu',
      href: 'https://instagram.com/team_jatayu'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-jatayu-text-primary">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-jatayu-text-secondary leading-relaxed">
              Ready to collaborate, have questions about our projects, or want to learn more about Team Jatayu? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold font-playfair text-jatayu-text-primary mb-4">
                  Send us a Message
                </h2>
                <p className="text-jatayu-text-secondary">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-jatayu-text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-jatayu-gray border border-jatayu-gray-light rounded-lg text-jatayu-text-primary placeholder-jatayu-text-muted focus:outline-none focus:border-jatayu-accent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-jatayu-text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-jatayu-gray border border-jatayu-gray-light rounded-lg text-jatayu-text-primary placeholder-jatayu-text-muted focus:outline-none focus:border-jatayu-accent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-jatayu-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-jatayu-gray border border-jatayu-gray-light rounded-lg text-jatayu-text-primary placeholder-jatayu-text-muted focus:outline-none focus:border-jatayu-accent transition-colors resize-none"
                    placeholder="Tell us about your project, collaboration ideas, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h2 className="text-3xl font-bold font-playfair text-jatayu-text-primary mb-4">
                  Contact Information
                </h2>
                <p className="text-jatayu-text-secondary">
                  Reach out through any of these channels. We're always excited to connect 
                  with fellow engineers, potential collaborators, and innovative thinkers.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="flex items-start space-x-4 p-6 bg-jatayu-gray rounded-xl card-hover"
                  >
                    <div className="w-12 h-12 bg-jatayu-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-jatayu-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-jatayu-text-primary mb-1">
                        {info.label}
                      </h3>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="text-jatayu-text-secondary hover:text-jatayu-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-jatayu-text-secondary">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Portfolio */}
              <div className="p-6 bg-gradient-to-br from-jatayu-accent/10 to-jatayu-accent/5 rounded-xl border border-jatayu-accent/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-jatayu-accent/20 rounded-full flex items-center justify-center">
                    <Download className="w-6 h-6 text-jatayu-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-jatayu-text-primary mb-1">
                      Team Portfolio
                    </h3>
                    <p className="text-jatayu-text-secondary text-sm">
                      Download our comprehensive team portfolio with detailed project information.
                    </p>
                  </div>
                  <button className="btn-secondary whitespace-nowrap">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-jatayu-gray/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-jatayu-text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-jatayu-text-secondary">
                Quick answers to common questions about Team Jatayu and our work.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Are you available for collaboration projects?",
                  answer: "Yes! We're always interested in collaborative projects, especially those involving innovative engineering challenges. Feel free to reach out with your ideas."
                },
                {
                  question: "Do you offer mentoring or workshops?",
                  answer: "Absolutely. We regularly conduct workshops and provide mentoring to students interested in robotics, IoT, and engineering competitions."
                },
                {
                  question: "Can we visit your lab or workspace?",
                  answer: "We welcome visitors! Please contact us in advance to schedule a visit to our innovation lab. We love sharing our work and inspiring future engineers."
                },
                {
                  question: "How can we stay updated with your latest projects?",
                  answer: "Follow us on Instagram @team_jatayu, check our blog regularly, or subscribe to our newsletter for the latest updates on our projects and achievements."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-jatayu-gray rounded-xl p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold text-jatayu-text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-jatayu-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
