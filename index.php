<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ejemplo</title>
    <link href="bootstrap-5.3.1-dist/css/bootstrap.min.css" rel="stylesheet">

</head>

<body>
    <div class="center-box">
        <form id="form" class="px-4 py-3">
            <div class="mb-3 input-group">
                <span class="input-group-text custom-icon"><i class="fas fa-user green-icon"></i></span>
                <input type="text" name="usuario" placeholder="Usuario"
                    onblur="javascript:CompruebaTieneAlgoInput(this)"
                    class="form-control  inputLleno form-control-login" id="Usuario" value="Prueba">
            </div>
            <div class="mb-3 input-group">
                <span class="input-group-text custom-icon"><i class="fas fa-lock green-icon"></i></span>
                <input type="password" placeholder="Contraseña" onblur="javascript:CompruebaTieneAlgoInput(this)"
                    class="form-control inputLleno form-control-login" id="Password" value="Prueba">
            </div>
            <button type="button" onclick="logueo()" id="btn_submit" class="btn btn-primary">Ingresar</button>
        </form>
    </div>


    <script src="bootstrap-5.3.1-dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/code.jquery.com_jquery-3.7.1.min.js"></script>
    <script src="js/funciones_LogIn.js"></script>
</body>

</html>