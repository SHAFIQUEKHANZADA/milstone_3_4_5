document.getElementById("form")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const profileInput = document.getElementById('pro') as HTMLInputElement;
  const nameElement = document.getElementById("first-name") as HTMLInputElement;
  const nameElementsec = document.getElementById("last-name") as HTMLInputElement;
  const emailElement = document.getElementById("em") as HTMLInputElement;
  const phoneElement = document.getElementById("ph") as HTMLInputElement;
  const eduElement = document.getElementById("edu") as HTMLTextAreaElement;
  const expElement = document.getElementById("experience") as HTMLTextAreaElement;
  const userEl = document.getElementById("username") as HTMLInputElement;

  if (profileInput && nameElement && nameElementsec && emailElement && phoneElement && eduElement && expElement && userEl) {
    const name = nameElement.value;
    const namesec = nameElementsec.value;
    const em = emailElement.value;
    const ph = phoneElement.value;
    const edu = eduElement.value;
    const experience = expElement.value;
    const useName = userEl.value;

    // Collecting skills from the skills list
    const skillsList = document.getElementById("skills-list") as HTMLUListElement;
    const skills = Array.from(skillsList.children).map(li => li.textContent).join(", ") || "No skills added.";

    const unq = `resume/${useName.replace(/\s+/g, '_')}_cv.html`;

    // Handle profile picture
    const proFl = profileInput.files?.[0];
    const proURL = proFl ? URL.createObjectURL(proFl) : "";

    const output = `
        <div class="resume-container">
      ${proURL ? `<img src="${proURL}" alt="profile" class="profile">` : ''}

      <div class="info-section">
        <p><strong><i class="fas fa-user"></i> Name:</strong> ${name} ${namesec}</p>
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
  const output = document.getElementById("output");
  if (output) {
    const pdf = new jsPDF();
    pdf.html(output, {
      callback: function (doc: any) {
        doc.save('resume.pdf');
      }
    });
  }
}

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