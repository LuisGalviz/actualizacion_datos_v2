<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link href="https://fonts.cdnfonts.com/css/gotham" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="index.css">
    <link rel="stylesheet" type="text/css" href="../modal/modalGet/modalGet.css">
    <link rel="stylesheet" type="text/css" href="../modal/modalPost/modalPost.css">
    <script src="../../js/modal.js"></script>
    <?php
    require_once '../modal/modalGet/modalGet.php';
    require_once '../modal/modalPost/modalPost.php'
    ?>

</head>

<body class="margin_out">
    <div class="header">
        <div class="header_black"></div>
        <div class="header_yellow"></div>
    </div>
    <div class="container">
        <div class="container_head">
            <h1 class="gotham_title">
                Eres parte de la comunidad más grande de Uninorte.
            </h1>
            <p class="gotham_p">Porque te queremos cerca siempre, ayúdanos a <strong>validar</strong> , <strong>completar</strong> y <strong>actualizar</strong> tus datos.</p>
            <p class="gotham_p2">Última actualización: <?php echo "12/03/2016"; ?>. <br> Aquellos marcados con <i class="fa fa-warning fa_custom"></i> podrían estar desactualizados.</p>

        </div>

        <div class="container_form">
            <p class="yellow_p gotham_p3"><i class="fa fa-envelope"></i> Correos electrónicos</p>
            <button type="button" id="button" onclick="modal('button','.bg-modal')" class="container_button" form="formulario1">
                <p class="gotham_p4">Personal <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>

                <p class="gotham_p5"><i class="fa fa-warning fa_custom"></i><?php echo $emailP = $_SESSION['emailP']; ?> ...</p>
            </button>
            <div class="espacio"></div>
            <button type="button" id="button2" onclick="modal('button2','.bg-modal-2')" class="container_button" form="formulario2">
                <p class="gotham_p4">Corporativo <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>
                <p class="gotham_p5"><i class="fa fa-warning fa_custom"></i><?php echo $emailF = $_SESSION['emailF']; ?> </p>
            </button>
        </div>
        <br>
        <div class="container_form">
            <p class="yellow_p gotham_p3"><i class="fa fa-phone phone_custom"></i> Teléfonos </p>
            <button type="button" id="button3" onclick="modal('button3','.bg-modal-3')" class="container_button" form="formulario3">
                <p class="gotham_p4">Celular <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>
                <p class="gotham_p5"><i class="fa fa-warning fa_custom"></i> <?php echo $telP = $_SESSION['telP'];
                                                                                $telP ?>...</p>
            </button>
            <div class="espacio"></div>
            <button type="button" id="button4" onclick="modal('button4','.bg-modal-4')" class="container_button" form="formulario4">
                <p class="gotham_p4">Fijo <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>
                <p class="gotham_p5"><i class="fa fa-warning fa_custom"></i><?php echo $telF = $_SESSION['telF'];
                                                                            $telF ?></p>
            </button>
        </div>
        <br>
        <div class="container_form">
            <p class="yellow_p gotham_p3"><i class="fa fa-id-card-o"></i> Estado laboral </p>
            <button type="button" id="button5" onclick="modal('button5','.bg-modal-5')" class="container_button" form="formulario5">
                <p class="gotham_p4">Ocupación primaria <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>
                <p class="gotham_p5"><i class="fa fa-warning fa_custom"></i> <?php echo $estadoLaboral = $_SESSION['estadoLaboral'];
                                                                                $estadoLaboral; ?></p>
            </button>
        </div><br>
        <div class="container_form">
            <p class="yellow_p gotham_p3"><i class="fa fa-map-marker phone_custom"></i> Direcciones </p>
            <button type="button" id="button6" onclick="modal('button6','.bg-modal-6')" class="container_button" form="formulario6">
                <p class="gotham_p4">Permanente <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>
                <p class="gotham_p5"><i class="fa fa-warning fa_custom"></i> <?php echo $dirP = $_SESSION['dirP'];
                                                                                $dirP; ?></p>
            </button>
            <div class="espacio"></div>
            <button type="button" id="button7" onclick="modal('button7','.bg-modal-7')" class="container_button" form="formulario7">
                <p class="gotham_p4">Temporal <i class="fa fa-angle-right angle_up_custom yellow_p"></i></p>
                <p class="gotham_p5"><i class="fa fa-warning fa_custom"></i> <?php echo $dirT = $_SESSION['dirT'];
                                                                                $dirT; ?></p>
            </button>
            <br>
            <div class="row">
                <div class="column-2 left">
                    <input type="checkbox" id="conditions" value="1" onchange="change()">

                </div>
                <div class="column-check rigth"> <label class="gotham_p4" for="conditions">Mis datos están correctos</label></div>
            </div>
            <div>
                <button type="button" id="button8" onclick="clickActualizar('.button')" form="formulario">ACTUALIZAR</button>
            </div>
        </div>
    </div>
</body>

</html>