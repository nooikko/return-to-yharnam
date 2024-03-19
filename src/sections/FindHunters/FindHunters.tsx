import React from 'react';
import { Section, Header } from '@components';

interface FindHuntersProps {}

export const FindHunters: React.FC<FindHuntersProps> = () => {
  return (
    <Section className='flex flex-col items-center bg-neutral-900 px-6 py-12 text-white md:px-12 xl:px-48'>
      <Header.H1 id='find-hunters-section'>Find Hunters</Header.H1>
      <div>While passwords are not required for the event, they allow us to bypass level limiting and find more hunters!</div>
      <div className='flex w-full max-w-[1024px] flex-wrap-reverse justify-between'>
        <div className='mt-10'>
          <h2 className='text-clamp-sm font-bold uppercase'>Summoning Advice</h2>
          <div className='text-gray-200'>Bloodborne&apos;s summon system can by finnicky.</div>
          <div className='text-gray-200'>You can fight back with these tips and tricks.</div>
          <ul className='mt-5 list-inside list-disc text-sm sm:text-base'>
            <li>Set you&apos;re matchmaking region is set to &quot;Worldwide&quot;</li>
            <li>Use the same password as your friend</li>
            <li>Ring the Small Bell before ringing the Beckoning Bell</li>
            <li>Make sure the host has not defeated the area boss</li>
            <li>Stand where you can be summoned</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-clamp-sm font-bold uppercase'>Event Codes</h2>
          <div>Use the codes below to find other players</div>
          <table className='mt-5 min-w-full divide-y divide-gray-200'>
            <thead>
              <tr>
                <th scope='col' className='py-3 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-200 sm:pl-0'>
                  Password
                </th>
                <th scope='col' className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-200'>
                  Description
                </th>
                <th scope='col' className='relative py-3 pl-3 pr-4 sm:pr-0'>
                  <span className='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 text-sm'>
              <tr>
                <td className='whitespace-nowrap py-2 pr-3 font-medium text-gray-100 sm:pl-0'>RETURN</td>
                <td className='px-3 py-2 text-gray-200'>Get involved! Team up with anyone</td>
              </tr>
              <tr>
                <td className='whitespace-nowrap py-2 pr-3  font-medium text-gray-100 sm:pl-0'>NEWBORN</td>
                <td className=' px-3 py-2 text-gray-200'>Team up with new characters</td>
              </tr>
              <tr>
                <td className='whitespace-nowrap py-2 pr-3 font-medium text-gray-100 sm:pl-0'>GREATONE</td>
                <td className=' px-3 py-2 text-gray-200'>Team up with pre-made characters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};
