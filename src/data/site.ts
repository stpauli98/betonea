export const siteConfig = {
  name: 'Betonea',
  tagline: 'Najlepse od betona',
  description:
    'Betonea - proizvodnja dekorativnih betonskih elemenata. Zardinjere, skulpture, fontane, ograde, stubovi, balustrade i drugi betonski proizvodi vrhunskog kvaliteta.',

  contact: {
    address: 'Srpskih oslobodilaca 4, Lapovo 34220, Srbija',
    email: 'office@betonea.com',
    phones: [
      { name: 'Goran Petkovic', number: '+381 63 603 181' },
      { name: 'Tanja Petkovic', number: '+381 64 44 790 44' },
      { name: 'Fiksni', number: '+381 34 850 505' },
    ],
    whatsapp: '38163603181',
  },

  mapsUrl: 'https://maps.app.goo.gl/Vr7dEdcqvvVuPRKPA',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.7!2d21.0961!3d44.1836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47572d0e7e5e5e5d%3A0x4e5e5e5e5e5e5e5e!2sBetonea!5e0!3m2!1ssr!2srs!4v1700000000000!5m2!1ssr!2srs',

  workingHours: {
    weekdays: '09:00 - 17:00',
    saturday: '09:00 - 17:00',
    sunday: 'Zatvoreno',
    display: 'Pon - Sub: 09:00 - 17:00 | Ned: Zatvoreno',
  },

  social: {
    facebook: 'https://www.facebook.com/Betonea',
    instagram: 'https://www.instagram.com/betonea_design',
    youtube: 'https://www.youtube.com/@letnjikovci123',
  },

  stats: {
    projects: { value: 500, label: 'Zavrsenih projekata', suffix: '+' },
    clients: { value: 300, label: 'Zadovoljnih klijenata', suffix: '+' },
    years: { value: 25, label: 'Godina iskustva', suffix: '' },
    employees: { value: 15, label: 'Zaposlenih', suffix: '' },
  },
} as const;
