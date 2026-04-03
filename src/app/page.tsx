import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import AboutPreview from '@/components/home/AboutPreview';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <FeaturedCategories />
      <Testimonials />
      <CTASection />
    </>
  );
}
