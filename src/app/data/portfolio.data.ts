import {
  CarFront,
  Instagram,
  Languages,
  LucideIconData,
  MapPin,
  PanelsTopLeft,
  Plane,
  ShoppingBag,
} from 'lucide-angular';

export interface Profile {
  name: string;
  firstName: string;
  role: string;
  summary: string;
  age: number;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  linkedin: string;
  github: string;
  cv: string;
  photo: string;
  company: string;
  companyUrl: string;
  companyDisplayUrl: string;
}

export interface Fact {
  icon: LucideIconData;
  label: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  current: boolean;
  url?: string;
  highlights: string[];
}

export interface Project {
  name: string;
  image: string;
  imageAlt: string;
  description: string[];
  stack: string[];
  repo: string;
}

export interface Client {
  name: string;
  service: string;
  icon: LucideIconData;
  url: string;
  displayUrl: string;
  /** Captura de la web; si falta se muestra un bloque con el icono del servicio */
  image?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Education {
  title: string;
  center: string;
  detail?: string;
}

export interface NavLink {
  id: string;
  label: string;
}

export const PROFILE: Profile = {
  name: 'Samuel García Ayala',
  firstName: 'Samuel',
  role: 'Desarrollador web fullstack',
  summary:
    'Construyo webs y aplicaciones a medida, de la idea al despliegue. Busco un equipo donde seguir aprendiendo y aportar desde el primer día.',
  age: 20,
  location: 'Alcalá del Valle, Cádiz',
  email: 'samuelgarciaayala@gmail.com',
  phone: '+34 688 406 502',
  phoneHref: 'tel:+34688406502',
  linkedin: 'https://www.linkedin.com/in/samuel-garcia-22155b230/',
  github: 'https://github.com/samuel-garcia06',
  cv: 'cv.pdf',
  photo: 'samuel.jpg',
  company: 'Web Para Todos',
  companyUrl: 'https://webparatodo.com',
  companyDisplayUrl: 'webparatodo.com',
};

export const NAV_LINKS: NavLink[] = [
  { id: 'clientes', label: 'Clientes' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
];

export const FACTS: Fact[] = [
  { icon: MapPin, label: 'Alcalá del Valle, Cádiz' },
  { icon: CarFront, label: 'Carné B y vehículo propio' },
  { icon: Plane, label: 'Disponibilidad para viajar' },
  { icon: Languages, label: 'Inglés B1' },
];

export const ABOUT = {
  paragraphs: [
    'Tras terminar el Grado Superior en Desarrollo de Aplicaciones Web y mis prácticas en NTT DATA, fundé Web Para Todos, donde diseño y construyo webs y aplicaciones para pequeñas empresas.',
    'Aprendo algo nuevo cada día: SEO, rendimiento web y desarrollo con inteligencia artificial. Busco un equipo donde seguir aprendiendo y aportar desde el primer día.',
  ],
  traits: ['Extrovertido', 'Simpático', 'Comprensivo', 'Trabajador', 'Trabajo en equipo'],
};

export const EXPERIENCE: Experience[] = [
  {
    role: 'Fundador y desarrollador',
    company: 'Web Para Todos',
    period: 'May 2026 — Actualidad',
    current: true,
    url: 'https://webparatodo.com',
    highlights: [
      'Webs estáticas, aplicaciones con CRM y aplicaciones completas a medida para clientes de distintos sectores.',
      'Gestión del proyecto de principio a fin, desde el trato con el cliente hasta el despliegue en producción.',
      'IA integrada en el flujo de trabajo para generar y revisar código, probar y depurar.',
    ],
  },
  {
    role: 'Becario de desarrollo',
    company: 'NTT DATA',
    period: 'Mar — May 2026',
    current: false,
    highlights: [
      'Migración de una aplicación de Angular 13 a Angular 15 dentro de un equipo, adaptándome a los estándares y procesos de un proyecto real.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'LocalGo',
    image: 'img/localgo.webp',
    imageAlt: 'Carta online de LocalGo con hamburguesas, filtros por categoría y carrito',
    description: [
      'App de pedidos a domicilio para restaurantes de comida rápida. El cliente consulta la carta, llena el carrito y confirma el pedido por correo o teléfono para evitar pedidos falsos.',
      'El restaurante recibe los pedidos en tiempo real con WebSockets, tiene vista de cocina con el detalle de cada pedido, los marca como completados y controla el tiempo de espera y si la cocina está abierta.',
    ],
    stack: ['Laravel', 'Laravel Reverb', 'WebSockets'],
    repo: 'https://github.com/samuel-garcia06/localgo',
  },
  {
    name: 'Taller Mecánico',
    image: 'img/taller.webp',
    imageAlt: 'Formulario para pedir cita en el taller eligiendo vehículo, servicio, fecha y hora',
    description: [
      'Software de gestión para un taller mecánico, con web pública para pedir cita y portal del cliente, instalable como PWA. Las citas se reservan en franjas de media hora y nunca se aceptan más a la vez que mecánicos tiene el taller, para repartir el trabajo sin saturarse.',
      'Recepción gestiona clientes, vehículos, presupuestos, órdenes de trabajo y facturas; cada mecánico ve sus órdenes desde el móvil, y el cliente sigue la reparación y aprueba presupuestos con avisos por correo y notificaciones push.',
      'API REST con Spring Boot y Spring Security (JWT), PostgreSQL con migraciones Flyway y todo el entorno en Docker.',
    ],
    stack: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/samuel-garcia06/taller-mecanico',
  },
];

export const CLIENTS: Client[] = [
  {
    name: 'Multibecerra',
    service: 'Landing page',
    icon: PanelsTopLeft,
    url: 'https://multibecerra.com',
    displayUrl: 'multibecerra.com',
    image: 'img/multibecerra.webp',
  },
  {
    name: 'Arunda Bikes',
    service: 'Landing page',
    icon: PanelsTopLeft,
    url: 'https://arundabikes.com',
    displayUrl: 'arundabikes.com',
    image: 'img/arundabikes.webp',
  },
  {
    name: 'Casa Palmero Setenil',
    service: 'Landing page',
    icon: PanelsTopLeft,
    url: 'https://casapalmerosetenil.com',
    displayUrl: 'casapalmerosetenil.com',
    image: 'img/casapalmero.webp',
  },
  {
    name: 'Cachanbike',
    service: 'Tienda online',
    icon: ShoppingBag,
    url: 'https://cachanbike.com',
    displayUrl: 'cachanbike.com',
    image: 'img/cachanbike.webp',
  },
  {
    name: 'Del Polear a Casa',
    service: 'Gestión de redes sociales',
    icon: Instagram,
    url: 'https://www.instagram.com/delpolearacasa_/',
    displayUrl: '@delpolearacasa_',
  },
];

export const SKILLS: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['Angular 21', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Laravel 13', 'Laravel Reverb', 'PHP', 'Java', 'Spring Boot'],
  },
  {
    title: 'Herramientas',
    items: ['Docker', 'Git y GitHub', 'Shell'],
  },
  {
    title: 'Además',
    items: ['Desarrollo con IA (Claude)', 'SEO', 'Rendimiento web'],
  },
];

export const EDUCATION: Education[] = [
  {
    title: 'Grado Superior en Desarrollo de Aplicaciones Web',
    center: 'IES Politécnico Jesús Marín, Málaga',
  },
  {
    title: 'Curso de React + Claude',
    center: 'Impartido por Braulio Díez, CEO de Lemoncode',
    detail: '5 días',
  },
  {
    title: 'Bachillerato de Ciencias Tecnológicas',
    center: 'IES Fuente Grande, Alcalá del Valle',
  },
];
