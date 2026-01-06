/* =========================================================
   DOM REFERENCES
========================================================= */
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll('section');

/* =========================================================
   SMOOTH SCROLL (INTERNAL LINKS ONLY)
========================================================= */
const smoothScroll = (event) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

navLinks.forEach(link => link.addEventListener('click', smoothScroll));

/* =========================================================
   ACTIVE NAV LINK ON SCROLL
========================================================= */
const updateActiveNav = () => {
    let activeSection = '';

    sections.forEach(section => {
        const offset = section.offsetTop - 150;
        if (window.scrollY >= offset) {
            activeSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${activeSection}`
        );
    });
};

window.addEventListener('scroll', updateActiveNav);

/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    { threshold: 0.15 }
);

sections.forEach(section => revealObserver.observe(section));

/* =========================================================
   SCROLL TO TOP BUTTON
========================================================= */
const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.textContent = '↑';

    Object.assign(button.style, {
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

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        button.style.display = window.scrollY > 400 ? 'block' : 'none';
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

createScrollTopButton();
