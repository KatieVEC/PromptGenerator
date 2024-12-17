// Array of image sets (replace these with your themes)
const imageSets = [
    ['images/destruction1.png', 'images/destruction2.png', 'images/destruction3.png', 'images/destruction4.png'],
    ['images/nature1.png', 'images/nature2.png', 'images/nature3.png', 'images/nature4.png'],
    ['images/space1.png', 'images/space2.png', 'images/space3.png', 'images/space4.png'],
    ['images/shipwreck1.png', 'images/shipwreck2.png', 'images/shipwreck3.png', 'images/shipwreck4.png'],
    ['images/bookstore1.png', 'images/bookstore2.png', 'images/bookstore3.png', 'images/bookstore4.png'],
    ['images/leftbehind1.png', 'images/leftbehind2.png', 'images/leftbehind3.png', 'images/leftbehind4.png']
];

const createBtn = document.getElementById('createBtn');
const resetBtn = document.getElementById('resetBtn');
const imageContainer = document.getElementById('imageContainer');

let lastIndex = -1; // Store the last index to avoid repetition

// Function to create a prompt (display 4 images)
function createPrompt() {
    imageContainer.innerHTML = ''; // Clear existing images

    let randomIndex;

    // Keep picking a random index until it’s different from the last one
    do {
        randomIndex = Math.floor(Math.random() * imageSets.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex; // Update the last shown index
    const selectedSet = imageSets[randomIndex]; // Get the image set

    // Display images in the container
    selectedSet.forEach(imagePath => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = 'Prompt Image';
        imageContainer.appendChild(img);
    });
}

// Function to reset the display
function resetPrompt() {
    imageContainer.innerHTML = ''; // Clear images
}

// Event Listeners for buttons
createBtn.addEventListener('click', createPrompt);
resetBtn.addEventListener('click', resetPrompt);
