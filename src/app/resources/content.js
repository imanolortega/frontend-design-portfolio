const person = {
  firstName: 'Imanol',
  lastName: 'Ortega Carabajal',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Front-end Developer',
  avatar: '/images/avatar.jpg',
  email: 'contacto@imanolortega.com',
  location: 'Lago Puelo, Argentina',
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/imanolortega',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/imanol-ortega-dev/',
  },
  {
    name: 'X',
    icon: 'x',
    link: '',
  },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: '/',
  image: '/images/og/cover-imanol-ortega.jpg',
  label: 'Home',
  title: `${person.name} | ${person.role}`,
  description: `${person.name}. ${person.role}. Sitio web personal.`,
  headline: <>Desarrollo web y diseño</>,
  featured: {
    display: true,
    title: (
      <>
        Último proyecto: <strong className="ml-4">Wedding Site</strong>
      </>
    ),
    href: 'https://www.theboda.top/',
  },
  subline: (
    <>
      Mi nombre es Imanol, soy Front-end Developer y diseñador.
      <br /> Mi enfoque está en la experiencia del usuario:
      <br /> sitios rápidos, intuitivos y accesibles.
    </>
  ),
};

const about = {
  path: '/about',
  label: 'About',
  title: `About – ${person.name}`,
  description: `${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introducción',
    description: (
      <>
        Soy un desarrollador Front-end y diseñador con 4 años de experiencia en la creación de
        sitios web.
        <br /> <br />
        Tengo una amplia variedad de intereses, que incluyen desarrollo web, diseño, marketing y
        fotografía.
        <br /> <br />
        Trabajo con Next.js en el Front-end y usualmente con algún CMS (headless o no) en el
        Back-end. Utilizo JavaScript o TypeScript según el proyecto. También he trabajado con VueJS.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Experiencia',
    experiences: [
      {
        company: 'Easytechgreen',
        timeframe: '2021 - Presente',
        role: 'Front-end Developer',
        achievements: [
          <>Desarrollador Front-end de Websites desacoplados (principalmente).</>,
          <>
            Trabajando en general con JavaScript o TypeScript, React.js, Next.js, Sass, GraphQL y
            JSON API.
          </>,
        ],
        images: [],
      },
      {
        company: 'Silstech',
        timeframe: '2021',
        role: 'Front-end Developer',
        achievements: [<>Desarrollador Front-end de Producto con JavaScript y Vue.js.</>],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Estudios',
    institutions: [
      {
        name: 'Universidad Católica de Santiago del Estero',
        description: <>Lic. en Comunicación Social.</>,
      },
      {
        name: 'Universidad Nacional de Santiago del Estero',
        description: <>Lic. en Sistemas de la Información.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Tecnologías',
    skills: [
      {
        title: 'Next.js',
        description: <></>,
        images: [],
      },
      {
        title: 'React.js',
        description: <></>,
        images: [],
      },
      {
        title: 'JavaScript y TypeScript',
        description: <></>,
        images: [],
      },
      {
        title: 'CSS, Sass, Tailwind',
        description: <></>,
        images: [],
      },
      {
        title: 'Figma y Herramientas de diseño en general',
        description: <></>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: '/blog',
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: '/work',
  label: 'Projects',
  title: `Projects – ${person.name}`,
  description: `Últimos proyectos desarrollados por ${person.name}, ${person.role}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: '/images/gallery/horizontal-1.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-2.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-3.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-4.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/vertical-1.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-2.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-3.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-4.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
