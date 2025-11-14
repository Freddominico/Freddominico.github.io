// ==============================
//  HAMBURGER MENU TOGGLE
// ==============================
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("active");
});


// ==============================
//  HEX BUILDER + ACTIVATION ANIMATION
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    const ratings = document.querySelectorAll(".hex-rating");

    // Build 5 hexes for every rating container
    ratings.forEach(rating => {
        const level = parseInt(rating.getAttribute("data-level"));
        for (let i = 1; i <= 5; i++) {
            const hex = document.createElement("div");
            hex.classList.add("hex");
            rating.appendChild(hex);
        }
    });

    // Observer that triggers the hex activation animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rating = entry.target;
                const level = parseInt(rating.getAttribute("data-level"));
                const hexes = rating.querySelectorAll(".hex");

                // Hex lighting animation (staggered)
                hexes.forEach((hex, index) => {
                    setTimeout(() => {
                        if (index < level) {
                            hex.classList.add("active");
                        }
                    }, index * 120);
                });

                observer.unobserve(rating);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll(".hex-rating").forEach(el => observer.observe(el));
});


// ==============================
//  UNDERLINE ANIMATION ON CATEGORY SECTIONS
// ==============================
const wrappers = document.querySelectorAll(".skills-warpper");

const wrapObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            wrapObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

wrappers.forEach(w => wrapObserver.observe(w));

// ==============================
//  Hobby
// ==============================

function hiddendisplay(id) {
  const x = document.getElementById(id);
  x.style.display = (x.style.display === 'block')? 'none' : 'block';
}

document.querySelectorAll('.hobby-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });
