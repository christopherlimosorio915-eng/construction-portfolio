/* =====================================================
   INITIALIZE ICONS
===================================================== */

lucide.createIcons();


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* CLOSE MOBILE MENU */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   ANIMATED COUNTERS
===================================================== */

const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;

const counterObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting &&
                    !counterStarted
                ) {

                    counterStarted = true;

                    counters.forEach(counter => {

                        const target =
                            Number(
                                counter.dataset.target
                            );

                        let current = 0;

                        const increment =
                            target / 60;

                        const updateCounter = () => {

                            current += increment;

                            if (current < target) {

                                counter.textContent =
                                    Math.ceil(current);

                                requestAnimationFrame(
                                    updateCounter
                                );

                            } else {

                                counter.textContent =
                                    target + "+";

                            }

                        };

                        updateCounter();

                    });

                }

            });

        },
        {
            threshold: 0.5
        }
    );


if (counters.length) {

    counterObserver.observe(counters[0]);

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const button =
        contactForm.querySelector("button");

    button.innerHTML =
        "Message Sent ✓";

    button.style.pointerEvents = "none";

    setTimeout(() => {

        button.innerHTML = `
            Send Message
            <i data-lucide="send"></i>
        `;

        lucide.createIcons();

        button.style.pointerEvents = "auto";

        contactForm.reset();

    }, 3000);

});


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================================
   PHOTO PARALLAX EFFECT
===================================================== */

const photo =
    document.querySelector(".photo-frame");


document.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 900) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 50;

    const y =
        (window.innerHeight / 2 - event.clientY) / 50;

    photo.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* RESET PHOTO */

document.addEventListener("mouseleave", () => {

    photo.style.transform = "";

});