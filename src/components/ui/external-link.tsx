import { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800"
    >
      {children}
    </a>
  );
} 