import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import Stats from '@/components/about/Stats';
import ClientLogos from '@/components/about/ClientLogos';
import { siteConfig } from '@/data/site';
import { createWhatsAppUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'O nama — Betonea',
  description:
    'Betonea – dom gde beton poprima oblik umetnosti. Vas pouzdan partner za dekorativne betonske elemente.',
};

export default function ONamaPage() {
  return (
    <>
      <PageHero title="Vas pouzdan partner za dekorativne betonske elemente" subtitle="KO SMO MI" />

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Breadcrumb
            items={[
              { label: 'Pocetna', href: '/' },
              { label: 'O nama' },
            ]}
            className="mb-12"
          />

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div>
                <SectionHeading
                  subtitle="KO SMO MI"
                  title="Vas pouzdan partner za dekorativne betonske elemente"
                  align="left"
                  className="mb-8"
                />

                <div className="space-y-5 text-stone-600 leading-relaxed">
                  <p>
                    Dobrodosli u Betonea – dom gde beton poprima oblik
                    umetnosti.
                  </p>
                  <p>
                    Nasa misija je da spojimo trajnost i lepotu. Vec godinama
                    stvaramo zardinjere, skulpture, stubove i dekorativne
                    elemente koji oplemenjuju dvorista, vrtove, javne prostore
                    i druge eksterijere. Svaki nas proizvod je izradjen rucno
                    i sa posebnom paznjom, uz upotrebu visokokvalitetnih
                    materijala i modernih tehnologija.
                  </p>
                  <p>
                    U Betonei verujemo da detalji prave razliku. Zato svaki
                    komad nosi pecat elegancije, luksuza i postojanosti, a
                    nasi klijenti dobijaju vise od dekoracije – dobijaju deo
                    ambijenta koji traje i inspirise.
                  </p>
                  <p>
                    Ponosni smo na poverenje koje smo izgradili, na saradnju
                    sa brojnim domacim i inostranim kupcima, i na cinjenicu da
                    nasi proizvodi krase dvorista, hotele, restorane i trgove
                    sirom regiona.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200">
                <Image
                  src="/images/about-hero.jpg"
                  alt="Betonea - dekorativni betonski elementi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* What We Offer Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="STA NUDIMO"
              title="Dekorativni dizajn u betonu"
              description="Pogledajte deo nasih najnovijih radova u oblasti dekorativne betonske galanterije. Od bastenskih skulptura i fontana, do ograda, stubova i urbanog mobilijara – nasi proizvodi krase privatna dvorista, poslovne prostore i javne povrsine sirom zemlje."
              className="mb-12"
            />
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Proizvodnja po meri',
                text: 'Realizujemo vase ideje u betonu. Prilagodjeni oblici, dimenzije i zavrsne obrade prema vasim specificnim zahtevima.',
              },
              {
                title: 'Siroka paleta proizvoda',
                text: 'Zardinjere, fontane, skulpture, ograde, stubovi, balustrade, klupe i mnogi drugi dekorativni elementi za vas prostor.',
              },
              {
                title: 'Dostava i montaza',
                text: 'Organizujemo transport i strucnu montazu na celoj teritoriji Srbije. Sardjujemo i sa klijentima iz inostranstva.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 150}>
                <div className="rounded-xl bg-white p-8 shadow-sm">
                  <h3 className="mb-3 font-heading text-xl text-stone-800">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Embed Section */}
      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="VIDEO"
              title="Pogledajte nas rad"
              description="Upoznajte se sa nasom proizvodnjom i gotovim projektima kroz video sadrzaj."
              className="mb-12"
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UU_letnjikovci123"
                title="Betonea YouTube kanal"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Client Logos Section */}
      <ScrollReveal>
        <SectionHeading
          subtitle="POVERENJE"
          title="Nasi klijenti"
          description="Ponosni smo na saradnju sa vodecim kompanijama i institucijama."
          className="pt-16 md:pt-24"
        />
      </ScrollReveal>
      <ClientLogos />

      {/* CTA Section */}
      <section className="bg-stone-900 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-white md:text-4xl">
              Imate projekat na umu?
            </h2>
            <p className="mt-4 text-stone-400 leading-relaxed">
              Kontaktirajte nas i zajedno cemo pronaci najbolje resenje za vas
              prostor. Besplatna konsultacija i predracun.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/kontakt" variant="primary">
                Kontaktirajte nas
              </Button>
              <Button
                href={createWhatsAppUrl(
                  siteConfig.contact.whatsapp,
                  'Zdravo, zanima me vise o vasim proizvodima.',
                )}
                variant="outline"
              >
                WhatsApp poruka
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
