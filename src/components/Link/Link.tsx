import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface LinkProps extends PropsWithChildren {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ children, href, className }) => {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer"' className={twMerge('text-red-700', className)}>
      {children}
    </a>
  );
};
