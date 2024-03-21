 document.addEventListener('DOMContentLoaded', function() {

    // CHANGING POWER AND PROFIT PROGRESS BARS

    const submitProgressBtn = document.getElementById('submit-progress');
    const profitProgress = document.getElementById('profit');
    const powerProgress = document.getElementById('power');

    let progressBtnClickCount = 0;

    submitProgressBtn.addEventListener('click', function() {
        if (progressBtnClickCount < 10) {
            progressBtnClickCount ++;

            if (progressBtnClickCount === 1) {
                profitProgress.style.width = '20%';
                powerProgress.style.width = '10%';
            
            } else if (progressBtnClickCount === 2) {
                profitProgress.style.width = '30%';
            
            } else if (progressBtnClickCount === 3) {
                powerProgress.style.width = '20%';
            
            } else if (progressBtnClickCount === 4) {
                profitProgress.style.width = '30%';
                powerProgress.style.width = '30%';
            
            } else if (progressBtnClickCount === 5) {
                powerProgress.style.width = '40%';
            
            } else if (progressBtnClickCount === 6) {
                profitProgress.style.width = '50%';
                powerProgress.style.width = '50%';
            
            } else if (progressBtnClickCount === 7) {
                profitProgress.style.width = '60%';
            
            } else if (progressBtnClickCount === 8) {
                powerProgress.style.width = '70%';
            
            } else if (progressBtnClickCount === 9) {
                profitProgress.style.width = '80%';
                powerProgress.style.width = '90%';
            
            } else if (progressBtnClickCount === 10) {
                profitProgress.style.width = '100%';
                powerProgress.style.width = '100%';
            } 
        }
        });

        // CHANGING THREAT SCORE AND ALERT TEXT

        const submitTextBtn = document.getElementById('submit-text');
        const threatScore = document.getElementById('threat-score');
        const alertText = document.getElementById('alert-text');

        animateText(alertText, 'First alert written here!', 65);
    
        let textBtnClickCount = 0;
            
        submitTextBtn.addEventListener('click', function() {
            if (textBtnClickCount < 10) {
                textBtnClickCount ++;
                alertText.textContent = ' ';

                if (textBtnClickCount === 1) {
                    animateText(alertText, 'Second alert written here!', 65);
                
                } else if (textBtnClickCount === 2) {
                    animateText(alertText, 'Third text', 65);
                
                } else if (textBtnClickCount === 3) {
                    animateText(alertText, 'Fourth text', 65);
                    updateScore(42);
                
                } else if (textBtnClickCount === 4) {
                    animateText(alertText, 'Fifth text', 65);
                
                } else if (textBtnClickCount === 5) {
                    animateText(alertText, 'Number six', 65);
                    updateScore(55);
                    threatScore.style.color = 'var(--accent-color)';
                    threatScore.classList.add('blink');
                
                } else if (textBtnClickCount === 6) {
                    animateText(alertText, 'Number seven', 65);
                
                } else if (textBtnClickCount === 7) {
                    animateText(alertText, 'Number eight', 65);
                    updateScore(99);
                
                } else if (textBtnClickCount === 8) {
                    animateText(alertText, 'Number nine', 65);
                
                } else if (textBtnClickCount === 9) {
                    animateText(alertText, 'Last one number ten', 65);
                } 
        }
        });
        
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

        function updateScore(targetScore) {
            const duration = 2000; // Duration in milliseconds
            const increment = (targetScore - parseInt(threatScore.textContent)) / (duration / 100);
    
            let currentScore = parseInt(threatScore.textContent);
            let interval = setInterval(function() {
                currentScore += increment;
                threatScore.textContent = Math.ceil(currentScore);
                if (currentScore >= targetScore) {
                    clearInterval(interval);
                    threatScore.textContent = targetScore; // Ensure the final value is exact
                }
            }, 10);
        }
    });
