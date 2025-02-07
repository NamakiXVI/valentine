// Move the "No" button randomly
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gif = document.getElementById('gifContainer');
const noTexts = ["no", "no :c", "pleaseee","cmon babe >:c", "please babe just gimme a chancee", ">:C", "PLEASEEE", "u sure?", "u rlly sure bout that?", "maybe think again", "nuh uh", "yes is also an option", "youre really sure? :c", "plzz", "'yes' aint thaat bad", "just one timee"];
noBtn.addEventListener('click', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  changeNoText();
});

// Cursor light effect
document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--y', `${e.clientY}px`);
});

// Function to change the No button text randomly
function changeNoText() {
  const randomIndex = Math.floor(Math.random() * noTexts.length);
  noBtn.textContent = noTexts[randomIndex];
}

yesBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Show GIF and thank you text
  document.querySelector('h1').innerHTML = "Thankk youuu babee";

  gif.innerHTML = `
    <img src="img/cute_hug.gif" alt="Hug" style="width: 100%; height: 100%">
  `;
  
  // Redirect after 5 seconds
  setTimeout(() => {
    window.location.href = 'valentine.html';
  }, 5500);
});