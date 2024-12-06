// Select the scroll-to-top button
const scrollToTopButton = document.querySelector(".scroll-to-top");

// Function to check if the button should be visible
function toggleScrollButton() {
  const scrollTop = window.scrollY;
  const screenWidth = window.innerWidth;

  // Only show button on screens 768px or less and after 300px of scroll
  if (screenWidth <= 768 && scrollTop > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Add event listeners
window.addEventListener("scroll", toggleScrollButton);
window.addEventListener("resize", toggleScrollButton); // Recalculate visibility on resize
scrollToTopButton.addEventListener("click", scrollToTop);

// Initial check on page load
toggleScrollButton();
