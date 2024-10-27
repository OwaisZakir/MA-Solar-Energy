// Select the navigation toggle button and the menu
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

// Event listener for toggle button
menuToggle.addEventListener("click", () => {
  // Toggle the 'open' class on the button and menu
  menuToggle.classList.toggle("open");
  const isOpen = menu.classList.toggle("open");

  // Update the aria-expanded attribute for accessibility
  menu.setAttribute("aria-expanded", isOpen);

  // Show or hide the menu based on the state
  menu.style.display = isOpen ? "top:13%;" : "top:-100%;";
});

// Close the menu when clicking outside
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menuToggle.classList.remove("open");
    menu.classList.remove("open");
    menu.style.display = "top:-100%;"; // Hide the menu
    menu.setAttribute("aria-expanded", "false");
  }
});
