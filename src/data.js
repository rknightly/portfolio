import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ryan Knightly | Developer Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'I am a Computer Science student at Rice University. My software portfolio contains 16+ mobile applications, as well as several other data science and CS projects.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Ryan Knightly',
  subtitle: 'This is my software portfolio.',
  cta: 'More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'Hi! I just graduated with honors from Rice University with a B.S. in Computer Science and am excited for the next chapter of my career.',
  paragraphTwo:
    'I have had the pleasure of being a Software Engineer Intern at Amazon and a Computational Biology Intern at MD Anderson. I have also worked with several Rice-Apps teams to develop both mobile and web applications for the Houston community. I have also personally developed and published over 15 mobile apps that have collectively achieved more than 125,000 downloads.',
  paragraphThree:
    'I have accepted an offer to return to Amazon as a full-time SDE, but the start date was delayed by 6 months so I am considering other opportunities in the meantime.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'food-bank.png',
    title: 'Houston Food Bank Recipe System',
    info: 'I led a Rice-Apps team to develop a recipe-searching app for the houston food bank.',
    info2:
      '​We used React and Node to allow searching/printing recipes by ingredients with support for multiple languages.',
    url: '',
    repo: 'https://github.com/rice-apps/hfb-recipe-sys', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chaus.png',
    title: 'Rice Cafe App',
    info: 'I worked on a team at Rice to develop a web app that reports how crowded the three different cafes at Rice are.',
    info2:
      '​We used React and Flask, and collaborated with Rice IT to get data from the wireless access points in the cafes.',
    url: '',
    repo: 'https://github.com/rknightly/chaus-crowd', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'moody.png',
    title: 'Moody Art Map',
    info: 'I worked on a team at RiceApps to develop a mobile app to bring awareness to the public art at Rice.',
    info2:
      '​We used React Native and Expo to develop the app, and I focused on the Node Express backend and connected it to a content management system. I also created the map to display the art.',
    url: '',
    repo: 'https://github.com/rice-apps/moody', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'futures.png',
    title: 'Futures Market Behavior Analysis',
    info: 'I worked with a team at the Rice Data Science club to extract meaning from a large dataset about the futures market (70,000 data points with 192 features each).',
    info2:
      'I focused on comparing the behavior of different market players within different commodity classes. We particularly focused on the impact of the 2008 recession on the different futures markets.',
    url: '',
    repo: 'https://github.com/gvacaliuc/thehotcommodity/blob/master/notebooks/ryan_k-eda.ipynb', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'investorprep.png',
    title: 'Investorprep',
    info: 'I developed the software end of the iOS and Android application "investorPrep."',
    info2: 'The app teaches about investing and has over 18,000 downloads.',
    url: 'https://investorprep.weebly.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'flydrive.png',
    title: 'Knighted Games',
    info: 'I have independently written and published 14 different iOS applications as part of Knighted Games.',
    info2:
      'I used both Xcode/Swift and Unity/C# for development. My games together have more than 100,000 downloads.',
    url: 'http://knightedgames.weebly.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cell-detection.png',
    title: 'Cell Detection',
    info: 'I developed a cell detection script that automatically detects the location of cells in microscope slides.',
    info2:
      'I used various filtering and processing techniques to reduce the noise in the image and used a flood-fill algorithm to generate a list of distinct cells.',
    url: '',
    repo: 'https://github.com/rknightly/cell-detection', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mnist.png',
    title: 'Deep Learning with Python',
    info: 'I performed experiments using Python and Keras regarding training sample size and the performance of classification deep neural networks. I specifically used the MNIST dataset of handwritten digits.',
    info2:
      'I used the results of these experiments in writing a paper about the importance of Big Data in the age of Machine Learning.',
    url: '',
    repo: 'https://github.com/rknightly/neural-mnist', // if no repo, the button will not show up
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
    img: 'airsafe.png',
    title: 'AirSafe',
    info: 'I developed the AirSafe iOS application, which is part of a collaborative project involving Rice University and Technology For All.',
    info2: '​AirSafe brings live air quality data to Houston residents who need it the most.',
    url: 'https://airsafe-tfa.weebly.com/',
    repo: 'https://github.com/rknightly/airsafe-tfa', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'solarsim.png',
    title: 'Solar Simulator',
    info: "Solar simulator is a 3-D solar system visualization that I created using Processing. It is only one of several sketches using P5 and Processing, several of which were inspired by Daniel Shiffman's sketches.",
    info2:
      'This visualization is designed for aesthetics, so while it is not entirely accurate astronomically, it does provide a beautiful 3-D view of the sun and the planets orbiting around it. There are also stars in the background, though they are hard to see in the screenshot.',
    url: '',
    repo: 'https://github.com/rknightly/sketches/tree/master/processing/solarSim', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'primedice.png',
    title: 'PrimeDice Simulator',
    info: 'PrimeDice Simulator is one of my first Python projects. The program tests different settings for a Bitcoin gambling site called PrimeDice.',
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
