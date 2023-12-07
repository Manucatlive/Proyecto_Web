document.addEventListener("DOMContentLoaded", function () {
    console.log("Cambio detectado");
    var selectElement = document.getElementById("ubicacionSelect");

    
    selectElement.addEventListener("change", function () {
        
        var selectedValue = selectElement.value;

       
        if (selectedValue === "ubi2") {
           
            window.location.href = "pagmapa2.html";
        }
        if (selectedValue === "ubi1") {
           
            window.location.href = "pagmapa.html";
        }
    });
});