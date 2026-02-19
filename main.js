// Toggle Dark/Light Mode
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});

// Scroll Reveal Animations
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .project-grid, .contact form",
  { origin: "bottom" },
);
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-content p", { origin: "right" });
// Education
const educationData = [
  {
    degree: "Bachelor of Computer Science",
    university: "Assiut University",
    year: "2024 - 2028",
    icon: "fas fa-user-graduate",
  },
];

const eduContainer = document.getElementById("education-container");

educationData.forEach((edu) => {
  eduContainer.innerHTML = `
        <div class="glass-card edu-card">
            <i class="${edu.icon} edu-icon"></i>
            <h3>${edu.degree}</h3>
                        <p style="color: var(--accent-blue); font-weight: bold; margin-bottom: 10px;">${edu.university}</p>

            <span class="edu-date">${edu.year}</span>
          
        </div>
    `;
});
