// ========================================
// HULI NEWS — Interactive Functionality
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // --- Header Date ---
    const headerDate = document.getElementById('header-date');
    if (headerDate) {
        const now = new Date();
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        headerDate.textContent = now.getDate() + ' ' + months[now.getMonth()];
    }

    // --- Search Overlay ---
    const searchBtn = document.getElementById('search-btn');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');

    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        setTimeout(() => searchInput.focus(), 350);
    });

    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchOverlay.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // --- Mobile Menu ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') &&
            !mobileMenu.contains(e.target) &&
            !menuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // --- Active nav link ---
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.mobile-nav-link').forEach(l => l.classList.remove('active'));
            const text = e.target.textContent;
            document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => {
                if (l.textContent === text) l.classList.add('active');
            });
            mobileMenu.classList.remove('active');
        });
    });

    // --- Header shrink on scroll ---
    const header = document.querySelector('.main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
        lastScroll = currentScroll;
    }, { passive: true });

    // --- Update time dynamically ---
    const timeElements = document.querySelectorAll('.card-time');
    const times = ['Just now', '15m ago', '30m ago', '1h ago', '2h ago', '3h ago', '4h ago', '5h ago', '6h ago', '7h ago', '8h ago', '9h ago'];
    timeElements.forEach((el, i) => {
        if (i < times.length) el.textContent = times[i];
    });
});
