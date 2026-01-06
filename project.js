/* =========================================================
   SMOOTH SCROLL NAVIGATION
========================================================= */
const navAnchors = document.querySelectorAll('nav a[href^="#"]');

navAnchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        const href = anchor.getAttribute('href');

        // Scroll to top for empty or "#" links
        if (!href || href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* =========================================================
   ACTIVE NAV LINK ON SCROLL
========================================================= */
const pageSections = document.querySelectorAll('main section');
const navItems = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let activeSectionId = '';

    pageSections.forEach(section => {
        const offsetTop = section.offsetTop - 200;
        if (window.scrollY >= offsetTop) {
            activeSectionId = section.id;
        }
    });

    navItems.forEach(link => {
        link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${activeSectionId}`
        );
    });
});

/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */
const sectionRevealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                sectionRevealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

pageSections.forEach(section => {
    sectionRevealObserver.observe(section);
});

/* =========================================================
   SCROLL TO TOP BUTTON
========================================================= */
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopButton);

Object.assign(scrollToTopButton.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'none',
    zIndex: '1000'
});

window.addEventListener('scroll', () => {
    scrollToTopButton.style.display =
        window.scrollY > 400 ? 'flex' : 'none';
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
