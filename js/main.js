// Typing Effect
const text = "AI Engineer | Frontend Developer ";
let i = 0;

function typing() {
    document.querySelector(".typing").textContent = text.slice(0, i++);
    if (i <= text.length) setTimeout(typing, 70);
}
typing();

// Reveal Animation
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Active Navbar
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 120;

    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
    });
});