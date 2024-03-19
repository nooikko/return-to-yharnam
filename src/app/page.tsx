import { CallToAction, About, FindHunters, GetInvolved, FAQ } from '@sections';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <CallToAction />
      <About />
      <FindHunters />
      <GetInvolved />
      <FAQ />
    </main>
  );
}
