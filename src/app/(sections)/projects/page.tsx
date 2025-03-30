'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'next-saas-starter',
    description: 'A production-ready SaaS starter kit built with Next.js 14.',
    link: 'https://github.com/leerob/next-saas-starter',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'next-email-client',
    description: 'A modern email client built with React Server Components.',
    link: 'https://github.com/leerob/next-email-client',
    technologies: ['React', 'Server Components', 'OAuth'],
  },
  {
    title: 'next-music-player',
    description: 'A minimalist music player with Spotify integration.',
    link: 'https://github.com/leerob/next-music-player',
    technologies: ['Next.js', 'Spotify API', 'TailwindCSS'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-normal text-primary">Projects</h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block space-y-2"
                  >
                    <h3 className="text-lg text-secondary group-hover:text-primary transition-colors duration-200 font-mono">
                      {project.title}
                    </h3>
                    <p className="text-sm text-secondary font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-secondary/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 