var _a, _b;
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profileInput = document.getElementById('pro');
    var nameElement = document.getElementById("first-name");
    var nameElementsec = document.getElementById("last-name");
    var emailElement = document.getElementById("em");
    var phoneElement = document.getElementById("ph");
    var eduElement = document.getElementById("edu");
    var expElement = document.getElementById("experience");
    var userEl = document.getElementById("username");
    if (profileInput && nameElement && nameElementsec && emailElement && phoneElement && eduElement && expElement && userEl) {
        var name_1 = nameElement.value;
        var namesec = nameElementsec.value;
        var em = emailElement.value;
        var ph = phoneElement.value;
        var edu = eduElement.value;
        var experience = expElement.value;
        var useName = userEl.value;
        // Collecting skills from the skills list
        var skillsList = document.getElementById("skills-list");
        var skills = Array.from(skillsList.children).map(function (li) { return li.textContent; }).join(", ") || "No skills added.";
        var unq_1 = "resume/".concat(useName.replace(/\s+/g, '_'), "_cv.html");
        // Handle profile picture
        var proFl = (_a = profileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var proURL = proFl ? URL.createObjectURL(proFl) : "";
        var output = "\n        <div class=\"resume-container\">\n      ".concat(proURL ? "<img src=\"".concat(proURL, "\" alt=\"profile\" class=\"profile\">") : '', "\n\n      <div class=\"info-section\">\n        <p><strong><i class=\"fas fa-user\"></i> Name:</strong> ").concat(name_1, " ").concat(namesec, "</p>\n        <p><strong><i class=\"fas fa-envelope\"></i> Email:</strong> ").concat(em, "</p>\n        <p><strong><i class=\"fas fa-phone\"></i> Phone:</strong> ").concat(ph, "</p>\n      </div>\n\n      <h3><i class=\"fas fa-graduation-cap\"></i> Education</h3>\n      <p>").concat(edu, "</p>\n\n      <h3><i class=\"fas fa-briefcase\"></i> Experience</h3>\n      <p>").concat(experience, "</p>\n\n      <h3><i class=\"fas fa-code\"></i> Skills</h3>\n      <p>").concat(skills || 'No skills added', "</p>\n    </div>\n    ");
        var elres = document.getElementById("output");
        if (elres) {
            elres.innerHTML = output;
            var buttonContainer = document.getElementById("button-container");
            if (buttonContainer) {
                buttonContainer.innerHTML = '';
                var downloadPdfBtn = document.createElement('button');
                downloadPdfBtn.textContent = 'Download Resume';
                downloadPdfBtn.addEventListener('click', function () { return downloadResumeAsPDF(); });
                var shareLinkBtn = document.createElement('button');
                shareLinkBtn.textContent = 'Share Resume';
                shareLinkBtn.addEventListener('click', function () {
                    var shareableUrl = window.location.origin + '/' + unq_1;
                    navigator.clipboard.writeText(shareableUrl).then(function () {
                        alert('Resume link copied to clipboard!');
                    });
                });
                buttonContainer.appendChild(downloadPdfBtn);
                buttonContainer.appendChild(shareLinkBtn);
                makeEdit();
            }
        }
    }
    else {
        console.error("One or more element outputs are missing");
    }
});
function makeEdit() {
    var editElmt = document.querySelectorAll('.editable');
    editElmt.forEach(function (elm) {
        elm.addEventListener('click', function () {
            var _a;
            var currentEl = elm;
            var currentValue = currentEl.textContent || "";
            if (currentEl.tagName === "P" || currentEl.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing', 'input');
                input_1.addEventListener('blur', function () {
                    currentEl.textContent = input_1.value;
                    currentEl.style.display = 'inline';
                    input_1.remove();
                });
                currentEl.style.display = 'none';
                (_a = currentEl.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentEl);
                input_1.focus();
            }
        });
    });
}
function downloadResumeAsPDF() {
    var output = document.getElementById("output");
    if (output) {
        var pdf = new jsPDF();
        pdf.html(output, {
            callback: function (doc) {
                doc.save('resume.pdf');
            }
        });
    }
}
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
