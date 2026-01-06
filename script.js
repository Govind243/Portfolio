<<<<<<< HEAD
/* ===================== SMOOTH SCROLL (ONLY FOR # LINKS) ===================== */
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


/* ===================== ACTIVE NAV ===================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* ===================== SCROLL REVEAL ===================== */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => {
    observer.observe(section);
});

/* ===================== SCROLL TO TOP ===================== */
const btn = document.createElement('button');
btn.textContent = '↑';
document.body.appendChild(btn);

Object.assign(btn.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    padding: '10px 14px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#2563eb',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'none',
    zIndex: '1000'
});

window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
=======
/* ===================== SMOOTH SCROLL (ONLY FOR # LINKS) ===================== */
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


/* ===================== ACTIVE NAV ===================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* ===================== SCROLL REVEAL ===================== */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => {
    observer.observe(section);
});

/* ===================== SCROLL TO TOP ===================== */
const btn = document.createElement('button');
btn.textContent = '↑';
document.body.appendChild(btn);

Object.assign(btn.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    padding: '10px 14px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#2563eb',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'none',
    zIndex: '1000'
});

window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
>>>>>>> 1bca4fa4482a772410a38dc48cc2cf21a5f7589c
