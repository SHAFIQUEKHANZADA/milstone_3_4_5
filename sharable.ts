document.getElementById("form")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const profileInput = document.getElementById('pro') as HTMLInputElement;
  const nameElement = document.getElementById("first-name") as HTMLInputElement;
  const nameElementsec = document.getElementById("last-name") as HTMLInputElement;
  const emailElement = document.getElementById("em") as HTMLInputElement;
  const phoneElement = document.getElementById("ph") as HTMLInputElement;
  const eduElement = document.getElementById("edu") as HTMLInputElement;
  const expElement = document.getElementById("experience") as HTMLInputElement;
  const skillElement = document.getElementById("skills") as HTMLInputElement;
  const userEl = document.getElementById("username") as HTMLInputElement;
  const linkLinkden = document.getElementById("link") as HTMLInputElement;
  const linkPort = document.getElementById("link") as HTMLInputElement;

  if (profileInput && nameElement && nameElementsec && emailElement && phoneElement && eduElement && expElement && skillElement && userEl) {
    const name = nameElement.value;
    const namesec = nameElementsec.value;
    const em = emailElement.value;
    const ph = phoneElement.value;
    const edu = eduElement.value;
    const experience = expElement.value;
    const skills = skillElement.value;
    const useName = userEl.value;
    const linkdin = linkLinkden.value;
    const portfolio = linkPort.value;

    const unq = `resume/${useName.replace(/\s+/g, '_')}_cv.html`;

    // Handle profile picture
    const proFl = profileInput.files?.[0];
    const proURL = proFl ? URL.createObjectURL(proFl) : "";

    // Corrected template for image
    const output = `
<div class="resume-container">
  <div class="mainDiv">
     <!-- Left side (Profile & Contact Info) -->
    <div class="left-section">
      ${proURL ? `<div class="profile-picture"><img src="${proURL}" alt="Profile Picture"></div>` : ''}
      <h2 class="name">${name} ${namesec}</h2>
      <section class="contact-info">
        <ul>
          <li><i class="fas fa-envelope"></i> ${em}</li>
          <li><i class="fas fa-phone"></i> ${ph}</li>
        </ul>
      </section>

      <section class="profile-link">
        <h3>Links: </h3>
        <div class="links">
          <p class="linkIcon"><i class="fa-brands fa-linkedin"></i>
          <a href="${linkdin}" target="_blank">${linkdin ? linkdin : 'No link provided'}</a>
          </p>
          <p class="linkIcon"><i class="fa-solid fa-link"></i> 
          <a href="${portfolio}" target="_blank">${portfolio ? portfolio : 'No link provided'}</a>
          </p>
        </div>
      </section>

    <section class="skill-section">
  <h3><i class="fas fa-code"></i> Skills</h3> 
  <div>
  ${skills
    ? `<ul class="skills-list">${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>`
    : 'No skills added'
  }
    </div>
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

  
    </div>
  </div>
</div>
`;




    function generateList(): void {
      const inputElement = document.getElementById('skills') as HTMLTextAreaElement;
      const ulElement = document.getElementById('skillsList') as HTMLUListElement;

      if (inputElement && ulElement) {
        const input = inputElement.value;
        const items = input.split(',').map(item => item.trim());
        ulElement.innerHTML = '';

        items.forEach(item => {
          if (item) { // Check for non-empty items
            const li = document.createElement('li');
            li.textContent = item;
            ulElement.appendChild(li);
          }
        });
      } else {
        console.error('Input element or UL element not found');
      }
    }


    const elres = document.getElementById("output");
    if (elres) {
      elres.innerHTML = output;

      const buttonContainer = document.getElementById("button-container");
      if (buttonContainer) {
        buttonContainer.innerHTML = '';

        const downloadPdfBtn = document.createElement('button');
        downloadPdfBtn.textContent = 'Download Resume';
        downloadPdfBtn.addEventListener('click', () => downloadResumeAsPDF());

        const shareLinkBtn = document.createElement('button');
        shareLinkBtn.textContent = 'Share Resume';
        shareLinkBtn.addEventListener('click', () => {
          const shareableUrl = window.location.origin + '/' + unq;
          navigator.clipboard.writeText(shareableUrl).then(() => {
            alert('Resume link copied to clipboard!');
          });
        });

        buttonContainer.appendChild(downloadPdfBtn);
        buttonContainer.appendChild(shareLinkBtn);

        makeEdit();
      }
    }
  } else {
    console.error("One or more element outputs are missing");
  }
});

function makeEdit() {
  const editElmt = document.querySelectorAll('.editable');
  editElmt.forEach(elm => {
    elm.addEventListener('click', function () {
      const currentEl = elm as HTMLElement;
      const currentValue = currentEl.textContent || "";

      if (currentEl.tagName === "P" || currentEl.tagName === "SPAN") {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentValue;
        input.classList.add('editing', 'input');

        input.addEventListener('blur', function () {
          currentEl.textContent = input.value;
          currentEl.style.display = 'inline';
          input.remove();
        });

        currentEl.style.display = 'none';
        currentEl.parentNode?.insertBefore(input, currentEl);
        input.focus();
      }
    });
  });
}

function downloadResumeAsPDF() {
  const resumeElement = document.getElementById("output");
  const options = {
    margin: 1,
    filename: 'Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  if (resumeElement) {
    // Ensure html2pdf is included
    (window as any).html2pdf().from(resumeElement).set(options).save();
  } else {
    console.error('Resume content is missing.');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle: any = document.getElementById('menuToggle');
  const menu: any = document.getElementById('menu');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});
