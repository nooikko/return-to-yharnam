import React, { PropsWithChildren } from 'react';
import type { PropsWithTailwind } from '../../types';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends PropsWithChildren, PropsWithTailwind {
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge('rounded-md bg-red-800 px-8 py-3 text-sm font-bold uppercase text-white transition ease-in-out hover:scale-105', className)}
    >
      {children}
    </button>
  );
};
