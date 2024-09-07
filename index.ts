// Function to toggle the visibility of the 'Skills' section
const toggleSkills = () => {
    // Get the 'Skills' section and button elements by their IDs
    const sectionSkill = document.getElementById('skills1');
    const toggleButton = document.getElementById('toggleSkills') as HTMLButtonElement;

    // Check if both elements exist
    if (sectionSkill && toggleButton) {
        // Get the computed style of the 'Skills' section to check its current display value
        const currentDisplay = window.getComputedStyle(sectionSkill).display;

        // Toggle the display property and button text based on the current display value
        if (currentDisplay === 'none') {
            sectionSkill.style.display = 'block'; // Show the 'Skills' section
            toggleButton.textContent = 'Hide Skills'; // Change button text to 'Hide Skills'
        } else {
            sectionSkill.style.display = 'none'; // Hide the 'Skills' section
            toggleButton.textContent = 'Show Skills'; // Change button text to 'Show Skills'
        }
    }
}

// Attach the event listener to the 'Toggle Skills' button
// When the button is clicked, the toggleSkills function will be executed
document.getElementById('toggleSkills')?.addEventListener('click', toggleSkills);


// Function to toggle the visibility of the 'Projects' section
const toggleProjects = () => {
    // Get the 'Projects' section and button elements by their IDs
    const projectsSections = document.getElementById('projects1');
    const toggleButton2 = document.getElementById('toggleProjects') as HTMLButtonElement;

    // Check if both elements exist
    if (projectsSections && toggleButton2) {
        // Get the computed style of the 'Projects' section to check its current display value
        const currentDisplay = window.getComputedStyle(projectsSections).display;

        // Toggle the display property and button text based on the current display value
        if (currentDisplay === 'none') {
            projectsSections.style.display = 'block'; // Show the 'Projects' section
            toggleButton2.textContent = 'Hide Projects'; // Change button text to 'Hide Projects'
        } else {
            projectsSections.style.display = 'none'; // Hide the 'Projects' section
            toggleButton2.textContent = 'Show Projects'; // Change button text to 'Show Projects'
        }
    }
}

// Attach the event listener to the 'Toggle Projects' button
// When the button is clicked, the toggleProjects function will be executed
document.getElementById('toggleProjects')?.addEventListener('click', toggleProjects);
