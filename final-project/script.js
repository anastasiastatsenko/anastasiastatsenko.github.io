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
            // try editing css to use position + z-index to make a stack instead
            // display none doesnt work with transitions, only opacity 
            main.style.display = 'flex';
            modal.style.display = 'none';
            loadMain();
        }
    }
    toggleOverlay();
    changeText();
    modalOverlay();
    rewardsProgress();

    // HIDE ARROW ON SCROLL 

    window.addEventListener('scroll', function() {
        const element = document.querySelector('.arrow'); 
        if (window.scrollY > 100) { // Adjust the threshold as needed
            element.style.visibility = 'hidden'; 
        } else {
            element.style.visibility = 'visible'; 
        }
    });

    // ANIMATE OPENING TEXT

    // Intersection Observer callback function
    function intersectionCallback(entries, observer) {
        entries.forEach(entry => {
            // Check if the target element is intersecting and has not already been animated
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const textElements = entry.target.querySelectorAll('.modal-text');
                textElements.forEach((textElement, index) => {
                    const text = textElement.textContent;
                    textElement.textContent = ''; // Clear existing text
                    textElement.style.visibility = 'visible'; // Ensure the text is visible before animation starts
                    animateText(textElement, text, 45 * (index + 1)); // Adjust speed as needed
                });
                entry.target.classList.add('animated'); // Mark the section as animated to prevent re-triggering
            }
        });

        // Make the .login section visible when it's in the center of the viewport
        const loginSection = document.querySelector('.section.login');
        if (isInViewportCenter(loginSection)) {
            loginSection.style.opacity = 1;
        } else {
            loginSection.style.opacity = 0;
        }
    }

    // Function to animate text
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

    // Function to check if an element is in the center of the viewport
    function isInViewportCenter(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const center = windowHeight / 2;
        return (
            rect.top <= center &&
            rect.bottom >= center
        );
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver(intersectionCallback, { threshold: 0.5 });

    // Get all sections with the class 'typewriter'
    const sections = document.querySelectorAll('.typewriter');

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

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
    const initialImage = isMobile ? 'images/mobile1.png' : 'images/image1.gif';
    browserImg.src = initialImage;    

    // if mobile, use mobile background 
    if (isMobile) {
        const bgImage = new Image();
        bgImage.src = 'images/bg-mobile.png';
        bgImage.id = 'bg-mobile';

        const bgVideo = document.getElementById('bg-video');
        bgVideo.parentNode.replaceChild(bgImage, bgVideo);
    } else {
        enableSound();
        alert("Enable sound for the full experience."); 
    }

    browserImg.style.opacity = 0.85;     
    browserImg.style.transform = 'scale(0)';
    setTimeout(() => zoomInImage(browserImg, 100), 5000);

    setTimeout(function() {
        animateText(alertText, 'Incognito session: ignore. Track and optimize search results to align with Paid Partner and Electoral Strategy goals?', 25);
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
            'New eye tracking, facial expression, skin tone, heartbeat, Google voice data available. Link to recent search, cart, order and live Ring cam footage data?',
            'Recent messages indicate 82% likelihood of change in happiness, suggested premium increase or benefit cancellation. Send new data to insurance provider?',
            'New Mastercard transactions and gender-specific credit rating available. Update user credit risk score with financial institution partners?',
            'User demographic conflict with New Urban Plan. Link user searches to rent-setting algorithm and display listings that correspond to race-religion-income profile?',
            'Content warning: rewrite headlines to better reflect current political goals, increase ad revenue, and keep user engagement?',
            'New health data available, potential pro-choice content flagged. Decrypt medical records?',
            'Email content and contacts scan complete, Official Campaigns moved to Main Inbox, Nonprofit Advocacy moved to Spam. Cross-reference new data with Terrorism Score and Unions Prevention Database?',
            'Recent location is a 93% match to criminal sector (Predictive Policing Code 44-Protest). Send threat score and location log to law enforcement?',
            'Warning: government-issued activism risk. Censor recent political keywords, local organizing content and restrict resource access (label: misinformation)?'
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
                images.push(`images/image${i}.gif`);
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

    function endGame() {
        if (logDataBtnCount===10 && submitBtnCount === 10) {
            const main = document.getElementById('main');
            const end = document.getElementById('end');
            const name = document.getElementById('name');

            main.style.display = 'none';
            end.style.display = 'flex';
            name.style.opacity = 0;

            disableSound();
            updateTargetDataText();
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
    const rewardText = document.querySelectorAll('.rewardtext');
    let spendBtnCount = 0;

    spendBtn.addEventListener('click', function() {
        spendBtnCount++;
        if (spendBtnCount >= 1 && spendBtnCount <= 10) {
            const newWidth = spendBtnCount * 10;
            rewardsProgress.style.width = newWidth + '%';

            rewardText[spendBtnCount - 1].style.color = 'var(--accent-color2)';
            
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

            // PLAY AGAIN? 

            if (spendBtnCount === 10) {
                setTimeout(function() {
                    const endTextSection = document.querySelector('.end-text');
                    const endRewardsSection = document.querySelector('#end-rewards');
                    const playAgainSection = document.getElementById('playagain');
            
                    endTextSection.style.display = 'none';
                    endRewardsSection.style.display = 'none';
                    playAgainSection.style.display = 'flex';
            
                    if (/Mobi|Android/i.test(navigator.userAgent)) {
                        // If the user is on mobile, change the text to 'Click here to play again'
                        const playAgainLink = playAgainSection.querySelector('a');
                        playAgainLink.textContent = 'Click here to play again.';
                    }
                }, 2000);
            }
        }
    });
}

// TOGGLE OVERLAY 

function toggleOverlay() {
    const toggleOverlay = document.querySelector('#toggle-overlay');
    const toggle = document.querySelector('.toggle');
    const logoWrapper = document.querySelector('#logo-wrapper');
    const nav = document.querySelector('.mobile-nav');
    let isOpen = false;

    toggle.addEventListener('click', function() {
        if (!isOpen) {
            toggleOverlay.style.display = 'block';
            logoWrapper.style.visibility = 'hidden';
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                nav.style.backgroundColor = 'var(--primary-color)'; 
            }
            isOpen = true;
        } else {
            toggleOverlay.style.display = 'none';
            logoWrapper.style.visibility = 'visible';
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                nav.style.backgroundColor = 'var(--secondary-color)'; 
            }
            isOpen = false;
        }
    });
}

// VIDEO SOUND

function enableSound() {
    const video = document.getElementById('bg-video');
    video.muted = false;
}

function disableSound() {
    const video = document.getElementById('bg-video');
    video.muted = true;
}

// CYCLE THROUGH DOWNLOADED DATA TEXT 

const targetDataTexts = [
    "operating system windows",
    "IP address 45.88.186.23",
    "isp bell canada",
    "useragent Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0)Gecko/20100101 Firefox/124.0",
    "accept text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "signature 1e80a0c3a40d7f7178aa5451138acb2f",
    "canvas hash 6252032b4c22ec78b48",
    "webgl hash 4e54c35aab03b1ec06",
    "language english",
    "timezone UTC-06:00",
    "applications installed apps041224-298654375y294i192i39823y5.xls",
    "most visited websites sites041224-298654375y294i192i39823y5.xls",
    "MAID 298654375y294i192i39823y5",
    "location toronto ontario canada",
    "birthdate june 14 2000",
    "gender female",
    "ethnicity caucasian",
    "education bachelor of arts and science",
    "income bracket 24000-35000",
    "demographic american citizen",
    "profession student",
    "cellphone provider bell canada",
    "credit score 548",
    "threat score 78",
    "relationship status married",
    "political affiliation liberal",
    "applications installed apps041224-298654375y294i192i39823y5.xls",
    "email provider gmail",
    "email contents email041224-298654375y294i192i39823y5.xls",
    "location tracking most visited websites websites041224-298654375y294i192i39823y5.xls",
    "location tracking google maps maps041224-298654375y294i192i39823y5.xls",
    "insurance provider desjardins claims041224-298654375y294i192i39823y5.xls",
    "advertising preferences clicked041224-298654375y294i192i39823y5.xls",
    "purchases purchased 041224-298654375y294i192i39823y5.xls",
    "recent downloads files041224-298654375y294i192i39823y5.xls",
    "online hour log timestamps041224-298654375y294i192i39823y5.xls",
    "risk factors risks041224-298654375y294i192i39823y5.xls",
    "known associates associates041224-298654375y294i192i39823y5.xls",
    "close friends closefriends041224-298654375y294i192i39823y5.xls",
    "predictive purchasing predpurch041224-298654375y294i192i39823y5.xls",
    "recent activity flagged041224-298654375y294i192i39823y5.xls"
]; 

const targetDataTextElement = document.getElementById('target-data-text');

let currentIndex = 0;

function updateTargetDataText() {
    targetDataTextElement.textContent = targetDataTexts[currentIndex];
    currentIndex = (currentIndex + 1) % targetDataTexts.length; // Loop back to the beginning when reaching the end
}

setInterval(updateTargetDataText, 175);

// ABOUT IMAGE GALLERY 

const texts = [
    "ensures our rights are respected and protected",
    "allows us to work with dignity",
    "limits how data can be used against us",
    "helps us defend ourselves",
    "facilitates access to justice",
    "protects our right to education",
    "protects our standard of living",
    "protects our right to rest",
    "protects our free elections",
    "protects our access to social security",
    "protects our property",
    "protects those fleeing from persecution",
    "protects our ability to move freely",
    "protects our bodily autonomy",
    "protects our freedom of thought",
    "protects our right to protest",
    "protects our beliefs",
    "protects marriage equality"
];
let aboutInfoIndex = 0; 

function changeText() {
    const aboutInfoText = document.getElementById("about-info-text");
    aboutInfoText.textContent = texts[aboutInfoIndex];

    // Increment aboutInfoIndex for the next text
    aboutInfoIndex = (aboutInfoIndex + 1) % texts.length;

    // Change text color based on aboutInfoIndex
    if (aboutInfoIndex % 2 === 0) {
        aboutInfoText.style.color = 'var(--accent-color)';
    } else {
        aboutInfoText.style.color = 'var(--accent-color)';
    }
}

changeText();
setInterval(changeText, 800);

// $ RAIN 

