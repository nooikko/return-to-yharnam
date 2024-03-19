import React from 'react';
import { Section } from '@components';

interface FindHuntersProps {}

export const FindHunters: React.FC<FindHuntersProps> = () => {
  return (
    <Section className='flex flex-col items-center bg-neutral-900 px-6 py-12 text-white md:px-96'>
      <h1 className='w-full text-center text-clamp uppercase' id='find-hunters-section'>
        Find Hunters
      </h1>
      <div>While passwords are not required for the event, they allow us to bypass level limiting and find more hunters!</div>
      <div className='mt-10 flex w-full flex-wrap-reverse justify-between'>
        <div>
          <h2 className='text-clamp-sm font-bold uppercase'>Summoning Advice</h2>
          <div className='text-gray-300'>Sometimes it feels like Bloodborne is actively trying to stop your friend from summoning you.</div>
          <div className='text-gray-300'>You can fight back with these tips and tricks.</div>
          <ul className='mt-5 list-inside list-disc'>
            <li>Make sure you're matchmaking region is set to "Worldwide"</li>
            <li>Make sure you and your friend are using the same password</li>
            <li>Ring the Small Resonant Bell (and wait for the message) before ringing the Beckoning Bell</li>
            <li>Make sure the summoner has not already killed the area boss</li>
            <li>Make sure neither party is standing where they cannot summon (indicated by an X over the bell buff)</li>
          </ul>
        </div>
        <div className='mb-5 sm:mb-0'>
          <h2 className='text-clamp-sm font-bold uppercase'>Event Codes</h2>
          <div>Use the codes below to find players you want to play with</div>
          <table className='mt-5 min-w-full divide-y divide-gray-300'>
            <thead>
              <tr>
                <th scope='col' className='py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-300 sm:pl-0'>
                  Password
                </th>
                <th scope='col' className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-300'>
                  Description
                </th>
                <th scope='col' className='relative py-3 pl-3 pr-4 sm:pr-0'>
                  <span className='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              <tr>
                <td className='whitespace-nowrap py-2 pl-4 pr-3 font-medium text-gray-100 sm:pl-0'>RETURN</td>
                <td className='px-3 py-2 text-gray-300'>Get involved! Use this code for any teaming up</td>
              </tr>
              <tr>
                <td className='whitespace-nowrap py-2 pl-4 pr-3  font-medium text-gray-100 sm:pl-0'>NEWBORN</td>
                <td className=' px-3 py-2 text-gray-300'>Take it all the way and team up with new characters</td>
              </tr>
              <tr>
                <td className='whitespace-nowrap py-2 pl-4 pr-3 font-medium text-gray-100 sm:pl-0'>GREATONE</td>
                <td className=' px-3 py-2 text-gray-300'>Team up with pre-leveled characters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};
