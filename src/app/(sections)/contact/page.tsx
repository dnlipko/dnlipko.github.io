'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dmitrii-lipko/',
    platform: 'Connect',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/dnlipko',
    platform: 'View',
  },
];

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {isMounted ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-normal text-primary">Contact</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-secondary font-mono">Location</span>
                    <span className="text-sm text-secondary">Amsterdam, Netherlands</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-secondary font-mono">Phone</span>
                    <span className="text-sm text-secondary">+31 6 27 09 5 121</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-secondary font-mono">Email</span>
                    <a
                      href="mailto:dmitrii.lipko@gmail.com"
                      className="text-sm text-secondary hover:text-primary transition-colors duration-200"
                    >
                      dmitrii.lipko@gmail.com
                    </a>
                  </div>
                </div>

                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-secondary group-hover:text-primary transition-colors duration-200 font-mono">
                        {link.name}
                      </span>
                      <span className="text-xs text-secondary/60">
                        {link.platform}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-12 opacity-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-normal text-primary">Contact</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-secondary font-mono">Location</span>
                    <span className="text-sm text-secondary">Amsterdam, Netherlands</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-secondary font-mono">Phone</span>
                    <span className="text-sm text-secondary">+31 6 2709 5121</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-secondary font-mono">Email</span>
                    <a
                      href="mailto:dmitrii.lipko@gmail.com"
                      className="text-sm text-secondary hover:text-primary transition-colors duration-200"
                    >
                      dmitrii.lipko@gmail.com
                    </a>
                  </div>
                </div>

                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-secondary group-hover:text-primary transition-colors duration-200 font-mono">
                        {link.name}
                      </span>
                      <span className="text-xs text-secondary/60">
                        {link.platform}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 