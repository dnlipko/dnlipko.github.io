'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Storybook',
  'Backstop',
  'Jest',
  'Cypress',
  'Tailwind',
  'Docker',
  'AWS',
  'Kubernetes',
];

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Tiqets',
    period: '2022 - Present',
    location: 'Amsterdam, Netherlands',
    description: [
      'Led the architecture and development of a standalone frontend application, splitting it from the monolithic backend.',
      'Migrated the application to React and TypeScript, leading to 25% faster feature delivery.',
      'Initiated screenshot testing with BackstopJS, reducing UI regressions by 35%.',
      'Spearheaded the migration to React-Query, optimizing API data fetching and improving performance by 20%.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Yandex',
    period: '2021 - 2022',
    location: 'Moscow, Russia',
    description: [
      'Conducted A/B testing on news card layouts, increasing user engagement by 18%.',
      'Reduced deployment time by 30% through CI/CD pipeline optimization.',
      'Improved application accessibility following ARIA best practices.',
    ],
  },
  {
    title: 'Senior Front End Engineer',
    company: 'Domclick',
    period: '2020 - 2021',
    location: 'Moscow, Russia',
    description: [
      'Launched a feedback-driven discussion forum with TypeScript, React, and Redux.',
      'Developed animated 3D property widgets, increasing user interaction by 22%.',
      'Led a team of developers to meet challenging deadlines.',
    ],
  },
];

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="experience" className="py-20 bg-background">
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
              <h2 className="text-2xl font-normal text-primary">Experience</h2>
              <div className="space-y-12">
                {experiences.map((experience) => (
                  <div key={`${experience.company}-${experience.period}`} className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-lg text-primary">
                        {experience.title} · {experience.company}
                      </h3>
                      <p className="text-sm text-secondary">
                        {experience.period} · {experience.location}
                      </p>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-2">
                      {experience.description.map((item, index) => (
                        <li key={index} className="text-sm text-secondary font-light">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-normal text-primary">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm text-secondary border border-accent/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-12 opacity-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-normal text-primary">Experience</h2>
              <div className="space-y-12">
                {experiences.map((experience) => (
                  <div key={`${experience.company}-${experience.period}`} className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-lg text-primary">
                        {experience.title} · {experience.company}
                      </h3>
                      <p className="text-sm text-secondary">
                        {experience.period} · {experience.location}
                      </p>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-2">
                      {experience.description.map((item, index) => (
                        <li key={index} className="text-sm text-secondary font-light">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-normal text-primary">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm text-secondary border border-accent/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 