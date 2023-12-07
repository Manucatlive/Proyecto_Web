document.addEventListener("DOMContentLoaded", function () {
    console.log("Cambio detectado");
    var selectElement = document.getElementById("ubicacionSelect");

    // Agrega un evento de cambio al elemento select
    selectElement.addEventListener("change", function () {
        // Obtiene el valor seleccionado
        var selectedValue = selectElement.value;

        // Verifica si el valor es "ubi2" (mapa2)
        if (selectedValue === "ubi2") {
            // Redirige a otro HTML (reemplaza "otrohtml.html" con la ruta de tu HTML)
            window.location.href = "pagmapa2.html";
        }
        if (selectedValue === "ubi1") {
            // Redirige a otro HTML (reemplaza "otrohtml.html" con la ruta de tu HTML)
            window.location.href = "pagmapa.html";
        }
    });
});