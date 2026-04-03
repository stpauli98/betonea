import type { Category } from '@/types';

export const categories: Category[] = [
  {
    name: 'Zardinjere',
    slug: 'betonske-zardinjere',
    description:
      'Dekorativne betonske zardinjere razlicitih oblika i dimenzija. Idealne za uredenje dvorista, terasa i javnih prostora. Izradjene od vibro-presovanog betona najvise klase.',
    image: '/images/categories/zardinjere.jpg',
    productCount: 60,
  },
  {
    name: 'Skulpture za bastu',
    slug: 'betonske-skulpture-za-bastu',
    description:
      'Bastenske skulpture od betona koje oplemenjuju svaki vrt. Figurine, andjeli, zivotinje i klasicne skulpture uredene do najsitnijeg detalja.',
    image: '/images/categories/skulpture-za-bastu.jpg',
    productCount: 35,
  },
  {
    name: 'Fontane',
    slug: 'betonske-fontane',
    description:
      'Dekorativne betonske fontane za dvorista i vrtove. Razliciti stilovi od klasicnih do modernih, sa ugradenom pumpom za cirkulaciju vode.',
    image: '/images/categories/fontane.jpg',
    productCount: 20,
  },
  {
    name: 'Stubovi i balustrade',
    slug: 'stubovi-i-balustrade',
    description:
      'Betonski stubovi i balustrade za terase, balkone i stepenista. Klasicni i moderni dizajn, visoka otpornost na vremenske uslove.',
    image: '/images/categories/stubovi-i-balustrade.jpg',
    productCount: 40,
  },
  {
    name: 'Ograde',
    slug: 'betonske-ograde',
    description:
      'Dekorativne betonske ograde za dvorista i imanja. Raznovrsni motivi, boje i dimenzije. Trajno i estetski resenje za ogradivanje prostora.',
    image: '/images/categories/ograde.jpg',
    productCount: 30,
  },
  {
    name: 'Kamin maske',
    slug: 'kamin-maske',
    description:
      'Dekorativne kamin maske od betona u razlicitim stilovima. Klasicne i moderne varijante koje dodaju eleganciju svakom enterijeru.',
    image: '/images/categories/kamin-maske.jpg',
    productCount: 15,
  },
  {
    name: 'Okapnice',
    slug: 'betonske-okapnice',
    description:
      'Betonske okapnice za prozore i fasade. Zastita od atmosferskih padavina uz estetski doprinos izgledu objekta.',
    image: '/images/categories/okapnice.jpg',
    productCount: 20,
  },
  {
    name: 'Klupe i stolovi',
    slug: 'betonske-klupe-i-stolovi',
    description:
      'Betonske bastenske klupe i stolovi za dvorista, parkove i javne povrsine. Robusne konstrukcije otporne na sve vremenske uslove.',
    image: '/images/categories/klupe-i-stolovi.jpg',
    productCount: 18,
  },
  {
    name: 'Letnjikovci',
    slug: 'letnjikovci',
    description:
      'Betonski letnjikovci i pergole za dvorista. Idealno mesto za odmor i uzivanje na otvorenom. Razlicite velicine i dizajn resenja.',
    image: '/images/categories/letnjikovci.jpg',
    productCount: 12,
  },
  {
    name: 'Urbani mobilijar',
    slug: 'urbani-mobilijar',
    description:
      'Betonski urbani mobilijar za parkove, trgove i javne povrsine. Klupe, korpe za otpatke, stalci za bicikle i drugi elementi urbanog mobilijara.',
    image: '/images/categories/urbani-mobilijar.jpg',
    productCount: 25,
  },
  {
    name: 'Saksije',
    slug: 'betonske-saksije',
    description:
      'Dekorativne betonske saksije za cvece i biljke. Razlicite velicine i oblici za unutrasnje i spoljasnje prostore.',
    image: '/images/categories/saksije.jpg',
    productCount: 30,
  },
  {
    name: 'Stepenista',
    slug: 'betonska-stepenista',
    description:
      'Betonski elementi za stepenista - gazista, podgazista i ivicnjaci. Precizna izrada i postojane dimenzije za sigurno stepeniste.',
    image: '/images/categories/stepenista.jpg',
    productCount: 15,
  },
  {
    name: 'Nadgrobni spomenici',
    slug: 'nadgrobni-spomenici',
    description:
      'Nadgrobni spomenici i memorijalni elementi od betona. Dostojanstveni i trajni, izradjeni sa posebnom paznjom i postovanjem.',
    image: '/images/categories/nadgrobni-spomenici.jpg',
    productCount: 20,
  },
  {
    name: 'Ostali proizvodi',
    slug: 'ostali-proizvodi',
    description:
      'Razliciti betonski dekorativni proizvodi koji ne spadaju u ostale kategorije. Specijalni proizvodi po narudzbini i meri.',
    image: '/images/categories/ostali-proizvodi.jpg',
    productCount: 16,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
