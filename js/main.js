// -----------------------------
// Neon Ripple Glow Effect
// -----------------------------
document.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple-effect");
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// -----------------------------
// Mobile Menu Toggle
// -----------------------------
const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("nav-open");
        menuBtn.classList.toggle("active");
    });
}

// -----------------------------
// Login System (Prototype Only)
// -----------------------------
function loginUser() {
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-pass").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Fake login for prototype
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
}

function signupUser() {
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#signup-pass").value;

    if (email === "" || password === "") {
        alert("Fill all fields.");
        return;
    }

    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
}

// Auto redirect if logged out
if (window.location.pathname.includes("dashboard")) {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "login.html";
    }
}

// -----------------------------
// Dashboard Card Hover Glow
// -----------------------------
const cards = document.querySelectorAll(".dash-card");

cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--xPos", `${x}px`);
        card.style.setProperty("--yPos", `${y}px`);
    });
});

// -----------------------------
// Quiz System (Basic Working Quiz)
// -----------------------------
window.startQuiz = function () {
    document.querySelector(".quiz-container").classList.add("started");
    document.querySelector(".start-btn").style.display = "none";
};

window.submitQuiz = function () {
    let score = 0;

    if (document.querySelector("input[name='q1']:checked")?.value === "correct") score++;
    if (document.querySelector("input[name='q2']:checked")?.value === "correct") score++;
    if (document.querySelector("input[name='q3']:checked")?.value === "correct") score++;

    document.querySelector(".quiz-result").innerHTML =
        `<h2>Your Score: ${score}/3</h2>`;

    document.querySelector(".quiz-result").style.display = "block";
};

// -----------------------------
// Smooth Page Fade-In
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});
