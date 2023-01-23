<?php
require_once '../../util/post/postEmail.php';
require_once '../../util/post/postTel.php';
require_once '../../util/post/postDir.php';
?>
<div class="inputPostEmailP" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostEmailP')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-envelope"></i> Correo Personal</p>

        <?php
        if (array_key_exists('postEmail', $_POST)) {
            $_SESSION['emailP'] = $_POST['emailP'];
            postEmail('PART', $_POST["emailP"]);
        }
        ?>
        <form action="" id="formulario1" method="post" onsubmit="setTimeout(function(){window.location.reload();},10);">
            <input type="email" placeholder="Nuevo correo de contacto" name="emailP" value=''>
            <button type="submit" name="postEmail" class="button">GUARDAR</button>

        </form>
    </div>
</div>

<div class="inputPostEmailF" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostEmailF')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-envelope"></i> Correo Corporativo</p>

        <?php
        if (array_key_exists('postEmailF', $_POST)) {
            postEmail('FUNC', $_POST["emailF"]);
        }
        ?>

        <form action="" id="formulario1" method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">
            <input type="email" placeholder="Nuevo correo de contacto" name="emailF" value=''>
            <button type="submit" name="postEmailF" class="button" value="postEmailF">GUARDAR</button>
        </form>
    </div>
</div>

<div class="inputPostTelPart" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostTelPart')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-envelope"></i> Telefono Personal</p>

        <?php
        if (array_key_exists('postTelPart', $_POST)) {
            $_SESSION['telP'] = $_POST['telPart'];
            postTel('CELU', $_POST["telPart"]);
        }
        ?>

        <form action="" id="formulario1" method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">
            <input type="number" placeholder="Nuevo telefono de contacto" name="telPart" value=''>
            <button type="submit" name="postTelPart" class="button" value="postTelPart">GUARDAR</button>
        </form>
    </div>
</div>

<div class="inputPostTelTepe" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostTelTepe')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-envelope"></i> Telefono Fijo</p>

        <?php
        if (array_key_exists('postTelTepe', $_POST)) {
            $_SESSION['telF'] = $_POST['telTepe'];
            postTel('TEPE', $_POST["telTepe"]);
        }
        ?>

        <form action="" id="formulario1" method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">
            <input type="number" placeholder="Nuevo telefono de contacto" name="telTepe" value=''>
            <button type="submit" name="postTelTepe" class="button" value="postTelTepe">GUARDAR</button>
        </form>
    </div>
</div>

<div class="inputPostDirT" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostDirT')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-envelope"></i> Direccion Permanente</p>

        <?php
        if (array_key_exists('postDirT', $_POST)) {
            postDir('TEPE', $_POST["dirTemporal"]);
        }
        ?>

        <form action="" id="formulario1" method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">
            <input type="number" placeholder="Nuevo telefono de contacto" name="dirTemporal" value=''>
            <button type="submit" name="postDir" class="button" value="postDirT">GUARDAR</button>
        </form>
    </div>
</div>