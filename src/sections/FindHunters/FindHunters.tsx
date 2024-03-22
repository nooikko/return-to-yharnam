import React from 'react';
import { Section, Header, ListItem, UnorderedList } from '@components';

interface FindHuntersProps {}

export const FindHunters: React.FC<FindHuntersProps> = () => {
  return (
    <Section className='flex flex-col items-center bg-neutral-900 px-6 py-12 text-white md:px-12 xl:px-48'>
      <Header.H1 id='find-hunters-section'>Find Hunters</Header.H1>
      <div>While passwords are not required for the event, they allow us to bypass level limiting and find more hunters!</div>
      <div className='grid w-full max-w-7xl grid-cols-1 gap-x-20 text-lg lg:grid-cols-2'>
        <div className='order-1 mt-10'>
          <Header.H2>Summoning Advice</Header.H2>
          <div className='text-gray-400'>Bloodborne&apos;s summon system can by finnicky.</div>
          <div className='text-gray-400'>You can fight back with these tips and tricks.</div>
          <UnorderedList>
            <ListItem>Set your matchmaking region is set to &quot;Worldwide&quot;</ListItem>
            <ListItem>Use the same password as your friend</ListItem>
            <ListItem>Ring the Small Bell before ringing the Beckoning Bell</ListItem>
            <ListItem>Make sure the host has not defeated the area boss</ListItem>
            <ListItem>Stand where you can be summoned</ListItem>
          </UnorderedList>
        </div>
        <div className='order-2 mt-10'>
          <Header.H2>Event Codes</Header.H2>
          <div className='text-gray-400'>Use the codes below to find other players</div>
          <table className='mt-5 min-w-full divide-y divide-gray-200'>
            <thead>
              <tr>
                <th scope='col' className='py-3 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-400 sm:pl-0'>
                  Password
                </th>
                <th scope='col' className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-400'>
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
                <td className='px-3 py-2 text-gray-100'>Get involved! Team up with anyone</td>
              </tr>
              <tr>
                <td className='whitespace-nowrap py-2 pr-3 font-medium text-gray-100 sm:pl-0'>NEWBORN</td>
                <td className=' px-3 py-2 text-gray-100'>Team up with new characters</td>
              </tr>
              <tr>
                <td className='whitespace-nowrap py-2 pr-3 font-medium text-gray-100 sm:pl-0'>GREATONE</td>
                <td className=' px-3 py-2 text-gray-100'>Team up with pre-made characters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};
