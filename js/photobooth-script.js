const photoboothBtn = document.querySelector('.photobooth-btn');

photoboothBtn.addEventListener('click', () => {
    photoboothBtn.classList.add('heartbeat');
    setTimeout(() => {
        window.location.href = 'photobooth-album.html';
      }, 1000);
});