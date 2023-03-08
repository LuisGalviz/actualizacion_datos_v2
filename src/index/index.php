<?php
   require('../../php/cas_login.php');
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <link rel="stylesheet" type="text/css" href="index.css" async>
    <link rel="stylesheet" type="text/css" href="../modal/modal.css" async>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" async>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" ></script>
    <script src="https://kit.fontawesome.com/4dbf0b25da.js" crossorigin="anonymous" async></script>
    <?php
    require_once '../modal/modal.php';
    ?>
</head>

<body>
<div id="loader">
  <div class="spinner"></div>
</div>
    <div class="header">
        <div class="header_black"></div>
        <div class="header_yellow"></div>
    </div>
    <div class="container">
        <div class="container">
            <h1 class="gotham_title">
                Eres parte de la comunidad más grande de Uninorte.
            </h1>
            <p class="gotham_p">Porque te queremos cerca siempre, ayúdanos a <strong>validar</strong> , <strong>completar</strong> y <strong>actualizar</strong> tus datos.</p>
            <p class="gotham_p2">Última actualización: <?php echo "12/03/2016"; ?>. <br> Aquellos marcados con <i class="fa fa-warning fa_custom red_p"></i> podrían estar desactualizados.</p>
        </div>
        <div class="container_form">
            <p class="yellow_p center_text"><i class="fa fa-envelope"></i> Correos electrónicos</p>
            <button type="button" id="button" onclick="modal('.bg-modal')" class="container_button">
                <p class="container-button-title">Personal <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>
                <p class="gotham_p5"><i class="fa-solid fa-triangle-exclamation"></i> <span id='emailParticularAjax'></span> ...</p>
            </button>
            <button type="button" id="button2" onclick="modal('.bg-modal-2')" class="container_button">
                <p class="container-button-title">Corporativo <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>
                <p class="gotham_p5"><i class="fa-solid fa-triangle-exclamation"></i> <span id='emailFuncAjax'></span> </p>
            </button>
        </div>
        <div class="container_form">
            <p class="yellow_p center_text"><i class="fa fa-phone phone_custom"></i> Teléfonos </p>
            <button type="button" id="button3" onclick="modal('.bg-modal-3')" class="container_button">
                <p class="container-button-title">Celular <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>
                <p class="gotham_p5"><i class="fa-solid fa-triangle-exclamation"></i> <span id='telParticularAjax'></span>...</p>
            </button>
            <button type="button" id="button4" onclick="modal('.bg-modal-4')" class="container_button">
                <p class="container-button-title">Fijo <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>
                <p class="gotham_p5"><i class="fa-solid fa-triangle-exclamation"></i><span id='telTepeAjax'></span></p>
            </button>
        </div>
        <div class="container_form">
            <p class="yellow_p center_text"><i class="fa fa-id-card-o"></i> Estado laboral </p>
            <button type="button" id="button5" onclick="modal('.bg-modal-5')" class="container_button">
                <p class="container-button-title">Ocupación primaria <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>
                <p class="gotham_p5"><i class="fa-solid fa-triangle-exclamation"></i> <span id='estadoAjax'></span></p>
            </button>
        </div>
        <div class="container_form">
            <p class="yellow_p center_text"><i class="fa fa-map-marker phone_custom"></i> Direcciones </p>
            <button type="button" id="button6" onclick="modal('.bg-modal-6')" class="container_button">
                <p class="container-button-title">Permanente <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>
                <p class="gotham_p5"><i class="fa-solid fa-triangle-exclamation"></i><span id='dirPermanenteAjax'></span></p>
            </button>
            <button type="button" id="button7" onclick="modal('.bg-modal-7')" class="container_button">
                <p class="container-button-title">Temporal <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>
                <p class="gotham_p5"><i class="fa-solid fa-triangle-exclamation"></i> <span id='dirTemporalAjax'></span></p>
            </button>

        </div>
        <div class="container-confirmar-form">
            <div class="row">
                <div class="col-1">
                    <input type="checkbox" id="conditions">
                </div>
                <div class="col-7"> <label class="container-button-title" for="conditions">Mis datos están correctos</label></div>
            </div>
            <button class="button-confirmar" id="button8">CONFIRMAR</button>
        </div>
    </div>
</body>
</html>