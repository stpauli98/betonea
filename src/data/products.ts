import type { Product } from '@/types';

export const products: Product[] = [
  // ──────────────────────────────────────────────────
  // Zardinjere
  // ──────────────────────────────────────────────────
  {
    name: 'Zardinjera Athena V-120',
    slug: 'zardinjera-athena-v-120',
    categorySlug: 'betonske-zardinjere',
    description:
      'Elegantna zardinjera klasicnog dizajna sa reljefnim motivima. Pogodna za dvorista, terase i ulaze u objekte.',
    price: 'Na upit',
    dimensions: '120 x 45 x 50 cm',
    weight: '95 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-zardinjere/zardinjere-prod-1-1.jpg',
      '/images/products/betonske-zardinjere/zardinjere-prod-1-2.jpg',
    ],
    isFeatured: true,
  },
  {
    name: 'Zardinjera Rimska okrugla R-80',
    slug: 'zardinjera-rimska-okrugla-r-80',
    categorySlug: 'betonske-zardinjere',
    description:
      'Okrugla zardinjera sa rimskim motivima. Univerzalan oblik koji se uklapa u svaki ambijent.',
    price: 'Na upit',
    dimensions: 'Precnik 80 cm, visina 55 cm',
    weight: '78 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-zardinjere/zardinjere-prod-2-1.jpg',
      '/images/products/betonske-zardinjere/zardinjere-prod-2-2.jpg',
    ],
  },
  {
    name: 'Zardinjera Moderna K-100',
    slug: 'zardinjera-moderna-k-100',
    categorySlug: 'betonske-zardinjere',
    description:
      'Zardinjera cistih linija i modernog dizajna. Idealna za savremene objekte i poslovne prostore.',
    price: 'Na upit',
    dimensions: '100 x 40 x 45 cm',
    weight: '72 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-zardinjere/zardinjere-prod-3-1.jpg',
      '/images/products/betonske-zardinjere/zardinjere-prod-3-2.jpg',
    ],
  },
  {
    name: 'Zardinjera Versailles V-150',
    slug: 'zardinjera-versailles-v-150',
    categorySlug: 'betonske-zardinjere',
    description:
      'Velika dekorativna zardinjera inspirisana francuskim vrtovima. Bogato ornamentisana sa detaljima u reljefu.',
    price: 'Na upit',
    dimensions: '150 x 50 x 60 cm',
    weight: '130 kg',
    material: 'Armiran vibro-presovani beton',
    images: [
      '/images/products/betonske-zardinjere/zardinjere-prod-4-1.jpg',
      '/images/products/betonske-zardinjere/zardinjere-prod-4-2.jpg',
    ],
  },
  {
    name: 'Zardinjera Piramida P-60',
    slug: 'zardinjera-piramida-p-60',
    categorySlug: 'betonske-zardinjere',
    description:
      'Kompaktna zardinjera piramidalnog oblika. Pogodna za manje prostore i balkone.',
    price: 'Na upit',
    dimensions: '60 x 60 x 50 cm',
    weight: '45 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-zardinjere/zardinjere-prod-5-1.jpg',
      '/images/products/betonske-zardinjere/zardinjere-prod-5-2.jpg',
    ],
  },

  // ──────────────────────────────────────────────────
  // Skulpture za bastu
  // ──────────────────────────────────────────────────
  {
    name: 'Skulptura Lav',
    slug: 'skulptura-lav',
    categorySlug: 'betonske-skulpture-za-bastu',
    description:
      'Impozantna skulptura lava za ulaz u dvoriste ili imanje. Rucno doradjena sa prirodnim detaljima.',
    price: 'Na upit',
    dimensions: '75 x 35 x 60 cm',
    weight: '85 kg',
    material: 'Armiran beton, rucna dorada',
    images: [
      '/images/products/betonske-skulpture-za-bastu/skulpture-prod-1-1.jpg',
      '/images/products/betonske-skulpture-za-bastu/skulpture-prod-1-2.jpg',
    ],
    isFeatured: true,
  },
  {
    name: 'Andjeo sa krilima',
    slug: 'andjeo-sa-krilima',
    categorySlug: 'betonske-skulpture-za-bastu',
    description:
      'Dekorativna skulptura andjela sa rascirenim krilima. Prelepa figura za vrt ili dvoriste.',
    price: 'Na upit',
    dimensions: '40 x 30 x 90 cm',
    weight: '55 kg',
    material: 'Vibro-presovani beton, rucna dorada',
    images: [
      '/images/products/betonske-skulpture-za-bastu/skulpture-prod-2-1.jpg',
      '/images/products/betonske-skulpture-za-bastu/skulpture-prod-2-2.jpg',
    ],
  },
  {
    name: 'Devojka sa dzbanovom',
    slug: 'devojka-sa-dzbanovom',
    categorySlug: 'betonske-skulpture-za-bastu',
    description:
      'Klasicna bastenska skulptura devojke sa dzbanovom. Moze se koristiti kao element fontane.',
    price: 'Na upit',
    dimensions: '35 x 35 x 100 cm',
    weight: '65 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-skulpture-za-bastu/skulpture-prod-3-1.jpg',
      '/images/products/betonske-skulpture-za-bastu/skulpture-prod-3-2.jpg',
    ],
  },
  {
    name: 'Par lavova - komplet',
    slug: 'par-lavova-komplet',
    categorySlug: 'betonske-skulpture-za-bastu',
    description:
      'Komplet od dva lava za postavljanje na stubove kapije ili uz ulaz. Simetrican par za reprezentativan izgled.',
    price: 'Na upit',
    dimensions: '65 x 30 x 50 cm (svaki)',
    weight: '70 kg (svaki)',
    material: 'Armiran beton, rucna dorada',
    images: [
      '/images/products/betonske-skulpture-za-bastu/skulpture-prod-4-1.jpg',
      '/images/products/betonske-skulpture-za-bastu/skulpture-prod-4-2.jpg',
    ],
  },

  // ──────────────────────────────────────────────────
  // Fontane
  // ──────────────────────────────────────────────────
  {
    name: 'Fontana Neptun',
    slug: 'fontana-neptun',
    categorySlug: 'betonske-fontane',
    description:
      'Velika viseslojna fontana sa motivom Neptuna. Centralni element za dvoriste ili vrt. Isporucuje se sa pumpom.',
    price: 'Na upit',
    dimensions: 'Precnik 180 cm, visina 200 cm',
    weight: '350 kg',
    material: 'Armiran vibro-presovani beton',
    images: [
      '/images/products/betonske-fontane/fontane-prod-1-1.jpg',
      '/images/products/betonske-fontane/fontane-prod-1-2.jpg',
    ],
    isFeatured: true,
  },
  {
    name: 'Fontana Venecija',
    slug: 'fontana-venecija',
    categorySlug: 'betonske-fontane',
    description:
      'Elegantna dvoslojna fontana inspirisana venecijanskim stilom. Sa ugradenom pumpom za cirkulaciju vode.',
    price: 'Na upit',
    dimensions: 'Precnik 120 cm, visina 150 cm',
    weight: '180 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-fontane/fontane-prod-2-1.jpg',
      '/images/products/betonske-fontane/fontane-prod-2-2.jpg',
    ],
  },
  {
    name: 'Zidna fontana Lav',
    slug: 'zidna-fontana-lav',
    categorySlug: 'betonske-fontane',
    description:
      'Dekorativna zidna fontana sa lavovom glavom. Kompaktno resenje za manje prostore i zidove.',
    price: 'Na upit',
    dimensions: '60 x 30 x 80 cm',
    weight: '65 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-fontane/fontane-prod-3-1.jpg',
      '/images/products/betonske-fontane/fontane-prod-3-2.jpg',
    ],
  },
  {
    name: 'Fontana Kaskada',
    slug: 'fontana-kaskada',
    categorySlug: 'betonske-fontane',
    description:
      'Moderna kaskadna fontana sa tri nivoa preliva. Umirujuci zvuk vode za opustajucu atmosferu.',
    price: 'Na upit',
    dimensions: '100 x 100 x 130 cm',
    weight: '150 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-fontane/fontane-prod-4-1.jpg',
      '/images/products/betonske-fontane/fontane-prod-4-2.jpg',
    ],
  },

  // ──────────────────────────────────────────────────
  // Stubovi i balustrade
  // ──────────────────────────────────────────────────
  {
    name: 'Stub klasicni S-90',
    slug: 'stub-klasicni-s-90',
    categorySlug: 'stubovi-i-balustrade',
    description:
      'Klasicni betonski stub za balustrade i ograde. Univerzalan dizajn koji se uklapa uz razlicite stilove objekata.',
    price: 'Na upit',
    dimensions: '15 x 15 x 90 cm',
    weight: '28 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/stubovi-i-balustrade/stubovi-prod-1-1.jpg',
      '/images/products/stubovi-i-balustrade/stubovi-prod-1-2.jpg',
    ],
  },
  {
    name: 'Balustrada Antika komplet',
    slug: 'balustrada-antika-komplet',
    categorySlug: 'stubovi-i-balustrade',
    description:
      'Komplet balustera u antickom stilu sa gornjom i donjom gredom. Cena po tekucem metru.',
    price: 'Na upit',
    dimensions: 'Visina 85 cm, rastojanje baluster 12 cm',
    weight: '35 kg/m',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/stubovi-i-balustrade/stubovi-prod-2-1.jpg',
      '/images/products/stubovi-i-balustrade/stubovi-prod-2-2.jpg',
    ],
    isFeatured: true,
  },
  {
    name: 'Stub kapije veliki SK-200',
    slug: 'stub-kapije-veliki-sk-200',
    categorySlug: 'stubovi-i-balustrade',
    description:
      'Veliki dekorativni stub za kapiju. Sa postoljem i zavrsetkom u vidu kugle ili piramide.',
    price: 'Na upit',
    dimensions: '40 x 40 x 200 cm',
    weight: '180 kg',
    material: 'Armiran beton',
    images: [
      '/images/products/stubovi-i-balustrade/stubovi-prod-3-1.jpg',
      '/images/products/stubovi-i-balustrade/stubovi-prod-3-2.jpg',
    ],
  },
  {
    name: 'Balustrada Moderna komplet',
    slug: 'balustrada-moderna-komplet',
    categorySlug: 'stubovi-i-balustrade',
    description:
      'Moderna balustrada cistih linija. Minimalisticki dizajn za savremene objekte.',
    price: 'Na upit',
    dimensions: 'Visina 90 cm, rastojanje baluster 10 cm',
    weight: '30 kg/m',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/stubovi-i-balustrade/stubovi-prod-4-1.jpg',
      '/images/products/stubovi-i-balustrade/stubovi-prod-4-2.jpg',
    ],
  },

  // ──────────────────────────────────────────────────
  // Ograde
  // ──────────────────────────────────────────────────
  {
    name: 'Ograda Kamen motiv',
    slug: 'ograda-kamen-motiv',
    categorySlug: 'betonske-ograde',
    description:
      'Betonska ograda sa motivom prirodnog kamena. Realistican izgled kamena u betonskoj izvedbi.',
    price: 'Na upit',
    dimensions: '200 x 5 x 50 cm (panel)',
    weight: '85 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-ograde/ograde-prod-1-1.jpg',
      '/images/products/betonske-ograde/ograde-prod-1-2.jpg',
    ],
    isFeatured: true,
  },
  {
    name: 'Ograda Cigla motiv',
    slug: 'ograda-cigla-motiv',
    categorySlug: 'betonske-ograde',
    description:
      'Dekorativna ograda sa motivom cigle. Idealna za ogradivanje dvorista i parcela.',
    price: 'Na upit',
    dimensions: '200 x 5 x 50 cm (panel)',
    weight: '82 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-ograde/ograde-prod-2-1.jpg',
      '/images/products/betonske-ograde/ograde-prod-2-2.jpg',
    ],
  },
  {
    name: 'Ograda Dijamant',
    slug: 'ograda-dijamant',
    categorySlug: 'betonske-ograde',
    description:
      'Ograda sa geometrijskim dijamant motivom. Moderan izgled koji pruza privatnost i dekorativnost.',
    price: 'Na upit',
    dimensions: '200 x 5 x 50 cm (panel)',
    weight: '80 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-ograde/ograde-prod-3-1.jpg',
      '/images/products/betonske-ograde/ograde-prod-3-2.jpg',
    ],
  },
  {
    name: 'Ograda Stub za ogradu S-250',
    slug: 'ograda-stub-s-250',
    categorySlug: 'betonske-ograde',
    description:
      'Noseci stub za betonsku ogradu. Projektovan za montazu standardnih panela ograde.',
    price: 'Na upit',
    dimensions: '14 x 14 x 250 cm',
    weight: '65 kg',
    material: 'Armiran beton',
    images: [
      '/images/products/betonske-ograde/ograde-prod-4-1.jpg',
      '/images/products/betonske-ograde/ograde-prod-4-2.jpg',
    ],
  },

  // ──────────────────────────────────────────────────
  // Kamin maske
  // ──────────────────────────────────────────────────
  {
    name: 'Kamin maska Klasik',
    slug: 'kamin-maska-klasik',
    categorySlug: 'kamin-maske',
    description:
      'Klasicna kamin maska sa ornamentima u stilu baroka. Elegantno resenje za dnevni boravak.',
    price: 'Na upit',
    dimensions: '130 x 25 x 110 cm',
    weight: '120 kg',
    material: 'Vibro-presovani beton, rucna dorada',
    images: [
      '/images/products/kamin-maske/kamin-prod-1-1.jpg',
      '/images/products/kamin-maske/kamin-prod-1-2.jpg',
    ],
  },
  {
    name: 'Kamin maska Moderna',
    slug: 'kamin-maska-moderna',
    categorySlug: 'kamin-maske',
    description:
      'Moderna kamin maska minimalistickog dizajna. Ciste linije za savremene enterijere.',
    price: 'Na upit',
    dimensions: '140 x 20 x 115 cm',
    weight: '100 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/kamin-maske/kamin-prod-2-1.jpg',
      '/images/products/kamin-maske/kamin-prod-2-2.jpg',
    ],
  },
  {
    name: 'Kamin maska Ugaona',
    slug: 'kamin-maska-ugaona',
    categorySlug: 'kamin-maske',
    description:
      'Ugaona kamin maska za postavljanje u cosku prostorije. Optimalno koriscenje prostora.',
    price: 'Na upit',
    dimensions: '100 x 100 x 110 cm',
    weight: '95 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/kamin-maske/kamin-prod-3-1.jpg',
      '/images/products/kamin-maske/kamin-prod-3-2.jpg',
    ],
  },

  // ──────────────────────────────────────────────────
  // Okapnice
  // ──────────────────────────────────────────────────
  {
    name: 'Okapnica Ravna OR-100',
    slug: 'okapnica-ravna-or-100',
    categorySlug: 'betonske-okapnice',
    description:
      'Ravna betonska okapnica za prozore. Zastita fasade od atmosferskih padavina.',
    price: 'Na upit',
    dimensions: '100 x 18 x 4 cm',
    weight: '12 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-okapnice/okapnice-prod-1-1.jpg',
      '/images/products/betonske-okapnice/okapnice-prod-1-2.jpg',
    ],
  },
  {
    name: 'Okapnica Profilisana OP-120',
    slug: 'okapnica-profilisana-op-120',
    categorySlug: 'betonske-okapnice',
    description:
      'Profilisana okapnica sa ukrasnim ivicama. Funkcionalna zastita sa estetskim donosom.',
    price: 'Na upit',
    dimensions: '120 x 20 x 5 cm',
    weight: '16 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-okapnice/okapnice-prod-2-1.jpg',
      '/images/products/betonske-okapnice/okapnice-prod-2-2.jpg',
    ],
  },
  {
    name: 'Okapnica sa nosom ON-100',
    slug: 'okapnica-sa-nosom-on-100',
    categorySlug: 'betonske-okapnice',
    description:
      'Okapnica sa istaknutim nosom za bolje odvodenje vode. Izuzetna funkcionalnost i izdrzljivost.',
    price: 'Na upit',
    dimensions: '100 x 22 x 5 cm',
    weight: '14 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-okapnice/okapnice-prod-3-1.jpg',
      '/images/products/betonske-okapnice/okapnice-prod-3-2.jpg',
    ],
  },

  // ──────────────────────────────────────────────────
  // Klupe i stolovi
  // ──────────────────────────────────────────────────
  {
    name: 'Bastenska garnitura Klasik',
    slug: 'bastenska-garnitura-klasik',
    categorySlug: 'betonske-klupe-i-stolovi',
    description:
      'Komplet bastenskog stola sa dve klupe. Klasican dizajn pogodan za porodicna okupljanja na otvorenom.',
    price: 'Na upit',
    dimensions: 'Sto: 150 x 80 x 75 cm, Klupa: 150 x 40 x 45 cm',
    weight: '250 kg (komplet)',
    material: 'Armiran vibro-presovani beton',
    images: [
      '/images/products/betonske-klupe-i-stolovi/klupe-prod-1-1.jpg',
      '/images/products/betonske-klupe-i-stolovi/klupe-prod-1-2.jpg',
    ],
    isFeatured: true,
  },
  {
    name: 'Klupa Parkska K-180',
    slug: 'klupa-parkska-k-180',
    categorySlug: 'betonske-klupe-i-stolovi',
    description:
      'Parkska klupa sa betonskim nogama i drvenom sedistem. Kombinacija betonske robusnosti i topline drveta.',
    price: 'Na upit',
    dimensions: '180 x 55 x 80 cm',
    weight: '120 kg',
    material: 'Armiran beton, tretirano drvo',
    images: [
      '/images/products/betonske-klupe-i-stolovi/klupe-prod-2-1.jpg',
      '/images/products/betonske-klupe-i-stolovi/klupe-prod-2-2.jpg',
    ],
  },
  {
    name: 'Okrugli sto Rimski',
    slug: 'okrugli-sto-rimski',
    categorySlug: 'betonske-klupe-i-stolovi',
    description:
      'Okrugli bastanski sto sa centralnom nogom u rimskom stilu. Elegantan i stabilan.',
    price: 'Na upit',
    dimensions: 'Precnik 100 cm, visina 75 cm',
    weight: '90 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-klupe-i-stolovi/klupe-prod-3-1.jpg',
      '/images/products/betonske-klupe-i-stolovi/klupe-prod-3-2.jpg',
    ],
  },

  // ──────────────────────────────────────────────────
  // Letnjikovci
  // ──────────────────────────────────────────────────
  {
    name: 'Letnjikovac Atina L-350',
    slug: 'letnjikovac-atina-l-350',
    categorySlug: 'letnjikovci',
    description:
      'Prostrani letnjikovac sa sesnaest stubova i kupastim krovom. Idealan za vece porodicne proslave.',
    price: 'Na upit',
    dimensions: '350 x 350 x 320 cm',
    weight: '2500 kg',
    material: 'Armiran beton, metalna konstrukcija krova',
    images: [
      '/images/products/letnjikovci/letnjikovci-prod-1-1.jpg',
      '/images/products/letnjikovci/letnjikovci-prod-1-2.jpg',
    ],
    isFeatured: true,
  },
  {
    name: 'Letnjikovac Rim L-300',
    slug: 'letnjikovac-rim-l-300',
    categorySlug: 'letnjikovci',
    description:
      'Klasicni letnjikovac sa osam stubova inspirisan rimskom arhitekturom. Sa ugradenom klupom.',
    price: 'Na upit',
    dimensions: '300 x 300 x 300 cm',
    weight: '2000 kg',
    material: 'Armiran beton, metalna konstrukcija krova',
    images: [
      '/images/products/letnjikovci/letnjikovci-prod-2-1.jpg',
      '/images/products/letnjikovci/letnjikovci-prod-2-2.jpg',
    ],
  },
  {
    name: 'Pergola Moderna P-400',
    slug: 'pergola-moderna-p-400',
    categorySlug: 'letnjikovci',
    description:
      'Moderna pergola cistih linija sa cetvrtastim stubovima. Za savremene dvorisne prostore.',
    price: 'Na upit',
    dimensions: '400 x 300 x 280 cm',
    weight: '1800 kg',
    material: 'Armiran beton',
    images: [
      '/images/products/letnjikovci/letnjikovci-prod-3-1.jpg',
      '/images/products/letnjikovci/letnjikovci-prod-3-2.jpg',
    ],
  },

  // ──────────────────────────────────────────────────
  // Urbani mobilijar
  // ──────────────────────────────────────────────────
  {
    name: 'Gradska klupa GK-180',
    slug: 'gradska-klupa-gk-180',
    categorySlug: 'urbani-mobilijar',
    description:
      'Robusna gradska klupa za parkove i javne povrsine. Otporna na vandalizam i vremenske uslove.',
    price: 'Na upit',
    dimensions: '180 x 60 x 80 cm',
    weight: '200 kg',
    material: 'Armiran beton, tretirano drvo',
    images: [
      '/images/products/urbani-mobilijar/urbani-prod-1-1.jpg',
      '/images/products/urbani-mobilijar/urbani-prod-1-2.jpg',
    ],
  },
  {
    name: 'Korpa za otpatke KO-60',
    slug: 'korpa-za-otpatke-ko-60',
    categorySlug: 'urbani-mobilijar',
    description:
      'Betonska korpa za otpatke za javne povrsine. Sa unutrasnjim metalnim uloskom za lako odrzavanje.',
    price: 'Na upit',
    dimensions: '40 x 40 x 60 cm',
    weight: '65 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/urbani-mobilijar/urbani-prod-2-1.jpg',
      '/images/products/urbani-mobilijar/urbani-prod-2-2.jpg',
    ],
  },
  {
    name: 'Stalak za bicikle SB-150',
    slug: 'stalak-za-bicikle-sb-150',
    categorySlug: 'urbani-mobilijar',
    description:
      'Betonski stalak za parkiranje bicikala. Za pet bicikala, sa metalnim drzacima.',
    price: 'Na upit',
    dimensions: '150 x 50 x 40 cm',
    weight: '180 kg',
    material: 'Armiran beton, nerdjajuci celik',
    images: [
      '/images/products/urbani-mobilijar/urbani-prod-3-1.jpg',
      '/images/products/urbani-mobilijar/urbani-prod-3-2.jpg',
    ],
  },
  {
    name: 'Betonska zastitna polusfera',
    slug: 'betonska-zastitna-polusfera',
    categorySlug: 'urbani-mobilijar',
    description:
      'Zastitna polusfera za sprecavanje pristupa vozila. Za pesacke zone i ispred objekata.',
    price: 'Na upit',
    dimensions: 'Precnik 50 cm, visina 30 cm',
    weight: '75 kg',
    material: 'Armiran beton',
    images: [
      '/images/products/urbani-mobilijar/urbani-prod-4-1.jpg',
      '/images/products/urbani-mobilijar/urbani-prod-4-2.jpg',
    ],
  },

  // ──────────────────────────────────────────────────
  // Saksije
  // ──────────────────────────────────────────────────
  {
    name: 'Saksija Olimp S-50',
    slug: 'saksija-olimp-s-50',
    categorySlug: 'betonske-saksije',
    description:
      'Dekorativna saksija sa antickim motivima. Pogodna za cvece i ukrasno bilje.',
    price: 'Na upit',
    dimensions: 'Precnik 50 cm, visina 45 cm',
    weight: '35 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-saksije/saksije-prod-1-1.jpg',
      '/images/products/betonske-saksije/saksije-prod-1-2.jpg',
    ],
  },
  {
    name: 'Saksija Kocka SK-40',
    slug: 'saksija-kocka-sk-40',
    categorySlug: 'betonske-saksije',
    description:
      'Moderna kockasta saksija. Minimalisticki dizajn za savremene enterijere i eksterijere.',
    price: 'Na upit',
    dimensions: '40 x 40 x 40 cm',
    weight: '28 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-saksije/saksije-prod-2-1.jpg',
      '/images/products/betonske-saksije/saksije-prod-2-2.jpg',
    ],
  },
  {
    name: 'Saksija Amfora SA-70',
    slug: 'saksija-amfora-sa-70',
    categorySlug: 'betonske-saksije',
    description:
      'Saksija u obliku amfore sa rucicama. Klasican mediteranski izgled.',
    price: 'Na upit',
    dimensions: 'Precnik 45 cm, visina 70 cm',
    weight: '40 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonske-saksije/saksije-prod-3-1.jpg',
      '/images/products/betonske-saksije/saksije-prod-3-2.jpg',
    ],
  },
  {
    name: 'Saksija Viseca SV-30',
    slug: 'saksija-viseca-sv-30',
    categorySlug: 'betonske-saksije',
    description:
      'Kompaktna saksija sa drzacem za kacenje. Idealna za balkone i terase.',
    price: 'Na upit',
    dimensions: 'Precnik 30 cm, visina 25 cm',
    weight: '12 kg',
    material: 'Laki vibro-presovani beton',
    images: [
      '/images/products/betonske-saksije/saksije-prod-4-1.jpg',
      '/images/products/betonske-saksije/saksije-prod-4-2.jpg',
    ],
  },

  // ──────────────────────────────────────────────────
  // Stepenista
  // ──────────────────────────────────────────────────
  {
    name: 'Gaziste ravno GR-100',
    slug: 'gaziste-ravno-gr-100',
    categorySlug: 'betonska-stepenista',
    description:
      'Ravno betonsko gaziste za spoljasnja stepenista. Protivklizna povrsina za bezbedno kretanje.',
    price: 'Na upit',
    dimensions: '100 x 33 x 4 cm',
    weight: '22 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonska-stepenista/stepenista-prod-1-1.jpg',
      '/images/products/betonska-stepenista/stepenista-prod-1-2.jpg',
    ],
  },
  {
    name: 'Gaziste profilisano GP-120',
    slug: 'gaziste-profilisano-gp-120',
    categorySlug: 'betonska-stepenista',
    description:
      'Profilisano gaziste sa ukrasnom ivicom. Funkcionalno i dekorativno resenje za stepeniste.',
    price: 'Na upit',
    dimensions: '120 x 35 x 5 cm',
    weight: '28 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonska-stepenista/stepenista-prod-2-1.jpg',
      '/images/products/betonska-stepenista/stepenista-prod-2-2.jpg',
    ],
  },
  {
    name: 'Ivicnjak stepenisni IS-100',
    slug: 'ivicnjak-stepenisni-is-100',
    categorySlug: 'betonska-stepenista',
    description:
      'Ivicnjak za stepeniste sa zaobljenom ivicom. Za zavrsetke stepenisnih konstrukcija.',
    price: 'Na upit',
    dimensions: '100 x 15 x 15 cm',
    weight: '18 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/betonska-stepenista/stepenista-prod-3-1.jpg',
      '/images/products/betonska-stepenista/stepenista-prod-3-2.jpg',
    ],
  },

  // ──────────────────────────────────────────────────
  // Nadgrobni spomenici
  // ──────────────────────────────────────────────────
  {
    name: 'Spomenik Klasicni SK-01',
    slug: 'spomenik-klasicni-sk-01',
    categorySlug: 'nadgrobni-spomenici',
    description:
      'Klasicni nadgrobni spomenik sa postoljem i plocama. Dostojanstveno i trajno resenje.',
    price: 'Na upit',
    dimensions: '200 x 100 x 120 cm (komplet)',
    weight: '450 kg',
    material: 'Armiran vibro-presovani beton',
    images: [
      '/images/products/nadgrobni-spomenici/spomenici-prod-1-1.jpg',
      '/images/products/nadgrobni-spomenici/spomenici-prod-1-2.jpg',
    ],
  },
  {
    name: 'Nadgrobna ploca NP-01',
    slug: 'nadgrobna-ploca-np-01',
    categorySlug: 'nadgrobni-spomenici',
    description:
      'Nadgrobna ploca sa prostorom za natpis i fotografiju. Jednostavan i dostojanstven dizajn.',
    price: 'Na upit',
    dimensions: '80 x 60 x 8 cm',
    weight: '55 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/nadgrobni-spomenici/spomenici-prod-2-1.jpg',
      '/images/products/nadgrobni-spomenici/spomenici-prod-2-2.jpg',
    ],
  },
  {
    name: 'Memorijalni krst MK-01',
    slug: 'memorijalni-krst-mk-01',
    categorySlug: 'nadgrobni-spomenici',
    description:
      'Memorijalni krst sa postoljem. Tradicionlano resenje od kvalitetnog betona.',
    price: 'Na upit',
    dimensions: '45 x 20 x 150 cm',
    weight: '80 kg',
    material: 'Armiran beton',
    images: [
      '/images/products/nadgrobni-spomenici/spomenici-prod-3-1.jpg',
      '/images/products/nadgrobni-spomenici/spomenici-prod-3-2.jpg',
    ],
  },

  // ──────────────────────────────────────────────────
  // Ostali proizvodi
  // ──────────────────────────────────────────────────
  {
    name: 'Kugla dekorativna KD-40',
    slug: 'kugla-dekorativna-kd-40',
    categorySlug: 'ostali-proizvodi',
    description:
      'Dekorativna betonska kugla za dvoriste i vrt. Razliciti precnici na raspolaganju.',
    price: 'Na upit',
    dimensions: 'Precnik 40 cm',
    weight: '35 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/ostali-proizvodi/ostali-prod-1-1.jpg',
      '/images/products/ostali-proizvodi/ostali-prod-1-2.jpg',
    ],
  },
  {
    name: 'Betonski kameni zid - imitacija',
    slug: 'betonski-kameni-zid-imitacija',
    categorySlug: 'ostali-proizvodi',
    description:
      'Dekorativni betonski paneli sa imitacijom prirodnog kamena. Za fasade i ograde.',
    price: 'Na upit',
    dimensions: '60 x 30 x 3 cm (panel)',
    weight: '8 kg',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/ostali-proizvodi/ostali-prod-2-1.jpg',
      '/images/products/ostali-proizvodi/ostali-prod-2-2.jpg',
    ],
  },
  {
    name: 'Brojevi za kucu BK-set',
    slug: 'brojevi-za-kucu-bk-set',
    categorySlug: 'ostali-proizvodi',
    description:
      'Set betonskih brojeva za oznacavanje kucnog broja. Moderan i trajan nacin za obelezavanje objekta.',
    price: 'Na upit',
    dimensions: '15 x 10 x 2 cm (po cifri)',
    weight: '0.5 kg (po cifri)',
    material: 'Vibro-presovani beton',
    images: [
      '/images/products/ostali-proizvodi/ostali-prod-3-1.jpg',
      '/images/products/ostali-proizvodi/ostali-prod-3-2.jpg',
    ],
    isFeatured: true,
  },
];

// ──────────────────────────────────────────────────
// Helper functions
// ──────────────────────────────────────────────────

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}
