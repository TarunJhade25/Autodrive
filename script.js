// Sidebar toggle function
document.addEventListener('DOMContentLoaded', () => {
    // Function to toggle sidebar
    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const toggleBtn = document.querySelector('#tgl-btn');

        // Toggle the sidebar's active class
        sidebar.classList.toggle('active');

        // Adjust the toggle button position
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

    // Add event listener to the toggle button
    const toggleButton = document.querySelector('#tgl-btn');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleSidebar);
    } else {
        console.error('Toggle button not found');
    }
});

const box = document.getElementById("main-content");
const moveBtn = document.getElementById("tgl-btn");

moveBtn.addEventListener("click", () => {
    const currentMargin = box.style.paddingLeft;
    const currentMargin1 = box.style.paddingRight;

    //    box.style.marginLeft = "350px";
    if (currentMargin === "0px" && currentMargin1 === "0px" || currentMargin === "" && currentMargin1 === "") {
        box.style.paddingLeft = "300px";
        box.style.paddingRight = "300px";
    } else {
        box.style.paddingLeft = "0px";
        box.style.paddingRigjt = "0px";
    }

});







//entertainment*//
// Function to load dynamic content based on selection or voice command









/*news*/
// Sidebar toggle function
// function toggleSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.classList.toggle('active');
// }

// Open virtual keyboard
function openKeyboard() {
// Assuming you are using a touch screen or mobile device
// The keyboard will open automatically when the input is focused
}


// Perform the search using the input value
function searchNews(query) {
    const iframe = document.querySelector('.news-content iframe');
    iframe.src = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

/*novel*/
// Function to search YouTube using text input
function searchYouTube() {
    const query = document.getElementById('search-input').value;
    if (query) {
        const searchQuery = encodeURIComponent(query + " novel audiobook");
        const iframeHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed?listType=search&list=${searchQuery}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        `;
        document.getElementById('video-list').innerHTML = iframeHTML;
    } else {
        alert("Please enter a search query.");
    }
}

// Function to open the keyboard on focus (useful for touch devices)
function openKeyboard() {
    document.getElementById('search-input').focus();
}



// Event listener for search button to trigger search
document.getElementById('search-button').addEventListener('click', function() {
    searchYouTube();
});




/*music*/
// Function to search YouTube using text input
function searchYouTube() {
    const query = document.getElementById('search-input').value;
    if (query) {
        const searchQuery = encodeURIComponent(query + " music");
        const iframeHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed?listType=search&list=${searchQuery}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        `;
        document.getElementById('video-list').innerHTML = iframeHTML;
    } else {
        alert("Please enter a search query.");
    }
}

// Function to open the keyboard on focus (useful for touch devices)
function openKeyboard() {
    document.getElementById('search-input').focus();
}

// Voice search functionality
function startVoiceSearch() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.onresult = function(event) {
            const query = event.results[0][0].transcript;
            document.getElementById('search-input').value = query;
            searchYouTube();  // Trigger search after voice input
        };
        recognition.start();
    } else {
        alert('Speech recognition is not supported in this browser.');
    }
}





/*mpvei*/
// Function to search YouTube using text input
function searchYouTube() {
    const query = document.getElementById('search-input').value;
    if (query) {
        const searchQuery = encodeURIComponent(query + " music");
        const iframeHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed?listType=search&list=${searchQuery}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        `;
        document.getElementById('video-list').innerHTML = iframeHTML;
    } else {
        alert("Please enter a search query.");
    }
}

// Function to open the keyboard on focus (useful for touch devices)
function openKeyboard() {
    document.getElementById('search-input').focus();
}

// Voice search functionality




/*map*/
// Function to simulate finding a route
function findRoute() {
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const result = document.getElementById('route-info');

// Simple validation
if (!source || !destination) {
    result.textContent = 'Please enter both source and destination.';
    return;
}

// Simulate route calculation (static values)
// const estimatedTime = '20 minutes'; // Static value for simplicity

// Update the result section
    result.innerHTML = `
        <h2>Route Details</h2>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Estimated Time:</strong> ${estimatedTime}</p>
    `;
}



/*weather */
// Function to check weather based on user input
function checkWeather() {
    const location = document.getElementById('location').value.toLowerCase();
    const weatherDescription = document.getElementById('weather-description');

    // Static weather data for demo purposes
  

// Check if location is in weatherData
    if (weatherData[location]) {
        weatherDescription.textContent = `The weather in ${location.charAt(0).toUpperCase() + location.slice(1)} is ${weatherData[location]}.`;
    } else {
        weatherDescription.textContent = 'Weather information not available for this location.';
    }
}


// Optional: Use keypress event to start weather check
document.getElementById('location').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkWeather();
    }
});





/*trafficalert*/
document.addEventListener('DOMContentLoaded', () => {
    const trafficMessage = document.getElementById('traffic-message');

    // Simulate a delay to check traffic
    setTimeout(() => {
        const trafficJam = Math.random() < 0.5; // Random traffic condition
        
        if (trafficJam) {
            trafficMessage.textContent = 'Traffic jam detected near your destination!';
        } else {
            trafficMessage.textContent = 'No traffic on your route!';
        }
    }, 3000); // Simulate 3 seconds delay for traffic check
});


/*fuel station locator*/
// fuel.js

// Function to toggle the sidebar
// function toggleSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     const content = document.querySelector('.content');

//     if (sidebar.style.transform === "translateX(-250px)" || sidebar.style.transform === "") {
//         sidebar.style.transform = "translateX(0)";
//         content.style.marginLeft = "250px";
//     } else {
//         sidebar.style.transform = "translateX(-250px)";
//         content.style.marginLeft = "0";
//     }
// }

// Function to search for fuel stations (dummy data used here)
// function searchLocation() {
//     const location = document.getElementById('location-input').value;
//     const result = document.getElementById('result');
//     const fuelStations = document.getElementById('fuel-stations');

    // Dummy data
//     const stations = [
//         { name: 'Fuel Station A', distance: '1.5 km', address: '123 Main St' },
//         { name: 'Fuel Station B', distance: '3.2 km', address: '456 Elm St' },
//         { name: 'Fuel Station C', distance: '4.8 km', address: '789 Maple St' }
//     ];

//     result.innerHTML = `
//         <p id="live-location">Live Location: ${location}</p>
//         <p id="weather-info">Weather: Sunny, 25°C</p>
//     `;

//     fuelStations.innerHTML = `
//         <h2>Nearby Fuel Stations</h2>
//         <ul>
//             ${stations.map(station => `
//                 <li>
//                     <strong>${station.name}</strong><br>
//                     Distance: ${station.distance}<br>
//                     Address: ${station.address}
//                 </li>
//             `).join('')}
//         </ul>
//     `;
// }

// Voice command handling
// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// recognition.lang = 'en-US';

// recognition.onresult = function(event) {
//     const command = event.results[0][0].transcript.toLowerCase();

//     if (command.includes('search')) {
//         searchLocation();
//     }
// };

// Start voice recognition
// recognition.start();





