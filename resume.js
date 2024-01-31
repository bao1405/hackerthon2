document.addEventListener('DOMContentLoaded', function () {
    // Thông tin giáo dục và kinh nghiệm (dùng mô phỏng)
    const educationData = [
        { degree: 'Bachelor in Computer Science', school: 'University of ABC', year: '2016-2020' },
    ];

    const experienceData = [
        { position: 'Web Developer', company: 'XYZ Tech', year: '2020-present', description: 'Developing web applications.' },
    ];

    // Hiển thị thông tin giáo dục và kinh nghiệm
    const educationList = document.getElementById('educationList');
    const experienceList = document.getElementById('experienceList');

    function displayEducation() {
        educationData.forEach(entry => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${entry.degree}</strong> - ${entry.school}, ${entry.year}`;
            educationList.appendChild(li);
        });
    }

    function displayExperience() {
        experienceData.forEach(entry => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${entry.position}</strong> - ${entry.company}, ${entry.year}<br>${entry.description}`;
            experienceList.appendChild(li);
        });
    }

    displayEducation();
    displayExperience();
});
