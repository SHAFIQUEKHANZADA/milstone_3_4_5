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

  if (profileInput && nameElement && nameElementsec && emailElement && phoneElement && eduElement && expElement && skillElement && userEl) {
    const name = nameElement.value;
    const namesec = nameElementsec.value;
    const em = emailElement.value;
    const ph = phoneElement.value;
    const edu = eduElement.value;
    const experience = expElement.value;
    const skills = skillElement.value;
    const useName = userEl.value;

    const unq = `resume/${useName.replace(/\s+/g, '_')}_cv.html`;

    // Handle profile picture
    const proFl = profileInput.files?.[0];
    const proURL = proFl ? URL.createObjectURL(proFl) : "";

    // Corrected template for image
    const output = `
      <h2>Resume</h2>
      ${proURL ? `<img src="${proURL}" alt="profile" class="profile">` : ''}
       <p><strong><i class="fas fa-user"></i> Name:</strong> ${name} ${namesec}</p>
       <p><strong><i class="fas fa-envelope"></i> Email:</strong>${em}</p>
        <p><strong><i class="fas fa-phone"></i> Phone:</strong> ${ph}</p>
    
      <h3><i class="fas fa-graduation-cap"></i> Education</h3>
      <p>${edu}</p>

       <h3><i class="fas fa-briefcase"></i> Experience</h3>
      <p>${experience}</p>
   <h3><i class="fas fa-code"></i> Skills</h3>
      <p>${skills}</p>
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
