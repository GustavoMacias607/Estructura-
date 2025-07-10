//Metodo para hacer la consulta de los usuarios
function GetUsuario() {
    const datos = {};
    let json = JSON.stringify(datos)
    let url = "../ws/Usuarios/wsGetUsuarios.php";
    $.post(url, json, (responseText, status) => {
        try {
            if (status == "success") {
                let resp = JSON.parse(responseText);
                if (resp.estado == "OK") {
                    datos.usuarios = resp.usuarios;
                }
            } else {
                throw e = status;
            }
        } catch (error) {
            console.error(error);
        }
    });
}

//Metodo que valida el formulario para agregar un usuario
function AddUsuarioValidar() {
    const datos = {};
    datos.nombre = nombre = "Juanito";
    datos.usuario = usuario = "juanito123";

    let json = JSON.stringify(datos);
    let url = "../ws/Usuarios/wsAddUsuario.php";
    $.post(url, json, (responseText, status) => {
        try {
            if (status == "success") {
                let resp = JSON.parse(responseText);
                if (resp.estado == "OK") {
                    console.log("Usuario agregado correctamente");
                }
            } else {
                throw e = status;
            }
        } catch (error) {
            alert("Error: " + error)
        }
    });
}
