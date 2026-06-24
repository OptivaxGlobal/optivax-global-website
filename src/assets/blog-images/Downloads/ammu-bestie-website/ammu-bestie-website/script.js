const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((element) => observer.observe(element));

const modal = document.getElementById('modal');
const forgiveBtn = document.getElementById('forgiveBtn');
const closeModal = document.getElementById('closeModal');
const surpriseBtn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');

forgiveBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
});

surpriseBtn.addEventListener('click', () => {
  surprise.classList.toggle('show');
  surpriseBtn.textContent = surprise.classList.contains('show') ? 'Hide Surprise' : 'Open Surprise';
});

function createHeart() {
  const heart = document.createElement('span');
  heart.textContent = ['♡', '💗', '✨', '🌸'][Math.floor(Math.random() * 4)];
  heart.style.position = 'fixed';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.bottom = '-30px';
  heart.style.fontSize = `${Math.random() * 12 + 14}px`;
  heart.style.opacity = '0.75';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '2';
  heart.style.animation = `rise ${Math.random() * 3 + 5}s linear forwards`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8500);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes rise {
    from { transform: translateY(0) rotate(0deg); opacity: 0; }
    10% { opacity: .75; }
    to { transform: translateY(-105vh) rotate(24deg); opacity: 0; }
  }
`;
document.head.appendChild(style);

setInterval(createHeart, 1050);
