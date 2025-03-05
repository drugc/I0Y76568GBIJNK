const overlay = document.getElementById('overlay');
const content = document.querySelector('.content');
const audio = document.querySelector('audio');
const terminalLinks = document.querySelectorAll('.terminal-link');

function isMobileDevice() {
  return /Android|webOS|iPhone|Windows|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


if (isMobileDevice()) {
  terminalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');

      switch (target) {
        case 'main':
          overlay.style.display = 'none';
          content.classList.remove('hidden');
          audio.play();
          break;
        case 'source':
          window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
          break;
        case 'web':
          window.open('https://imer.best', '_blank');
          
          break;
      }
    });
  });

 
} 

