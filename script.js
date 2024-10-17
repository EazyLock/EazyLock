// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Download function
function download() {
    const downloadMessage = document.getElementById('downloadMessage');
    downloadMessage.textContent = "Not available yet."; // Update the message
    downloadMessage.classList.remove('hidden');
}
