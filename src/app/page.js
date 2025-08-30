'use client';

import Hero from '@/components/Hero';
import MyExpertise from '@/components/Experties';
import SelectedWorks from '@/components/SelectedWorks';
import Testimonials from '@/components/Testmonials';
import ContactUs from '@/components/ContactUs';
import Team from '@/components/Team';

export default function Home() {
  
  return (
    <main>
      <Hero /> 
      <MyExpertise />
      <SelectedWorks />
      <Testimonials />
      <ContactUs />
      <Team />
    </main>
  );
}