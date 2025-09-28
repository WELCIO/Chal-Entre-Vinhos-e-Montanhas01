import { Home, Calendar, BookOpen, ShoppingCart, Music } from 'lucide-react';
import { NavItem, Attraction, Service, Playlist } from './types';

// Updated with new, stable Imgur links to ensure visibility.
export const CHALE_IMAGES: string[] = [
    'https://i.imgur.com/hX4dmbZ.jpeg',
    'https://i.imgur.com/dHTH9GE.jpeg',
    'https://i.imgur.com/qIuIDgZ.jpeg',
    'https://i.imgur.com/ztfPRB0.jpeg',
    'https://i.imgur.com/hMXE73H.jpeg',
    'https://i.imgur.com/acCr4uE.jpeg',
    'https://i.imgur.com/Vd1EMzn.jpeg',
    'https://i.imgur.com/6BtMAa9.jpeg',
    'https://i.imgur.com/wlrvQmi.jpeg',
    'https://i.imgur.com/9Ar2nPC.jpeg',
    'https://i.imgur.com/M49jyL6.jpeg',
    'https://i.imgur.com/miXZkaL.jpeg',
    'https://i.imgur.com/1bjRhFd.jpeg',
    'https://i.imgur.com/B2kmXEy.jpeg',
    'https://i.imgur.com/IqaIg71.jpeg',
    'https://i.imgur.com/MkBkj4x.jpeg',
    'https://i.imgur.com/tAbvmnj.jpeg',
];

export const ATTRACTIONS: Attraction[] = [
  { 
    name: 'Gruta Esmeralda', 
    image: 'https://i.imgur.com/hbHvOrS.jpeg',
    type: 'Trilha',
    description: 'Gruta com pedras verdes, mesma trilha do cruzeiro de cima'
  },
  { 
    name: 'Cruzeiro da Serra (Cima)', 
    image: 'https://i.imgur.com/hBxPEA7.jpeg',
    type: 'Trilha',
    description: 'Vista panorâmica da serra'
  },
  { 
    name: 'Cruzeiro da Serra (Baixo)', 
    image: 'https://i.imgur.com/hBxPEA7.jpeg',
    type: 'Trilha',
    description: 'Trilha mais acessível com vista linda'
  },
  { 
    name: 'Cachoeira Local', 
    image: 'https://i.imgur.com/v7XFuu7.jpeg',
    type: 'Natureza',
    description: 'Pequenininha mas linda, na propriedade do Dr. Joaquim'
  },
  { 
    name: 'Olho d\'Água Dourado', 
    image: 'https://i.imgur.com/pTq9cWB.jpeg',
    type: 'Trilha',
    description: 'Nascente natural com águas cristalinas'
  },
  { 
    name: 'Trilha do Ventador', 
    image: 'https://i.imgur.com/20e0KbJ.jpeg',
    type: 'Trilha',
    description: 'Local com vento constante e vista incrível'
  },
  { 
    name: 'Casa de Farinha', 
    image: 'https://i.imgur.com/zFqN0SB.jpeg',
    type: 'Cultural',
    description: 'Patrimônio cultural da região'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', icon: Home, label: 'Início' },
  { id: 'booking', icon: Calendar, label: 'Reservar' },
  { id: 'guide', icon: BookOpen, label: 'Guia' },
  { id: 'services', icon: ShoppingCart, label: 'Serviços' },
  { id: 'music', icon: Music, label: 'Música' }
];

export const EXTRA_SERVICES: Service[] = [
  { name: 'Lenha para Lareira', price: 'R$ 50', icon: '🔥' },
  { name: 'Café da Manhã', price: 'R$ 35/pessoa', icon: '☕' },
  { name: 'Bebidas Geladas', price: 'R$ 15-45', icon: '🥤' },
  { name: 'Limpeza Extra', price: 'R$ 80', icon: '🧹' }
];

export const PLAYLISTS: Playlist[] = [
  { 
    name: 'Relax & Nature', 
    genre: 'Relaxante', 
    color: 'from-green-400 to-emerald-500',
    link: 'https://open.spotify.com/search/relaxing%20nature'
  },
  { 
    name: 'Romance & Wine', 
    genre: 'Romântica', 
    color: 'from-pink-400 to-red-500',
    link: 'https://open.spotify.com/search/romantic%20music'
  },
  { 
    name: 'Party Time', 
    genre: 'Festa', 
    color: 'from-purple-400 to-indigo-500',
    link: 'https://open.spotify.com/search/party%20music'
  }
];