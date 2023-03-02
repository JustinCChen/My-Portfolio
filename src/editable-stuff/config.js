// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#008080, #008080",
  firstName: "Hi , I am Justin",
  middleName: "",
  lastName: "Chen",
  message: "Software Engineer - JavaScript | HTML5 | CSS3 | Node.js | Express.js | React.js",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/JustinCChen",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/justinctchen/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/S__73457667.jpg"),
  imageSize: 375,
  message:
    "I am driven by a passion for problem solving. Whatever the project, the framework, or the goal, it is undoubtedly the challenge that drives me. Some people call it an obsession, they’re probably right. I understand the importance of the balance between form and function, and I know a good team can exponentially increase everyone’s potential. As a MERN stack web developer I look forward to the many challenges to come and the creative process of figuring out how to solve each one.",
  resume: "https://www.linkedin.com/in/justinctchen/",
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "JustinCChen",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../assets/img/S__73457667.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../assets/img/S__73457667.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 30 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 70 },
    { name: "C/C++", value: 0 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 90 },
    { name: "HTML/CSS", value: 90 },
    { name: "C#", value: 0 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering! if you have any questions, or just want to say hi, please feel free to email me at",
  email: "justinchen1211@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Web Consultant',// Here Add Company Name
      companylogo: require('../assets/img/logo.png'),
      date: '2015 – 2018',
    },
    {
      role: 'Web Consultant',
      companylogo: require('../assets/img/IDP.jpg'),
      date: '2018 – 2020',
    },
    {
      role: 'UCI',
      companylogo: require('../assets/img/uci1.jpg'),
      date: '2022 – present',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
