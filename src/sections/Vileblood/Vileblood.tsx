import React from 'react';
import { Section, Header, OrderedList, ListItem, UnorderedList } from '@components';

interface AboutProps {}

export const Vileblood: React.FC<AboutProps> = () => {
  return (
    <Section className='flex flex-col items-center bg-neutral-300 px-6 py-12 lg:px-48'>
      <Header.H1 className='mb-5' id='about-section'>
        PVP - Vilebloods
      </Header.H1>
      <div className='grid w-full max-w-7xl grid-cols-1 gap-x-20 text-lg lg:grid-cols-2'>
        <div className='mt-10 '>
          <Header.H2>How to PVP</Header.H2>
          <OrderedList>
            <ListItem>Purchase the Small Resonant Bell.</ListItem>
            <ListItem>Reload the Hunter&apos;s Dream.</ListItem>
            <ListItem>Purchase the Sinister Resonant Bell.</ListItem>
            <ListItem>Go to the area you want to PVP in.</ListItem>
            <ListItem>Ring the Sinister Resonant Bell.</ListItem>
          </OrderedList>
          <div>
            <h3 className='mt-5 font-bold uppercase'>Tips:</h3>
            <UnorderedList>
              <ListItem>Nightmare Frontier is the most common PVP area.</ListItem>
            </UnorderedList>
          </div>
        </div>
        <div className='mt-10'>
          <Header.H2>How to avoid PVP</Header.H2>
          <div className='text-base'>
            PVP is triggered by a Bell-Ringing Woman. These enemies are either static in the world (typically later game) or appear when you summon an
            ally using the Beckoning Bell. Killing the Bell-Ringing woman will prevent PVP.
            <div>
              <h3 className='mt-10 font-bold uppercase'>Hunting a Bell-Ringing Woman:</h3>
              <UnorderedList>
                <ListItem>Follow the chime of the bell.</ListItem>
                <ListItem>They always spawn in the same location.</ListItem>
              </UnorderedList>
            </div>
            <div>
              <h3 className='mt-5 font-bold uppercase'>Note:</h3>
              <UnorderedList>
                <li className='text-base'>Not all Bell-Ringing Women cause PVP.</li>
              </UnorderedList>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
