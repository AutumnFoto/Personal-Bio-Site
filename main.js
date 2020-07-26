"use strict";
const projects = [
  {
    title: "Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description:
      "Personal bio project for the first 6 months of NSS, front end.",
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/AutumnFoto/Personal-Bio-Site.git", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },

  {
    title: "Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description:
      "Personal bio project for the first 6 months of NSS, front end.",
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/AutumnFoto/Personal-Bio-Site.git", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },

  {
    title: "Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description:
      "Personal bio project for the first 6 months of NSS, front end.",
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/AutumnFoto/Personal-Bio-Site.git", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },

  {
    title: "Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description:
      "Personal bio project for the first 6 months of NSS, front end.",
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/AutumnFoto/Personal-Bio-Site.git", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
];

const printToDom = (divid, textToPrint) => {
  const selectedDiv = document.getElementById(divid);
  selectedDiv.innerHTML += textToPrint;
};
const createProjectCards = () => {
  
  for (let i = 0; i < projects.length; i++) {
    let domString = "";
    domString += `<div class="project">`;
    domString += `<h3>${projects[i].title}</h3>`;
    domString += `<img src='${projects[i].screenshot}' />`;
    domString += `<div>${projects[i].description}</div>`;
    domString += `<div>${projects[i].technologiesUsed}</div>`;
    domString += `<div>${projects[i].url}</div>`;
    domString += `<div>${projects[i].githubUrl}</div>`;
    domString += `</div>`;
    printToDom("projectsPage", domString);
  }

};

const init = () => {
  createProjectCards();
  
};

init();
