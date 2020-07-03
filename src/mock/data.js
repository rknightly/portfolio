import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ryan Knightly | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Ryan Knightly',
  subtitle: 'This is my software portfolio.',
  cta: 'See more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'My interest in software started in 2015 when I made my first iOS game. Since then I have developed 16 mobile games with more than 70,000 downloads, along with an educational app called InvestorPrep and an air quality app called AirSafe.',
  paragraphTwo:
    'I have written software for a variety of applications, from web-scraping and analyzing stock market data to controlling competition robots and autonomous drones.',
  paragraphThree:
    'I am currently pursuing my interests and studying Computer Science at Rice University.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cell-detection.png',
    title: 'Cell Detection',
    info:
      'I developed a cell detection script that automatically detects the location of cells in microscope slides.',
    info2:
      'I used various filtering and processing techniques to reduce the noise in the image and used a flood-fill algorithm to generate a list of distinct cells.',
    url: '',
    repo: 'https://github.com/rknightly/cell-detection', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'flydrive.png',
    title: 'Knighted Games',
    info: 'I have written and published 14 different iOS applications as part of Knighted Games.',
    info2: 'These apps together have more than 65,000 downloads; not bad for one developer.',
    url: 'http://knightedgames.weebly.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'marketindex.png',
    title: 'The Market Index',
    info: 'I created a stock market index called "The Market Index.',
    info2:
      'It consists of about 3,000 stocks, sorted according to algorithmically decided ratings. I designed the algorithm to simplify stock picking, and to test different ranking strategies.',
    url: 'http://marketindex.weebly.com/',
    repo: 'https://github.com/rknightly/stock-guru', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'investorprep.png',
    title: 'Investorprep',
    info: 'I developed the software end of the iOS and Android application "investorPrep."',
    info2:
      'InvestorPrep is an app that aims to make learning about investing an easy and engaging process.',
    url: 'https://investorprep.weebly.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'airsafe.png',
    title: 'AirSafe',
    info:
      'I developed the AirSafe iOS application, which is part of a collaborative project involving Rice University and Technology For All.',
    info2: '​AirSafe brings live air quality data to Houston residents who need it the most.',
    url: 'https://airsafe-tfa.weebly.com/',
    repo: 'https://github.com/rknightly/airsafe-tfa', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'solarsim.png',
    title: 'Solar Simulator',
    info:
      "Solar simulator is a 3-D solar system visualization that I created using Processing. It is only one of several sketches using P5 and Processing, several of which were inspired by Daniel Shiffman's sketches.",
    info2:
      'This visualization is designed for aesthetics, so while it is not entirely accurate astronomically, it does provide a beautiful 3-D view of the sun and the planets orbiting around it. There are also stars in the background, though they are hard to see in the screenshot.',
    url: '',
    repo: 'https://github.com/rknightly/sketches/tree/master/processing/solarSim', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'primedice.png',
    title: 'PrimeDice Simulator',
    info:
      'PrimeDice Simulator is one of my first Python projects. The program tests different settings for a Bitcoin gambling site called PrimeDice.',
    info2:
      '​The simulator runs millions of games using particular settings to produce a result graph like the one shown here.',
    url: '',
    repo: 'https://github.com/rknightly/primedice-simulator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ryaneknightly/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rknightly',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/thefloatingpoint',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
