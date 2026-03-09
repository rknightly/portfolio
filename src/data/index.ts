export interface Project {
  title: string;
  description: string;
  detail: string;
  url?: string;
  repo?: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export const hero = {
  name: "Ryan Knightly",
  title: "Software Engineer",
  tagline: "Building software that makes a difference.",
};

export const about = {
  image: "/images/profile.png",
  paragraphs: [
    "I'm a software engineer at Apple and recently graduated with honors from Rice University with a B.S. in Computer Science.",
    "I have had the pleasure of being a Software Engineer Intern at Amazon and a Computational Biology Intern at MD Anderson. I have also worked with several Rice Apps teams to develop both mobile and web applications for the Houston community.",
    "Below is a collection of my software projects, primarily from college and earlier.",
  ],
};

export const experience: Experience[] = [
  {
    company: "Apple",
    role: "Software Engineer",
    period: "2021 - Present",
    bullets: [
      "Working as a full-time software engineer.",
    ],
  },
  {
    company: "Amazon",
    role: "Software Engineer Intern",
    period: "Summer 2020",
    bullets: [
      "Worked as a software engineer intern on an internal tools team.",
    ],
  },
  {
    company: "MD Anderson Cancer Center",
    role: "Computational Biology Intern",
    period: "Summer 2019",
    bullets: [
      "Developed computational biology tools and analysis pipelines.",
    ],
  },
  {
    company: "Rice Apps",
    role: "Team Lead",
    period: "2018 - 2021",
    bullets: [
      "Led teams to develop web and mobile applications for the Houston community.",
      "Projects included the Houston Food Bank Recipe System and Moody Art Map.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Houston Food Bank Recipe System",
    description: "Led a Rice Apps team to develop a recipe-searching app for the Houston Food Bank.",
    detail: "Used React and Node to allow searching/printing recipes by ingredients with support for multiple languages.",
    image: "/images/food-bank.png",
    repo: "https://github.com/rice-apps/hfb-recipe-sys",
  },
  {
    title: "Rice Cafe App",
    description: "Developed a web app that reports how crowded the three cafes at Rice are.",
    detail: "Used React and Flask, and collaborated with Rice IT to get data from the wireless access points in the cafes.",
    image: "/images/chaus.png",
    repo: "https://github.com/rknightly/chaus-crowd",
  },
  {
    title: "Moody Art Map",
    description: "Worked on a team at Rice Apps to develop a mobile app to bring awareness to the public art at Rice.",
    detail: "Used React Native and Expo. Focused on the Node Express backend, connected it to a CMS, and created the map to display the art.",
    image: "/images/moody.png",
    repo: "https://github.com/rice-apps/moody",
  },
  {
    title: "Futures Market Behavior Analysis",
    description: "Extracted meaning from a large futures market dataset (70,000 data points with 192 features each).",
    detail: "Compared the behavior of different market players within different commodity classes, focusing on the impact of the 2008 recession.",
    image: "/images/futures.png",
    repo: "https://github.com/gvacaliuc/thehotcommodity/blob/master/notebooks/ryan_k-eda.ipynb",
  },
  {
    title: "Investorprep",
    description: "Developed the software for the iOS and Android application investorPrep.",
    detail: "The app teaches about investing and has over 18,000 downloads.",
    image: "/images/investorprep.png",
    url: "https://investorprep.weebly.com/",
  },
  {
    title: "Knighted Games",
    description: "Independently wrote and published 14 different iOS applications.",
    detail: "Used both Xcode/Swift and Unity/C# for development. Games have more than 100,000 downloads collectively.",
    image: "/images/flydrive.png",
    url: "http://knightedgames.weebly.com/",
  },
  {
    title: "Cell Detection",
    description: "Developed a cell detection script that automatically detects the location of cells in microscope slides.",
    detail: "Used various filtering and processing techniques to reduce noise and a flood-fill algorithm to generate a list of distinct cells.",
    image: "/images/cell-detection.png",
    repo: "https://github.com/rknightly/cell-detection",
  },
  {
    title: "Deep Learning with Python",
    description: "Performed experiments using Python and Keras on training sample size and deep neural network performance.",
    detail: "Used the MNIST dataset of handwritten digits and wrote a paper about the importance of Big Data in the age of Machine Learning.",
    image: "/images/mnist.png",
    repo: "https://github.com/rknightly/neural-mnist",
  },
  {
    title: "The Market Index",
    description: "Created a stock market index consisting of about 3,000 stocks sorted by algorithmically decided ratings.",
    detail: "Designed the algorithm to simplify stock picking and test different ranking strategies.",
    image: "/images/marketindex.png",
    url: "http://marketindex.weebly.com/",
    repo: "https://github.com/rknightly/stock-guru",
  },
  {
    title: "AirSafe",
    description: "Developed the AirSafe iOS application as part of a collaborative project with Rice University and Technology For All.",
    detail: "AirSafe brings live air quality data to Houston residents who need it the most.",
    image: "/images/airsafe.png",
    url: "https://airsafe-tfa.weebly.com/",
    repo: "https://github.com/rknightly/airsafe-tfa",
  },
  {
    title: "Solar Simulator",
    description: "A 3-D solar system visualization created using Processing.",
    detail: "Designed for aesthetics, providing a beautiful 3-D view of the sun and planets orbiting around it with stars in the background.",
    image: "/images/solarsim.png",
    repo: "https://github.com/rknightly/sketches/tree/master/processing/solarSim",
  },
  {
    title: "PrimeDice Simulator",
    description: "A Python program that tests different settings for a Bitcoin gambling site.",
    detail: "The simulator runs millions of games using particular settings to produce a result graph.",
    image: "/images/primedice.png",
    repo: "https://github.com/rknightly/primedice-simulator",
  },
];

export const social: Social[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ryaneknightly/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/rknightly",
    icon: "github",
  },
  {
    name: "Medium",
    url: "https://medium.com/thefloatingpoint",
    icon: "medium",
  },
];
