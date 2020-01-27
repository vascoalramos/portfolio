import uuidv1 from 'uuid/v1';

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "Hello! I'm Vasco, a data science and machine learning enthusiast. I'm currently in the last year of my Bachelor Degree in Computer Science at the University of Aveiro.",
  paragraphTwo: 'I consider myself as a goal-oriented person, always focused on a problem.',
  paragraphThree:
    'Driven by the desire of always being my better self, I choose to be in constant learning and having an open mind.',
  paragraphFour: 'My mantra of life is all about hard work and absolute determination.',
  resume: '/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];
