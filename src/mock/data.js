import { nanoid } from 'nanoid';
import React from 'react';
// HEAD DATA
export const headData = {
  title: 'Darby Clement', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: "Clement_Darby_resume.pdf", // if no resume, the button will not show up
};


// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ibm.jpg',
    img2: 'ims.jpg',
    img3: 'ibm_logo.jpg',
    title: 'IBM Back End Development Internship',
    info: 'Summer 2021',
    info2: 'I am working in the IMS DevOps team to assist with management of Fyre, a hybrid cloud implementation. Our wrapper API manages permissions for actions like rebooting and shutting VMs, and our automation scripts back up production VMs once a month.',
    info3: 'Tech used: PHP, mySQL, Cron',
    url: '',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'collayt.jpg',
    title: 'Collayt',
    info: 'Summer 2020 - Spring 2021',
    info2: 'I worked as a front end developer (for the first time!) on a website for connecting Berkeley students during quarantine.',
    info3: 'Tech used: React, Bootstrap, Javascript, CSS, HTML',
    url: 'http://www.collayt.com',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'codeday.jpg',
    title: 'CodeDay Labs Summer Internship Program',
    info: 'Summer 2020',
    info2: 'I worked with a mentor and two other students to design a site for tracking pages on a website. I used a web crawler for the first time to find all pages in a website.',
    info3: 'Tech used: Python, Django, React, Docker',
    //url: 'http://www.collayt.com',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to reach out!',
  btn: 'Email Me',
  email: 'darbyclement@berkeley.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/darby-clement/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/darbyclement',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
