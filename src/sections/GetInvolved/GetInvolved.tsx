import React from 'react';
import { Section, Header, Button } from '@components';
import { FaReddit, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface GetInvolvedProps {}

export const GetInvolved: React.FC<GetInvolvedProps> = () => {
  return (
    <Section className='flex flex-col items-center bg-neutral-300 px-6 py-12 lg:px-48'>
      <Header.H1 id='get-involved-section'>Get Involved</Header.H1>
      <div className='mb-5 max-w-[1024px] text-lg'>There&apos;s many ways to get involved with Return to Yharnam outside of the game.</div>
      <div className='flex w-full max-w-[1024px] flex-col justify-between text-lg md:flex-row'>
        <div className='space-y-5'>
          <Header.H2>Join the Community</Header.H2>
          <a className='block' target='_blank' rel='noopener no-referrer' href='https://discord.gg/bloodborne'>
            <Button className='flex w-full items-center bg-[#5865F2] text-white'>
              <FaDiscord className='mr-2 inline-block' />
              <div className='w-full text-center'>Discord</div>
            </Button>
          </a>
          <a className='block' target='_blank' rel='noopener no-referrer' href='https://www.reddit.com/r/bloodborne/'>
            <Button className='flex w-full items-center bg-[#FF5700] text-white'>
              <FaReddit className='mr-2 inline-block' />
              <div className='w-full text-center'>Reddit</div>
            </Button>
          </a>
        </div>
        <div className='mt-10 space-y-5 md:mt-0'>
          <Header.H2 className='space-y-5'>Spread the Word</Header.H2>
          <a
            className='block'
            target='_blank'
            rel='noopener no-referrer'
            href='https://twitter.com/intent/post?text=You%27re%20in%20the%20know%2C%20right%3F%0A%23ReturnToYharnam2024%0Ahttps%3A%2F%2Freturntoyharnam.com%2F'
          >
            <Button className='flex w-full items-center bg-black text-white'>
              <FaXTwitter className='mr-2 inline-block' />
              <div className='w-full text-center'>Post</div>
            </Button>
          </a>
        </div>
      </div>
      <div className='mt-12 flex flex-col items-center justify-center space-y-5'>
        <Header.H2>Other Platforms</Header.H2>
        <div>
          Use <span className='font-bold text-red-800'>#ReturnToYharnam2024</span> on your favorite platform to show support for the event!
        </div>
      </div>
    </Section>
  );
};
