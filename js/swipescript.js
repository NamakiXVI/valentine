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

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
// Add click handlers for submit buttons

btn1.addEventListener('click', () => {
    // Add your submit logic here
    btn1.classList.add('photobooth');
    btn1.innerHTML = 'YAAAASSSS ❤️‍🔥';
    setTimeout(() => {
        window.location.href = 'photobooth.html';
      }, 2500);
});

btn2.addEventListener('click', () => {
    // Add your submit logic here
    btn2.innerHTML = 'uhmm okayyy';
});

btn3.addEventListener('click', () => {
    // Add your submit logic here
    btn3.innerHTML = 'Yayy new photoboothh';
});

btn4.addEventListener('click', () => {
    // Add your submit logic here
    btn4.innerHTML = 'I hope you like it';
});


