
document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.querySelector('.timer');
    const startButton = document.querySelector('.start');

    let timerInterval = null;
    let totalTime = 90; // 1:30 in seconds
    let remainingTime = totalTime;
    let running = false;

    function updateDisplay() {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        updateDisplay();
        timerInterval = setInterval(() => {
            remainingTime--;
            updateDisplay();

            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                running = false;
                startButton.textContent = 'Start';
                
            }
        }, 1000);
    }

    function resetTimer() {
        clearInterval(timerInterval);
        remainingTime = totalTime;
        updateDisplay();
        running = false;
        startButton.textContent = 'Start';
    }

    function toggleTimer() {
        if (running) {
            // Stop and reset if running
            resetTimer();
        } else {
            // Start timer
            running = true;
            startButton.textContent = 'Stop';
            startTimer();
        }
    }

    // Support both mouse and touch
    startButton.addEventListener('click', toggleTimer);
    startButton.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent double firing
        toggleTimer();
    });

    // Initial display
    updateDisplay();
});

