function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('visible', visible)
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
});


