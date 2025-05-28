export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  main?: boolean;
};

export const services: Service[] = [
  {
    id: "3b6a3e1e-1348-42d6-b8b4-9191c45075f8",
    title: "Grabación Musical",
    image: "/images/services/music-recording.jpg",
    description: "Contamos con el servicio de \"Grabación de Audio Profesional\" haciendo uso de las mejores tecnologías y herramientas para garantizarte el mejor resultado en tus producciones musicales.",
    url: "#",
    main: true,
  },
  {
    id: "fdb7a57c-07b8-40b8-8de6-ab22f0c8e746",
    title: "Mezcla y Masterización",
    image: "/images/services/mixing-mastering.jpg",
    description: "Realizamos Mezcla y Masterización de tus temas musicales, garantizando un sonido profesional y de alta calidad con lo que se pretende lograr el mejor balance de los componentes para obtener los mejores estandares de audio que demanda la industria.",
    url: "#",
    main: true,
  },
  {
    id: "836a4c79-c66f-4749-b915-7bcc23393c37",
    title: "Producción Musical",
    image: "/images/services/music-production.jpg",
    description: "Ofrecemos servicios de Producción Musical, desde la composición hasta la mezcla y masterización, para que tu música suene como lo imaginas por medio de nuestro equipo de Músicos y Productores que te asesorarán en la composición de tus temas musicales",
    url: "#",
    main: true,
  },
  {
    id: "c439f38b-713f-4d92-b087-316c87b826ad",
    title: "Spots Publicitarios",
    image: "/images/services/marketing-spots.jpg",
    description: "Creamos Spots Publicitarios para que puedas promocionar tu marca o producto de una manera efectiva y profesional.",
    url: "#",
  }, 
  {
    id: "b38e67ab-0919-40e8-a996-fd1b9161e8a4",
    title: "Grabación de Eventos en Vivo",
    image: "/images/services/live-recording.jpg",
    description: "Si requieres que te grabemos tu concierto, festival ó presentación en vivo, contamos con el equipo de grabación móvil, microfonía y todo lo necesario para capturarlo con la mejor calidad de audio digital.",
    url: "#",
  },
  {
    id: "94afadea-05d5-4ace-8591-b1866f683726",
    title: "Renta de Equipo de Audio",
    image: "/images/services/audio-rental.jpg",
    description: "Contamos con un amplio inventario de equipo de audio profesional para renta, incluyendo micrófonos, consolas, monitores y más, para que puedas llevar tu evento al siguiente nivel.",
    url: "#",
  },
];
