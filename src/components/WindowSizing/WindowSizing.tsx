import React from 'react';

export const WindowSizing: React.FC = () => {
  return (
    <div className='fixed left-0 top-0 bg-black p-2 text-xs text-white'>
      <div className='sm:hidden'>xs</div>
      <div className='hidden sm:block md:hidden'>sm</div>
      <div className='hidden md:block lg:hidden'>md</div>
      <div className='hidden lg:block xl:hidden'>lg</div>
      <div className='hidden xl:block 2xl:hidden'>xl</div>
      <div className='hidden 2xl:block 3xl:hidden'>2xl</div>
      <div className='hidden 3xl:block 4xl:hidden'>3xl</div>
      <div className='hidden 4xl:block'>4xl</div>
    </div>
  );
};
