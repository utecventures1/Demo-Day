import { ProjectType } from './types';
import { EcoTrackLogo, MindWellLogo, FinanzaHoyLogo, EducaFuturoLogo, Salud360Logo } from './components/Icons';

const PDF_SAMPLE_URL = 'https://www.jugandoainvertir.com.ar/descargas/Padre-Rico-Padre-Pobre.pdf';

export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    name: 'Domus AI',
    category: 'PropTech / AI',
    description: 'Run buildings on autopilot — Domus AI automates billing, maintenance, and resident support for property managers via WhatsApp.',
    longDescription: 'Domus AI automates billing, maintenance, and resident support for property managers via AI agents on WhatsApp and phone. Our platform helps teams reduce workload, improve cash flow, and deliver instant service — without adding staff or training.',
    features: [
      "9 active clients and $2.5K in (MRR) across Peru, Paraguay, and Mexico.",
      "AI agents handle collections, incident reports, visitor access, and resident inquiries",
      "Integrated with leading SaaS tools — no downloads, no learning curve",
      "Backed by UTEC Ventures, Snitch Ventures, and angel investors",
      "Founders: ex-Zoho COO and $1.4M ARR spin-off CEO; serial entrepreneurs with SaaS and AI experience"
    ],
    logo: FinanzaHoyLogo, 
    calendlyLink: 'https://calendly.com/utec-ventures/domus-ai-intro',
    teamSize: 2,
    founders: [
      { name: 'Founder Uno', title: 'CEO & Co-founder', imageUrl: 'https://i.pravatar.cc/150?u=domus1', linkedinUrl: '#', description: 'Lidera la visión estratégica y el desarrollo de negocio, aportando una profunda experiencia en el sector inmobiliario y la gestión de propiedades.' },
      { name: 'Founder Dos', title: 'CTO & Co-founder', imageUrl: 'https://i.pravatar.cc/150?u=domus2', linkedinUrl: '#', description: 'Arquitecto de la tecnología detrás de Domus AI, especializado en inteligencia artificial y desarrollo de software para la automatización de procesos complejos.' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pdfUrl: PDF_SAMPLE_URL,
  },
  {
    id: 2,
    name: 'Bildin',
    category: 'ConstructionTech / SaaS',
    description: 'Plataforma SaaS que optimiza la gestión en construcción con seguimiento en tiempo real de productividad y rendimiento para mejorar la eficiencia.',
    longDescription: 'Bildin es un software basado en la nube para la gestión de recursos en la construcción. Nuestra plataforma permite a los gerentes de proyecto monitorear el progreso, administrar equipos y optimizar la asignación de recursos en tiempo real, lo que lleva a una mayor eficiencia y a la finalización de proyectos a tiempo y dentro del presupuesto.',
    features: [
      "Seguimiento de productividad en tiempo real.",
      "Gestión de equipos y asignación de tareas.",
      "Control de inventario de materiales.",
      "Reportes de rendimiento detallados."
    ],
    logo: EducaFuturoLogo,
    calendlyLink: 'https://calendly.com/utec-ventures/bildin-intro',
    teamSize: 2,
    founders: [
      { name: 'Matías Arana Cisneros', title: 'Co-founder', imageUrl: 'https://images.unsplash.com/photo-1624886202521-3a5b3a1a9b1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', linkedinUrl: 'https://www.linkedin.com/in/matiasaranacisneros/', description: 'Experto en operaciones de construcción, enfocado en optimizar la productividad y la gestión de proyectos a través de la tecnología.' },
      { name: 'Ana Gamarra', title: 'Co-founder', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', linkedinUrl: 'https://www.linkedin.com/in/anagamarra/', description: 'Impulsa la estrategia de producto y la experiencia de usuario en Bildin, asegurando que la plataforma sea intuitiva y resuelva problemas reales del sector.' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pdfUrl: PDF_SAMPLE_URL,
  },
  {
    id: 3,
    name: 'Talentum',
    category: 'HR Tech / AI',
    description: 'Creamos a Sara, una reclutadora con IA que encuentra, evalúa y contacta a miles de candidatos en segundos, ahorrando tiempo y costos.',
    longDescription: 'Talentum presenta a Sara, una reclutadora impulsada por IA diseñada para transformar el proceso de adquisición de talento. Sara automatiza la búsqueda, el filtrado y la comunicación inicial con los candidatos, permitiendo a los equipos de RRHH centrarse en los aspirantes más cualificados y reducir drásticamente el tiempo de contratación.',
    features: [
      "Reclutamiento masivo automatizado.",
      "Evaluación inteligente de perfiles.",
      "Interacción inicial vía chatbots.",
      "Ahorro significativo en costos de contratación."
    ],
    logo: MindWellLogo,
    calendlyLink: 'https://calendly.com/utec-ventures/talentum-intro',
    teamSize: 3,
    founders: [
      { name: 'Founder Tres', title: 'CEO & Co-founder', imageUrl: 'https://i.pravatar.cc/150?u=talentum1', linkedinUrl: '#', description: 'Estratega de negocio con experiencia en recursos humanos, dedicado a revolucionar la adquisición de talento con tecnología.' },
      { name: 'Founder Cuatro', title: 'Lead AI Engineer', imageUrl: 'https://i.pravatar.cc/150?u=talentum2', linkedinUrl: '#', description: 'Mente técnica detrás de "Sara", el motor de IA de Talentum. Apasionado por el machine learning y el procesamiento de lenguaje natural.' },
      { name: 'Founder X', title: 'Product Manager', imageUrl: 'https://i.pravatar.cc/150?u=talentum3', linkedinUrl: '#', description: 'Responsable de la hoja de ruta del producto, asegurando que Talentum evolucione para satisfacer las necesidades del mercado.' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pdfUrl: PDF_SAMPLE_URL,
  },
  {
    id: 4,
    name: 'Quix',
    category: 'EdTech / AI',
    description: 'Educación corporativa a medida a través de WhatsApp. Creamos cursos en horas con videos generados por IA para capacitar equipos de forma ágil.',
    longDescription: 'Quix reinventa la capacitación corporativa utilizando la IA para crear y distribuir micro-cursos a través de WhatsApp. Nuestra plataforma permite a las empresas desarrollar contenido de formación personalizado en cuestión de horas, facilitando un aprendizaje ágil y accesible directamente en los dispositivos móviles de los empleados.',
    features: [
      "Creación de cursos en horas, no semanas.",
      "Distribución de contenido vía WhatsApp.",
      "Videos y materiales generados por IA.",
      "Micro-learning para mayor retención."
    ],
    logo: EcoTrackLogo,
    calendlyLink: 'https://calendly.com/utec-ventures/quix-intro',
    teamSize: 4,
    founders: [
      { name: 'Founder Cinco', title: 'Co-founder', imageUrl: 'https://i.pravatar.cc/150?u=quix1', linkedinUrl: '#', description: 'Experto en pedagogía y tecnología educativa, enfocado en hacer el aprendizaje corporativo más efectivo y accesible.' },
      { name: 'Founder Seis', title: 'Co-founder', imageUrl: 'https://i.pravatar.cc/150?u=quix2', linkedinUrl: '#', description: 'Desarrollador principal de la plataforma de IA para la creación de contenido, transformando texto en experiencias de aprendizaje multimedia.' },
      { name: 'Founder Siete', title: 'Co-founder', imageUrl: 'https://i.pravatar.cc/150?u=quix3', linkedinUrl: '#', description: 'Lidera las operaciones y alianzas estratégicas, asegurando que Quix llegue a empresas que necesitan innovar en su capacitación.' },
      { name: 'Founder Y', title: 'UX/UI Designer', imageUrl: 'https://i.pravatar.cc/150?u=quix4', linkedinUrl: '#', description: 'Diseña la experiencia de usuario en WhatsApp, garantizando que los micro-cursos sean intuitivos y atractivos para los empleados.' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pdfUrl: PDF_SAMPLE_URL,
  },
  {
    id: 5,
    name: 'Vera',
    category: 'HealthTech / SaaS',
    description: 'Plataforma SaaS que conecta pacientes con especialistas de la salud mental a través de un matching con IA para terapias más efectivas.',
    longDescription: 'Vera es una plataforma de bienestar emocional que utiliza inteligencia artificial para conectar a las personas con el psicólogo o terapeuta ideal para sus necesidades. A través de un cuestionario detallado y algoritmos de matching, aseguramos una alta compatibilidad, mejorando la adherencia y los resultados de la terapia. Ofrecemos sesiones online seguras y un seguimiento continuo del progreso.',
    features: [
      "Matching inteligente entre pacientes y terapeutas.",
      "Sesiones de terapia online 100% seguras y confidenciales.",
      "Herramientas de seguimiento de progreso emocional.",
      "Acceso a recursos y materiales de autoayuda."
    ],
    logo: Salud360Logo,
    calendlyLink: 'https://calendly.com/utec-ventures/vera-intro',
    teamSize: 2,
    founders: [
      { name: 'Founder Ocho', title: 'CEO & Co-founder', imageUrl: 'https://i.pravatar.cc/150?u=vera1', linkedinUrl: '#', description: 'Impulsa la misión de Vera de hacer accesible la salud mental de calidad, combinando experiencia en el sector salud y gestión empresarial.' },
      { name: 'Founder Nueve', title: 'CPO & Co-founder', imageUrl: 'https://i.pravatar.cc/150?u=vera2', linkedinUrl: '#', description: 'Responsable del producto y la tecnología, enfocado en desarrollar el algoritmo de matching y una plataforma segura y fácil de usar para pacientes y terapeutas.' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579824217362-4f33a5951a02?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pdfUrl: PDF_SAMPLE_URL,
  },
];