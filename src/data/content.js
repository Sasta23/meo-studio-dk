// ============================================================
// MEO STUDIO — Site Content & Data
// ============================================================
// Edit this file to update all site content.
// ============================================================

// --- Brand / Meta -------------------------------------------
export const brand = {
  name: 'Meo Studio',
  tagline: 'Premium videoproduktion for brands, virksomheder og sociale medier',
  location: 'Odense, Danmark',
};

// --- Contact ------------------------------------------------
export const contact = {
  name: 'Sander Stage-Steffensen',
  company: 'Meo Studio',
  phone: '+45 20 93 60 09',
  email: 'meostudiodk@gmail.com',
  location: 'Odense, Danmark',

  social: [
    {
      label: 'Instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com/meostudiodk/',
    },
    {
      label: 'TikTok',
      icon: 'tiktok',
      url: 'https://www.tiktok.com/@mheo722',
    },
  ],
};

// --- Navigation links ----------------------------------------
export const navLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Kontakt', href: '#contact' },
];

// --- Portfolio categories -----------------------------------
export const categories = [
  { id: 'all', label: 'Alle' },
  { id: 'social', label: 'Sociale Medier' },
  { id: 'cinematic', label: 'Cinematic' },
  { id: 'realestate', label: 'Fast Ejendom' },
  { id: 'product', label: 'Produkt' },
];

// --- Category accent colours --------------------------------
export const categoryColors = {
  social: '#7eb8f7',
  cinematic: '#c9a96e',
  realestate: '#8fc98f',
  product: '#c78fc7',
};

// --- Videos -------------------------------------------------
export const videos = [
  {
    id: 'video-001',
    title: '17.600 visninger på TikTok',
    category: 'social',
    thumbnail: 'https://img.youtube.com/vi/YW4rChWoXsM/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/YW4rChWoXsM',
    duration: '0:45',
    description: 'SoMe video med dokumenteret resultat på TikTok',
    aspect: 'wide',
  },
  {
  id: 'video-004',
  title: 'Instagram Campaign',
  category: 'social',

  thumbnail:
    'https://img.youtube.com/vi/-SAf_R-18T8/maxresdefault.jpg',

  videoUrl:
    'https://www.youtube.com/embed/-SAf_R-18T8',

  duration: '0:22',

  description:
    'Short-form video til Instagram kampagne',

  aspect: 'tall',
},

{
  id: 'video-005',
  title: 'Cinematic Reel',
  category: 'social',

  thumbnail:
    'https://img.youtube.com/vi/JwWqsACoR3Y/maxresdefault.jpg',

  videoUrl:
    'https://www.youtube.com/embed/JwWqsACoR3Y',

  duration: '0:18',

  description:
    'Hafla 50 kroners tilbud med B-Roll',

  aspect: 'tall',
},

  {
    id: 'video-002',
    title: 'Salg af sodavand',
    category: 'social',
    thumbnail: 'https://img.youtube.com/vi/T0FWJCoR-I8/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/T0FWJCoR-I8',
    duration: '0:30',
    description: 'Produkt og branding video til sociale medier',
    aspect: 'square',
  },

  {
    id: 'video-003',
    title: 'Fanta Exotic',
    category: 'product',
    thumbnail: 'https://img.youtube.com/vi/OmaRWpwGUuk/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/OmaRWpwGUuk',
    duration: '0:17',
    description: 'Cinematic produktvideo til Fanta Exotic',
    aspect: 'square',
  },
];