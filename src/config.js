module.exports = {
  email: 'contact@sandeepswain.dev',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/54nd339',
    },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/54nd339',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/54nd339',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/54nd339',
    },
    {
      name: 'Replit',
      url: 'https://replit.com/@54nd339',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/54nd339',
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/94390sandeep',
    },
    {
      name: 'FreeCodeCamp',
      url: 'https://www.freecodecamp.org/54nd339',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Skills',
      url: '/#skills',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Blog',
      url: '/pensieve',
    },
  ],

  education: [
    {
      year: '2024',
      name: 'B.Tech. (Hons.) in CSE',
      institute: 'KIIT University',
      link: 'https://kiit.ac.in',
      score: '9.21 CGPA',
      gpaLink: '',
    },
    {
      year: '2020',
      name: 'Intermediate',
      institute: 'FIITJEE Jr. College',
      link: 'https://fiitjeevijayawada.com',
      score: '99.4% (IPE-AP)',
      gpaLink: '/ipe.pdf',
    },
    {
      year: '2018',
      name: 'Primary',
      institute: 'De Paul School',
      link: 'https://depaulbam.in',
      score: '92.4% (ICSE)',
      gpaLink: '/icse.pdf',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
