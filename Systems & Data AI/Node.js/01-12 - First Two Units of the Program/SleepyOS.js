const os = require('os');

// Get OS type and convert 'Darwin' to 'macOS'
//const osType = os.type();

/*if (osType === 'Darwin') {
    osType = 'macOS';
}

console.log(`Operating System: ${osType}`);
console.log(`Platform: ${os.platform()}`);
// Convert bytes to gigabytes
console.log(`Total Memory: ${(os.totalmem() / 1e9).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / 1e9).toFixed(2)} GB`);
console.log(`Uptime: ${(os.uptime() / 1e5).toFixed(2)} Days`);*/
uptimeInSeconds = os.uptime();
// 7 days in seconds
const SECONDS_IN_A_WEEK = 60 * 60 * 24 * 7;
// Convert uptime to hours, minutes, and seconds
const hours = Math.floor(uptimeInSeconds / 3600);
const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
const seconds = Math.floor(uptimeInSeconds % 60);
// Write your code below
console.log(`Uptime: ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
if (uptimeInSeconds > SECONDS_IN_A_WEEK) {
    console.log("OS is very sleepy!")} else { console.log("OS is alright")
}