import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import type { PropsWithTailwind } from '../../types';

interface HeaderProps extends PropsWithChildren, PropsWithTailwind {
  id?: string;
}

export const Header: Record<'H1' | 'H2', React.FC<HeaderProps>> = {
  H1: ({ children, className, id }) => (
    <h1 id={id} className={twMerge('w-full text-center text-clamp uppercase', className)}>
      {children}
    </h1>
  ),
  H2: ({ children, className, id }) => (
    <h2 id={id} className={twMerge('text-clamp-sm font-bold uppercase', className)}>
      {children}
    </h2>
  ),
};
