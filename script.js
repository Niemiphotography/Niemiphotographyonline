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
    let closeModal = document.getElementById('closeModal');document.addEventListener("DOMContentLoaded", function () {
    // Taustakuvat, jotka haluat vaihtaa
    const images = [
        'url("DSC00783.jpg")', 
        'url("DSC00852.jpg")',
        'url("DSC00689.jpg")',
        'url("DSC00684.jpg")',
        'url("DSC00805.jpg")',
        'url("DSC00659.jpg")'
    ];

    let currentImageIndex = 0;

    // Vaihdetaan taustakuvaa 10 sekunnin välein
    setInterval(() => {
        document.querySelector('.hero').style.backgroundImage = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 10000);

    // Scroll to footer when clicking the contact button
    document.getElementById("bookButton").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
    });

    // Portfolio Image Modal
    let portfolioImages = document.querySelectorAll('.portfolio-item img');
    let modal = document.getElementById('imageModal');
    let modalImage = document.getElementById('modalImage');
    let closeModal = document.getElementById('closeModal');

    portfolioImages.forEach(image => {
        image.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImage.src = image.src;
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    modalImage.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // **Video Click-to-Play & Pause Functionality**
    let videos = document.querySelectorAll('.portfolio-item video');

    videos.forEach(video => {
        // Varmistetaan, että video ei käynnisty automaattisesti
        video.pause();
        video.removeAttribute("autoplay"); // Varmistetaan ettei selain pakota autoplaytä

        video.addEventListener('click', function () {
            if (video.paused) {
                // Pysäytetään muut videot ennen kuin käynnistetään tämä
                videos.forEach(v => {
                    if (v !== video) {
                        v.pause();
                    }
                });
                video.play();
            } else {
                video.pause();
            }
        });
    });
});


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


