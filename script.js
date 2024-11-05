"use strict";
var _a;
const startProcess = document.getElementById("getResumeButton");
startProcess.addEventListener("click", (e) => {
    e.preventDefault();
    buildResume();
});
function buildResume() {
    var _a;
    const nameInput = document.getElementById("name");
    const jobTitleInput = document.getElementById("jobTitle");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const linkdinInput = document.getElementById("linkdin");
    const addressInput = document.getElementById("address");
    const skillsInput = document.getElementById("skills");
    const personalDetailInput = document.getElementById("personalDetail");
    const educationInput = document.getElementById("education");
    if (!nameInput.value || !jobTitleInput.value || !emailInput.value || !phoneInput.value || !addressInput.value || !skillsInput.value || !educationInput.value || !personalDetailInput.value) {
        alert("Please fill in all required fields: Name, Job Title, Email, Phone, Address, Education, Personal Detail, and Skills.");
        return;
    }
    const certificateInput = document.getElementById("certificate");
    const experienceInput = document.getElementById("experience");
    const profileImageInput = document.getElementById("profileImage");
    const currentImage = document.getElementById("profilePic");
    const nameOutput = document.getElementById("nameCv");
    const jobTitleOutput = document.getElementById("jobTitleCv");
    const emailOutput = document.getElementById("emailCv");
    const phoneOutput = document.getElementById("phoneCv");
    const linkdinOutput = document.getElementById("linkdinCv");
    const addressOutput = document.getElementById("addressCv");
    const personalDetailOutput = document.getElementById("personalDetailCv");
    const name = nameInput.value;
    const jobTitle = jobTitleInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const linkdin = linkdinInput.value;
    const address = addressInput.value;
    const personalDetail = personalDetailInput.value;
    const certificate = certificateInput.value.split(",").map(element => element.trim());
    const education = educationInput.value.split(",").map(element => element.trim());
    const experience = experienceInput.value.split(",").map(element => element.trim());
    const skill = skillsInput.value.split(",").map(element => element.trim());
    nameOutput.textContent = name;
    jobTitleOutput.textContent = jobTitle;
    emailOutput.textContent = email;
    phoneOutput.textContent = phone;
    addressOutput.textContent = address;
    linkdinOutput.textContent = linkdin;
    personalDetailOutput.innerHTML = personalDetail;
    const skillsCv = document.getElementById("skillsCv");
    skillsCv.innerHTML = "";
    skill.forEach(element => {
        const skillElement = document.createElement("li");
        skillElement.textContent = element;
        skillsCv.appendChild(skillElement);
    });
    const educationCv = document.getElementById("educationCv");
    educationCv.innerHTML = "";
    for (let i = 0; i < education.length; i += 3) {
        const degree = education[i] || "";
        const place = education[i + 1] || "";
        const year = education[i + 2] || "";
        const yearElement = document.createElement("P");
        yearElement.style.float = "right";
        yearElement.innerHTML = `${year}`;
        yearElement.contentEditable = "true";
        const degreeElement = document.createElement("P");
        degreeElement.innerHTML = `<b><span>${degree}</span></b>`;
        degreeElement.contentEditable = "true";
        const placeElement = document.createElement("P");
        placeElement.innerHTML = `${place}` || "";
        placeElement.contentEditable = "true";
        const lineBreakElement = document.createElement("br");
        educationCv.appendChild(yearElement);
        educationCv.appendChild(degreeElement);
        educationCv.appendChild(placeElement);
        educationCv.appendChild(lineBreakElement);
    }
    const experienceCv = document.getElementById("experienceCv");
    experienceCv.innerHTML = "";
    for (let i = 0; i < experience.length; i += 3) {
        const postName = experience[i] || "";
        const corporation = experience[i + 1] || "";
        const year = experience[i + 2] || "";
        const yearElement = document.createElement("P");
        yearElement.style.float = "right";
        yearElement.innerHTML = `${year}` || "";
        yearElement.contentEditable = "true";
        const postElement = document.createElement("P");
        postElement.innerHTML = `<b><span>${postName}</span></b>`;
        postElement.contentEditable = "true";
        const corporationElement = document.createElement("P");
        corporationElement.innerHTML = `${corporation}` || "";
        corporationElement.contentEditable = "true";
        const lineBreakElement = document.createElement("br");
        experienceCv.appendChild(yearElement);
        experienceCv.appendChild(postElement);
        experienceCv.appendChild(corporationElement);
        experienceCv.appendChild(lineBreakElement);
    }
    const certificationContainer = document.getElementById("certificationContainer");
    certificationContainer.innerHTML = "";
    for (let i = 0; i < certificate.length; i += 3) {
        const courseName = certificate[i] || "";
        const academy = certificate[i + 1] || "";
        const year = certificate[i + 2] || "";
        const yearElement = document.createElement("P");
        yearElement.style.float = "right";
        yearElement.innerHTML = `${year}` || "";
        yearElement.contentEditable = "true";
        const courseElement = document.createElement("P");
        courseElement.innerHTML = `<b><span>${courseName}</span></b>`;
        courseElement.contentEditable = "true";
        const academyElement = document.createElement("P");
        academyElement.innerHTML = `${academy}` || "";
        academyElement.contentEditable = "true";
        const lineBreakElement = document.createElement("br");
        certificationContainer.appendChild(yearElement);
        certificationContainer.appendChild(courseElement);
        certificationContainer.appendChild(academyElement);
        certificationContainer.appendChild(lineBreakElement);
    }
    const file = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        currentImage.src = URL.createObjectURL(file);
        let inputImage = currentImage;
        inputImage.style.cssText = 'width: 11.5em; height: 11.5em; ';
    }
    else {
        currentImage.src = "default image.webp";
    }
    const linkdinSection = document.getElementById("linkdinSection");
    if (!linkdin) {
        linkdinSection.style.display = "none";
    }
    else {
        linkdinOutput.textContent = linkdin;
    }
    const certificationSection = document.getElementById("certificationSection");
    if (certificate.length === 0 || !certificate[0]) {
        certificationSection.style.display = "none";
    }
    const experienceSection = document.getElementById("experienceSection");
    if (experience.length === 0 || !experience[0]) {
        experienceSection.style.display = "none";
    }
    const form = document.getElementById("myForm");
    const sharePdf = document.getElementById("pdf");
    const ShareUrl = document.getElementById("shareResumeButton");
    const mainHeading = document.querySelector(".first-heading");
    form.style.display = "none";
    mainHeading.style.display = "none";
    ShareUrl.style.display = "block";
    sharePdf.style.display = "block";
}
function downloadPDF() {
    const ShareUrl = document.getElementById("shareResumeButton");
    const sharePdf = document.getElementById("pdf");
    ShareUrl.style.display = "none";
    sharePdf.style.display = "none";
    
    window.print();
}
(_a = document.getElementById('pdf')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', downloadPDF);
const shareButton = document.getElementById("shareResumeButton");
shareButton.addEventListener("click", () => {
    const nameInput = document.getElementById("name");
    const username = nameInput.value.toLowerCase().replace(/\s+/g, '');
    const resumeUrl = `${window.location.origin}/${username}`;
    alert(`Shareable URL: ${resumeUrl}`);
    navigator.clipboard.writeText(resumeUrl)
        .then(() => alert("URL copied to clipboard!"))
        .catch(() => alert("Failed to copy URL to clipboard. Please try manually."));
});
