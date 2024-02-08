var projects = [
    { name: "Project 1", description: "Description here...", imagePath: "path/to/Pictures/engine_hotfire_intro_home.jpg", alignment: "left" },
    { name: "Project 2", description: "Description here...", imagePath: "path/to/image2.jpg", alignment: "right" },
    // Add more projects as needed
];


function renderProjects() {
    const projectsContainer = document.getElementById('projects');
    projects.forEach((project, index) => {
        const alignmentClass = index % 2 === 0 ? 'left' : 'right';
        const projectHTML = `
            <div class="project ${alignmentClass}">
                <div class="project-image">
                    <img src="${project.imagePath}" alt="${project.name}">
                </div>
                <div class="project-info">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });
}


document.addEventListener('DOMContentLoaded', renderProjects);
