

localStorage.setItem("heroInfo", JSON.stringify(heroInfo));
localStorage.setItem("personalDetail", JSON.stringify(personalDetail));
localStorage.setItem("projects", JSON.stringify(projects));

const heroInfoData = JSON.parse(localStorage.getItem("heroInfo")) || {};
const personalDetailData = JSON.parse(localStorage.getItem("personalDetail")) || {};
const projectsData = JSON.parse(localStorage.getItem("projects")) || [];

function renderData() {
    const hireMeButton = document.querySelector(".header input[type='submit']");
    
    if (hireMeButton) {
        hireMeButton.value = heroInfoData.name || '';

    document.getElementById("heroName").innerText = heroInfoData.name || '';
    document.getElementById("heroJob").innerText = heroInfoData.job || '';
    document.getElementById("heroImage").src = heroInfoData.imgUrl || '';

    document.getElementById("dob").innerText = personalDetailData.dob || '';
    document.getElementById("spokenLanguages").innerText = (personalDetailData.spokenLanguages || []).join(", ");
    document.getElementById("nationality").innerText = personalDetailData.nationality || '';
    document.getElementById("interests").innerText = (personalDetailData.interest || []).join(", ");

    const projectsContainer = document.getElementById("projectsContainer");
    projectsContainer.innerHTML = '';

    projectsData.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("projectItem");

        projectDiv.innerHTML = `
            <img src="${project.imgUrl || ''}" alt="${project.projectName || ''}">
            <h3>${project.projectName || ''}</h3>
            <p>${project.link || ''}</p>
            <p>Tags: ${(project.tags || []).join(", ")}</p>
        `;

        projectsContainer.appendChild(projectDiv);
    });
}
}

renderData();