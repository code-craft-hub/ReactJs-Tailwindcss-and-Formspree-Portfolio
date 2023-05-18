//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiCodepen,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
    {
    icon: <FiGithub />,
    href: 'https://github.com/KachiBlockchain',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/kachi-c-08315b188/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: <a href="https://github.com/KachiBlockchain">Metaverse(Reactjs & Figma)</a>,
    category: 'UI/UX design',
  },
  {
    id: '2',
    image: Project2,
    name: <a href="https://github.com/KachiBlockchain">AI Article Summarizer (RapidAPI & React.js)</a>,
    category: 'web development',
  },
  {
    id: '3',
    image: Project3,
    name: <a href="https://github.com/KachiBlockchain">Chat GPT UI (React & Figma)</a>,
    category: 'UI/UX design',
  },
  {
    id: '4',
    image: Project4,
    name: <a href="https://github.com/KachiBlockchain">Restaurant Website (WordPress)</a>,
    category: 'Wordpress',
  },
  {
    id: '5',
    image: Project5,
    name: <a href="https://github.com/KachiBlockchain">Netflix Clone (React.js, Firesbase, Redux & Stripe)</a>,
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: <a href="https://github.com/KachiBlockchain">3D T-Shirt customizer (RapidAPI, React.js, Tailwindcss & OpenAI)</a>,
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'Wordpress',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiCodepen />,
    name: 'React & Next Developer',
    description:
      'I am proficient in building interactive and dynamic web applications using the React JavaScript library and the Next.js framework. I have solid understanding of front-end development principles, including component-based architecture, state management, and virtual DOM. ',
  },
  {
    icon: <FiSettings />,
    name: 'Mern Stack Developer',
    description:
      ' I comprehensive skill set in MongoDB, Express.js, React.js, and Node.js, enabling them to develop end-to-end web applications efficiently and effectively.',
  },
  {
    icon: <FiPenTool />,
    name: 'Wordpress',
    description:
      'As an experienced WordPress developer proficient in designing, developing, and maintaining WordPress websites. Skilled in HTML, CSS, JavaScript, and PHP, with expertise in custom theme and plugin development. Strong knowledge of WordPress architecture, database management, and security best practices.',
  },
  {
    icon: <FiTag />,
    name: 'Angular Developer',
    description:
      'I have in-depth knowledge of Angular framework and its ecosystem. Proficient in building scalable and maintainable web applications using Angular, TypeScript, HTML, and CSS. Skilled in implementing responsive designs and optimizing application performance. ',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Kachi has consistently demonstrated excellent technical skills and a deep understanding of React.js framework. He have been instrumental in delivering high-quality code and solutions within the given timelines. His ability to quickly grasp complex requirements and translate them into efficient and scalable React components has been commendable.',
    authorName: 'Isabella Hughes',
    authorPosition: 'Head of Design, 10up',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Kachi consistently meets project deadlines and is highly reliable in completing assigned tasks. He adapt well to changing requirements and effectively prioritize their workload, ensuring efficient project progress. His strong work ethic and dedication contribute to the success of our development team.',
    authorName: 'Sophia Bennett',
    authorPosition: 'Lead Developer, Remote.co',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Kachi has consistently demonstrated strong proficiency in developing web applications using Next.js. He have a deep understanding of React and its ecosystem, enabling him to efficiently build scalable and performant applications.',
    authorName: 'Charlotte Reed',
    authorPosition: 'Project Manager, Computan',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at onlinehassle1234@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Virtual & Physical Location',
    subtitle: 'Atlanta, GA & Nigeria',
    description: 'Serving clients worldwide',
  },
];
