// Updated JavaScript
const cardContainer = document.getElementById('cardContainer');
const cards = document.querySelectorAll('.card-slide');
let currentCardIndex = 0;

function showNextCard() {
    if (currentCardIndex >= cards.length - 1) return;
    
    cards[currentCardIndex].classList.add('fade-out-left');
    currentCardIndex++;
    cards[currentCardIndex].classList.remove('fade-out-right');
    cards[currentCardIndex].classList.add('visible_slide');
}

function showPrevCard() {
    if (currentCardIndex <= 0) return;
    
    cards[currentCardIndex].classList.add('fade-out-right');
    currentCardIndex--;
    cards[currentCardIndex].classList.remove('fade-out-left');
    cards[currentCardIndex].classList.add('visible_slide');
}

let touchStartX = 0;
let touchEndX = 0;

cardContainer.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
});

cardContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) { // Swipe right
        showPrevCard();
    } else if (deltaX < -50) { // Swipe left
        showNextCard();
    }
});

// Add click handlers for submit buttons
document.querySelectorAll('.romantic-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Add your submit logic here
        alert('Location submitted! 💖');
    });
});