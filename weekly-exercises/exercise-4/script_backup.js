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

//keep track of what image is being shown in the modal

function showImage(index) {
    if (index >= 0 && index < images.length) {
        document.getElementById('modal-img').src = images[index];
        currentImageIndex = index;
    }
}

// modify cursor behavior to target specific image in modal

imageItems.forEach((imageItem, index) => {
    imageItem.addEventListener('mouseenter', () => {
        if (modal.style.display === 'block' && index === currentImageIndex) {
            cursorClosed.style.opacity = '0';
            cursorOpen.style.opacity = '1';
        }
    });
    imageItem.addEventListener('mouseleave', () => {
        if (modal.style.display === 'block' && index === currentImageIndex) {
            cursorClosed.style.opacity = '1';
            cursorOpen.style.opacity = '0';
        }
    });
}); 














