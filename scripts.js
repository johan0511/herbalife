// Función para abrir el modal
document.getElementById("openLoginModal").addEventListener("click", function() {
    document.getElementById("loginModal").style.display = "flex";
    document.getElementById("loginModal").classList.add("show-modal");
});

// Función para cerrar el modal
function closeModal() {
    document.getElementById("loginModal").classList.remove("show-modal");
    setTimeout(function() {
        document.getElementById("loginModal").style.display = "none";
    }, 300);
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
    var modal = document.getElementById('loginModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Carrusel automático
var carousel = document.querySelector('.carousel');
var carouselItems = document.querySelectorAll('.carousel-item');
var currentIndex = 0;
var timer = setInterval(function() {
    nextSlide();
}, 3000); // Cambia de imagen cada 3 segundos

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    var translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    var translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}
