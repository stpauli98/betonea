import type { Category } from '@/types';

export const categories: Category[] = [
  {
    name: 'Žardinjere',
    slug: 'betonske-zardinjere',
    description:
      'Dekorativne betonske žardinjere različitih oblika i dimenzija. Idealne za uređenje dvorišta, terasa i javnih prostora. Izrađene od armiranog betona.',
    image: '/images/categories/zardinjere.jpg',
    productCount: 60,
  },
  {
    name: 'Skulpture za baštu',
    slug: 'betonske-skulpture-za-bastu',
    description:
      'Baštenske skulpture od betona koje oplemenjuju svaki vrt. Figurine, anđeli, životinje i klasične skulpture urađene do najsitnijeg detalja.',
    image: '/images/categories/skulpture.jpg',
    productCount: 35,
  },
  {
    name: 'Fontane i baštenske česme',
    slug: 'betonske-fontane',
    description:
      'Dekorativne betonske fontane i baštenske česme za dvorišta i vrtove. Različiti stilovi od klasičnih do modernih, sa ugrađenom pumpom za cirkulaciju vode.',
    image: '/images/categories/fontane.jpg',
    productCount: 19,
  },
  {
    name: 'Lampioni za baštu i dvorište',
    slug: 'betonski-lampioni',
    description:
      'Betonski lampioni za baštu i dvorište. Dekorativno osvetljenje koje daje poseban ugođaj svakom eksterijeru.',
    image: '/images/categories/stubovi.jpg',
    productCount: 7,
  },
  {
    name: 'Letnjikovci i baštenske garniture',
    slug: 'letnjikovci',
    description:
      'Betonski letnjikovci i baštenske garniture za dvorišta. Idealno mesto za odmor i uživanje na otvorenom. Različite veličine i dizajn rešenja.',
    image: '/images/categories/letnjikovci.jpg',
    productCount: 8,
  },
  {
    name: 'Urbani mobilijar',
    slug: 'urbani-mobilijar',
    description:
      'Betonski urbani mobilijar za parkove, trgove i javne površine. Klupe, korpe za otpatke, parking stubići i drugi elementi urbanog mobilijara.',
    image: '/images/categories/urbani-mobilijar.jpg',
    productCount: 25,
  },
  {
    name: 'Grčki stubovi',
    slug: 'grcki-stubovi',
    description:
      'Betonski grčki stubovi u klasičnom stilu. Različiti prečnici i visine za dekoraciju fasada, ulaza i enterijera.',
    image: '/images/categories/stepenista.jpg',
    productCount: 24,
  },
  {
    name: 'Postamenti za skulpture',
    slug: 'betonski-postamenti',
    description:
      'Betonski postamenti različitih dimenzija za postavljanje skulptura, vaza i dekorativnih elemenata u eksterijeru.',
    image: '/images/categories/saksije.jpg',
    productCount: 15,
  },
  {
    name: 'Stubovi za ogradu',
    slug: 'stubovi-za-ogradu',
    description:
      'Betonski stubovi za ogradu različitih dimenzija i stilova. Robusni i trajni, idealni za ograđivanje imanja.',
    image: '/images/categories/ograde.jpg',
    productCount: 46,
  },
  {
    name: 'Kape za stubove',
    slug: 'kape-za-stubove',
    description:
      'Betonske kape za stubove različitih dimenzija. Zaštitni i dekorativni završni element za stubove ograda.',
    image: '/images/categories/ostali.jpg',
    productCount: 34,
  },
  {
    name: 'Okapnice za temelje',
    slug: 'betonske-okapnice',
    description:
      'Betonske okapnice za temelje i prozore. Zaštita od atmosferskih padavina uz estetski doprinos izgledu objekta.',
    image: '/images/categories/okapnice.jpg',
    productCount: 22,
  },
  {
    name: 'Balustrade',
    slug: 'betonske-balustrade',
    description:
      'Betonske balustrade za terase, balkone i stepeništa. Klasičan dizajn, visoka otpornost na vremenske uslove.',
    image: '/images/categories/klupe.jpg',
    productCount: 20,
  },
  {
    name: 'Kamin maske i ukrasi za fasade',
    slug: 'kamin-maske',
    description:
      'Dekorativne kamin maske i ukrasi za fasade od betona. Klasične i moderne varijante koje dodaju eleganciju svakom enterijeru i eksterijeru.',
    image: '/images/categories/kamin-maske.jpg',
    productCount: 24,
  },
  {
    name: 'Svećnjaci i anđeli za groblja',
    slug: 'svecnjaci-i-andjeli',
    description:
      'Betonski svećnjaci i anđeli za groblja. Dostojanstveni i trajni, izrađeni sa posebnom pažnjom i poštovanjem.',
    image: '/images/categories/spomenici.jpg',
    productCount: 17,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
