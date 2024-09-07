// Function to dynamically load pages
function loadPage(page) {
    const content = document.querySelector('.content'); // Select the content area
    fetch(page)
        .then(response => response.text()) // Fetch the content of the page
        .then(data => {
            content.innerHTML = data; // Insert the content into the content area
        })
        .catch(error => console.error('Error loading page:', error)); // Handle errors
}

// Voice greeting on page load
window.onload = function() {
    const greeting = new SpeechSynthesisUtterance("Hello, DriveWave and welcome to the home page.");
    window.speechSynthesis.speak(greeting); // Speak the greeting message
};

// Toggle sidebar function
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar'); // Select the sidebar
    const content = document.querySelector('.content'); // Select the content area

    // Toggle sidebar visibility
    if (sidebar.style.display === "block" || sidebar.style.display === "") {
        sidebar.style.display = "none"; // Hide sidebar
        content.style.marginLeft = "0"; // Adjust content margin
    } else {
        sidebar.style.display = "block"; // Show sidebar
        content.style.marginLeft = "250px"; // Adjust content margin according to sidebar width
    }
}

// Smooth scrolling to sections
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        const target = document.querySelector(this.getAttribute('href')); // Get the target section

        if (target) {  // Check if target exists
            target.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling effect
                block: 'start' // Align target to the top of the viewport
            });
        }
    });
});
