import React from 'react';
import Link from 'next/link';

interface BottomBarProps {}

export const BottomBar: React.FC<BottomBarProps> = () => {
  return (
    <div className='sticky bottom-0 grid w-full grid-cols-3 border-t border-white p-5 text-sm font-semibold uppercase text-white'>
      <div />
      <div className='flex justify-center space-x-5'>
        <Link href='#'>About</Link>
        <Link href='#'>FAQ</Link>
      </div>
      <div />
    </div>
  );
};
