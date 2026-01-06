<<<<<<< HEAD
/* ===================== SMOOTH SCROLL FOR NAV ===================== */
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ===================== ACTIVE NAV LINK ON SCROLL ===================== */
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

/* ===================== SCROLL REVEAL FOR PROJECT SECTIONS ===================== */
const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    { threshold: 0.15 }
);

sections.forEach(section => {
    revealObserver.observe(section);
});

/* ===================== SCROLL TO TOP BUTTON ===================== */
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

Object.assign(scrollTopBtn.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    padding: '10px 14px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'none',
    zIndex: '1000'
});

window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
=======
/* ===================== SMOOTH SCROLL FOR NAV ===================== */
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ===================== ACTIVE NAV LINK ON SCROLL ===================== */
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

/* ===================== SCROLL REVEAL FOR PROJECT SECTIONS ===================== */
const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    { threshold: 0.15 }
);

sections.forEach(section => {
    revealObserver.observe(section);
});

/* ===================== SCROLL TO TOP BUTTON ===================== */
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

Object.assign(scrollTopBtn.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    padding: '10px 14px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'none',
    zIndex: '1000'
});

window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
>>>>>>> 1bca4fa4482a772410a38dc48cc2cf21a5f7589c
