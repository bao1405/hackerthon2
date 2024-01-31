document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem('projects')) {
        localStorage.setItem('projects', JSON.stringify([]));
    }

    renderProjects();
});

function renderProjects() {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    let table = document.getElementById('projectTable');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    projects.forEach(function (project, index) {
        let row = table.insertRow(index + 1);
        row.insertCell(0).textContent = index + 1; // Số thứ tự
        row.insertCell(1).textContent = project.projectName;
        row.insertCell(2).innerHTML = `<img src="${project.imageURL}" alt="${project.projectName}" style="max-width: 100px;">`;
        row.insertCell(3).innerHTML = `<a href="${project.projectLink}" target="_blank">${project.projectLink}</a>`;
        row.insertCell(4).textContent = project.tags.join(', ');

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function () {
            deleteProject(index);
        };
        row.insertCell(5).appendChild(deleteBtn);

        let updateBtn = document.createElement("button");
        updateBtn.innerText = "Update";
        updateBtn.className = "update-btn";
        updateBtn.onclick = function () {
            editProject(index);
        };
        row.insertCell(6).appendChild(updateBtn);
    });
}

function addProject() {
    let projectName = document.getElementById('projectName').value;
    let imageURL = document.getElementById('imageURL').value;
    let projectLink = document.getElementById('projectLink').value;
    let tags = document.getElementById('tags').value.split(',');

    let newProject = {
        projectName: projectName,
        imageURL: imageURL,
        projectLink: projectLink,
        tags: tags
    };

    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));

    renderProjects();
}

function deleteProject(index) {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));

    renderProjects();
}

function editProject(index) {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    let projectToEdit = projects[index];

    document.getElementById('projectName').value = projectToEdit.projectName;
    document.getElementById('imageURL').value = projectToEdit.imageURL;
    document.getElementById('projectLink').value = projectToEdit.projectLink;
    document.getElementById('tags').value = projectToEdit.tags.join(',');

    projects.splice(index, 1);

    localStorage.setItem('projects', JSON.stringify(projects));

    renderProjects();
}
