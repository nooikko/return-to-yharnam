import { CallToAction, About, FindHunters } from '@sections';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <CallToAction />
      <About />
      <FindHunters />
      {/* <BottomBar /> */}
    </main>
  );
}
