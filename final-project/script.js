// MODAL SCROLL ANIMATIONS 

document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username-input');
    const start = document.getElementById('start-btn');
    const agentNameInput = document.getElementById('name');
    const modal = document.getElementById('modal');
    const main = document.getElementById('main');

    function modalOverlay() {
        usernameInput.addEventListener('input', function() {
            start.disabled = usernameInput.value.trim() === ''; // Disable start button if input is empty
        }); 
        
        start.addEventListener('click', startGame);

        usernameInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                startGame();
            }
        });

        function startGame() {
            let name = usernameInput.value.trim();
            if (name === '') {
                alert('What do you want to be called?');
                return;
            }
            agentNameInput.textContent = `live: agent ${name}`;

            // ADD NICE PAGE TRANSITIONS HERE
            // try edition css to use position + z-index to make a stack instead
            main.style.display = 'flex';
            modal.style.display = 'none';
            loadMain();
        }
    }
    modalOverlay();
    rewardsProgress();
});

// RUN THIS FUNCTION WHEN MODAL IS CLOSED

function loadMain() {
    const logDataBtn = document.getElementById('log-data');
    const profitProgress = document.getElementById('profit');
    const powerProgress = document.getElementById('power');

    const browserImg = document.getElementById('browser-img');
    const printImg = document.getElementById('print-img')

    const submitBtn = document.getElementById('submit');
    const threatScore = document.getElementById('threat-score');
    const alertText = document.getElementById('alert-text');   
    const nav = document.getElementById('nav');

    let logDataBtnCount = 0;
    let submitBtnCount = 0;

    // INITIAL STATE 

    nav.style.opacity = 1;

    // if mobile, use mobile image for first in array
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const initialImage = isMobile ? 'images/mobile1.png' : 'images/image1.png';
    browserImg.src = initialImage;    

    // if mobile, use mobile background 
    if (isMobile) {
        const bgImage = new Image();
        bgImage.src = 'images/bg-mobile.png';
        bgImage.id = 'bg-mobile';

        const bgVideo = document.getElementById('bg-video');
        bgVideo.parentNode.replaceChild(bgImage, bgVideo);
    }

    browserImg.style.opacity = 1;     
    browserImg.style.transform = 'scale(0)';
    setTimeout(() => zoomInImage(browserImg, 100), 5000);

    setTimeout(function() {
        animateText(alertText, 'First alert here! Typing more to make sure it takes up more than one line ok is this long enough now? I think so, but lets be sure!', 25);
    }, 5000);

    setTimeout(function() {
        logDataBtn.disabled = false;
        submitBtn.disabled = false;
    }, 12000);


    // SUBMIT BUTTON CLICK INTERACTIONS

    submitBtn.addEventListener('click', function () {
        submitBtnCount++;
        alertText.textContent = ' ';
        submitBtn.disabled = true;
        updateImg(); 

    const widths = ['20%', '25%', '35%', '40%', '55%', '60%', '65%', '80%', '90%', '100%'];

    if (submitBtnCount <= widths.length) {
        profitProgress.style.width = widths[submitBtnCount - 1];
        // the ? : is a shorthand notation for : if (logic test) ? (return if true) : else (return if false)  
        powerProgress.style.width = submitBtnCount === 1 ? '10%' : Math.min(10 + logDataBtnCount * 10, 100) + '%';
        }
    });

    // LOG DATA BUTTON INTERACTIONS

    logDataBtn.addEventListener('click', function() {
        logDataBtnCount++;
        logDataBtn.disabled = true;
        updateImg();

        if (submitBtnCount === 2 || submitBtnCount === 3) {
        updateScore(42);
        } else if (submitBtnCount === 6) {
        updateScore(55);
        threatScore.style.color = 'var(--accent-color)';
        } else if (submitBtnCount === 8) {
        updateScore(67);
        threatScore.classList.add('blink');
        }

    const printImages = [
        'images/print1.png',
        'images/print2.png',
        'images/print3.png',
        'images/print4.png',
        'images/print5.png',
        'images/print6.png',
        'images/print7.png',
        'images/print8.png',
        'images/print9.png',
        'images/print10.png'
    ];

    if (logDataBtnCount <= printImages.length) {
        printImg.src = printImages[logDataBtnCount - 1];
        }
    });

    // UPDATE BROWSER IMAGE AND ALERTS UPON WHEN BOTH BUTTONS CLICKED 

    function updateImg() {
        const images = [];
        const alerts = [
            'Second alert written here! Typing more to make sure it takes up more than one line ok is this long enough now? I think so, but lets be sure!',
            'Third alert written here! Typing more to make sure it takes up more than one line ok is this long enough now? I think so, but lets be sure!',
            'Fourth alert written here! Typing more to make sure it takes up more than one line ok is this long enough now? I think so, but lets be sure!',
            'Fifth alert written here! Typing more to make sure it takes up more than one line ok is this long enough now? I think so, but lets be sure!',
            'Sixth alert written here! Typing more to make sure it takes up more than one line ok is this long enough now? I think so, but lets be sure!',
            'Seventh alert written here! Typing more to make sure it takes up more than one line ok is this long enough now? I think so, but lets be sure!',
            'Eighth alert written here! Typing more to make sure it takes up more than one line ok is this long enough now? I think so, but lets be sure!',
            'Ninth alert written here! Typing more to make sure it takes up more than one line ok is this long enough now? I think so, but lets be sure!',
            'Tenth alert written here! Typing more to make sure it takes up more than one line ok is this long enough now? I think so, but lets be sure!'
        ];
    
        const index = submitBtnCount - 1;
    
        // Check if the user is on a mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
        if (isMobile) {
            for (let i = 2; i <= 10; i++) {
                images.push(`images/mobile${i}.png`);
            }
        } else {
            for (let i = 2; i <= 10; i++) {
                images.push(`images/image${i}.png`);
            }
        }     

        if (logDataBtnCount === submitBtnCount && index >= 0 && index < images.length) {
            setTimeout(function() {
                browserImg.src = images[index];
                animateText(alertText, alerts[index], 25);
            }, 2000); //DELAY ADJUST
            setTimeout(function() {
                logDataBtn.disabled = false;
                submitBtn.disabled = false;
            }, 8000);
        }
        endGame();
    }    

    // END GAME // 
    // function endGame() {
    //     if (logDataBtnCount===10 && submitBtnCount === 10) {
    //         const main = document.getElementById('main');
    //         main.style.display = 'none';
    //         const end = document.getElementById('end');
    //         end.style.display = 'flex';
    //         const name = document.getElementById('name');
    //         name.style.opacity = 0;
    //         }
    // }

    function endGame() {
        if (logDataBtnCount===10 && submitBtnCount === 10) {
            const main = document.getElementById('main');
            const end = document.getElementById('end');
            const name = document.getElementById('name');

            main.style.display = 'none';
            end.style.display = 'flex';
            name.style.opacity = 0;
        }
    }

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

    // BROWSER IMAGES POPPING UP ON SCREEN 

    function zoomInImage(browserImg, duration) {
        const initialScale = parseFloat(browserImg.style.transform.match(/\d+\.\d+/)) || 0;
        const finalScale = 1;
        let startTime = null;

        function animateZoom(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;
            const currentScale = initialScale + (finalScale - initialScale) * progress;
            browserImg.style.transform = `scale(${currentScale})`;

            if (progress < 1) {
                requestAnimationFrame(animateZoom);
            } else {
                browserImg.style.transform = `scale(${finalScale})`;
            }
        }   
    
        requestAnimationFrame(animateZoom);
    }

    // Add event listener for window resize 
    window.addEventListener('resize', function() {
        const browserImg = document.getElementById('browser-img');
        zoomInImage(browserImg, 0); // Instantly set final scale
    });

    // Add event listener for window resize
    window.addEventListener('resize', function() {
        const currentScale = parseFloat(browserImg.style.transform.match(/\d+\.\d+/));
        const newScale = window.innerWidth / browserImg.width;
        browserImg.style.transform = `scale(${newScale})`;
    });

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
};


