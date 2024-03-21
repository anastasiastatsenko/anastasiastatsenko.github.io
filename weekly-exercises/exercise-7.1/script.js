document.addEventListener('DOMContentLoaded', function() {

    const progressBtn = document.getElementById('submit-progress');
    const profitProgress = document.getElementById('profit');
    const powerProgress = document.getElementById('power');

    const browserImg = document.getElementById('browser-img');

    const textBtn = document.getElementById('submit-text');
    const threatScore = document.getElementById('threat-score');
    const alertText = document.getElementById('alert-text');   

    let progressBtnCount = 0;
    let textBtnCount = 0;

// INITIAL STATE 

    setTimeout(function() {
        animateText(alertText, 'First alert here!', 65);
        document.getElementById('alert').style.opacity = 1;
         }, 5000);

    browserImg.style.transform = 'scale(0)';
        setTimeout(() => zoomInImage(browserImg, 100), 5000);

    setTimeout(function() {
        progressBtn.disabled = false;
        textBtn.disabled = false;
        }, 6000);


// PROGRESS AND PROFIT BUTTON CLICK INTERACTIONS 

    progressBtn.addEventListener('click', function () {
        progressBtnCount++;
        progressBtn.disabled = true;
        updateImage(); 

        if (progressBtnCount === 1) {
            profitProgress.style.width = '20%';
            powerProgress.style.width = '10%';
        
        } else if (progressBtnCount === 2) {
            profitProgress.style.width = '25%';
            powerProgress.style.width = '20%';
        
        } else if (progressBtnCount === 3) {
            profitProgress.style.width = '35%';
            powerProgress.style.width = '40%';
        
        } else if (progressBtnCount === 4) {
            profitProgress.style.width = '40%';
            powerProgress.style.width = '43%';
        
        } else if (progressBtnCount === 5) {
            profitProgress.style.width = '55%';
            powerProgress.style.width = '49%';
        
        } else if (progressBtnCount === 6) {
            profitProgress.style.width = '60%';
            powerProgress.style.width = '70%';
        
        } else if (progressBtnCount === 7) {
            profitProgress.style.width = '65%';
            powerProgress.style.width = '75%';
        
        } else if (progressBtnCount === 8) {
            profitProgress.style.width = '80%';
            powerProgress.style.width = '80%';
        
        } else if (progressBtnCount === 9) {
            profitProgress.style.width = '90%';
            powerProgress.style.width = '87%';
        
        } else if (progressBtnCount === 10) {
            profitProgress.style.width = '100%';
            powerProgress.style.width = '100%';
        }
    });

// THREAT SCORE AND ALERT BUTTON INTERACTIONS

    textBtn.addEventListener('click', function() {
        textBtnCount++;
        alertText.textContent = ' ';
        textBtn.disabled = true;
        updateImage()

       if (textBtnCount === 2) {
            updateScore(42);
        
        } else if (textBtnCount === 3) {
            updateScore(42);

        }  else if (textBtnCount === 6) {
            updateScore(55);
            threatScore.style.color = 'var(--accent-color)';
        
        } else if (textBtnCount === 8) {
            updateScore(67);
            threatScore.classList.add('blink'); 
    }
})

// UPDATE IMAGE AND ALERT 

function updateImage()  {
    if (progressBtnCount === 1 && textBtnCount === 1) {
        browserImg.src = 'images/image2.png';
        animateText(alertText, 'Second alert written here!', 65);
        progressBtn.disabled = false;
        textBtn.disabled = false; 
    
    } else if (progressBtnCount === 2 && textBtnCount === 2) {
        browserImg.src = 'images/image3.png';
        animateText(alertText, 'Third alert written here!', 65);
        progressBtn.disabled = false;
        textBtn.disabled = false;
    
    } else if (progressBtnCount === 3 && textBtnCount === 3) {
        browserImg.src = 'images/image4.png';
        animateText(alertText, 'Fourth alert written here!', 65);
        progressBtn.disabled = false;
        textBtn.disabled = false; 
    
    } else if (progressBtnCount === 4 && textBtnCount === 4) {
        browserImg.src = 'images/image5.png';
        animateText(alertText, 'Fifth alert written here!', 65);
        progressBtn.disabled = false;
        textBtn.disabled = false;
    
    } else if (progressBtnCount === 5 && textBtnCount === 5) {
        browserImg.src = 'images/image6.png';
        animateText(alertText, 'Sixth alert written here!', 65);
        progressBtn.disabled = false;
        textBtn.disabled = false; 
    
    } else if (progressBtnCount === 6 && textBtnCount === 6) {
        browserImg.src = 'images/image7.png';
        animateText(alertText, 'Seventh alert written here!', 65);
        progressBtn.disabled = false;
        textBtn.disabled = false;
    
    } else if (progressBtnCount === 7 && textBtnCount === 7) {
        browserImg.src = 'images/image8.png';
        animateText(alertText, 'Eighth alert written here!', 65);
        progressBtn.disabled = false;
        textBtn.disabled = false;
    
    } else if (progressBtnCount === 8 && textBtnCount === 8) {
        browserImg.src = 'images/image9.png';
        animateText(alertText, 'Ninth alert written here!', 65);
        progressBtn.disabled = false;
        textBtn.disabled = false;
    
    } else if (progressBtnCount === 9 && textBtnCount === 9) {
        browserImg.src = 'images/image10.png';
        animateText(alertText, 'Tenth alert written here!', 65);
        progressBtn.disabled = false;
        textBtn.disabled = false;
        };
    };
    
 // ANIMATE TYPEWRITER TEXT 

        function animateText(element, text, speed) {
            let i = 0;
            const typeInterval = setInterval(function() {
                element.textContent += text.charAt(i);
                i++;
                if (i > text.length) {
                    clearInterval(typeInterval);
                }
            }, speed);
        }

// BROWSER IMAGE POPUP ON SCREEN 

        function zoomInImage(browserImg, duration) {
            const startTime = Date.now();

        function animateZoom() {
            const progress = (Date.now() - startTime) / duration;
            browserImg.style.transform = `scale(${progress})`;

            if (progress < 1) requestAnimationFrame(animateZoom);
        }
        animateZoom();
    }

// UPDATE THREAT SCORE ANIMATION

        function updateScore(targetScore) {
            const duration = 3000; // Duration in milliseconds
            const increment = (targetScore - parseInt(threatScore.textContent)) / (duration / 100);
    
            let currentScore = parseInt(threatScore.textContent);
            let interval = setInterval(function() {
                currentScore += increment;
                threatScore.textContent = Math.ceil(currentScore);
                if (currentScore >= targetScore) {
                    clearInterval(interval);
                    threatScore.textContent = targetScore; 
                }
            }, 10);
        }
    });
