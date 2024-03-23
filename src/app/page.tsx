import { CallToAction, FindHunters, GetInvolved, FAQ, Vileblood } from '@sections';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <CallToAction />
      <FindHunters />
      <Vileblood />
      <GetInvolved />
      <FAQ />
    </main>
  );
}
