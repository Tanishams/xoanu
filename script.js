// Scroll to top
document.getElementById('scrollTopBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Random memory popup
const memories = [
  "We literally started with hate… and now look at us — pure, honest, soul-deep friendship. 💞",
  "Remember that time we FaceTimed and forgot we were still on for 3 hours?! 📱⏰",
  "Our 2 AM gossips could win an award. 🏆💬",
  "That one time we matched outfits without planning. Twinsies! 👯‍♀️💖",
  "Finally… you became my family. 🫂❤️"
];

const memoryPopup = document.getElementById('memoryPopup');
const memoryText = document.getElementById('memoryText');

document.getElementById('randomMemoryBtn').addEventListener('click', () => {
  const random = memories[Math.floor(Math.random() * memories.length)];
  memoryText.textContent = random;
  memoryPopup.style.display = 'block';
  setTimeout(() => {
    memoryPopup.style.display = 'none';
  }, 4000);
});

// Giggle sound
const giggleSound = document.getElementById('giggleSound');
document.getElementById('giggleBtn').addEventListener('click', () => {
  giggleSound.play();
});

// Surprise popup
document.getElementById('surpriseBtn').addEventListener('click', () => {
  const surprise = document.getElementById('surprisePopup');
  surprise.style.display = 'block';
  setTimeout(() => {
    surprise.style.display = 'none';
  }, 4000);
});

// Floating balloons and hearts generator
const symbols = ["🎈", "🎈", "🎈", "💖", "💞", "💓"];
const container = document.querySelector(".floating-container");

for (let i = 0; i < 40; i++) {
  const el = document.createElement("div");
  el.classList.add("floating");
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = (6 + Math.random() * 10) + "s";
  el.style.fontSize = (1.5 + Math.random() * 1.5) + "rem";
  el.style.animationDelay = Math.random() * 5 + "s";
  container.appendChild(el);
}
