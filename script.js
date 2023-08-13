// Navbar scroll
const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Typing effect on the paragraph
const texts = ["The Programmer", "The Athelete", "Network With Me!"];
const typingDelay = 100; // Delay between typing each character
const erasingDelay = 50; // Delay between erasing each character
const newTextDelay = 2000; // Delay before typing the next text

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingTextElement = document.querySelector('.typing-text');
const cursorElement = document.createElement('span'); // Create a new <span> element for the cursor
cursorElement.className = 'typing-cursor';
typingTextElement.appendChild(cursorElement);

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, newTextDelay);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(type, isDeleting ? erasingDelay : typingDelay);
  }

  if (isDeleting || charIndex < currentText.length) {
  cursorElement.style.fontSize = '15px'; // Set the cursor font size to match the text font size
} else {
  cursorElement.style.fontSize = '0'; // Hide the cursor when text is fully typed
}
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, newTextDelay);
});

// Image
window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    let parallaxContainer = document.querySelector('.hero');
    parallaxContainer.style.backgroundPositionY = (scrolled * 0.5) + 'px';
});