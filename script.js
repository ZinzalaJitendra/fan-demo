// Function to control fan speed
function SpeedControl(speed) {
    const fanBox = document.getElementById('fan-box');
    
    // Remove all speed-related classes
    fanBox.classList.remove('spin', 'speed-1', 'speed-2', 'speed-3');
    
    if (speed === 0) {
        // No additional class for STOP; fan remains still
    } else {
        // Add the spin class and the corresponding speed class
        fanBox.classList.add('spin');
        fanBox.classList.add(`speed-${speed}`);
    }
}