export const projects = [
  {
    id: "01",
    title: "Percona",
    category: "Web Application, SAAS",
    year: "2024",
    description:
      "Intelligent database assessment tool that helps database administrators detect, identify and solve anomalies.",
    media: [
      {
        type: "image" as const,
        url: "/projects/percona-1.png",
      },
      {
        type: "image" as const,
        url: "/projects/percona-2.png",
      },
      {
        type: "image" as const,
        url: "/projects/percona-3.png",
      },
      {
        type: "youtube" as const,
        url: "https://www.youtube.com/embed/vGZi8T0DZ9U?autoplay=1&controls=0&fs=0&mute=1",
      }, 
    ],
    technologies: [
      "Shadcn-ui",
      "Figma",
      "Typescript",
      "Vite",
      "React",
      "PostgreSQL",
      "RDS",
      "Grafana",
      "Okta",
      "RabbitMQ",
      "Kafka",
      "AWS",
    ],
  },
  {
    id: "02",
    title: "Knowy.ai",
    category: "Web Application, SAAS",
    description: "AI-driven personal knowledge management platform",
    url: "https://www.knowy.ai/",
    year: "2023",
    media: [
      {
        type: "youtube" as const,
        url: "https://www.youtube.com/embed/LiFnmC3GLx0?autoplay=1&controls=0&fs=0&mute=1&loop=1&playlist=LiFnmC3GLx0"
      },
      {
        type: "youtube" as const,
        url: "https://www.youtube.com/embed/1ei4vSC7CHI?autoplay=1&controls=0&fs=0&mute=1&loop=1&playlist=1ei4vSC7CHI"
      },
      {
        type: "youtube" as const,
        url: "https://www.youtube.com/embed/tjU-3k0Otd8?autoplay=1&controls=0&fs=0&mute=1&loop=1&playlist=tjU-3k0Otd8"
      }
    ],
    
    technologies: [
      "Generative AI",
      "Typescript", 
      "Preact",
      "TailwindCSS",
      "PostgreSQL",
      "Langchain",
      "Neo4j",
      "Supabase",
      "Yfiles",
      "Sentry",
    ],
  },
  {
    id: "03",
    title: "DDX Platform",
    category: "Web Platform",
    year: "2022",
    description: "Web based platform to match consultants with companies",
    url: "https://ddx.tubitak.gov.tr/auth/login",
    media: [
      {
        type: "image" as const,
        url: "/projects/ddx-1.png",
      },
      {
        type: "image" as const,
        url: "/projects/ddx-2.png",
      },
      {
        type: "youtube" as const,
        url: "https://www.youtube.com/embed/AqVxx2G98ZQ?autoplay=1&controls=0&fs=0&mute=1&loop=1&playlist=AqVxx2G98ZQ"
      }
    ],
    technologies: [
      "Typescript",
      "React",
      "Redux",
      "Strapi",
      "Bootstrap5",
      "React-PDF",
      "SurveyMonkey",
      "AWS",
      "ChartJs",
      "SQLite",
    ],
  },
  {
    id: "04",
    title: "212 Magazine",
    category: "Digital Publishing",
    year: "2022",
    description:
      "Custom Flexible Component Renderer with Dynamic Article & Issue Templates",
    url: "https://212-magazine.com",
    media: [
      {
        type: "image" as const,
        url: "/projects/212-1.png",
      },
      {
        type: "image" as const,
        url: "/projects/212-2.png",
      },
      {
        type: "youtube" as const,
        url: "https://www.youtube.com/embed/iiA2JJfIcoQ?autoplay=1&controls=0&fs=0&mute=1&loop=1&playlist=iiA2JJfIcoQ"
      }
    ],
    technologies: [
      "Gatsby Js",
      "GraphQL",
      "Strapi",
      "TailwindCSS",
      "SQLite",
      "Heroku",
      "Sentry",
      "Shopify",
    ],
  },
  {
    id: "05",
    title: "Biscuit",
    category: "Web Application, SAAS",
    year: "2016-Present",
    description:
      "SAAS management tool for D2Cs 240 Derece - Sourdough bread brand Shambhala Barcelona - Yoga clothing brand Zero Books - Bookstore · Pollion - Translation service Grandma - Bakery · Radyancı - Spare parts Yıka gel - Pickup laundry service",
    url: "https://tio.ist",
    media: [
     {
      type: "youtube" as const,
      url: "https://www.youtube.com/embed/XbYxoReRZNg?autoplay=1&controls=0&fs=0&mute=1&loop=1&playlist=XbYxoReRZNg"
     },
     {
      type: "youtube" as const,
      url: "https://www.youtube.com/embed/cRWJFGqbW4U?autoplay=1&controls=0&fs=0&mute=1&loop=1&playlist=cRWJFGqbW4U"
     }
    ],
    technologies: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Stripe",
      "TailwindCSS",
      "Vercel",
      "Sentry",
      "REST API",
      "NodeJS",
      "Express",
    ],
  },
  {
    id: "06",
    title: "Mobile Apps",
    category: "Mobile Applications; IOS & Android",
    year: "2016-2022",
    description:
      "komün, Private social club mobile app | https://komun.online\nçember, Micro financing mobile app | https://cember.app\nDTNT, Mindful habit tracking | https://getdtnt.com",
    url: "https://www.dtnt.ai/",
    media: [
      {
        type: "image" as const,
        url: "/projects/mobile-1.png",
      },
      {
        type: "image" as const,
        url: "/projects/mobile-2.png",
      },
      {
        type: "image" as const,
        url: "/projects/mobile-3.png",
      },
    ],
    technologies: [
      "React Native",
      "Strapi",
      "PostgreSQL",
      "Heroku",
      "IOS & Android In-app purchase",
      "i18n",
      "NodeJS",
      "Express",
      "Open Banking API",
      "MySQL",
      "Digital Ocean",
      "GatsbyJs",
      "GSAP",
      "Markdown",
    ],
  },

  {
    id: "07",
    title: "Digital Product Glossary",
    year: "2022",
    category: "Open Source",
    description: "Live coded during Jamstack Hours event",
    url: "https://tio.ist/digital-product-glossary",
    github: "https://github.com/sedyldz/a-to-z",
    media: [
      /*     {
        type: "video" as const,
        url: "https://drive.google.com/file/d/1aO9of8h31vdvOo3fS8j68vkHMfeDRYHq/view?resourcekey",
      }, */
      {
        type: "image" as const,
        url: "/projects/atoz-1.png",
      },
      {
        type: "image" as const,
        url: "/projects/atoz-2.png",
      },
    ],
    technologies: [
      "Gatsby Js",
      "Git-based CMS",
      "GraphQL",
      "Markdown",
      "TailwindCSS",
      "JAMStack",
    ],
  },
];

export function getGoogleDriveEmbedUrl(url: string) {
  const fileId = url.split("/")[5]; // Extract file ID from Drive URL
  return `https://drive.google.com/file/d/${fileId}/preview`;
}
