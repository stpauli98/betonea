import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import AboutPreview from '@/components/home/AboutPreview';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Betonea',
  description: 'Proizvodnja dekorativne betonske galanterije',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Srpskih oslobodilaca 4',
    addressLocality: 'Lapovo',
    postalCode: '34220',
    addressCountry: 'RS',
  },
  telephone: '+38163603181',
  email: 'office@betonea.com',
  url: 'https://betonea.com',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '09:00',
    closes: '17:00',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <AboutPreview />
      <FeaturedCategories />
      <Testimonials />
      <CTASection />
    </>
  );
}
