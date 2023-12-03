let currentIndex = 0;

function cambiarImagen(direction) {
    const contenedor = document.querySelector('.contenedor-imagenes');
    const imagenes = document.querySelectorAll('.contenedor-imagenes img');
    const totalImagenes = imagenes.length;
    const anchoImagen = imagenes[0].clientWidth;

    currentIndex = (currentIndex + direction + totalImagenes) % totalImagenes;

    contenedor.style.transform = `translateX(${-currentIndex * anchoImagen}px)`;
}