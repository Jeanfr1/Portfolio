document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Project image hover effect
  document.querySelectorAll(".project img").forEach((image) => {
    image.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.05)";
    });

    image.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Link hover effect
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("mouseover", function () {
      this.style.color = "#ffdd57"; // Highlight color
    });

    link.addEventListener("mouseout", function () {
      this.style.color = ""; // Revert to original color
    });
  });
});
