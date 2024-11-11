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
    var linkLinkden = document.getElementById("link");
    var linkPort = document.getElementById("link");
    var skills = Array.from(skillsList.children).map(function (li) { return li.textContent || ''; }).join(', ');
    var profileFile = (_a = profileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profileURL = profileFile ? URL.createObjectURL(profileFile) : "";
    var outputHTML = " \n    <div class=\"resume-container\">\n      <div class=\"mainDiv\">\n        <!-- Left side (Profile & Contact Info) -->\n        <div class=\"left-section\">\n          ".concat(profileURL ? "<div class=\"profile-picture\"><img src=\"".concat(profileURL, "\" alt=\"Profile Picture\"></div>") : '', "\n          <h2 class=\"name\">").concat(firstNameInput.value, " ").concat(lastNameInput.value, "</h2>\n          <section class=\"contact-info\">\n            <ul>\n              <li><i class=\"fas fa-envelope\"></i> ").concat(emailInput.value, "</li>\n              <li><i class=\"fas fa-phone\"></i> ").concat(phoneInput.value, "</li>\n            </ul>\n          </section>\n\n            <section class=\"profile-link\">\n            <h3>Links: </h3>\n            <div class=\"links\">\n            <p class=\"linkIcon\"><i class=\"fa-brands fa-linkedin\"></i>\n            <a href=\"").concat(linkLinkden.value, "\" target=\"_blank\">").concat(linkLinkden.value ? linkLinkden.value : 'No link provided', "</a>\n             </p>\n            <p class=\"linkIcon\"><i class=\"fa-solid fa-link\"></i> \n            <a href=\"").concat(linkPort.value, "\" target=\"_blank\">").concat(linkPort.value ? linkPort.value : 'No link provided', "</a>\n            </p>\n            </div>\n          </section>\n        </div>\n\n        <!-- Right side (Experience, Education, Skills) -->\n        <div class=\"right-section\">\n          <section class=\"resume-section\">\n            <h3><i class=\"fas fa-briefcase\"></i> Work Experience</h3>\n            <p>").concat(expInput.value || 'No work experience provided', "</p>\n          </section>\n          \n          <section class=\"resume-section\">\n            <h3><i class=\"fas fa-graduation-cap\"></i> Education</h3>\n            <p>").concat(eduInput.value || 'No education details provided', "</p>\n          </section>\n\n          <section class=\"resume-section\">\n            <h3><i class=\"fas fa-code\"></i> Skills</h3>\n            <p>").concat(skills || 'No skills added', "</p>\n          </section>\n        </div>\n      </div>\n    </div>\n  ");
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
        skillInput.value = '';
    }
    else {
        alert('Please enter a skill before adding.');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menuToggle');
    var menu = document.getElementById('menu');
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
