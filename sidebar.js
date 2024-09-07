// Sidebar toggle function
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
    
    // Update the position of the menu button based on the sidebar state
    const toggleBtn = document.querySelector('.toggle-btn');
    if (sidebar.classList.contains('active')) {
        toggleBtn.style.position = 'absolute';
        toggleBtn.style.top = '20px';
        toggleBtn.style.right = '20px';
    } else {
        toggleBtn.style.position = 'fixed';
        toggleBtn.style.top = '20px';
        toggleBtn.style.left = '20px';
    }
}

// Voice recognition implementation
recognition.onresult = (event) => {
    const command = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
    document.getElementById('status').textContent = `Recognized command: ${command}`;
    console.log('Voice command:', command);

    // Define the page navigation based on voice command
    const pages = {
        'home': '#home',
        'entertainment': '#entertainment',
        'map': '#map',
        'weather update': '#weather',
        'traffic alert': '#traffic',
        'fuel station locator': '#fuel',
        'language translate assistance': '#translate',
        'voice activated control': '#voice',
        'customizable dashboard': '#dashboard',
        'about': '#about'
    };

    // Convert keys to lowercase for case-insensitive matching
    const lowerCasePages = Object.fromEntries(Object.entries(pages).map(([key, value]) => [key.toLowerCase(), value]));

    // Check if the command matches any page
    for (const [key, value] of Object.entries(lowerCasePages)) {
        if (command.includes(key)) {
            window.location.href = value; // Navigate to the page
            return;
        }
    }

    // Default action if no specific command is recognized
    if (command === '' || command.includes('hello drive wave')) {
        window.location.href = '#home'; // Default to home page
    }
};



const box = document.getElementById("tgl-btn");
const moveBtn = document.getElementById("move-btn");

