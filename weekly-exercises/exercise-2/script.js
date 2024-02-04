/* change text and style of element, exploring handlers beyond click */

const warningContainer = document.getElementById('text-container');
// console.log(warningContainer);
let mouseOverCount = 0;
// console.log(mouseOverCount);
let isMouseOverAllowed = true;
// console.log('mouseover allowed');

/* handleMouseOver is a function. it is the event handler for the 'mouseover' event. mouseOverCount is a variable, it keeps track of how many times the mouse has moved over the area. the Switch statement is what checks the value of mouseOverCount and executes the correspinding code. */

function handleMouseOver() {
    // console.log('handleMouseOver function called');
    if (!isMouseOverAllowed) {
        return;
    }

    mouseOverCount++;
    
    switch (mouseOverCount) {
        case 1:
            warningContainer.textContent = "I told you not to do that!";
            /* break is a statement used to exit a switch statement or loop prematurely. without the break statement here, the code would continue and fulfill the next case, regardless is the condition is met. */
            break;
        case 2:
            warningContainer.textContent = "I'm warning you!";
            warningContainer.style.color = 'red';
            break;
        case 3:  
            warningContainer.textContent = "That's it, I give up..";
            warningContainer.style.color = 'white';
            break;
        case 4:
            warningContainer.textContent = "Keep your mouse out of here.";
            mouseOverCount = 0;
            break;
    }

/* set a timeout so you can't mouseover too fast + have time to read text as it changes, HOW IT WORKS: */
/* isMouseOverAllowed is a flag variable that controls whether the dandleMouseOver function should execute. the handleMouseOver function checks whether isMouseOverAllowed is true before proceeding to the switch statement. if not, it doesn't execute rest of logic. after switch statement executes, it sets isMouseOverAllowed to false to prevent additional mouseovers from triggering the switch too quickly. the SetTimeout function then sets isMouseOverAllowed BACK to true after 2 seconds. the mouseover event listener is at the END of the code because it ensures that the event listener is registered only after necessary variables and functions have been defined. all components should be in place BEFORE event handling begins. first, declare variables and functions, THEN set up event listeners/execute other actions.*/ 


    isMouseOverAllowed = false;
    setTimeout(() => {
        isMouseOverAllowed = true;
    }, 2000);
}

warningContainer.addEventListener('mouseover', handleMouseOver);

/* find ALL button elements in the html using a loop */
const buttons = document.querySelectorAll('.button');

/* find the button container */
const container = document.querySelector('.button-container');

/* add a click event listener to each button */
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
    /* on click, add the 'button-clicked' class to that button */
      this.classList.toggle('button-clicked');

    /* get the value of the data-image attribute */
    const imageUrl = this.getAttribute('data-image');

    /* set the corresponding url as button container background */
    container.style.backgroundImage = `url('${imageUrl}')`;
  });
});




