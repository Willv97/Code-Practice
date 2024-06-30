// Function to open and close menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links"); //Target elements
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")//Add or remove open class when clicked
    icon.classList.toggle("open")
}