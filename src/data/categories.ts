import type { Category } from '@/types';

export const categories: Category[] = [
  {
    name: 'Zardinjere',
    slug: 'betonske-zardinjere',
    description:
      'Dekorativne betonske zardinjere razlicitih oblika i dimenzija. Idealne za uredenje dvorista, terasa i javnih prostora. Izradjene od armiranog betona.',
    image: '/images/categories/zardinjere.jpg',
    productCount: 60,
  },
  {
    name: 'Skulpture za bastu',
    slug: 'betonske-skulpture-za-bastu',
    description:
      'Bastenske skulpture od betona koje oplemenjuju svaki vrt. Figurine, andjeli, zivotinje i klasicne skulpture uredene do najsitnijeg detalja.',
    image: '/images/categories/skulpture.jpg',
    productCount: 35,
  },
  {
    name: 'Fontane i bastenske cesme',
    slug: 'betonske-fontane',
    description:
      'Dekorativne betonske fontane i bastenske cesme za dvorista i vrtove. Razliciti stilovi od klasicnih do modernih, sa ugradenom pumpom za cirkulaciju vode.',
    image: '/images/categories/fontane.jpg',
    productCount: 19,
  },
  {
    name: 'Lampioni za bastu i dvoriste',
    slug: 'betonski-lampioni',
    description:
      'Betonski lampioni za bastu i dvoriste. Dekorativno osvetljenje koje daje poseban ugodaj svakom eksterijeru.',
    image: '/images/categories/stubovi.jpg',
    productCount: 7,
  },
  {
    name: 'Letnjikovci i bastenske garniture',
    slug: 'letnjikovci',
    description:
      'Betonski letnjikovci i bastenske garniture za dvorista. Idealno mesto za odmor i uzivanje na otvorenom. Razlicite velicine i dizajn resenja.',
    image: '/images/categories/letnjikovci.jpg',
    productCount: 8,
  },
  {
    name: 'Urbani mobilijar',
    slug: 'urbani-mobilijar',
    description:
      'Betonski urbani mobilijar za parkove, trgove i javne povrsine. Klupe, korpe za otpatke, parking stubici i drugi elementi urbanog mobilijara.',
    image: '/images/categories/urbani-mobilijar.jpg',
    productCount: 25,
  },
  {
    name: 'Grcki stubovi',
    slug: 'grcki-stubovi',
    description:
      'Betonski grcki stubovi u klasicnom stilu. Razliciti precnici i visine za dekoraciju fasada, ulaza i enterijera.',
    image: '/images/categories/stepenista.jpg',
    productCount: 24,
  },
  {
    name: 'Postamenti za skulpture',
    slug: 'betonski-postamenti',
    description:
      'Betonski postamenti razlicitih dimenzija za postavljanje skulptura, vaza i dekorativnih elemenata u eksterijeru.',
    image: '/images/categories/saksije.jpg',
    productCount: 15,
  },
  {
    name: 'Stubovi za ogradu',
    slug: 'stubovi-za-ogradu',
    description:
      'Betonski stubovi za ogradu razlicitih dimenzija i stilova. Robusni i trajni, idealni za ogradivanje imanja.',
    image: '/images/categories/ograde.jpg',
    productCount: 46,
  },
  {
    name: 'Kape za stubove',
    slug: 'kape-za-stubove',
    description:
      'Betonske kape za stubove razlicitih dimenzija. Zastitni i dekorativni zavrsni element za stubove ograda.',
    image: '/images/categories/ostali.jpg',
    productCount: 34,
  },
  {
    name: 'Okapnice za temelje',
    slug: 'betonske-okapnice',
    description:
      'Betonske okapnice za temelje i prozore. Zastita od atmosferskih padavina uz estetski doprinos izgledu objekta.',
    image: '/images/categories/okapnice.jpg',
    productCount: 22,
  },
  {
    name: 'Balustrade',
    slug: 'betonske-balustrade',
    description:
      'Betonske balustrade za terase, balkone i stepenista. Klasicni dizajn, visoka otpornost na vremenske uslove.',
    image: '/images/categories/klupe.jpg',
    productCount: 20,
  },
  {
    name: 'Kamin maske i ukrasi za fasade',
    slug: 'kamin-maske',
    description:
      'Dekorativne kamin maske i ukrasi za fasade od betona. Klasicne i moderne varijante koje dodaju eleganciju svakom enterijeru i eksterijeru.',
    image: '/images/categories/kamin-maske.jpg',
    productCount: 24,
  },
  {
    name: 'Svecnjaci i andjeli za groblja',
    slug: 'svecnjaci-i-andjeli',
    description:
      'Betonski svecnjaci i andjeli za groblja. Dostojanstveni i trajni, izradjeni sa posebnom paznjom i postovanjem.',
    image: '/images/categories/spomenici.jpg',
    productCount: 17,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
