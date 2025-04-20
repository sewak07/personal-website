const professions = ["Developer", "Video Editor", "Digital Content Creator", "Photographer"];
const target = document.querySelector(".profession");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = professions[wordIndex];
  const currentText = currentWord.substring(0, charIndex);

  target.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % professions.length;
    setTimeout(type, 800);
  }
}

type();


//for menu//
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

