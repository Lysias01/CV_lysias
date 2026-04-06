// MENU BURGER
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  nav.classList.toggle("active");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    burger.classList.remove("open");
    nav.classList.remove("active");
  });
});

// SCROLL SPY
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 150) current = section.id;
  });
  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Portfolio Modal
const modal = document.getElementById('project-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const projectCards = document.querySelectorAll('.project-card');
const projectBtns = document.querySelectorAll('.project-btn');

// Preload images to avoid loading delay in modal
document.addEventListener('DOMContentLoaded', () => {
  projectCards.forEach(card => {
    const imgSrc = card.dataset.img;
    if (imgSrc) {
      const preloadImg = new Image();
      preloadImg.src = imgSrc;
    }
    card.addEventListener('click', () => {
      const imgSrc = card.dataset.img;
      if (imgSrc) {
        modalImg.src = imgSrc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });
});

projectBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.project-card');
    const imgSrc = card.dataset.img;
    if (imgSrc) {
      modalImg.src = imgSrc;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});
