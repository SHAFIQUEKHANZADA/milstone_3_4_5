var _a, _b;
// Prevent default form submission and handle resume generation
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Get form elements
    var profileInput = document.getElementById('pro');
    var firstElement = document.getElementById("first-name");
    var lastElement = document.getElementById("last-name");
    var emailElement = document.getElementById("em");
    var phoneElement = document.getElementById("ph");
    var eduElement = document.getElementById("edu");
    var expElement = document.getElementById("experience");
    var skillsList = document.getElementById("skills-list");
    // Check if all necessary elements are present
    if (profileInput && firstElement && lastElement && emailElement && phoneElement && eduElement && expElement && skillsList) {
        var namefirst = firstElement.value;
        var namelast = lastElement.value;
        var em = emailElement.value;
        var ph = phoneElement.value;
        var edu = eduElement.value;
        var experience = expElement.value;
        var skills = Array.from(skillsList.children).map(function (li) { return li.textContent || ''; }).join(', ');
        var proFl = (_a = profileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var proURL = proFl ? URL.createObjectURL(proFl) : "";
        var output = "\n    <div class=\"resume-container\">\n      <div class=\"mainDiv\">\n        <!-- Left side (Profile & Contact Info) -->\n        <div class=\"left-section\">\n          ".concat(proURL ? "<div class=\"profile-picture\"><img src=\"".concat(proURL, "\" alt=\"Profile Picture\"></div>") : '', "\n          <h2 class=\"name\">").concat(namefirst, " ").concat(namelast, "</h2>\n          <section class=\"contact-info\">\n            <ul>\n              <li><i class=\"fas fa-envelope\"></i> ").concat(em, "</li>\n              <li><i class=\"fas fa-phone\"></i> ").concat(ph, "</li>\n            </ul>\n          </section>\n        </div>\n\n        <!-- Right side (Experience, Education, Skills) -->\n        <div class=\"right-section\">\n          <section class=\"resume-section\">\n            <h3><i class=\"fas fa-briefcase\"></i> Work Experience</h3>\n            <p>").concat(experience || 'No work experience provided', "</p>\n          </section>\n          \n          <section class=\"resume-section\">\n            <h3><i class=\"fas fa-graduation-cap\"></i> Education</h3>\n            <p>").concat(edu || 'No education details provided', "</p>\n          </section>\n\n          <section class=\"resume-section\">\n            <h3><i class=\"fas fa-code\"></i> Skills</h3>\n            <p>").concat(skills || 'No skills added', "</p>\n          </section>\n        </div>\n      </div>\n    </div>\n  ");
        var elres = document.getElementById("output");
        if (elres) {
            elres.innerHTML = output;
        }
        else {
            console.error("The resume output element is missing");
        }
    }
    else {
        console.error("One or more element outputs are missing");
    }
});
// Handling Skills Addition
(_b = document.getElementById('add-skill-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var skillInput = document.getElementById('skill-input');
    var skillsList = document.getElementById("skills-list");
    if (skillInput && skillsList) {
        var skillValue = skillInput.value.trim();
        if (skillValue) {
            var li = document.createElement('li');
            li.textContent = skillValue;
            skillsList.appendChild(li);
            skillInput.value = '';
        }
        else {
            alert('Please enter a skill before adding.');
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menuToggle');
    var menu = document.getElementById('menu');
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
