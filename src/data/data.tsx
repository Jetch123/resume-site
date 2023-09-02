import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Resume Site - James Etchells",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi I'm James Etchells.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a Poznan based <strong className="text-stone-100">Frontend Software Engineer</strong>, with a BE in Computer Science from <strong className="text-stone-100">WSB University Poznań </strong> Experienced in utilizing modern frameworks and libraries such as React, Angular, and Node.js enabling me to build interactive and responsive web applications.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      In addition to my technical expertise, I am committed to personal growth and <strong className="text-stone-100">professional development. </strong>
        I actively engage in online communities, attend industry conferences, and participate in coding challenges to expand my knowledge and stay connected with the broader developer community. 
      </p> 
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `James Etchells`,
  aboutItems: [
    {label: 'Location', text: 'Poznan, PL', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'British/Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Coding, Swimming', Icon: SparklesIcon},
    {label: 'Education', text: 'Computer Science - WSB Merito Poznan ', Icon: AcademicCapIcon},
    {label: 'Employment History', text: 'SIS LLC, McKinsey & Company.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English - Native',
        level: 10,
      },
      {
        name: 'Polish',
        level: 4,
      },
   
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'JavaScript',
        level: 4,
      },
      {
        name: 'HTML/CSS',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 4,
      },
  
      {
        name: 'SQL',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 5
      },
      {
        name: 'Flutter',
        level: 3,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];


/** Hello world, what's new */



/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Resume webpage',
    description: 'A webpage showing my resume and links to LinkedIn & Github. Uses Typescript, Tailwind, SCSS and Yarn. Branched from tbakerx ',
    url: 'https://github.com/Jetch123/resume-site',
    image: porfolioImage1,
  },
  {
    title: 'Banking App',
    description: 'Banking project designed for simple transactions and basic Login capabilities. Uses JS, CSS, HTML',
    url: 'https://github.com/Jetch123/bank-app-js-master',
    image: porfolioImage2,
  },
  {
    title: 'Finance Manager',
    description: 'A basic finance manager which takes data inputs and displays them graphically by month. Uses JS, CSS, React and node.js',
    url: 'https://github.com/Jetch123/react-finance-manager',
    image: porfolioImage3,
  },
  {
    title: 'Dice roll game',
    description: 'A simple dice game in which players try to reach 100 points first and switch turns when a 1 is rolled. Uses JS, CSS and HTML',
    url: 'https://github.com/Jetch123/pig-game-js-master',
    image: porfolioImage4,
  },
  {
    title: 'Rock Paper Scissors',
    description: 'This is a simple Rock Paper Scissors game, using JS, CSS and HTML',
    url: 'https://github.com/Jetch123/rock-paper-scissors-game-main',
    image: porfolioImage5,
  },
  {
    title: 'Guess my number',
    description: 'A simple game in which players try to guess a randomly generated number between 1-20. Includes a point system and highscore counter. Uses JS, CSS and HTML ',
    url: 'https://github.com/Jetch123/guess-my-number-main',
    image: porfolioImage6,
  },
  /** 
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
  */
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '15/09/2019 – 04/03/2023',
    location: 'WSB Merito - Poznan',
    title: 'B.Eng Computer Science',
    content: <p></p>,
  },
  {
    date: '10/2014 – 07/2017',
    location: 'University of Ulster',
    title: 'Bsc – Geography',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '03/2022 – 04/2023',
    location: 'SIS LLC',
    title: 'Software Analyst',
    content: (
      <p>
      •	Wrote clean, efficient, and maintainable JavaScript code for web applications.
      •	Collaborated with cross-functional teams, including designers and backend developers, to define project requirements and implement solutions.
      •	Developed user-friendly interfaces/CRM using HTML, CSS, and JavaScript framework React. 
      •	Debugged and fixed issues in existing code, troubleshot performance bottlenecks, and optimized application performance.
      •	Conducted code reviews, provided feedback, and ensured adherence to coding standards and best practices.

      </p>
    ),
  },
  {
    date: '07/2019 – 09/2021',
    location: 'Mckinsey & Company EMEA',
    title: 'Visual Graphics Analyst',
    content: (
      <p>
        • Developed UI/UX designs for websites, apps, and other digital interfaces.
        • Communicated with clients to understand their design needs and preferences.
        • Presented design concepts and collaborated on revisions to achieve client satisfaction.
        • Organized and managed digital assets, design files, and resources in a structured manner.
        • Collaborated with data analysts to effectively communicate data insights through visuals.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
/** */ export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
   /* {
      name: 'CS50 - Introduction to Computer Science',
      text: 'HARVARD UNIVERSITY',
      image: '',
    },
    {
      name: 'FREE CODE CAMP',
      text: 'Web Development online course',
      image: '',
    },
 */
  ],
}; 

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Contact Details',
  items: [
    {
      type: ContactType.Email,
      text: 'Jetchells1995@gmail.com',
      href: 'mailto:Jetchells1995@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Poznan, PL',
    },
    {
      type: ContactType.LinkedIn,
      text: 'https://www.linkedin.com/in/james-etchells/',
      href: 'https://www.linkedin.com/in/james-etchells/',
    },
    {
      type: ContactType.Github,
      text: 'https://github.com/Jetch123',
      href: 'https://github.com/Jetch123',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Jetch123'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/james-etchells/'},
];
