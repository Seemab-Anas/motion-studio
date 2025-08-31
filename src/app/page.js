'use client';

import Hero from '@/components/Hero.js';
import MyExpertise from '@/components/Experties.js';
import SelectedWorks from '@/components/SelectedWorks.js';
import Testimonials from '@/components/Testimonials.js';
import ContactUs from '@/components/ContactUs.js';
import Team from '@/components/Team.js';

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