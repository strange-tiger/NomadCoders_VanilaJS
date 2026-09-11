const body = document.querySelector('body');

body.style.backgroundColor = 'purple';
function changeWindowColor() {
  if (window.innerWidth > 800) {
    body.style.backgroundColor = 'yellow';
  } else if (window.innerWidth <= 800 && window.innerWidth > 400) {
    body.style.backgroundColor = 'purple';
  } else {
    body.style.backgroundColor = 'blue';
  }
}

window.addEventListener('resize', changeWindowColor);
