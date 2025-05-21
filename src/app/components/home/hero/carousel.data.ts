import { type ElementType } from 'react';
import { MicVocal, Guitar, Headphones, Speaker } from 'lucide-react';

type Slide = {
  image: {
    id: string;
    url: string;
    alt: string;
  };
  slogan: string[];
  description: string;
  icon: ElementType;
};

export const slides: Slide[] = [
  {
    image: {
      id: 'e15a98ca',
      url: '/images/studio/slide_one.png',
      alt: 'Woman listening to music with headphones',
    },
    slogan: ['ESTUDIO DE', 'GRABACIÓN'],
    description: 'En Omega Records, podrás crear, grabar y mezclar tu música con la mejor calidad. Además, tendrás acceso a un equipo de profesionales que te ayudarán a llevar tu proyecto al siguiente nivel.',
    icon: MicVocal,
  },
  {
    image: {
      id: '4d479b75',
      url: '/images/studio/slide_two.png',
      alt: 'Audio engineer working moving faders and knobs in a recording studio',
    },
    slogan: ['MEZCLA Y', 'MASTERIZACIÓN'],
    description: 'En nuestras instalaciones contamos con un equipo de ingenieros de sonido altamente capacitados que te ayudarán a mezclar y masterizar tu música. Además, podrás publicar tu música en las principales plataformas digitales.',
    icon: Headphones,
  },
  {
    image: {
      id: '8ecf0e0b',
      url: '/images/studio/slide_three.png',
      alt: 'Musical rehearsal room',
    },
    slogan: ['SALA DE', 'ENSAYO'],
    description: 'Contamos con una sala de ensayo completamente equipada para que puedas ensayar con tu banda. Además, podrás grabar tus ensayos y tener acceso a un estudio de grabación para que puedas trabajar en tu música.',
    icon: Guitar,
  },
  {
    image: {
      id: '637d8154',
      url: '/images/studio/slide_four.png',
      alt: 'Microphone for recording studio',
    },
    slogan: ['GRABACIÓN EN', 'VIVO'],
    description: 'En Omega Records, podrás grabar en vivo con tu banda. Contamos con un equipo de ingenieros de sonido altamente capacitados que te ayudarán a grabar tu música en vivo y llevarla al siguiente nivel.',
    icon: Speaker,
  }
];