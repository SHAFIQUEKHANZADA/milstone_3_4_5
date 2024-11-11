// Prevent default form submission and handle resume generation
document.getElementById("form")?.addEventListener("submit", function (event: Event) {
  event.preventDefault();

  // Get form elements
  const profileInput = document.getElementById('pro') as HTMLInputElement | null;
  const firstElement = document.getElementById("first-name") as HTMLInputElement | null;
  const lastElement = document.getElementById("last-name") as HTMLInputElement | null;
  const emailElement = document.getElementById("em") as HTMLInputElement | null;
  const phoneElement = document.getElementById("ph") as HTMLInputElement | null;
  const eduElement = document.getElementById("edu") as HTMLInputElement | null;
  const expElement = document.getElementById("experience") as HTMLInputElement | null;
  const skillsList = document.getElementById("skills-list") as HTMLUListElement | null;

  // Check if all necessary elements are present
  if (profileInput && firstElement && lastElement && emailElement && phoneElement && eduElement && expElement && skillsList) {
    const namefirst = firstElement.value;
    const namelast = lastElement.value;
    const em = emailElement.value;
    const ph = phoneElement.value;
    const edu = eduElement.value;
    const experience = expElement.value;

    const skills = Array.from(skillsList.children).map(li => li.textContent || '').join(', ');

    const proFl = profileInput.files?.[0];
    const proURL = proFl ? URL.createObjectURL(proFl) : "";

    const output = `
    <div class="resume-container">
      <div class="mainDiv">
        <!-- Left side (Profile & Contact Info) -->
        <div class="left-section">
          ${proURL ? `<div class="profile-picture"><img src="${proURL}" alt="Profile Picture"></div>` : ''}
          <h2 class="name">${namefirst} ${namelast}</h2>
          <section class="contact-info">
            <ul>
              <li><i class="fas fa-envelope"></i> ${em}</li>
              <li><i class="fas fa-phone"></i> ${ph}</li>
            </ul>
          </section>
        </div>

        <!-- Right side (Experience, Education, Skills) -->
        <div class="right-section">
          <section class="resume-section">
            <h3><i class="fas fa-briefcase"></i> Work Experience</h3>
            <p>${experience || 'No work experience provided'}</p>
          </section>
          
          <section class="resume-section">
            <h3><i class="fas fa-graduation-cap"></i> Education</h3>
            <p>${edu || 'No education details provided'}</p>
          </section>

          <section class="resume-section">
            <h3><i class="fas fa-code"></i> Skills</h3>
            <p>${skills || 'No skills added'}</p>
          </section>
        </div>
      </div>
    </div>
  `;
    const elres = document.getElementById("output");
    if (elres) {
      elres.innerHTML = output;
    } else {
      console.error("The resume output element is missing");
    }
  } else {
    console.error("One or more element outputs are missing");
  }
});

// Handling Skills Addition
document.getElementById('add-skill-btn')?.addEventListener('click', function () {
  const skillInput = document.getElementById('skill-input') as HTMLInputElement | null;
  const skillsList = document.getElementById("skills-list") as HTMLUListElement | null;

  if (skillInput && skillsList) {
    const skillValue = skillInput.value.trim();

    if (skillValue) {
      const li = document.createElement('li');
      li.textContent = skillValue;
      skillsList.appendChild(li);
      skillInput.value = '';  
    } else {
      alert('Please enter a skill before adding.');
    }
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const menuToggle: any = document.getElementById('menuToggle');
  const menu: any = document.getElementById('menu');

  menuToggle.addEventListener('click', function () {
      menu.classList.toggle('active');
  });
});
