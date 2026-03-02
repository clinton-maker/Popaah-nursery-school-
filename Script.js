
// Button & Form Interactions
function showMessage() {
    alert("Thank you for your interest in Popaah Nursery School! 🌈");
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Your message has been sent successfully! 📩");
            form.reset();
        });
    }

    // Floating shapes random animation delay
    const shapes = document.querySelectorAll(".floating-shape");
    shapes.forEach((shape) => {
        const delay = Math.random() * 5;
        shape.style.animationDelay = `${delay}s`;
    });
});
