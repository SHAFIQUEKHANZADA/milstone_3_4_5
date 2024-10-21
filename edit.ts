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

  const skills = Array.from(skillsList.children).map(li => li.textContent || '').join(', ');

  const profileFile = profileInput.files?.[0];
  const profileURL = profileFile ? URL.createObjectURL(profileFile) : "";

  const outputHTML = `
      <h2>Resume</h2>
      ${profileURL ? `<img src="${profileURL}" alt="profile" class="profile">` : ''}
       <p><strong><i class="fas fa-user"></i> Name:</strong> ${firstNameInput.value} ${lastNameInput.value}</p>
       <p><strong><i class="fas fa-envelope"></i> Email:</strong> ${emailInput.value}</p>
        <p><strong><i class="fas fa-phone"></i> Phone:</strong> ${phoneInput.value}</p>
    
      <h3><i class="fas fa-graduation-cap"></i> Education</h3>
      <p>${eduInput.value}</p>

       <h3><i class="fas fa-briefcase"></i> Experience</h3>
      <p>${expInput.value}</p>
   <h3><i class="fas fa-code"></i> Skills</h3>
      <p>${skills || 'No skills added'}</p>
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
