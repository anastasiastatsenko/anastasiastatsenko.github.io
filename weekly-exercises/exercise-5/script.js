// 90s cursor
// window.addEventListener("load", (event) => {
//     new cursoreffects.ghostCursor();
//   });

// images transition effect
var myAnimation = new hoverEffect ({
    parent: document.querySelector('.image-gallery'),
    image1: 'images/adams.jpg',
    image2: 'images/adams1.jpg',
    displacementImage: 'images/disp6.jpg',  
    speedIn: 2.5,
    speedOut: 2.5,
    intensity: 1,
    imagesRatio: 593 / 894 
});

// use this code if u want the image to change on click not hover 
// let next = document.querySelector(".singleProduct__next");
// let prev = document.querySelector(".singleProduct__prev");

// let x = new hoverEffect({
//   parent: document.querySelector(".singleProduct__left-image"),
//   intensity: 0.3,
//   image1: "../pix/products/rings/ring-1.jpg",
//   image2: "../pix/products/rings/ring.jpg",
//   hover: false,
//   displacementImage: "../pix/products/fluid.jpg",
// });

// next.addEventListener("click", () => {
//   x.next();
// });

// prev.addEventListener("click", () => {
//   x.previous();
// });