import { ProjectType } from './types';
import { quix, talentum, DomusAI, Bildin, vera, Nos } from './components/Icons';

export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    name: 'Bildin',
    category: 'ConstructionTech / SaaS',
    description: 'Bildin uses AI and digital construction models to track labor and materials in real time — cutting waste, boosting productivity, and saving projects millions.',
    longDescription: 'Bildin is a construction tech platform that uses AI and digital project models to predict and optimize productivity and costs. Through two integrated modules — Workforce Track and Material Track — we monitor labor performance and material usage in real time, alerting teams to inefficiencies and waste before they escalate.',
    features: [
      "18 active clients, including JJC, Madrid Edificaciones, and Santa Lucia",
      "$11.3K MRR — potential to reach $34.8K MRR with current clients",
      "Workforce Track: geolocated attendance, productivity alerts, payroll integration",
      "120+ admin hours saved per month per client",
      "Targeting 71K mid-to-large construction companies in LATAM"
    ],
    extraParagraph: 'Vision: Become the AI-driven operating system for construction, where every project is delivered on time, on budget, and without waste.',
    logoIncludesName: true,
    logo: Bildin,
    calendlyLink: 'https://calendly.com/matiascalmet/bildin-app',
    teamSize: 2,
    founders: [
      { name: 'Matías Calmet Arana Cisneros', title: 'CEO & Co-founder', imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQENSbTTnyi_mQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728092120239?e=1757548800&v=beta&t=aoldIGKKonk7_I_2o1UT-vF_Enp96Ti4kqPvNj1tQ9U', linkedinUrl: 'https://www.linkedin.com/in/mat%C3%ADas-calmet-arana-cisneros-a1107b177/', description: 'Civil engineer co-founder of Bildin, software as a service that integrates and optimizes planning , cost and quality processes for building projects in the construction phase.' },
      { name: 'Daniel Veran Leigh', title: 'CSO & Co-founder', imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQGnOGl5po6Ozw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688429459678?e=1757548800&v=beta&t=Exb-5x9D_v18KOIsEecCJm3Wk4oJ89Gqc5ZgAXqWsnw', linkedinUrl: 'https://www.linkedin.com/in/daniel-veran-leigh-160b08b6/', description: '' },
      { name: 'Alejandro Goicochea', title: 'CTO & Co-founder', imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQFJGmKfjdC4rQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721696619751?e=1757548800&v=beta&t=SFZ1QbSXiN7aQyPVqZy_d2_jOwgevoBrbi2ozzD90oI', linkedinUrl: 'https://www.linkedin.com/in/alejandrogh97/', description: "I am a software developer with over 3 years of experience and outstanding skills in critical thinking and problem-solving. Additionally, I hold a Bachelor's degree in Computer Science and possess an advanced level of English. My interest lies in participating in software development projects where I can be involved in the entire product creation process and deliver value to customers." },
    ],
    imageUrl: '/visual/visual_bildin.png',
    pdfUrl: 'https://docsend.com/view/23gzd2h7nn53pu59',
    videoEmbedUrl: ""
  },
  {
    id: 2,
    name: 'Talentum',
    category: 'HR Tech / AI',
    description: 'AI Recruiter that takes over 80% of the hiring process by sourcing, vetting and engaging with qualified candidates',
    longDescription: 'Talentum is an AI recruiter that empowers recruiters to hire faster and better. Our AI assistant, Sara, automates 80% of the hiring process—from sourcing and vetting to engaging and tracking candidates—freeing up recruiters to concentrate on closing roles and building vital relationships.',
    features: [
      "Sara delivers a qualified shortlist of candidates within 48–72 hours.",
      "Engages potential hires 24/7 with personalized outreach.",
      "Achieves response rates 3–4 times higher than LinkedIn averages.",
      "Recruiters benefit from a unified, conversational interface that feels human to candidates and radically speeds up their workflow.",
      "We serve recruiting agencies, RPOs, and in-house teams through a monthly subscription per user.",
      "With 300 companies on our waitlist and $3,000 MRR growing at over 20% month-over-month, we are raising capital to scale sales."
    ],
    extraParagraph: 'We’re raising capital to scale sales and expand into the $500B+ global recruitment market.',
    logoIncludesName: true,
    logo: talentum,
    calendlyLink: 'https://calendly.com/joaquin-lp9v/meet-with-joaco-titievsky',
    teamSize: 3,
    founders: [
      { name: 'Joaquin Titievsky', title: 'CEO & Co-founder', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQHWglsLqM_Qaw/profile-displayphoto-shrink_800_800/B4DZV3yf62G8Ac-/0/1741471481910?e=1757548800&v=beta&t=Wjfd7SgPxY-zLgJC4ZZwR6ZpmnaYYBZPtBpc30uaQc8', linkedinUrl: 'https://www.linkedin.com/in/joaquin-titievsky/', description: '' },
      { name: 'Ionatan Engelsberg', title: 'CTO & Co-Founder', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQHvQl2mjnlSEw/profile-displayphoto-shrink_800_800/B4DZV3ziXWHAAg-/0/1741471754231?e=1757548800&v=beta&t=fw-e8aPFmRpOgL2R5TXd_Ls2tEuGNCuy4HGvheef_cI', linkedinUrl: 'https://www.linkedin.com/in/ionatan-engelsberg/', description: 'With a strong background in software engineering and hands-on experience in machine learning, I am passionate about bridging the gap between data engineering and AI to deliver data-driven real value. My journey has equipped me with expertise in API development, database design and management, and developing cutting-edge computer vision deep learning models, RAG chatbots, and end-to-end data pipelines.' },
      { name: 'Martin Lipovetzky', title: 'Co-Founder', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQEoaRaMvFHGNA/profile-displayphoto-shrink_800_800/B4DZWBgQUIHkAc-/0/1741634471636?e=1757548800&v=beta&t=kOWhh8Qq_Y-sjOL2sUOZ4mqTb52vGUBWlzqa-MFBzLw', linkedinUrl: 'https://www.linkedin.com/in/martin-lipovetzky-b23b5823b/', description: '' },
    ],
    imageUrl: '/visual/visual_talentum.png',
    pdfUrl: 'https://docsend.com/v/c42xj/talentum-deck',
    videoEmbedUrl: ""
  },
  {
    id: 3,
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
    extraParagraph: 'Our vision: to become the AI-powered operating system for buildings — enabling fully automated, scalable property management for a vertical future.',
    logoIncludesName: true,
    logo: DomusAI, 
    calendlyLink: 'https://calendly.com/domus-ai',
    teamSize: 2,
    founders: [
      { name: 'Samuele Soto Cannatà', title: 'CEO & Founder', imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQErR1xGAZWBBQ/profile-displayphoto-crop_800_800/B4EZf.w4O8H4AI-/0/1752325918783?e=1757548800&v=beta&t=3jLGqlruKARrnv5wCQ0rXWZzrx48Hw1_O7FliUrEFcw', linkedinUrl: 'https://www.linkedin.com/in/samuelescb/', description: 'Delivering AI agents to automate every building in the world.' },
      { name: 'Piero Luis Arévalo', title: 'COO & Co-founder', imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQHdDeXlvxVdkA/profile-displayphoto-shrink_800_800/B4EZWz5pVAGgBs-/0/1742479988385?e=1757548800&v=beta&t=JrgsJVWe1i_2A5NsUON6qyZPV_si98pjc_WURRQFRzA', linkedinUrl: 'https://www.linkedin.com/in/piero-luis-ar%C3%A9valo-355ab5143?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2evM2dTwR6CXE37tI3Nrsg%3D%3D', description: 'With over 10 years of experience in senior management roles, Scrum Master, and Product Owner, I have led digitization and digital transformation projects, with a special focus on optimizing processes in marketing, sales, and operations departments at companies of various sizes. My experience in agile project management is complemented by a strong specialization in CRM and CX implementation strategies. I currently serve as partner and COO at Grupo M4G, a Zoho Corporation Premium Partner in Peru, and as COO at Domus AI, where I lead the operation and creation of innovative technologies in building management.' },
    ],
    imageUrl: '/visual/visual_domus.png',
    pdfUrl: 'https://docsend.com/v/zfcm4/domusaideck',
    videoEmbedUrl: ""
  },
  {
    id: 4,
    name: 'Quix',
    category: 'EdTech / AI',
    description: 'Tailor-made corporate training via WhatsApp',
    longDescription: 'Quix is a platform that allows corporations to create customized training programs based on their existing knowledge. These programs are delivered via WhatsApp to employees through microlearning.',
    features: [
      'Create customized training programs in less than 24 hours.',
      'Achieve completion rates of over 80%.',
      'Track and report on team performance.',
      'Deliver training directly through WhatsApp.',
      'MRR USD 21,000+'
    ],
    extraParagraph: '',
    logoIncludesName: true,
    logo: quix,
    calendlyLink: 'https://calendly.com/santiago-quix/30min',
    teamSize: 4,
    founders: [
      { name: 'Ignacio Barrea', title: 'CEO & Co-founder', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQEj2HCQiN_nJg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718273951825?e=1757548800&v=beta&t=tce9LxjxwgMZDm7c2wNoH6MEoKeOA1NzJ4iAAAGF_1s', linkedinUrl: 'https://www.linkedin.com/in/ignaciobarrea/', description: "Has C-level experience in some of the largest Edtechs of LatinAmerica." },
      { name: 'Carlos Alarcón', title: 'CTO & Co-founder', imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQE_SuNj6_BDGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705954672368?e=1757548800&v=beta&t=p-55WIUA-qa6DW96Cm2-kQozlDnjTRNvvdYZtlqUt9k', linkedinUrl: 'https://www.linkedin.com/in/alarcon7a/', description: 'Is a Google Developer Expert, Microsoft MVP, and has led engineering teams in Edtechs.' },
      { name: 'Julia Insua', title: 'CFO & Co-founder', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGLnqK7xbznuA/profile-displayphoto-crop_800_800/B4DZf8f5qPH8AI-/0/1752287911462?e=1757548800&v=beta&t=hVkdEydiBPbYBTXOrHEkfRQMoqhEYjyAOBd4SNMT9ME', linkedinUrl: 'https://www.linkedin.com/in/julia-insua/', description: 'Had led rounds of +50M in Edtechs as well as financial director experience in the field. ' },
      { name: 'Santiago Gómez', title: 'CRO & Co-Founder', imageUrl: 'https://media.licdn.com/dms/image/v2/C4D03AQFw7l1P3d9G2w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1604692538151?e=1757548800&v=beta&t=AnGQB41hZS_HDBC5jZLPOygpY2RDGzMxIUSeQRjHMk0', linkedinUrl: 'https://www.linkedin.com/in/santiagogomezosorio/', description: 'Has experience in Business Development in large startups, accelerators and VCs.' },
    ],
    imageUrl: '/visual/visual_quix.png',
    pdfUrl: 'https://docsend.com/v/sxvkg/quix2025',
    videoEmbedUrl: ""
  },
  {
    id: 5,
    name: 'Vera',
    category: 'Fintech',
    description: 'Vera automates financial risk assessments, helping banks make credit decisions 100x faster — from 60 days to just hours.',
    longDescription: 'Vera is the new highway for banks, lenders, and enterprises to turn data into fast, actionable credit decisions. Our AI-powered platform automates financial risk assessments, reducing underwriting time from 60 days to just a few hours — giving traditional institutions fintech-level speed and efficiency.',
    features: [
      "100x faster credit decisions — from weeks to hours",
      "Live beta with pilot banks in progress",
      "Herramientas de seguimiento de progreso emocional.",
      "Acceso a recursos y materiales de autoayuda."
    ],
    extraParagraph: '',
    logoIncludesName: true,
    logo: vera,
    calendlyLink: 'https://calendly.com/rodrigo-vale/30min',
    teamSize: 2,
    founders: [
       { name: 'Rodrigo Bonifaz Muñiz', title: 'CEO & Co-founder', imageUrl: '/founders/vera/Rodrigo-Bonifaz.JPG', linkedinUrl: 'https://www.linkedin.com/in/rbonifazmuniz/', description: '' },
       { name: 'Manuel Salazar Massaro', title: 'CTO & Co-founder', imageUrl: '/founders/vera/Manuel-Salazar.JPG', linkedinUrl: 'https://www.linkedin.com/in/manuel-salazar-massaro-33ba27129/', description: '' },
      ],
    imageUrl: '/visual/visual_vera.png',
    pdfUrl: 'https://docsend.com/view/g2d3sts69e7fzhwn',
    videoEmbedUrl: ""
  },
  {
    id: 6,
    name: 'NOS',
    category: 'FinTech',
    description: 'It transforms informal finance into traceable credit data, with more than 1,800 active users already managing more than S/4 million in savings and community loans in rural LATAM.',
    longDescription: 'NOS is a SaaS platform that transforms the informal finances of rural communities into traceable credit data. By digitizing existing savings and credit groups, NOS records their transactions and builds a reliable history that allows its members to connect with formal credit.',
    features: [
      'Traced more than S/4M in financial transactions.',
      'Digitizes informal community savings and credit groups.',
      'Builds reliable financial histories to connect members with formal credit.',
      'Provides a pathway for millions excluded from the financial system.'
    ],
    extraParagraph: 'Our vision: to scale and become the community-based financial infrastructure in Latin America.',
    logoIncludesName: true,
    logo: Nos,
    calendlyLink: 'https://calendly.com/gdavila-utec/new-meeting',
    teamSize: 2,
    founders: [
      { name: 'Gian Franco Dávila', title: 'CEO & Co-founder', imageUrl: '/founders/nos/gianfranco.jpg', linkedinUrl: 'https://www.linkedin.com/in/gian-franco-d%C3%A1vila/', description: '' },    
      { name: 'José Corso', title: 'COO & Co-founder', imageUrl: '/founders/nos/jose.png', linkedinUrl: 'https://www.linkedin.com/in/jose-corso-1088b317/', description: '' },
    ],
    imageUrl: '/visual/visual_nos.png',
    pdfUrl: 'https://docsend.com/v/xfnhg/nos_deck_aug25',
    videoEmbedUrl:""
  },
];
