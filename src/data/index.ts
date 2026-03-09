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
  summary: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export const hero = {
  name: "Ryan Knightly",
  tagline: "Software Engineer @ Apple",
};

export const about = {
  image: "/images/profile.png",
  paragraphs: [
    "I'm a software engineer at Apple, where I build native macOS apps in Swift that power Apple's CRM workflows. I design and ship features end-to-end, and build foundational frameworks used by teams across the organization.",
    "I've been shipping software since high school, when I published my first iOS games on the App Store. I went on to study Computer Science and Mathematics at Rice University, graduating magna cum laude, and interned at Amazon before joining Apple.",
  ],
};

export const experience: Experience[] = [
  {
    company: "Apple",
    role: "Software Engineer",
    period: "Aug 2023 - Present",
    summary: "Build native macOS apps in Swift that power Apple's CRM workflows. Notable projects include on-device speech transcription, a real-time WebSocket notification system, and an internal AI assistant application. I also build and maintain foundational Swift frameworks used across multiple teams.",
  },
  {
    company: "Amazon",
    role: "Software Engineer Intern",
    period: "May - Aug 2022",
    summary: "Designed and implemented a Swift framework for a new Alexa Accessories feature on iOS, integrating with AWS backends and multithreaded native APIs.",
  },
  {
    company: "MD Anderson Cancer Center",
    role: "Computational Biology Intern",
    period: "Jun - Aug 2021",
    summary: "Built a Python web application to visualize high-dimensional lung cancer data and developed a statistical gene-correlation tool used by experimental biologists.",
  },
];

export const education = {
  school: "Rice University",
  degree: "B.S. in Computer Science, Minor in Mathematics",
  honors: "Magna Cum Laude",
  courses: [
    "Web Development",
    "Databases",
    "Secure and Cloud Computing",
    "Statistical Models for Data Science",
    "Functional Programming",
    "Cryptography",
    "Compiler Construction",
    "Operating Systems",
    "Parallel Programming",
    "Distributed Systems",
  ],
};

export const skills = {
  languages: ["Swift", "Python", "TypeScript", "JavaScript", "Java", "SQL", "C"],
  technologies: ["SwiftUI", "AppKit", "Vue.js", "React", "Node.js", "Unity", "Git", "Docker", "AWS", "GCP"],
};

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
    description: "Built the iOS and Android app investorPrep.",
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
    description: "Built a 3-D solar system visualization using Processing.",
    detail: "Designed for aesthetics, rendering the sun, orbiting planets, and a starfield background in real time.",
    image: "/images/solarsim.png",
    repo: "https://github.com/rknightly/sketches/tree/master/processing/solarSim",
  },
  {
    title: "PrimeDice Simulator",
    description: "A Python probability simulation tool that models outcomes across different betting strategies.",
    detail: "Runs millions of simulated games with configurable parameters to produce result graphs.",
    image: "/images/primedice.png",
    repo: "https://github.com/rknightly/primedice-simulator",
  },
];

export const social: Social[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/reknightly/",
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
