



// Inicialización de AOS


AOS.init({
    duration: 30000,
    easing: 'ease-in-out',
    once: true,
});





// Cambiar tema
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});




// Mostrar la imagen en grande cuando se hace clic en la imagen
function openModal(imgSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("largeImage");
    modal.style.display = "block"; // Muestra el modal
    modalImg.src = imgSrc; // Usa la imagen que se pasó al hacer clic
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Cierra el modal
}

// Descargar imagen cuando se hace clic en el botón de "Descargar"
const downloadButtons = document.querySelectorAll('.boton');
downloadButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que el botón abra la imagen en grande
        const imageUrl = this.getAttribute('data-image-url');
        const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            });
    });
});

// Seleccionar todos los botones
const botones = document.querySelectorAll('.boton');
botones.forEach((boton, index) => {
    boton.addEventListener('click', function() {
        const mensaje = document.querySelector(`.mensaje${index + 1}`); // Selecciona el mensaje correspondiente
        mensaje.style.display = 'block';
        setTimeout(function() {
            mensaje.style.display = 'none';
        }, 10000);
    });
});





// Cuando el usuario desplaza hacia abajo 20px desde la parte superior del documento, muestra el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Cuando el usuario hace clic en el botón, desplázate hacia la parte superior del documento
function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}


