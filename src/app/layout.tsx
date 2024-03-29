import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const monaSans = localFont({
  // Assuming you have a simplified case or just one weight/style
  src: './Mona-Sans.woff2',
  variable: '--font-mona-sans', // Define a CSS variable name for Mona Sans
});

export const metadata: Metadata = {
  authors: [
    {
      url: 'https://github.com/nooikko',
      name: 'Quinn Penney',
    },
  ],
  creator: 'Quinn Penney',
  publisher: 'Quinn Penney',
  title: 'Return to Yharnam - 2024',
  description: 'A yearly event where players return to the game of Bloodborne to play together and help new players.',
  keywords:
    'bloodborne, bloodborne ps5, co-op, when is return to yharnam, online, multiplayer, return to yharnam, yharnam, 2024, fromsoftware, event',
  twitter: {
    images: './twitter.webp',
    title: 'Return to Yharnam - 2024',
  },
  openGraph: {
    images: './twitter.webp',
    title: 'Return to Yharnam - 2024',
    url: 'https://returntoyharnam.com',
    siteName: 'Return to Yharnam',
  },
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <SpeedInsights />
      <Analytics />
      <body className={`${monaSans.className}`}>{children}</body>
    </html>
  );
}
