var _a, _b;
// Function to toggle the visibility of the 'Skills' section
var toggleSkills = function () {
    // Get the 'Skills' section and button elements by their IDs
    var sectionSkill = document.getElementById('skills1');
    var toggleButton = document.getElementById('toggleSkills');
    // Check if both elements exist
    if (sectionSkill && toggleButton) {
        // Get the computed style of the 'Skills' section to check its current display value
        var currentDisplay = window.getComputedStyle(sectionSkill).display;
        // Toggle the display property and button text based on the current display value
        if (currentDisplay === 'none') {
            sectionSkill.style.display = 'block'; // Show the 'Skills' section
            toggleButton.textContent = 'Hide Skills'; // Change button text to 'Hide Skills'
        }
        else {
            sectionSkill.style.display = 'none'; // Hide the 'Skills' section
            toggleButton.textContent = 'Show Skills'; // Change button text to 'Show Skills'
        }
    }
};
// Attach the event listener to the 'Toggle Skills' button
// When the button is clicked, the toggleSkills function will be executed
(_a = document.getElementById('toggleSkills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', toggleSkills);
// Function to toggle the visibility of the 'Projects' section
var toggleProjects = function () {
    // Get the 'Projects' section and button elements by their IDs
    var projectsSections = document.getElementById('projects1');
    var toggleButton2 = document.getElementById('toggleProjects');
    // Check if both elements exist
    if (projectsSections && toggleButton2) {
        // Get the computed style of the 'Projects' section to check its current display value
        var currentDisplay = window.getComputedStyle(projectsSections).display;
        // Toggle the display property and button text based on the current display value
        if (currentDisplay === 'none') {
            projectsSections.style.display = 'block'; // Show the 'Projects' section
            toggleButton2.textContent = 'Hide Projects'; // Change button text to 'Hide Projects'
        }
        else {
            projectsSections.style.display = 'none'; // Hide the 'Projects' section
            toggleButton2.textContent = 'Show Projects'; // Change button text to 'Show Projects'
        }
    }
};
// Attach the event listener to the 'Toggle Projects' button
// When the button is clicked, the toggleProjects function will be executed
(_b = document.getElementById('toggleProjects')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', toggleProjects);
