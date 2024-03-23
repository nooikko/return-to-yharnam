'use client';
import React, { PropsWithChildren } from 'react';
import { Section, Button, Header } from '@components';
import GithubCorner from 'react-github-corner';
import { FiChevronsDown } from 'react-icons/fi';
import { scrollToSection } from '@helpers';

interface CallToActionProps extends PropsWithChildren {}

export const CallToAction: React.FC<CallToActionProps> = () => {
  return (
    <Section
      className='flex h-screen flex-col items-center justify-center bg-neutral-900 bg-cover bg-center'
      styles={{ backgroundImage: 'url(/background.webp)' }} // eslint-disable-line quotes
    >
      <GithubCorner target='_blank' rel='noopener no-referrer' href='https://github.com/nooikko/return-to-yharnam' />
      <div className='flex max-w-[1024px] flex-col items-center'>
        <div>
          <Header.H1 className='text-left text-clamp-lg font-bold'>Return to Yharnam</Header.H1>
          <div className='flex space-x-4 self-center text-clamp-sm uppercase text-neutral-900 lg:self-start'>
            <Header.H2 className='font-normal'>A Bloodborne Community Event</Header.H2>
          </div>
        </div>
        <div className='mt-2 flex space-x-4 self-center text-clamp uppercase text-neutral-900 lg:self-start'>
          <div>MAR 23</div>
          <div className='leading-tight opacity-75'>—</div>
          <div className='text-right'>APR 7</div>
        </div>
        <div className='mt-4 grid grid-cols-1 gap-5 md:grid-cols-4'>
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
      <div className='absolute bottom-0 flex w-full  flex-col items-center'>
        <button className='flex cursor-pointer flex-col items-center' onClick={() => scrollToSection('find-hunters-section')}>
          <div className='mb-4 text-clamp-sm uppercase'>See More</div>
          <div className='animate-bounce'>
            <FiChevronsDown className='text-clamp-lg' />
          </div>
        </button>
      </div>
    </Section>
  );
};
