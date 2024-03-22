import React from 'react';
import { Section, Header, LocalTime, Button } from '@components';
import { FaPlaystation } from 'react-icons/fa';

interface FAQProps {}

export const FAQ: React.FC<FAQProps> = () => {
  return (
    <Section className='flex flex-col items-center bg-neutral-900 px-6 py-12 text-white md:px-12 xl:px-48'>
      <div className='mx-auto max-w-7xl divide-y divide-gray-100/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40'>
        <Header.H1 id='faq-section'>Frequently Asked Questions</Header.H1>
        <dl className='mt-10 space-y-8 divide-y divide-gray-100/10'>
          <div className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8'>
            <dt className='text-base font-semibold leading-7 text-gray-200 lg:col-span-5'>What are the times for the event?</dt>
            <dd className='mt-4 lg:col-span-7 lg:mt-0'>
              <p className='text-base leading-7 text-gray-100'>
                Return to Yharnam starts at <LocalTime epochTimestamp={1711238400} /> and ends at <LocalTime epochTimestamp={1712534400} />.
              </p>
              <div className='text-sm text-gray-100/75'>(Times shown are in YOUR local time)</div>
            </dd>
          </div>
          <div className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8'>
            <dt className='text-base font-semibold leading-7 text-gray-200 lg:col-span-5'>Do I need to create a new character?</dt>
            <dd className='mt-4 lg:col-span-7 lg:mt-0'>
              <p className='text-base leading-7 text-gray-100'>
                Technically no, but it is encouraged. The event is about returning to the game and playing together, so starting a new character is a
                great way to do that. It also helps match with players that may not have a password on.
              </p>
            </dd>
          </div>
          <div className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8'>
            <dt className='text-base font-semibold leading-7 text-gray-200 lg:col-span-5'>Do I need the DLC?</dt>
            <dd className='mt-4 lg:col-span-7 lg:mt-0'>
              <p className='text-base leading-7 text-gray-100'>
                No, you do not need the DLC to participate in the event. However, if you have it, you are encouraged to play through it and help
                others with it.
              </p>
            </dd>
          </div>
          <div className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8'>
            <dt className='text-base font-semibold leading-7 text-gray-200 lg:col-span-5'>I don&apos;t have the game, where can I get it?</dt>
            <dd className='mt-4 lg:col-span-7 lg:mt-0'>
              <p className='flex text-base leading-7 text-gray-100 '>
                <a
                  href='https://store.playstation.com/en-us/product/UP9000-CUSA00900_00-BLOODBORNE000000'
                  rel='noopener nofollow noreferrer'
                  target='_blank'
                >
                  <Button className='flex w-full items-center bg-[#0072ce] text-white'>
                    <FaPlaystation className='mr-2 inline-block text-xl' />
                    <div className='w-full text-center'>PlayStation Store</div>
                  </Button>
                </a>
              </p>
              <p className='mt-5'>
                You can also choose to support your local game stores or purchase a physical copy from a variety of online retailers.
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
};
