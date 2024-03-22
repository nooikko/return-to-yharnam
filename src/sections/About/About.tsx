import React from 'react';
import { Section, Header } from '@components';

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <Section className='flex flex-col items-center bg-neutral-300 px-6 py-12 lg:px-48'>
      <Header.H1 className='mb-5' id='about-section'>
        About
      </Header.H1>
      <div className='max-w-[1024px] space-y-5 text-lg'>
        <div>
          <span className='font-semibold uppercase'>Return to Yharnam</span> is a community event where players return to the game of Bloodborne to
          play together and help new players. During this time you are encouraged to start a new character, play through the game, and summon as many
          players as you can along the way!
        </div>
        <div>
          This is a way for us to not only enjoy the game again as it was when we first discovered it, but it also acts as a love letter to
          FromSoftware. It is a way to show them that we still love their games and that we are still here, waiting for more.
        </div>
      </div>
    </Section>
  );
};
