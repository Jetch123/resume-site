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
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
  description: "Example site built with Tim Baker's react resume template",
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
      In addition to my technical expertise, I am committed to personal growth and <strong className="text-stone-100">professional development</strong>,
      . I actively engage in online communities, attend industry conferences, and participate in coding challenges to expand my knowledge and stay connected with the broader developer community. 
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
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
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
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '15/09/2019 – 04/03/2023',
    location: 'WSB - Merito Poznan',
    title: 'B.Eng Computer Science',
    content: <p></p>,
  },
  {
    date: '10/2014 – 07/2017',
    location: 'University of Ulster',
    title: 'Bsc – GEOGRAPHY',
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
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
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
