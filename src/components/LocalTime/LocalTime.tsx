'use client';
import React from 'react';
import dayjs from 'dayjs';

interface LocalTimeProps {
  epochTimestamp: number;
}

export const LocalTime: React.FC<LocalTimeProps> = ({ epochTimestamp }) => {
  const localTime = dayjs(epochTimestamp * 1000).format('MMMM DD, YYYY hh:mm A');

  return <span className='whitespace-nowrap rounded-md border border-red-700 bg-gray-100 p-1'>{localTime}</span>;
};
