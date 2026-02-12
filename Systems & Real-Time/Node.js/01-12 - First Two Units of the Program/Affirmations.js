const fs = require('fs');
const path = require('path');
const os = require('os');
const affirmations = [
    'This year is going to be my year!',
    'I am doing my best for her!',
    'One day I will be looking back at this and smiling',
    'I cant wait to see her smile!',
    'When I get that job it will be all worth it!'
];
// Define the path to the desktop
const desktopPath = path.join(os.homedir(), 'Desktop');

// Function to get a random affirmation and save it to a file on the desktop
function saveRandomAffirmationToDesktop() {
    // Pick a random affirmation from the array
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];

    // Define the new file path on the desktop (this will overwrite the file each time)
    const newFilePath = path.join(desktopPath, 'daily-affirmations.txt');
// Write the random affirmation to a new file on the desktop (this will overwrite it)
    fs.writeFile(newFilePath, randomAffirmation, (err) => {
        if (err) {
            console.error('Error writing the affirmation to the file:', err);
        } else {
            console.log('Random affirmation saved to:', newFilePath);
        }
    });
}

// Call the function to get and save a random affirmation
saveRandomAffirmationToDesktop();