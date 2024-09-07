// Check for microphone access and initialize voice recognition
navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (stream) {
        console.log('Microphone access granted');
        stream.getTracks().forEach(track => track.stop()); // Stop stream to free microphone

        // Initialize voice recognition
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.continuous = true;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onstart = function () {
                document.getElementById('status').textContent = 'Voice recognition started.';
            };

            recognition.onerror = function (event) {
                document.getElementById('status').textContent = `Error: ${event.error}`;
                console.error('Voice recognition error:', event.error);
                if (event.error === 'not-allowed') {
                    document.getElementById('status').textContent = 'Microphone access is denied. Please check your browser settings.';
                }
                // Restart after 5 seconds
                setTimeout(() => {
                    try {
                        recognition.start();
                    } catch (error) {
                        console.error('Failed to restart recognition:', error);
                    }
                }, 5000);
            };

            recognition.onend = function () {
                document.getElementById('status').textContent = 'Voice recognition ended. Restarting...';
                setTimeout(() => {
                    try {
                        recognition.start();
                    } catch (error) {
                        console.error('Failed to restart recognition:', error);
                    }
                }, 5000);
            };

            recognition.onresult = function (event) {
                const command = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
                document.getElementById('status').textContent = `Recognized command: ${command}`;
                console.log('Recognized command:', command);

                // Page navigation or content loading based on voice command
                switch (true) {
                    case command.includes('home'):
                        window.location.href = 'index.html';
                        break;
                    case command.includes('entertainment'):
                        window.location.href = 'entertainment.html';
                        break;
                    case command.includes('map'):
                        window.location.href = 'map.html';
                        break;
                    case command.includes('weather update'):
                        window.location.href = 'weather.html';
                        break;
                    case command.includes('traffic alert'):
                        window.location.href = 'traffic.html';
                        break;
                    case command.includes('fuel station locator'):
                        window.location.href = 'fuel.html';
                        break;
                    case command.includes('language translate assistance'):
                        window.location.href = 'translate.html';
                        break;
                    case command.includes('voice activated control'):
                        window.location.href = 'voice.html';
                        break;
                    case command.includes('customizable dashboard'):
                        window.location.href = 'dashboard.html';
                        break;
                    case command.includes('about'):
                        window.location.href = 'about.html';
                        break;
                    case command.includes('news'):
                        window.location.href = 'news.html';
                        break;
                    case command.includes('novel'):
                        window.location.href = 'novel.html';
                        break;
                    case command.includes('music'):
                        window.location.href = 'music.html';
                        break;
                    case command.includes('movie'):
                        window.location.href = 'movie.html';
                        break;
                    default:
                        document.getElementById('status').textContent = 'Command not recognized. Try again.';
                }
            };

            // Start the recognition process
            try {
                recognition.start();
            } catch (error) {
                console.error('Failed to start recognition:', error);
            }
        } else {
            document.getElementById('status').textContent = 'Speech recognition not supported in this browser.';
        }
    })
    .catch(function (error) {
        console.error('Microphone access error:', error);
        document.getElementById('status').textContent = 'Microphone access denied. Please allow microphone access.';
    });

// Function to start voice search
function startVoiceSearch() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.onresult = function (event) {
            const query = event.results[0][0].transcript;
            document.getElementById('search-input').value = query;
            searchYouTube();  // Trigger search after voice input
        };
        recognition.start();
    } else {
        alert('Speech recognition is not supported in this browser.');
    }
}

// Event listener for Enter key to trigger search
document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchYouTube();
    }
});

// Event listener for search button to trigger search
document.getElementById('search-button').addEventListener('click', function () {
    searchYouTube();
});

// Example function to search YouTube (add actual search logic)
function searchYouTube() {
    const query = document.getElementById('search-input').value;
    console.log(`Searching YouTube for: ${query}`);
}

// Voice command handling (map page specific)
function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onresult = function (event) {
        const command = event.results[0][0].transcript.toLowerCase();
        const sourceInput = document.getElementById('source');
        const destinationInput = document.getElementById('destination');

        if (command.includes('source')) {
            sourceInput.value = command.replace('source', '').trim();
        } else if (command.includes('destination')) {
            destinationInput.value = command.replace('destination', '').trim();
        } else if (command.includes('route') || command.includes('find')) {
            findRoute(); // Ensure this function is defined elsewhere in your code
        }
    };

    recognition.start();
}

// Optional: Start voice recognition automatically (comment this out if you want to trigger manually)
startVoiceRecognition();




