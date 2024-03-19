'use client';
import React, { PropsWithChildren } from 'react';
import { Section, Button } from '@components';
import GithubCorner from 'react-github-corner';

interface CallToActionProps extends PropsWithChildren {}

export const CallToAction: React.FC<CallToActionProps> = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section
      className='flex h-screen flex-col items-center justify-center bg-neutral-900 bg-cover bg-center'
      styles={{ backgroundImage: 'url(/background.webp)' }} // eslint-disable-line quotes
    >
      <GithubCorner target='_blank' rel='noopener no-referrer' href='https://github.com/nooikko/return-to-yharnam' />
      <div className='flex max-w-[1024px] flex-col items-center space-y-6'>
        <div>
          <h1 className='text-clamp-lg font-bold uppercase leading-none text-neutral-900'>Return to Yharnam</h1>
        </div>
        <div className='flex space-x-4 self-center text-clamp uppercase text-neutral-900 lg:self-start'>
          <div>MAR 24</div>
          <div className='leading-tight opacity-75'>—</div>
          <div className='text-right'>APR 7</div>
        </div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-4'>
          <div />
          <Button onClick={() => scrollToSection('find-hunters-section')}>Find Hunters</Button>
          <Button
            onClick={() => scrollToSection('get-involved-section')}
            className='border border-neutral-900 border-opacity-60 bg-transparent text-neutral-900'
          >
            Get Involved
          </Button>
          <div />
        </div>
      </div>
    </Section>
  );
};
