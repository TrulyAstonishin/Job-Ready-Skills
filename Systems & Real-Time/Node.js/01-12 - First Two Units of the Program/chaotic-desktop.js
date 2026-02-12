const path = require('path');
const fullPath= path.join('users','Shawani','Downloads');
const files = ['Untitled.png','Screenshot_20260102_234701_Gallery.jpg','ef35c6e494206594541e3f2659bee25d.jpg'];
const imageExtensions = ['.png', '.jpg', '.jpeg'];
// Find the first image file
const firstImage = files.find(file => imageExtensions.includes(path.extname(file).toLowerCase()));

if (firstImage) {
    console.log('First image file found:', path.join(fullPath, firstImage));
} else {
    console.log('No image files found!');
}