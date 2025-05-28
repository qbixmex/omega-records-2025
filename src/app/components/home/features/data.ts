import {
  FaUsers as UsersIcon,
  FaHeadphones as HeadphonesIcon,
  FaWaveSquare as WaveSquareIcon,
  FaMusic as MusicIcon,
  FaVolumeUp as VolumeUpIcon,
  FaApple as AppleIcon,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: IconType;
};

export const features: Feature[] = [
  {
    id: 'b20bc36a-734b-465d-9bdc-26f7f78aa884',
    title: 'Ingenieros Calificados',
    description: 'Contamos con el personal más calificado para realizar tanto la grabación como la mezcla y masterización de tu proyecto.',
    icon: UsersIcon,
  },
  {
    id: '22f2905e-3aa3-4333-bebe-b04d329fcb26',
    title: 'Monitoreo Profesional',
    description: 'Realizamos el monitoreo con Audifonos Shure SRH-840 y Sony MDR-7506.',
    icon: HeadphonesIcon,
  },
  {
    id: 'd253b7b2-9bd8-491f-bddc-2f9ca5ed23ea',
    title: 'Tratamiento Acústico',
    description: 'La cabina de grabación cuenta con paneles de absorbción, difusores acústicos y piso laminado.',
    icon: WaveSquareIcon,
  },
  {
    id: '707194ff-ba31-4ae2-9903-33b65a4f5e6',
    title: 'Producción Musical',
    description: 'Contamos con músicos profesionales que te ayudaran a mejorar la producción musical de tu proyecto.',
    icon: MusicIcon,
  },
  {
    id: '19f46f32-5478-4948-8ff4-ca1fd3712ac7',
    title: 'Mezcla y Masterización',
    description: 'Realizamos la Mezcla y Masterización de tu proyecto con los mejores estandares más adecuados para la reproducción en cualquier dispositivo de audio.',
    icon: VolumeUpIcon,
  },
  {
    id: 'c2d53700-7c71-443c-8257-c8e2d753e1da',
    title: 'Equipo de Computo',
    description: 'Contamos con equipo de computo de la marca Apple tanto para grabación de estudio y hardware de alta calidad para grabación en vivo.',
    icon: AppleIcon,
  },
];
