<?php
//session_start();
// funcionalidad de cierre de sesion
// if ($_GET['x'] == 1) {
//     unset($_SESSION);
//     session_destroy();
//     header("Location: ../index.php");
//     die();
// }
// // funcionalidad para validar sesion iniciada
// if (!isset($_SESSION['idusuario'])) {

//     header("Location: ../");
//     die();
// }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../bootstrap-5.3.1-dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../fontawesome-free-6.4.2-web/css/all.min.css" rel="stylesheet">
    <title></title>
</head>

<body>

    <button onclick="opcion('usuarios');">Usuarios</button>
    <button onclick="opcion('Inventario');">Inventario</button>

    <!-- Inicio del contenido principal -->
    <div id="mainContent">

    </div>
    <!-- Final del contenido principal -->
    <script src="../bootstrap-5.3.1-dist/js/bootstrap.bundle.min.js"></script>
    <script src="../js/code.jquery.com_jquery-3.7.1.min.js"></script>
    <script src="js/funciones.js"></script>


</body>

</html>