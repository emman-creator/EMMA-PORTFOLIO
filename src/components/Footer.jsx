import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1500));

    setEmail('');
    setIsSubscribing(false);
    alert('Thank you for subscribing to my newsletter!');
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/emman-creator",
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/emmanuel-nzai",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/emmanuel-nzai",
      color: "hover:text-blue-300"
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:emmanuel.nzai@example.com",
      color: "hover:text-primary-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#service" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-dark border-t border-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-display mb-4">
                  <span className="text-gradient">Emmanuel Nzai</span>
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Full-Stack Developer passionate about creating exceptional digital experiences
                  that make a difference. Always learning, always building.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Subscribe to get the latest updates about my projects and insights.
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="btn-primary px-6 py-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubscribing ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-1"></div>
                      </div>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3 text-gray-400">
                <p>📧 emmanuel.nzai@example.com</p>
                <p>📱 +1 (555) 123-4567</p>
                <p>🌍 San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-dark-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Emmanuel Nzai. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-all duration-300 ${social.color} hover:scale-110`}
                  aria-label={social.name}
                >
                  <div className="w-5 h-5">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-dark-800 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-400">
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;