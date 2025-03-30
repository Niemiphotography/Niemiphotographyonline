// Taustakuvat, jotka haluat vaihtaa
const images = [
    'url("DSC00783.jpg")', // Vaihda tämä kuvan poluksi
    'url("DSC00852.jpg")',
    'url("DSC00689.jpg")',
    'url("DSC00684.jpg")',
    'url("DSC00805.jpg")',
    'url("DSC00659.jpg")'
];

let currentImageIndex = 0; // Aloitetaan ensimmäisestä kuvasta

// Vaihdetaan taustakuvaa 7 sekunnin välein
setInterval(() => {
    // Määritetään hero-osion taustakuva
    document.querySelector('.hero').style.backgroundImage = images[currentImageIndex];

    // Siirrytään seuraavaan kuvaan
    currentImageIndex = (currentImageIndex + 1) % images.length; // Käytetään % jotta indeksin luku kiertää kuvien välillä
}, 10000); // 7000 millisekuntia = 7 sekuntia

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("bookButton").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
    });
});
    // Get all portfolio images
    let portfolioImages = document.querySelectorAll('.portfolio-item img'); 

    // Get modal and modal image elements
    let modal = document.getElementById('imageModal');
    let modalImage = document.getElementById('modalImage');
    let closeModal = document.getElementById('closeModal');

    // Open modal when an image is clicked
    portfolioImages.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = image.src; // Set the modal image source to the clicked image's source
        });
    });

    // Close modal when "close" button is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal if clicked anywhere on the modal (including background and image)
    modal.addEventListener('click', function(event) {
        // Check if the clicked target is the modal background itself, not the image
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Close the modal when clicking the image inside the modal
    modalImage.addEventListener('click', function() {
        modal.style.display = 'none';
    });


