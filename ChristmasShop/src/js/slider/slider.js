document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider_road');
    const leftArrow = document.querySelector('.prev_btn');
    const rightArrow = document.querySelector('.next_btn');
    const visible_part = document.querySelector('.visible_part');
    let currentPosition = 0;
    let maxSteps = calculateSteps();

    // Calculate steps based on screen width
    function calculateSteps() {
        return window.innerWidth > 768 ? 3 : 6;
    }

    // Update slider position
    function updateSlider() {
        const slideWidth = (sliderTrack.offsetWidth - visible_part.offsetWidth) / maxSteps;
        sliderTrack.style.transform = `translateX(-${currentPosition * slideWidth}px)`;

        // Disable buttons at boundaries
        leftArrow.disabled = currentPosition === 0;
        rightArrow.disabled = currentPosition === maxSteps;
        
        if(leftArrow.disabled === true){
            rightArrow.style.opacity = '1';
            leftArrow.style.opacity = '0.6';
        }else if(rightArrow.disabled === true){
            leftArrow.style.opacity = '1';
            rightArrow.style.opacity = '0.6';
        }else{
            leftArrow.style.opacity = '1';
            rightArrow.style.opacity = '1';
        }
    }

    // Reset slider on screen resize
    window.addEventListener('resize', () => {
        currentPosition = 0;
        maxSteps = calculateSteps();
        updateSlider();
    });

    // Left arrow click
    leftArrow.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition--;
            updateSlider();
        }
    });

    // Right arrow click
    rightArrow.addEventListener('click', () => {
        if (currentPosition < maxSteps) {
            currentPosition++;
            updateSlider();
        }
    });

    // Initialize slider
    updateSlider();
});