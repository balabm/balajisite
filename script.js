document.addEventListener("DOMContentLoaded", () => {
    // Loading Screen
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => loadingScreen.style.display = "none", 1000);

    // Back-to-top Button
    const backToTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Dark Mode Toggle
    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    };

    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode) document.body.classList.add("dark-mode");

    document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);

    // Form Validation
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    });

    // Set current year in the footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Initialize carousel
    const testimonialCarousel = document.getElementById('testimonialCarousel');
    if (testimonialCarousel) {
        new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000,
            ride: 'carousel'
        });
    }
});
