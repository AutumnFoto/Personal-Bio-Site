"use strict"
 const projects = [

{
    title: "Cool Project",
    screenshot:"http://gotoflashgames.com/files/file/033.jpg",
    description: "Personal bio project for the first 6 months of NSS, front end.", 
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/AutumnFoto/Personal-Bio-Site.git", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },

  {
    title: "Cool Project",
    screenshot:"http://gotoflashgames.com/files/file/033.jpg",
    description: "Personal bio project for the first 6 months of NSS, front end.", 
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/AutumnFoto/Personal-Bio-Site.git", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },

  {
    title: "Cool Project",
    screenshot:"http://gotoflashgames.com/files/file/033.jpg",
    description: "Personal bio project for the first 6 months of NSS, front end.", 
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/AutumnFoto/Personal-Bio-Site.git", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },

  {
    title: "Cool Project",
    screenshot:"http://gotoflashgames.com/files/file/033.jpg",
    description: "Personal bio project for the first 6 months of NSS, front end.", 
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/AutumnFoto/Personal-Bio-Site.git", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
]

const printToDom= (divid,textToPrint)=> {

    const selectedDiv = document.getElementById(divid);
    selectedDiv.innerHTML = textToPrint;
    }
    const projectCards = () => {
      let domString ='';
    
        for(let i=0; i < projectPage.length; i++) {
        domString += `<div class="projectPage">`
        domString += `<h3>${projectPage[i].bioPage}</h3>`
        domString +=  `<p>${projectPage[i].technologiesPage}</p>`
        domString += '</div>'
        }
   
    printToDom('projectsPage',domString);}

    
    const init1 = () =>{
        projectCards();
        projectPage();
    }

    
    init1()
