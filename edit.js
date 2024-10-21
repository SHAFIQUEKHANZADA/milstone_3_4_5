var _a, _b;
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profileInput = document.getElementById('pro');
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    var emailInput = document.getElementById('em');
    var phoneInput = document.getElementById('ph');
    var eduInput = document.getElementById('edu');
    var expInput = document.getElementById('experience');
    var skillsList = document.getElementById('skills-list');
    var skills = Array.from(skillsList.children).map(function (li) { return li.textContent || ''; }).join(', ');
    var profileFile = (_a = profileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profileURL = profileFile ? URL.createObjectURL(profileFile) : "";
    var outputHTML = "\n      <h2>Resume</h2>\n      ".concat(profileURL ? "<img src=\"".concat(profileURL, "\" alt=\"profile\" class=\"profile\">") : '', "\n       <p><strong><i class=\"fas fa-user\"></i> Name:</strong> ").concat(firstNameInput.value, " ").concat(lastNameInput.value, "</p>\n       <p><strong><i class=\"fas fa-envelope\"></i> Email:</strong> ").concat(emailInput.value, "</p>\n        <p><strong><i class=\"fas fa-phone\"></i> Phone:</strong> ").concat(phoneInput.value, "</p>\n    \n      <h3><i class=\"fas fa-graduation-cap\"></i> Education</h3>\n      <p>").concat(eduInput.value, "</p>\n\n       <h3><i class=\"fas fa-briefcase\"></i> Experience</h3>\n      <p>").concat(expInput.value, "</p>\n   <h3><i class=\"fas fa-code\"></i> Skills</h3>\n      <p>").concat(skills || 'No skills added', "</p>\n    </div>\n  ");
    var outputDiv = document.getElementById("output");
    if (outputDiv) {
        outputDiv.innerHTML = outputHTML;
    }
});
var skills = [];
(_b = document.getElementById('add-skill-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var _a;
    var skillInput = document.getElementById('skill-input');
    var skillValue = skillInput.value.trim();
    if (skillValue) {
        skills.push(skillValue);
        var li = document.createElement('li');
        li.textContent = skillValue;
        (_a = document.getElementById('skills-list')) === null || _a === void 0 ? void 0 : _a.appendChild(li);
        skillInput.value = ''; // Clear input field
    }
    else {
        alert('Please enter a skill before adding.');
    }
});
