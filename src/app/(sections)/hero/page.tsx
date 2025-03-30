'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-left">
          {isMounted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl font-normal text-primary">
                Dmitrii Lipko
              </h1>
              <p className="text-xl text-secondary font-light leading-relaxed">
                Software Engineer based in Amsterdam, specializing in frontend development with React and TypeScript. Currently building tech-driven solutions at Tiqets.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-6 opacity-0">
              <h1 className="text-4xl sm:text-5xl font-normal text-primary">
                Dmitrii Lipko
              </h1>
              <p className="text-xl text-secondary font-light leading-relaxed">
                Software Engineer based in Amsterdam, specializing in frontend development with React and TypeScript. Currently building tech-driven solutions at Tiqets.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 