// SPEND BUTTON INTERACTION //

function rewardsProgress() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const spendBtn = document.getElementById('spend-btn');
    const rewardsProgress = document.getElementById('rewards');
    const rewardsItems = document.querySelectorAll('.rewards-item');
    let spendBtnCount = 0;

    spendBtn.addEventListener('click', function() {
        spendBtnCount++;
        if (spendBtnCount >= 1 && spendBtnCount <= 10) {
            const newWidth = spendBtnCount * 10;
            rewardsProgress.style.width = newWidth + '%';

            rewardsItems.forEach((item, index) => {
                if (isMobile) {
                    if (index === spendBtnCount - 1) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                } else {
                    if (spendBtnCount >= 1 && spendBtnCount <=10) {
                        const newWidth = spendBtnCount * 10;
                        rewardsProgress.style.width = newWidth + '%';
                    } 
                }
            });
        }
    });
}

// ANIMATE OPENING TEXT ON SCROLL

// RUN THIS FUNCTION WHEN TOGGLE IS CLICKED 

// DRAGGABLE BROWSER IMAGE TEST gsap 
    
// INVERT TEXT COLOR AND BG COLOR ON RERFESH

// REPLACE LOGO ON MOBLE TO BE A SMALLER ONE 

// CUSTOM SCROLL BARS

// ENABLE SOUND