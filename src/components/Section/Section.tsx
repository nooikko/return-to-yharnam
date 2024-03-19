import React, { PropsWithChildren } from 'react';
import { PropsWithTailwind } from '../../types';
import { twMerge } from 'tailwind-merge';

interface SectionProps extends PropsWithChildren, PropsWithTailwind {
  styles?: React.CSSProperties;
}

export const Section: React.FC<SectionProps> = ({ children, className, styles }) => {
  return (
    <section style={styles} className={twMerge('min-h-[750px] w-full', className || '')}>
      {children}
    </section>
  );
};
