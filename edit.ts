document.getElementById("form")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const profileInput = document.getElementById('pro') as HTMLInputElement;
  const firstNameInput = document.getElementById('first-name') as HTMLInputElement;
  const lastNameInput = document.getElementById('last-name') as HTMLInputElement;
  const emailInput = document.getElementById('em') as HTMLInputElement;
  const phoneInput = document.getElementById('ph') as HTMLInputElement;
  const eduInput = document.getElementById('edu') as HTMLInputElement;
  const expInput = document.getElementById('experience') as HTMLInputElement;
  const skillsList = document.getElementById('skills-list') as HTMLUListElement;
  const linkLinkden = document.getElementById("link") as HTMLInputElement;
  const linkPort = document.getElementById("link") as HTMLInputElement;

  const skills = Array.from(skillsList.children).map(li => li.textContent || '').join(', ');

  const profileFile = profileInput.files?.[0];
  const profileURL = profileFile ? URL.createObjectURL(profileFile) : "";

  const outputHTML = ` 
    <div class="resume-container">
      <div class="mainDiv">
        <!-- Left side (Profile & Contact Info) -->
        <div class="left-section">
          ${profileURL ? `<div class="profile-picture"><img src="${profileURL}" alt="Profile Picture"></div>` : ''}
          <h2 class="name">${firstNameInput.value} ${lastNameInput.value}</h2>
          <section class="contact-info">
            <ul>
              <li><i class="fas fa-envelope"></i> ${emailInput.value}</li>
              <li><i class="fas fa-phone"></i> ${phoneInput.value}</li>
            </ul>
          </section>

            <section class="profile-link">
            <h3>Links: </h3>
            <div class="links">
            <p class="linkIcon"><i class="fa-brands fa-linkedin"></i>
            <a href="${linkLinkden.value}" target="_blank">${linkLinkden.value ? linkLinkden.value : 'No link provided'}</a>
             </p>
            <p class="linkIcon"><i class="fa-solid fa-link"></i> 
            <a href="${linkPort.value}" target="_blank">${linkPort.value ? linkPort.value : 'No link provided'}</a>
            </p>
            </div>
          </section>
        </div>

        <!-- Right side (Experience, Education, Skills) -->
        <div class="right-section">
          <section class="resume-section">
            <h3><i class="fas fa-briefcase"></i> Work Experience</h3>
            <p>${expInput.value || 'No work experience provided'}</p>
          </section>
          
          <section class="resume-section">
            <h3><i class="fas fa-graduation-cap"></i> Education</h3>
            <p>${eduInput.value || 'No education details provided'}</p>
          </section>

          <section class="resume-section">
            <h3><i class="fas fa-code"></i> Skills</h3>
            <p>${skills || 'No skills added'}</p>
          </section>
        </div>
      </div>
    </div>
  `;
    

  const outputDiv = document.getElementById("output");
  if (outputDiv) {
    outputDiv.innerHTML = outputHTML;
  }
});

const skills: string[] = [];

document.getElementById('add-skill-btn')?.addEventListener('click', function () {
  const skillInput = document.getElementById('skill-input') as HTMLInputElement;
  const skillValue = skillInput.value.trim();

  if (skillValue) {
    skills.push(skillValue);

    const li = document.createElement('li');
    li.textContent = skillValue;
    document.getElementById('skills-list')?.appendChild(li);

    skillInput.value = '';  
  } else {
    alert('Please enter a skill before adding.');
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const menuToggle: any = document.getElementById('menuToggle');
  const menu: any = document.getElementById('menu');

  menuToggle.addEventListener('click', function () {
      menu.classList.toggle('active');
  });
});
