/* initialize variables */

const textElement = document.querySelector('#text');
let nameInput = document.querySelector('#nameInput');
const imageElement = document.getElementById('image');
const pointsElement = document.getElementById('points');
const submitButton = document.getElementById('submitButton');
const startOver = document.getElementById('startOver');

/* define object map to track user's answers and relate them to the corresponding image */

const imageMap = {
    'squirrel-stump-lock': 'images/mosaic2.jpg',
    'squirrel-stump-key': 'images/mosaic3.jpg',
    'squirrel-chair-lock': 'images/mosaic4.jpg',
    'squirrel-chair-key': 'images/mosaic5.jpg',
    'pinecone-stump-lock': 'images/mosaic6.jpg',
    'pinecone-stump-key': 'images/mosaic7.jpg',
    'pinecone-chair-lock': 'images/mosaic8.jpg',
    'pinecone-chair-key': 'images/mosaic9.jpg',
};

/* event listener for enter key */

nameInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        submitOnClick();
    }
});

/* event listener for submit button */

submitButton.addEventListener('click', submitOnClick);

/* Quiz */

let points = 0;
let currentQuestion = 0;
let answers = '';

function submitOnClick() {
    if (currentQuestion === 0) {
        /* value is the user's input, and trim removes the beginning and end whitespace of a string if any */
        let name = nameInput.value.trim();
        if (name === '') {
            alert('tell me your name!!');
            return;
        }

        fadeIn(textElement, 1000);
        textElement.textContent = `Welcome ${name}! Ever wonder what kind of mosaic best represents your personality? Answer 3 questions worth 10 points each to reveal your unique mosaic type! Type yes to continue.`;
        currentQuestion++;
        /* clears the input field of the previous answer */
        nameInput.value = '';
    }

    else if (currentQuestion === 1) {
        let name = nameInput.value.trim(); 
        if (name.toLowerCase() === 'yes') {
            currentQuestion++;
            fadeIn(textElement, 1000);
            textElement.textContent = 'Pinecone or squirrel?';
            nameInput.value = '';
            fadeIn(imageElement, 1000);
            changeImage(); 
        }
        else if (name.toLowerCase() !== 'yes' || name === '') {
            alert('Type yes to proceed.');
            return;
        }
    }

    else if (currentQuestion === 2) {
        let name = nameInput.value.trim();
        if (name.toLowerCase() === 'squirrel' || name.toLowerCase() === 'pinecone') {
            answers += name.toLowerCase() + '-';
            points += 10;
            updatePointsDisplay();
            currentQuestion++;
            fadeIn(textElement, 1000);
            textElement.textContent = 'Stump or chair?';
            nameInput.value = '';
            fadeIn(imageElement, 1000);
            changeImage();
       }
       else {
            alert('Choose pinecone or squirrel.');
            return;
       }
    }

    else if (currentQuestion === 3) {
        let name = nameInput.value.trim();
        if (name.toLowerCase() === 'stump' || name.toLowerCase() === 'chair') {
            answers += name.toLowerCase();
            points += 10;
            updatePointsDisplay();
            currentQuestion++;
            fadeIn(textElement, 1000);
            textElement.textContent = 'Lock or key?';
            nameInput.value = '';
            fadeIn(imageElement, 1000);
            changeImage();
       }
       else {
            alert('Choose stump or chair.');
            return;
       }
    }

    else if (currentQuestion === 4) {
        let name = nameInput.value.trim();
        if (name.toLowerCase() === 'lock' || name.toLowerCase() === 'key') {
            answers += '-' + name.toLowerCase();
            points += 10;
            updatePointsDisplay();
            currentQuestion++;
            textElement.textContent = 'Congrats! You are this mosaic.';
            nameInput.value = '';
            displayPersonalizedImage();
            submitButton.textContent = 'start over';
            //submitButton.style.opacity = 0;
            nameInput.style.opacity = 0;
            pointsElement.style.opacity = 0;
            //startOver.style.opacity = 1;
            
       }
       else {
            alert('Choose lock or key.');
            return;
       }
    }
    
    else if (currentQuestion === 5) {
        imageElement.src = '';
        textElement.textContent = 'Enter your name to begin.';
        submitButton.textContent = 'submit';
        nameInput.style.opacity = 1;
        currentQuestion = 0;
    }

}

/* change image and award final */

function changeImage() {
    if (currentQuestion === 2) {
        imageElement.src = 'images/q1.png';
    }
    else if (currentQuestion === 3) {
        imageElement.src = 'images/q2.png';
    }
    else if (currentQuestion === 4) {
        imageElement.src = 'images/q3.png';
    }
}

/* points tracker */

function updatePointsDisplay() {
    pointsElement.textContent = `${points} points!`;
}

/* display personalized image at the end of quiz */ 

function displayPersonalizedImage() {
    const imagePath = imageMap[answers];
    console.log(imagePath);
    console.log(answers);
    if (imagePath) {
        imageElement.src = imagePath;
    }
    else {
        imageElement.src = 'images/mosaic1.jpg'
    }
}

/* fade in some elements, code snip from GPT */

function fadeIn(element, duration) {
    let opacity = 0;
    element.style.opacity = opacity; // Set initial opacity to 0
    const interval = 10; // Interval for the animation

    // Define a function to gradually increase the opacity
    function increaseOpacity() {
        opacity += interval / duration;
        element.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fadeInterval); // Stop the animation when opacity reaches 1
        }
    }

    // Start the animation using setInterval
    const fadeInterval = setInterval(increaseOpacity, interval);
}



