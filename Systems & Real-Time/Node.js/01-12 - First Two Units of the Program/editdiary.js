const fs = require('fs');
fs.unlink('seventh-grade.txt', (err) => {
    if (err) {
    console.error("Error deleting file", err);
    return;
    }
    console.log('File has been deleted');
});