<div class="inputPostEmailP" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostEmailP')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-envelope"></i> Correo Personal</p>

        <?php
        if (array_key_exists('postEmail', $_POST)) {
            postEmail('PART', $_POST["emailP"]);
        }
        ?>
        <form action="" id="formulario1" method="post">
            <input type="email" placeholder="Nuevo correo de contacto" name="emailP" value=''>
            <button type="submit" name="postEmail" class="button" value="postEmail">GUARDAR</button>
        </form>
    </div>
</div>

<div class="inputPostEmailF" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostEmailF')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-envelope"></i> Correo Personal</p>

        <?php
        if (array_key_exists('postEmail', $_POST)) {
            postEmail('FUNC', $_POST["emailF"]);
        }
        ?>

        <form action="" id="formulario1" method="post">
            <input type="email" placeholder="Nuevo correo de contacto" name="emailF" value=''>
            <button type="submit" name="postEmail" class="button" value="postEmail">GUARDAR</button>
        </form>
    </div>
</div>

<div class="inputPostTelPart" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostTelPart')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-envelope"></i> Correo Personal</p>

        <?php
        if (array_key_exists('postTel', $_POST)) {
            postTel('CELU', $_POST["telPart"]);
        }
        ?>

        <form action="" id="formulario1" method="post">
            <input type="number" placeholder="Nuevo telefono de contacto" name="telPart" value=''>
            <button type="submit" name="postTel" class="button" value="postTel">GUARDAR</button>
        </form>
    </div>
</div>

<div class="inputPostTelTepe" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostTelTepe')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-envelope"></i> Correo Personal</p>

        <?php
        if (array_key_exists('postTel', $_POST)) {
            postTel('TEPE', $_POST["telTepe"]);
        }
        ?>

        <form action="" id="formulario1" method="post">
            <input type="number" placeholder="Nuevo telefono de contacto" name="telTepe" value=''>
            <button type="submit" name="postTel" class="button" value="postTel">GUARDAR</button>
        </form>
    </div>
</div>

<div class="inputPostDirT" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostDirT')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-envelope"></i> Correo Personal</p>

        <?php
        if (array_key_exists('postDir', $_POST)) {
            postDir('TEPE', $_POST["telTepe"]);
        }
        ?>

        <form action="" id="formulario1" method="post">
            <input type="number" placeholder="Nuevo telefono de contacto" name="telTepe" value=''>
            <button type="submit" name="postDir" class="button" value="postDir">GUARDAR</button>
        </form>
    </div>
</div>

<!---<script type="text/javascript" src="javascript/evitarReenvio.js"></script>-->