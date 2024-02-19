// modal pop-up 
// on page load, get these variables

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');

    // find all images with class of image
    const images = document.querySelectorAll('.image img')

    //add event listener to each to listen for click, then make modal visible, display image 
    images.forEach((image) => {
        image.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = image.src;
        });
    });

    //close modal when clicking X 
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    //close modal when clicking outside of image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// move through images inside modal using left and right arrows

let currentImageIndex = 0;
let images = [];

// update modal with image at corresponding index
function showImage(index) {
    if (index >= 0 && index < images.length) {
        document.getElementById('modal-img').src = images[index];
        currentImageIndex = index;
    }
}

// go to next image 
function prevImage() {
    showImage(currentImageIndex - 1);
}

// go to previous image
function nextImage() {
    showImage(currentImageIndex + 1);
}

// find all images in .image div and populate the array
const imageElements = document.querySelectorAll('.image img');
imageElements.forEach(function(imageElement) {
    images.push(imageElement.src);
});

// event listener for left and right keyboard key

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        prevImage();
    } else if (event.key === 'ArrowRight') {
        nextImage();
    }
});

// cursor fun

const cursorClosed = document.querySelector('.cursor-closed');
const cursorOpen = document.querySelector('.cursor-open');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursorClosed.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`; 
    cursorOpen.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`; 
}); 

// change cursor over images

const imageItems = document.querySelectorAll('.image-item');

imageItems.forEach(imageItem => {
    imageItem.addEventListener('mouseenter', () => {
        cursorClosed.style.opacity = '0';
        cursorOpen.style.opacity = '1';
    });
    imageItem.addEventListener('mouseleave', () => {
        cursorClosed.style.opacity = '1';
        cursorOpen.style.opacity = '0';
    });
}); 

// change cursor inside modal

const currentimage = document.querySelector('.modal-content');

currentimage.addEventListener('mouseenter', () => {
    cursorClosed.style.opacity = '0';
    cursorOpen.style.opacity = '1';
});
currentimage.addEventListener('mouseleave', () => {
    cursorClosed.style.opacity = '1';
    cursorOpen.style.opacity = '0';
});

const arrowsHover = document.querySelectorAll('.prev, .next');

arrowsHover.forEach(arrow => {
    arrow.addEventListener('mouseenter', () => {
        cursorClosed.style.opacity = '0';
        cursorOpen.style.opacity = '1';
    });
    arrow.addEventListener('mouseleave', () => {
        cursorClosed.style.opacity = '1';
        cursorOpen.style.opacity = '0';
    });
}); 


// haiku text cursor change

const text = document.querySelectorAll('.text');

text.forEach(text => {
    text.addEventListener('mouseover', () => {
        cursorClosed.style.opacity = '0';
        cursorOpen.style.opacity = '1';
    });
    text.addEventListener('mouseleave', () => {
        cursorClosed.style.opacity = '1';
        cursorOpen.style.opacity = '0';
    });
});

// haiku text change

const lineone = document.querySelector('.lineone');
const linetwo = document.querySelector('.linetwo');
const linethree  = document.querySelector('.linethree');

let clickCountOne = 0;
let clickCountTwo = 0;
let clickCountThree = 0;

lineone.addEventListener('click', () => {
    clickCountOne++;
    if (clickCountOne === 1) {
        lineone.textContent = 'northern lights dance';
        lineone.style.color = 'blue';
    } else if (clickCountOne === 2) {
        lineone.textContent = 'ice crystals shimmer';
        lineone.style.color = 'red';
    } else if (clickCountOne === 3) {
        lineone.textContent = 'sled glides through the white';
        lineone.style.color = 'blue';
    } else {
        lineone.textContent = 'snow blankets the land';
        lineone.style.color = 'red';
        clickCountOne = 0;
    }
});

linetwo.addEventListener('click', () => {
    clickCountTwo++;
    if (clickCountTwo === 1) {
        linetwo.textContent = 'mystic hues in silent night';
        linetwo.style.color = 'blue';
    } else if (clickCountTwo === 2) {
        linetwo.textContent = 'guardians of ancient tales';
        linetwo.style.color = 'red';
    } else if (clickCountTwo === 3) {
        linetwo.textContent = 'trails of tales untold unfold';
        linetwo.style.color = 'blue';
    } else {
        linetwo.textContent = 'sled dogs howl in harmony';
        linetwo.style.color = 'red';
        clickCountTwo = 0;
    }
});

linethree.addEventListener('click', () => {
    clickCountThree++;
    if (clickCountThree === 1) {
        linethree.textContent = 'nature\'s grand ballet';
        linethree.style.color = 'blue';
    } else if (clickCountThree === 2) {
        linethree.textContent = 'frozen symphony';
        linethree.style.color = 'red';
    } else if (clickCountThree === 3) {
        linethree.textContent = 'infinite stillness';
        linethree.style.color = 'blue';
    } else {
        linethree.textContent = 'adventure whispers';
        linethree.style.color = 'red';
        clickCountThree = 0;
    }
});

// make it snow

let snowClick = 0;

const snowToggle = document.querySelector('.snow-toggle');
const snow = document.querySelector('.snow-container');
const snowflake = document.querySelector('#snowflake');

// snowToggle.addEventListener('click', () => {
//     // faster way of writing a toggle, the line below checks if the number of clicks is even or odd to enable/disable instead of keeping count and resetting to an original state
//     if (snowClick % 2 === 0) {
//         snow.style.display = 'block';
//         snowToggle.classList.add('spinning');
//     } else {
//         snow.style.display = 'none';
//         snowToggle.classList.remove('spinning');
//     }
//     snowClick++
// });

// this code does the same thing as above but using .toggle --> dont really get how this works?
snowToggle.addEventListener('click', () => {
    snow.style.display = snow.style.display === 'block' ? 'none' : 'block';
    snowflake.classList.toggle('spinning');
});

// how can i shorten this ???? 

snowToggle.addEventListener('mouseenter', () => {
    if (!snowToggle.classList.contains('spinning')) {
        snowflake.style.fill = 'blue';
    }
});

snowToggle.addEventListener('mouseleave', () => {
    if (!snowToggle.classList.contains('spinning')) {
        snowflake.style.fill = 'white';
    }
});

snowToggle.addEventListener('click', () => {
    if (snowToggle.classList.contains('spinning')) {
        snowflake.style.fill = 'white';
    } 
});

snowToggle.addEventListener('mouseenter', () => {
    if (snowToggle.classList.contains('spinning')) {
        snowflake.style.fill = 'blue';
    }
});

snowToggle.addEventListener('mouseleave', () => {
    if (snowToggle.classList.contains('spinning')) {
        snowflake.style.fill = 'white';
    }
});








