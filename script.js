// The Time Engine
function updateClock() {
    const now = new Date(); // Grabs your computer's live time
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert 24-hour time to 12-hour time
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    // Add a zero if the minutes are under 10 (e.g., 12:05 instead of 12:5)
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    // Format the final string
    const timeString = hours + ':' + minutes + ' ' + ampm;
    
    // Inject it into the HTML Mantle Clock
    document.getElementById('mantle-clock').innerText = timeString;
}

// Run the clock immediately, then update it every 1 second (1000 milliseconds)
updateClock();
setInterval(updateClock, 1000);
