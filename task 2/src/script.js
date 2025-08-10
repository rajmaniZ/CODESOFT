const heroEl = document.getElementById('heroTyping');
const heroText = "Hi — I'm Rajmani sharma.";
let tIdx = 0;
function typeHero() {
  if (!heroEl) return;
  if (tIdx <= heroText.length) {
    heroEl.textContent = heroText.slice(0, tIdx);
    tIdx++;
    setTimeout(typeHero, 36);
  }
}
window.addEventListener('load', () => {
  typeHero();
  initReveal();
});

function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
const clearBtn = document.getElementById('clearBtn');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();

    if (!name || !email || !msg) {
      formMsg.textContent = 'Please complete all fields.';
      return;
    }

    formMsg.textContent = 'Message ready — (demo). Thanks!';
    form.reset();
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      form.reset();
      if (formMsg) formMsg.textContent = '';
    });
  }
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    if (navLinks) navLinks.style.display = open ? 'flex' : 'block';
  });
}

