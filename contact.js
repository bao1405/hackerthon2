function handleSubmit() {
    const contactName = document.getElementById("contactName").value;
    const contactEmail = document.getElementById("contactEmail").value;
    const contactSubject = document.getElementById("contactSubject").value;
    const contactMessage = document.getElementById("contactMessage").value;

    console.log("Name:", contactName);
    console.log("Email:", contactEmail);
    console.log("Subject:", contactSubject);
    console.log("Message:", contactMessage);
    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactSubject").value = "";
    document.getElementById("contactMessage").value = "";
}
