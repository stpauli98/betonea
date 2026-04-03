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
    'Betonea - vise od 25 godina tradicije u proizvodnji dekorativnih betonskih elemenata. Saznajte vise o nasoj prici, vrednostima i timu.',
};

export default function ONamaPage() {
  return (
    <>
      <PageHero title="O nama" subtitle="BETONEA" />

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
                  subtitle="NASA PRICA"
                  title="Vise od 25 godina tradicije"
                  align="left"
                  className="mb-8"
                />

                <div className="space-y-5 text-stone-600 leading-relaxed">
                  <p>
                    Betonea je porodicna firma koja od 1998. godine stvara
                    dekorativne betonske elemente izuzetnog kvaliteta. Poceli
                    smo kao mala radionica u Lapovu, a danas smo jedan od
                    vodecih proizvodjaca dekorativnog betona u regionu. Nasa
                    strast prema zanatu i posvecnost detaljima ostale su
                    nepromenjene od prvog dana.
                  </p>
                  <p>
                    Svaki nas proizvod prolazi kroz ruke iskusnih majstora koji
                    spajaju tradicionalne tehnike izrade sa savremenim
                    materijalima i tehnologijama. Koristimo vibro-presovani
                    beton najvise klase, otporan na mraz, UV zracenje i
                    mehaniicka ostecenja. Rezultat je proizvod koji traje
                    decenijama i vremenom postaje jos lepsi.
                  </p>
                  <p>
                    Nasi proizvodi krase vrtove, parkove, hotele i javne
                    prostore sirom Srbije i regiona. Sardjujemo sa
                    arhitektama, dizajnerima enterijera i krajnjim kupcima koji
                    cene kvalitet i jedinstven dizajn. Izvozimo u zemlje
                    Evropske unije, sto je potvrda nasih visokih standarda
                    proizvodnje.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200">
                <Image
                  src="/images/about/radionica.jpg"
                  alt="Betonea radionica - proizvodnja dekorativnog betona"
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
              title="Kompletan asortiman dekorativnog betona"
              description="Od malih ukrasnih elemenata do velikih arhitektonskih projekata - pokrivamo sve vase potrebe za dekorativnim betonom."
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
