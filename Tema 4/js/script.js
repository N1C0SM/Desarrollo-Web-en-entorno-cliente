 function validarFormulario() {
    var checkbox1 = document.getElementById("nuevaPestana");
     var checkbox2 = document.getElementById("mismoLugar");
    if (checkbox1.checked && checkbox2.checked) {
        alert("Solo puedes seleccionar una opción: abrir en una nueva pestaña o en la misma.");
        return false;
    }

    if (!checkbox1.checked && !checkbox2.checked) {
    alert("Debes seleccionar una opción de apertura.");
    return false;
    }

    var url = document.getElementById("url").value;
    if (checkbox1.checked) {
    window.open(url, "_blank");
    } else {
    window.location.href = url;
    }
    return false;
}