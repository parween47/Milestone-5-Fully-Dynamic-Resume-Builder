const startProcess: any = document.getElementById("getResumeButton");
startProcess.addEventListener("click", (e: any) => {
  e.preventDefault();
  buildResume();
});

function buildResume() {

  const nameInput = document.getElementById("name") as HTMLInputElement;
  const jobTitleInput = document.getElementById("jobTitle") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  const linkdinInput = document.getElementById("linkdin") as HTMLInputElement;
  const addressInput = document.getElementById("address") as HTMLInputElement;
  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const personalDetailInput = document.getElementById("personalDetail") as HTMLTextAreaElement;
  const educationInput = document.getElementById("education") as HTMLInputElement;

  if (!nameInput.value || !jobTitleInput.value || !emailInput.value || !phoneInput.value || !addressInput.value || !skillsInput.value || !educationInput.value || !personalDetailInput.value) {
    alert("Please fill in all required fields: Name, Job Title, Email, Phone, Address, Education, Personal Detail, and Skills.");
    return;
  }

  const certificateInput = document.getElementById("certificate") as HTMLInputElement;
  const experienceInput = document.getElementById("experience") as HTMLInputElement;
  const profileImageInput = document.getElementById("profileImage") as HTMLInputElement;
  const currentImage = document.getElementById("profilePic") as HTMLImageElement;


  const nameOutput = document.getElementById("nameCv") as HTMLElement;
  const jobTitleOutput = document.getElementById("jobTitleCv") as HTMLElement;
  const emailOutput = document.getElementById("emailCv") as HTMLElement;
  const phoneOutput = document.getElementById("phoneCv") as HTMLElement;
  const linkdinOutput = document.getElementById("linkdinCv") as HTMLElement;
  const addressOutput = document.getElementById("addressCv") as HTMLElement;
  const personalDetailOutput = document.getElementById("personalDetailCv") as HTMLElement;

  const name: string = nameInput.value;
  const jobTitle: string = jobTitleInput.value;
  const email: string = emailInput.value;
  const phone: string = phoneInput.value;
  const linkdin: string = linkdinInput.value;
  const address: string = addressInput.value;
  const personalDetail: string = personalDetailInput.value;

  const certificate: string[] = certificateInput.value.split(",").map(element => element.trim());
  const education: string[] = educationInput.value.split(",").map(element => element.trim());
  const experience: string[] = experienceInput.value.split(",").map(element => element.trim());
  const skill: string[] = skillsInput.value.split(",").map(element => element.trim());

  nameOutput.textContent = name;
  jobTitleOutput.textContent = jobTitle;
  emailOutput.textContent = email;
  phoneOutput.textContent = phone;
  addressOutput.textContent = address;
  linkdinOutput.textContent = linkdin;
  personalDetailOutput.innerHTML = personalDetail;

  const skillsCv = document.getElementById("skillsCv") as HTMLElement;
  skillsCv.innerHTML = "";
  skill.forEach(element => {
    const skillElement = document.createElement("li");
    skillElement.textContent = element;
    skillsCv.appendChild(skillElement);
  });

  const educationCv = document.getElementById("educationCv") as HTMLElement;
  educationCv.innerHTML = "";
  for (let i = 0; i < education.length; i += 3) {
    const degree = education[i]|| "";
    const place = education[i + 1]|| "";
    const year = education[i + 2]|| "";

    const yearElement = document.createElement("P");
    yearElement.style.float = "right";
    yearElement.innerHTML = `${year}` ;
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

  const experienceCv = document.getElementById("experienceCv") as HTMLElement;
  experienceCv.innerHTML = "";
  for (let i = 0; i < experience.length; i += 3) {
    const postName = experience[i]|| "";
    const corporation = experience[i + 1]|| "";
    const year = experience[i + 2]|| "";

    const yearElement = document.createElement("P");
    yearElement.style.float = "right";
    yearElement.innerHTML = `${year}`|| "";
    yearElement.contentEditable = "true";

    const postElement = document.createElement("P");
    postElement.innerHTML = `<b><span>${postName}</span></b>`;
    postElement.contentEditable = "true";

    const corporationElement = document.createElement("P");
    corporationElement.innerHTML = `${corporation}`|| "";
    corporationElement.contentEditable = "true";

    const lineBreakElement = document.createElement("br");

    experienceCv.appendChild(yearElement);
    experienceCv.appendChild(postElement);
    experienceCv.appendChild(corporationElement);
    experienceCv.appendChild(lineBreakElement);
  }

  const certificationContainer = document.getElementById("certificationContainer") as HTMLElement;
  certificationContainer.innerHTML = "";
  for (let i = 0; i < certificate.length; i += 3) {
    const courseName = certificate[i]|| "";
    const academy = certificate[i + 1]|| "";
    const year = certificate[i + 2]|| "";

    const yearElement = document.createElement("P");
    yearElement.style.float = "right";
    yearElement.innerHTML = `${year}`|| "";
    yearElement.contentEditable = "true";

    const courseElement = document.createElement("P");
    courseElement.innerHTML = `<b><span>${courseName}</span></b>`;
    courseElement.contentEditable = "true";

    const academyElement = document.createElement("P");
    academyElement.innerHTML = `${academy}`|| "";
    academyElement.contentEditable = "true";

    const lineBreakElement = document.createElement("br");

    certificationContainer.appendChild(yearElement);
    certificationContainer.appendChild(courseElement);
    certificationContainer.appendChild(academyElement);
    certificationContainer.appendChild(lineBreakElement);
  }

  const file = profileImageInput.files?.[0];
  if (file) {
    currentImage.src = URL.createObjectURL(file);
    let inputImage= currentImage
    inputImage.style.cssText = 'width: 11.5em; height: 11.5em; ';
  } else {
    currentImage.src = "default image.webp";
  }
  const linkdinSection = document.getElementById("linkdinSection") as HTMLElement;
  if (!linkdin) {
    linkdinSection.style.display = "none"; 
  } else {
    linkdinOutput.textContent = linkdin;
  }

  const certificationSection = document.getElementById("certificationSection") as HTMLElement;
  if (certificate.length === 0 || !certificate[0]) {
    certificationSection.style.display = "none"; 
  }

  const experienceSection = document.getElementById("experienceSection") as HTMLElement;
  if (experience.length === 0 || !experience[0]) {
    experienceSection.style.display = "none";
  }

  const form = document.getElementById("myForm") as HTMLInputElement;
  const sharePdf = document.getElementById("pdf") as HTMLInputElement;
  const ShareUrl = document.getElementById("shareResumeButton") as HTMLInputElement;
  const mainHeading = document.querySelector(".first-heading") as HTMLInputElement;

  form.style.display = "none";
  mainHeading.style.display = "none";
  ShareUrl.style.display = "block";
  sharePdf.style.display = "block";
}

function downloadPDF(): void {
  const ShareUrl = document.getElementById("shareResumeButton") as HTMLInputElement;
  const sharePdf = document.getElementById("pdf") as HTMLInputElement;

  ShareUrl.style.display = "none";
  sharePdf.style.display = "none";
  
  window.print();

}

document.getElementById('pdf')?.addEventListener('click', downloadPDF);

const shareButton = document.getElementById("shareResumeButton") as HTMLElement;
shareButton.addEventListener("click", () => {
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const username = nameInput.value.toLowerCase().replace(/\s+/g, '');
  const resumeUrl = `${window.location.origin}/${username}`;

  alert(`Shareable URL: ${resumeUrl}`);
  navigator.clipboard.writeText(resumeUrl)
    .then(() => alert("URL copied to clipboard!"))
    .catch(() => alert("Failed to copy URL to clipboard. Please try manually."));
});

