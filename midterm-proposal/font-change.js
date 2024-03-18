// font array

const fontOptions = ['old', 'oldHover', 'new'];

// update every 15 seconds 

function updateFont() {
    const textDiv = document.querySelector('.font-change');
    const originalFont = textDiv.style.fontFamily;

    textDiv.style.fontFamily = fontOptions[1];
    setTimeout(function() {
        textDiv.style.fontFamily = fontOptions[2];
        setTimeout(function() {
            textDiv.style.fontFamily = originalFont;
        }, 1000);
    }, 1000);
};

setInterval(updateFont, 5000);

