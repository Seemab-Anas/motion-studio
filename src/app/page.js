import Hero from '@/components/hero';
import Services from '@/components/services';
import Counter from '@/components/counter';
import DiscoverMore from '@/components/discovermore';
import Vision from '@/components/vision';
import ContactForm from '@/components/contact-form';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Counter />
      <DiscoverMore />
      <Vision/>
      <ContactForm />
    </main>
  );
}
