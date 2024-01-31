function addEducation() {
    const degree = document.getElementById("degree").value;
    const university = document.getElementById("university").value;
    const eduDate = document.getElementById("eduDate").value;

    const educationEntry = document.getElementById("educationEntry");

    const newEntry = document.createElement("div");
    newEntry.innerHTML = `<h3>${degree}</h3><p>${university}, ${eduDate}</p>`;
    
    educationEntry.appendChild(newEntry);
}

function addExperience() {
    const position = document.getElementById("position").value;
    const company = document.getElementById("company").value;
    const expDate = document.getElementById("expDate").value;

    const experienceEntry = document.getElementById("experienceEntry");

    const newEntry = document.createElement("div");
    newEntry.innerHTML = `<h3>${position}</h3><p>${company}, ${expDate}</p>`;
    
    experienceEntry.appendChild(newEntry);
}

function saveToLocalStorage() {
    const fullName = document.getElementById("fullName").textContent;
    const jobTitle = document.getElementById("jobTitle").textContent;
    const bio = document.getElementById("bio").textContent;

    const educationEntries = Array.from(document.getElementById("educationEntry").children).map(entry => entry.innerHTML);
    const experienceEntries = Array.from(document.getElementById("experienceEntry").children).map(entry => entry.innerHTML);

    const data = {
        fullName,
        jobTitle,
        bio,
        education: educationEntries,
        experience: experienceEntries
    };

    localStorage.setItem("cvData", JSON.stringify(data));
    alert("Information saved to local storage!");
}
