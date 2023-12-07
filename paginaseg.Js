document.addEventListener("DOMContentLoaded", function () {
    const opciones = document.getElementById("opciones");
    const slimeSection = document.getElementById("slime");
    const recursosContenido = document.getElementById("recursos-contenido");

    document.getElementById("seleccion").addEventListener("change", function () {
        const selectedValue = this.value;

        // Redirige a otra página según la selección
        if (selectedValue === "slime") {
            window.location.href = "paginaseg.html";
        } else if (selectedValue === "recursos") {
            window.location.href = "recursos.html";
        } else if (selectedValue === "npc") {
            window.location.href = "npc.html";
        } else {
            // Oculta todas las secciones si no hay selección válida
            slimeSection.style.display = "none";
            recursosContenido.style.display = "none";
        }

        // Muestra la sección seleccionada y activa el carrusel si es necesario
        if (selectedValue === "slime") {
            slimeSection.style.display = "flex";
            activateGlide();
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
