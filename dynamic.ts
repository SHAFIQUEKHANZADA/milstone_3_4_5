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
      ${proURL ? `<img src="${proURL}" alt="profile" class="profile">` : ''}

      <div class="info-section">
        <p><strong><i class="fas fa-user"></i> Name:</strong> ${namefirst} ${namelast}</p>
        <p><strong><i class="fas fa-envelope"></i> Email:</strong> ${em}</p>
        <p><strong><i class="fas fa-phone"></i> Phone:</strong> ${ph}</p>
      </div>

      <h3><i class="fas fa-graduation-cap"></i> Education</h3>
      <p>${edu}</p>

      <h3><i class="fas fa-briefcase"></i> Experience</h3>
      <p>${experience}</p>

      <h3><i class="fas fa-code"></i> Skills</h3>
      <p>${skills || 'No skills added'}</p>
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
