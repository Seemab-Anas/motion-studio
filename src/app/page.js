import Hero from '@/components/hero';
import Services from '@/components/services';
import Counter from '@/components/counter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Counter />
    </main>
  );
}
