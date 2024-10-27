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
        var output = "\n          <div class=\"resume-container\">\n      ".concat(proURL ? "<img src=\"".concat(proURL, "\" alt=\"profile\" class=\"profile\">") : '', "\n\n      <div class=\"info-section\">\n        <p><strong><i class=\"fas fa-user\"></i> Name:</strong> ").concat(namefirst, " ").concat(namelast, "</p>\n        <p><strong><i class=\"fas fa-envelope\"></i> Email:</strong> ").concat(em, "</p>\n        <p><strong><i class=\"fas fa-phone\"></i> Phone:</strong> ").concat(ph, "</p>\n      </div>\n\n      <h3><i class=\"fas fa-graduation-cap\"></i> Education</h3>\n      <p>").concat(edu, "</p>\n\n      <h3><i class=\"fas fa-briefcase\"></i> Experience</h3>\n      <p>").concat(experience, "</p>\n\n      <h3><i class=\"fas fa-code\"></i> Skills</h3>\n      <p>").concat(skills || 'No skills added', "</p>\n    </div>\n      ");
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
