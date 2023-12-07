document.addEventListener("DOMContentLoaded", function () {
    const opciones = document.getElementById("opciones");
    const slimeSection = document.getElementById("slime");
    const recursosContenido = document.getElementById("recursos-contenido");

    document.getElementById("seleccion").addEventListener("change", function () {
        const selectedValue = this.value;

        // Oculta todas las secciones
        slimeSection.style.display = "none";
        recursosContenido.style.display = "none";

        // Muestra la sección seleccionada y activa el carrusel si es necesario
        if (selectedValue === "slime") {
            slimeSection.style.display = "flex";
            activateGlide();
        } else if (selectedValue === "recursos") {
            recursosContenido.style.display = "block";
        }
    });

    // Función para activar el carrusel Glide
    function activateGlide() {
        try {
            new Glide('.glide', {
                type: 'carousel',
                perView: 3,
                focusAt: 'center',
                startAt: 0,
                breakpoints: {
                    800: {
                        perView: 1
                    },
                    480: {
                        perView: 1
                    }
                },
                rewind: true,
                peek: {
                    before: 0,
                    after: 0
                },
                direction: 'ltr' // Asegura que el patrón de dirección es correcto
            }).mount();
        } catch (error) {
            console.error('Error initializing Glide:', error);
        }
    }

    // Llama a la función para activar el carrusel al cargar la página
    activateGlide();
});
