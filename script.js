// Image sets
const imageSets = [
    ['images/destruction1.png', 'images/destruction2.png', 'images/destruction3.png', 'images/destruction4.png'], // Stories
    ['images/nature1.png', 'images/nature2.png', 'images/nature3.png', 'images/nature4.png'],
    ['images/space1.png', 'images/space2.png', 'images/space3.png', 'images/space4.png'],
    ['images/shipwreck1.png', 'images/shipwreck2.png', 'images/shipwreck3.png', 'images/shipwreck4.png'],
    ['images/bookstore1.png', 'images/bookstore2.png', 'images/bookstore3.png', 'images/bookstore4.png'],
    ['images/leftbehind1.png', 'images/leftbehind2.png', 'images/leftbehind3.png', 'images/leftbehind4.png'],
    ['images/lamp1.png', 'images/lamp2.png', 'images/lamp3.png', 'images/lamp4.png'],
    ['images/indiana1.png', 'images/indiana2.png', 'images/indiana3.png', 'images/indiana4.png'],
    ['images/doorway1.png', 'images/doorway2.png', 'images/doorway3.png', 'images/doorway4.png'],
    ['images/alice1.png', 'images/alice2.png', 'images/alice3.png', 'images/alice4.png'],
    ['images/jungle1.png', 'images/jungle2.png', 'images/jungle3.png', 'images/jungle4.png'],
    ['images/mermaid1.png', 'images/mermaid2.png', 'images/mermaid3.png', 'images/mermaid4.png']
];

const landscapes = [
    'images/landscape1.png',
    'images/landscape2.png',
    'images/landscape3.png',
    'images/landscape4.png',
    'images/landscape5.png',
    'images/landscape6.png',
    'images/landscape7.png',
    'images/landscape8.png',
    'images/landscape9.png',
    'images/landscape10.png',
    'images/landscape11.png',
    'images/landscape12.png',
    'images/landscape13.png',
    'images/landscape14.png',
    'images/landscape15.png',
    'images/landscape16.png',
    'images/landscape17.png',
    'images/landscape18.png',
    'images/landscape19.png',
    'images/landscape20.png',
    'images/landscape21.png',
    'images/landscape22.png',
    'images/landscape23.png',
    'images/landscape24.png',
];

// Menu and sections
const menuScreen = document.getElementById('menuScreen');
const landscapesGenerator = document.getElementById('landscapesGenerator');
const storiesGenerator = document.getElementById('storiesGenerator');

// Landscape generator elements
const newLandscapeBtn = document.getElementById('newLandscapeBtn');
const landscapeImageContainer = document.getElementById('landscapeImageContainer');

// Back to Menu buttons
const backToMenu1 = document.getElementById('backToMenu1');
const backToMenu2 = document.getElementById('backToMenu2');

// Stories generator buttons
const createBtn = document.getElementById('createBtn');
const resetBtn = document.getElementById('resetBtn');
const imageContainer = document.getElementById('imageContainer');

// Last shown index to prevent repeats
let lastIndex = -1;

// Menu Button Listeners
document.getElementById('landscapesBtn').addEventListener('click', () => {
    menuScreen.classList.add('hidden'); // Hide the menu screen
    landscapesGenerator.classList.remove('hidden'); // Show the Landscapes generator
});

document.getElementById('storiesBtn').addEventListener('click', () => {
    menuScreen.classList.add('hidden'); // Hide the menu screen
    storiesGenerator.classList.remove('hidden'); // Show the 4-Image Stories generator
});

// Back to Menu Buttons
backToMenu1.addEventListener('click', () => {
    landscapesGenerator.classList.add('hidden'); // Hide Landscapes generator
    menuScreen.classList.remove('hidden'); // Show the menu screen
});

backToMenu2.addEventListener('click', () => {
    storiesGenerator.classList.add('hidden'); // Hide 4-Image Stories generator
    menuScreen.classList.remove('hidden'); // Show the menu screen
});

// Landscape Generator
newLandscapeBtn.addEventListener('click', () => {
    let randomIndex;

    // Avoid showing the same image twice in a row
    do {
        randomIndex = Math.floor(Math.random() * landscapes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    // Show the new landscape
    landscapeImageContainer.innerHTML = ''; // Clear the container
    const img = document.createElement('img');
    img.src = landscapes[randomIndex];
    img.alt = 'Landscape Image';
    landscapeImageContainer.appendChild(img);
});

// Stories Generator
createBtn.addEventListener('click', () => {
    imageContainer.innerHTML = ''; // Clear existing images

    let randomIndex;

    // Avoid showing the same set twice in a row
    do {
        randomIndex = Math.floor(Math.random() * imageSets.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;
    const selectedSet = imageSets[randomIndex];

    // Display images in the container
    selectedSet.forEach(imagePath => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = 'Prompt Image';
        imageContainer.appendChild(img);
    });
});

resetBtn.addEventListener('click', () => {
    imageContainer.innerHTML = ''; // Clear images
});
