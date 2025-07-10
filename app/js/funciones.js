function opcion(op) {
    let url = "";
    let json = "";
    var funcion;
    console.log("Opción seleccionada: " + op);
    switch (op) {
        case "Inventario":
            url = "Inventario/Inventario.php";
            break;
        case "usuarios":
            url = "Usuario/Usuario.php";
            break;

        default: alert("Opción incorrecta"); return;
    }

    $.post(url, json, (responseText, status) => {
        try {
            console.log(responseText);

            if (status == "success") {
                document.getElementById("mainContent").innerHTML = responseText;
                funcion();
            } else {
                throw e = status;
            }
        } catch (error) {
            console.log("Error: " + error);
        }
    });
}
