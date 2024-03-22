import React, { type PropsWithChildren } from 'react';

export const UnorderedList: React.FC<PropsWithChildren> = ({ children }) => {
  return <ul className='mt-2 list-inside list-disc space-y-2 text-lg'>{children}</ul>;
};

export const OrderedList: React.FC<PropsWithChildren> = ({ children }) => {
  return <ol className='mt-5 list-inside list-decimal space-y-2 text-lg'>{children}</ol>;
};

export const ListItem: React.FC<PropsWithChildren> = ({ children }) => {
  return <li>{children}</li>;
};
