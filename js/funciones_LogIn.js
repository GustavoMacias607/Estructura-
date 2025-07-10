function logueo() {

    window.location.href = "app/index.php";
    // try {
    //     let vacio = false;
    //     let PrimerValorVacio;
    //     const datos = {};
    //     let usuario = document.querySelector('#Usuario');
    //     if (usuario.value == "") {
    //         usuario.classList.add("inputVacio");
    //         usuario.placeholder = "Campo usuario vacío"
    //         vacio = true;
    //         PrimerValorVacio = usuario;
    //     }
    //     datos.usuario = usuario.value;

    //     let password = document.querySelector('#Password');
    //     if (password.value == "") {
    //         password.classList.add("inputVacio");
    //         password.placeholder = "Campo constraseña vacío"
    //         vacio = true;
    //         if (!PrimerValorVacio) {
    //             PrimerValorVacio = password;
    //         }
    //     }
    //     datos.password = password.value;
    //     if (vacio) {
    //         PrimerValorVacio.focus();
    //         return;
    //     }
    //     const json = JSON.stringify(datos);
    //     console.log(json)
    //     $.post("ws/wsLogin.php", json, (responseText, status) => {

    // try {
    //     console.log(responseText);
    //     if (status == "success") {
    //         res = JSON.parse(responseText);
    //         if (res.estado == "OK") {
    //             window.location.href = "app/index.php";
    //         } else {
    //             mensajePantallaLogIn(res.estado, false);
    //         }
    //     } else {
    //         console.log(status);
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
    //     });
    // } catch (error) {
    //     console.log(error);
    // }
}
