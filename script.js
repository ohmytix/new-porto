// --- MENERAPKAN MENU HAMBURGER UNTUK MOBILE ---
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});

// Tutup menu otomatis jika salah satu link diklik (di tampilan mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- UPDATE TAHUN DI FOOTER SECARA OTOMATIS ---
document.getElementById('year').textContent = new Date().getFullYear();