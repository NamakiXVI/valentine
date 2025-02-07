const messageContainer = document.getElementById('messageContainer');
const messageBoxes = document.querySelectorAll('.message-box');
let currentIndex = 0;

// Function to handle swipe up
function handleSwipeUp() {
  if (currentIndex >= messageBoxes.length - 1) return; // Stop if no more messages

  // Fade out the current message box
  messageBoxes[currentIndex].classList.add('fade-out-up');

  // Fade in the next message box
  currentIndex++;
  messageBoxes[currentIndex].classList.remove('fade-out-down');
  messageBoxes[currentIndex].classList.add('visible');
}

function handleSwipeDown() {
  if (currentIndex <= 0) return;
  messageBoxes[currentIndex].classList.add('fade-out-down');

  currentIndex--;
  messageBoxes[currentIndex].classList.remove('fade-out-up');
  messageBoxes[currentIndex].classList.add('visible');
}

// Touch event handlers for swipe detection
let touchStartY = 0;

messageContainer.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
});

messageContainer.addEventListener('touchend', (e) => {
  const touchEndY = e.changedTouches[0].clientY;
  const deltaY = touchStartY - touchEndY;

  // Detect swipe up (deltaY > 50 to avoid accidental swipes)
  if (deltaY > 50) {
    handleSwipeUp();
  }
  // Detect swipe down (deltaY < -50 to avoid accidental swipes)
  else if (deltaY < -50) {
    handleSwipeDown();
  }
});

// Generate the calendar grid
function generateCalendarGrid() {
  const calendarGrid = document.getElementById('calendarGrid');
  const calendarHeader = document.getElementById('calendarHeader');
  const year = 2025;
  const month = 1; // February (0-indexed)
  const specialDate = 14;

  // Clear existing content
  calendarGrid.innerHTML = '';

  // Set calendar header
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  calendarHeader.innerHTML = `
    <div class="calendar-title">${monthNames[month]} ❤️</div>
    <div class="calendar-year">${year}</div>
  `;


  // Create date grid
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  // Create weekday headers
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const weekdayContainer = document.createElement('div');
  weekdayContainer.className = 'weekdays';
  weekdays.forEach(day => {
    const weekdayElem = document.createElement('div');
    weekdayElem.className = 'weekday';
    weekdayElem.textContent = day;
    weekdayContainer.appendChild(weekdayElem);
  });

  for (let i = 0; i < weekdays.length; i++) {
    const weekdayBtn = document.createElement('button');
    weekdayBtn.className = 'date-btn empty';
    weekdayBtn.innerHTML = `<span>${weekdays[i]}</span>`;
    calendarGrid.appendChild(weekdayBtn);
  }

  // Add empty days
  for (let i = 0; i < firstDayOfWeek; i++) {
    const emptyBtn = document.createElement('button');
    emptyBtn.className = 'date-btn empty';
    calendarGrid.appendChild(emptyBtn);
  }

  // Add date buttons
  for (let day = 1; day <= daysInMonth; day++) {
    const dateBtn = document.createElement('button');
    dateBtn.className = 'date-btn';
    dateBtn.innerHTML = `<span>${day}</span>`;

    if (day === specialDate) {
      dateBtn.innerHTML = `
        <span>${day}</span>
      `;
    }
    
    dateBtn.addEventListener('click', () => handleDateClick(day, dateBtn));
    calendarGrid.appendChild(dateBtn);
  }
}

// Handle date clicks
function handleDateClick(day, button) {
  const allButtons = document.querySelectorAll('.date-btn');
  const text = document.getElementById('date');
  allButtons.forEach(btn => btn.classList.remove('special-date'));
  text.style.marginTop = "1vh";

  if (day === 14) {
    button.classList.add('special-date');
    text.style.color = "red";
    text.innerHTML = "YYAASSS PERFECT DAYY";


    setTimeout(() => {
      window.location.href = 'valentines-place.html';
    }, 5000);
  } else if (day < 14) {
    text.innerHTML = "Nahhh thats too early •~•";
  } else if (day > 14) {
    text.innerHTML = "but thats too late tho :c";
  }

}

// Generate the calendar when the page loads
generateCalendarGrid();