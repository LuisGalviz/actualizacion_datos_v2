<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
require_once '../../util/get/get.php';
require_once '../../util/get/getPidm.php';
require_once '../../util/get/getDpto.php';
require_once '../../util/get/getPais.php';
require_once '../../util/post/postEstado.php';
require_once '../../util/put/putEstado.php';
require_once '../../util/post/postDir.php';
require_once '../../util/put/putDir.php';
require_once '../../util/post/postEmail.php';
require_once '../../util/post/postEmail.php';
require_once '../../util/post/postTel.php';
require_once '../../util/post/postDir.php';
require_once '../../util/del/delEmail.php';
?>
<div class="bg-modal">
    <div class="modal-contents">
        <button type="button" onclick="clickClose('.bg-modal')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p_un3"><i class="fa fa-envelope"></i> Correo Personal</p>
        <form>
            <label for="correoContacto" class="gotham_p_un4">Correo de contacto</label><br>
            <?php
            $data = get_info('correo', 'PART', 'emailType'); // correo particular con pidm

            if ($data) {
                echo '<div>';
                $_SESSION['emailP'] = $data[0]['emailAddress'];
                foreach ($data as $key => $value) {
                    $email = $data[$key]['emailAddress'];
                    echo    '<div class="row">';
                    echo        '<input class="right" type="email" readonly  placeholder="Correo de contacto" name="correoContacto" value=' . $email . '>';
                    echo        '<input type="button" class="button_eliminar" value="-" name="eliminarCorreoP">';
                    echo    '</div>';
                }
                echo '</div>';
            } else {
                $_SESSION['emailP'] = 'NA';
            }
            ?>
            <button type="button" id="postEmailP" onclick="modal('postEmailP','.inputPostEmailP')">NUEVO CORREO</input>
        </form>
    </div>
</div>
<div class="inputPostEmailP" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostEmailP')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p_un3"><i class="fa fa-envelope"></i> Correo Personal</p>
        <form action="" id="formulario1" method="post" onsubmit="setTimeout(function(){window.location.reload();},10);">
            <input type="email" placeholder="Nuevo correo de contacto" name="emailP" value='' required>
            <button type="submit" name="postEmail" class="button">GUARDAR</button>
        </form>
        <?php
        if (isset($_POST['postEmail'])) {
            $_SESSION['emailP'] = $_POST['emailP'];
            postEmail('PART', $_POST["emailP"]);
        }
        ?>
    </div>
</div>
<div class="bg-modal-2">
    <div class="modal-contents">
        <button type="button" onclick="clickClose('.bg-modal-2')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p_un3"><i class="fa fa-envelope"></i> Correo Corporativo</p>
        <form>
            <label for="correoContacto2" class="gotham_p_un4">Correo de contacto</label><br>
            <?php
            $data = get_info('correo', 'FUNC', 'emailType');
            if ($data) {
                echo '<div>';
                $_SESSION['emailF'] = $data[0]['emailAddress'];
                foreach ($data as $key => $value) {
                    $email = $data[$key]['emailAddress'];
                    echo    '<div class="row">';
                    echo        '<input class="right" type="email" placeholder="Correo de contacto" name="correoContacto2"  value=' . $email . '>';
                    echo        '<input type="button" value="-" class="button_eliminar disabled" disabled>';
                    echo    '</div>';
                }
                echo '</div>';
            } else {
                $_SESSION['emailF'] = 'NA';
            }
            ?>
            <!---BUTTON DISABLED------------------------------------------->
            <button class="disabled" type="button" id="postEmailF" onclick="modal('postEmailF','.inputPostEmailF')" disabled>NUEVO CORREO</button>
        </form>
    </div>
</div>
<div class="inputPostEmailF" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostEmailF')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p_un3"><i class="fa fa-envelope"></i> Correo Corporativo</p>
        <form action="" id="formulario1" method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">
            <input type="email" placeholder="Nuevo correo de contacto" name="emailF" value='' required>
            <button type="submit" name="postEmailF" class="button" value="postEmailF">GUARDAR</button>
        </form>
        <?php
        if (isset($_POST['postEmailF'])) {
            postEmail('FUNC', $_POST["emailF"]);
        }
        ?>
    </div>
</div>
<div class="bg-modal-3">
    <div class="modal-contents">
        <button type="button" onclick="clickClose('.bg-modal-3')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p_un3"><i class="fa fa-phone phone_custom"></i> Teléfono Celular</p>
        <form>
            <div style="max-height: 500px; overflow-y:auto;">
                <label for="numeroContacto" class="gotham_p_un4 padding_left_10">Número de contacto</label><br>
                <?php
                $data = get_info('telefono', 'CELU', 'phoneType'); // todos los telefonos celulares
                if ($data) {
                    echo '<div>';
                    $_SESSION['telP'] = $data[0]['phoneNumber'];
                    foreach ($data as $key => $value) {
                        $codePhone = $data[$key]['intlAccess'];
                        $phone = $data[$key]['phoneNumber'];
                        echo   '<div class="row">';
                        echo        '<div class="column-2 left">';
                        echo            '<select class="custom-select">';
                        echo                '<option value=' . $codePhone . '>' . $codePhone . '</option>';
                        echo            '</select>';
                        echo        '</div>';
                        echo        '<div class="column-2 right">';
                        echo            '<input class="right" type="number" placeholder="Número de contacto" name="numeroContacto" value=' . $phone . '>';
                        echo        '</div>';
                        echo        '<div class="column-2">';
                        echo        '<input type="button" value="-" class="button_eliminar">';
                        echo        '</div>';
                        echo   '</div>';
                    }
                    echo '</div>';
                } else {
                    $_SESSION['telP'] = 'NA';
                }
                ?>
            </div>
            <button type="button" id="postTelPart" onclick="modal('postTelPart','.inputPostTelPart')">Agregar Teléfono Celular</button>
        </form>
    </div>
</div>
<div class="inputPostTelPart" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostTelPart')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p_un3"><i class="fa fa-envelope"></i> Telefono Personal</p>
        <form action="" id="formulario1" method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">
            <input type="number" placeholder="Nuevo telefono de contacto" name="telPart" min="3000000000" required>
            <button type="submit" name="postTelPart" class="button" value="postTelPart">GUARDAR</button>
        </form>
        <?php
        if (isset($_POST['postTelPart'])) {
            $_SESSION['telP'] = $_POST['telPart'];
            postTel('CELU', $_POST["telPart"]);
        }
        ?>
    </div>
</div>
<div class="bg-modal-4">
    <div class="modal-contents">
        <button type="button" onclick="clickClose('.bg-modal-4')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p_un3"><i class="fa fa-phone phone_custom"></i> Teléfono Fijo</p>
        <form>
            <label for="numeroContacto2" class="gotham_p_un4 padding_left_10">Número de contacto</label><br>
            <?php
            $data = get_info('telefono', 'TEPE', 'phoneType'); //Todos los telefonos fijos
            if ($data) {
                echo '<div>';
                $_SESSION['telF'] = $data[0]['phoneNumber'];
                foreach ($data as $key => $value) {
                    # code...
                    $codePhone = $data[$key]['phoneArea'];
                    $phone = $data[$key]['phoneNumber'];
                    echo    '<div class="row">';
                    echo        '<div class="column-2 left">';
                    echo            '<select class="custom-select" name="numeroPais" id="numeroPais">';
                    echo                '<option value=' . $codePhone . '>' . $codePhone . '</option>';
                    echo            '</select>';
                    echo        '</div>';
                    echo        '<div class="column-2 right">';
                    echo            '<input class="right" type="number" placeholder="Número de contacto" name="numeroContacto2" value=' . $phone . '>';
                    echo        '</div>';
                    echo        '<div class="column-2">';
                    echo            '<input type="button" value="-" class="button_eliminar">';
                    echo        '</div>';
                    echo    '</div>';
                }
                echo '</div>';
            } else {
                $_SESSION['telF'] = 'NA';
            }
            ?>
            <button type="button" id="postTelTepe" onclick="modal('postTelTepe','.inputPostTelTepe')">Agregar Teléfono Fijo</button>
        </form>
    </div>
</div>
<div class="inputPostTelTepe" style='display: none'>
    <div class="modal-contents">

        <button type="button" onclick="clickClose('.inputPostTelTepe')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p_un3"><i class="fa fa-envelope"></i> Telefono Fijo</p>
        <form action="" id="formulario1" method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">
            <input type="number" placeholder="Nuevo telefono de contacto" name="telTepe" value='' min="3000000" required>
            <button type="submit" name="postTelTepe" class="button" value="postTelTepe">GUARDAR</button>
        </form>
        <?php
        if (isset($_POST['postTelTepe'])) {
            $_SESSION['telF'] = $_POST['telTepe'];
            postTel('TEPE', $_POST["telTepe"]);
        }
        ?>
    </div>
</div>
<div class="bg-modal-5">
    <div class="modal-contents-2">
        <button type="button" onclick="clickClose('.bg-modal-5')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p_un3"><i class="fa fa-id-card-o"></i> Estado Laboral</p>
        <?php
        $data = get_info('estadolaboral'); //TRAE INFORMACION DEL ESTADO LABORAL DESDE LA API 
        $_SESSION['estadoLaboral'] = $data;

        if (isset($_POST['buttonEstado'])) { //Cuando se oprima el boton con name=buttonEstado toma las 'choice' del form de abajo con method POST. se ejecuta esto
            if ($data == 'NA') {
                postEstado($_POST['choice']);
            } else {
                putEstado($_POST['choice']);
            }
        }
        ?>
        <form method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">
            <div class="container_un-estado-laboral">
                <div class="div-estado-laboral"><input class="radio-button-estado-laboral" type="radio" name="choice" value="Desempleado" id="Desempleado">
                    <label class="label-estado-laboral" for="Desempleado">Desempleado</label>
                </div>
                <div class="div-estado-laboral"><input class="radio-button-estado-laboral" type="radio" name="choice" value="Independiente" id="Independiente">
                    <label class="label-estado-laboral" for="Independiente">Independiente</label>
                </div>
                <div class="div-estado-laboral"><input class="radio-button-estado-laboral" type="radio" name="choice" value="Empleado" id="Empleado">
                    <label class="label-estado-laboral" for="Empleado">Empleado</label>
                </div>
                <div class="div-estado-laboral"><input class="radio-button-estado-laboral" type="radio" name="choice" value="Empresario" id="Empresario">
                    <label class="label-estado-laboral" for="Empresario">Empresario</label>
                </div>
                <div class="div-estado-laboral"><input class="radio-button-estado-laboral" type="radio" name="choice" value="Estudiante" id="Estudiante">
                    <label class="label-estado-laboral" for="Estudiante">Estudiante</label>
                </div>
                <div class="div-estado-laboral"><input class="radio-button-estado-laboral" type="radio" name="choice" value="Inactivo" id="Inactivo">
                    <label class="label-estado-laboral" for="Inactivo">Inactivo Laboralmente</label>
                </div>
                <div class="div-estado-laboral"><input class="radio-button-estado-laboral" type="radio" name="choice" value="Jubilado" id="Jubilado">
                    <label class="label-estado-laboral" for="Jubilado">Jubilado</label>
                </div>
            </div>
            <script>
                //COlOCA POR DEFECTO CUAL DE LAS OPCIONES ESTA SELECCIONADA DESDE EL GET
                if ('<?php echo $data ?>' != 'NA') document.getElementById('<?php echo $data ?>').checked = 'true'; //Verifica que si vino informacion desde el get del estado
            </script>
            <button type="submit" name="buttonEstado">CONFIRMAR Y CONTINUAR</button>
        </form>
    </div>
</div>
<?php
if (isset($_POST['buttonDP'])) postDir('DP', $_POST["direccionP"], $_POST["complementoP"], $_POST["barrioP"], $_POST["paisP"], $_POST["departamentoP"], $_POST["ciudadP"]);
if (isset($_POST['buttonDP2'])) putDir('DP', $_POST["direccionP2"], $_POST["complementoP2"], $_POST["barrioP2"], $_POST["paisP2"], $_POST["departamentoP2"], $_POST["ciudadP2"], '1');
if (isset($_POST['buttonDT'])) postDir('DT', $_POST["direccionT"], $_POST["complementoT"], $_POST["barrioT"], $_POST["paisT"], $_POST["departamentoT"], $_POST["ciudadT"]);
if (isset($_POST['buttonDT2'])) putDir('DT', $_POST["direccionT2"], $_POST["complementoT2"], $_POST["barrioT2"], $_POST["paisT2"], $_POST["departamentoT2"], $_POST["ciudadT2"], '1');
?>
<div class="bg-modal-6">
    <div class="modal-contents-3">
        <button type="button" onclick="clickClose('.bg-modal-6')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p_un3"><i class="fa fa-map-marker phone_custom"></i> Dirección Permanente</p>
        <?php
        $data = get_info('direccion', 'DP', 'addressType'); //get de la direccion permanente
        //Muestra si tiene datos el get o no

        if (!$data) {
            $_SESSION['dirP'] = 'No registra';
        ?> <form method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">
                <label for="direccionP" class="gotham_p_un4">Dirección Completa</label><br>
                <input type="text" placeholder="Direccion Principal" class="gotham_p_un5 input-2" id="direccionP" name="direccionP" value='' required><br>
                <input type="text" placeholder="Direccion Principal" class="gotham_p_un5 input-2" id="complementoP" name="complementoP" value='' required><br>
                <label for="barrioP" class="gotham_p_un4">Barrio</label><br>
                <input type="text" placeholder="Barrio" class="gotham_p_un5 input-2" id="barrioP" name="barrioP" value='' required><br>
                <label for="paisP" class="gotham_p_un4">País</label><br>
                <select class="custom-select-3 gotham_p_un5" name="paisP" id="paisP" required>
                    <option value='COL' selected="true">Colombia</option>
                    <?php
                    $data_pais = json_decode(file_get_contents('../../assets/paises.json'), true);
                    foreach ($data_pais as $key => $value) {
                        if ($value['codigo'] != 'COL') ?>
                        <option value='<?php echo $value['codigo']; ?>'><?php echo $value['descripcion']; ?></option>
                    <?php }
                    ?>

                </select><br>
                <label for="departamentoP" class="gotham_p_un4">Estado / Departamento</label><br>
                <select class="custom-select-3 gotham_p_un5" name="departamentoP" id="departamentoP" required>
                    <option value='08' selected="true">Atlántico</option>
                    <?php
                    $data_dpto = json_decode(file_get_contents('../../assets/dpto.json'), true);
                    foreach ($data_dpto as $key => $value) {
                        if ($value['codigo'] != '08') ?>
                        <option value='<?php echo $value['codigo']; ?>'><?php echo $value['descripcion']; ?></option>
                    <?php }
                    ?>

                </select><br>
                <label for="ciudadP" class="gotham_p_un4">Ciudad / Municipio</label><br>
                <input class="gotham_p_un5 input-2" placeholder="Ciudad/Municipio" name="ciudadP" id="ciudadP" value='' required><br>
                <button type="submit" name="buttonDP">CONFIRMAR Y CONTINUAR</button>
            </form>
            <?php
        } else {
            $_SESSION['dirP'] = $data[0]['line1'] . "<br>" . $data[0]['line2'] . "<br>" . $data[0]['city'] .  "<br>" . buscarDpto($data[0]['state'])['descripcion'] . "<br>" . buscarPais($data[0]['nation'])['descripcion'] . "<br>";
            $direccionP2 = $data[0]['line1'];
            $complementoP2 = $data[0]['line2'];
            $barrioP2 = $data[0]['line3'];
            $paisP2 = buscarPais($data[0]['nation']);
            $dptoP2 = buscarDpto($data[0]['state']);
            $ciudadP2 = $data[0]['city'];
            echo ' <form method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">';
            echo ' <label for="direccionP2" class="gotham_p_un4">Dirección Completa</label><br>';
            echo ' <input type="text" class="gotham_p_un5 input-2" id="direccionP2" name="direccionP2" value="' . $direccionP2 . '" required><br>';
            echo ' <input type="text" class="gotham_p_un5 input-2" id="complementoP2" name="complementoP2" value="' . $complementoP2 . '" required><br>';
            echo ' <label for="barrioP2" class="gotham_p_un4">Barrio</label><br>';
            echo ' <input type="text" class="gotham_p_un5 input-2" id="barrioP2" name="barrioP2" value="' . $barrioP2 . '" required><br>';
            echo ' <label for="paisP2" class="gotham_p_un4">País</label><br>';
            echo ' <select class="custom-select-3 gotham_p_un5" name="paisP2" id="paisP2" required>';
            echo ' <option value=' . $paisP2['codigo'] . ' selected="true">' . $paisP2['descripcion'] . '</option>';
            $data_pais = json_decode(file_get_contents("../../assets/paises.json"), true);
            foreach ($data_pais as $key => $value) {
                if ($value["codigo"] != $paisP2['codigo']) ?>
                <option value="<?php echo $value["codigo"]; ?>"><?php echo $value["descripcion"]; ?></option>
            <?php }
            echo ' </select><br>';
            echo ' <label for="departamentoP2" class="gotham_p_un4">Estado / Departamento</label><br>';
            echo ' <select class="custom-select-3 gotham_p_un5" name="departamentoP2" id="departamentoP2" required>';
            echo '     <option value=' . $dptoP2['codigo'] . ' selected="true">' . $dptoP2['descripcion'] . '</option>';

            $data_dpto = json_decode(file_get_contents("../../assets/dpto.json"), true);
            foreach ($data_dpto as $key => $value) {
                if ($value["codigo"] != $dptoP2['codigo']) ?>
                <option value="<?php echo $value["codigo"]; ?>"><?php echo $value["descripcion"]; ?></option>
        <?php }
            echo ' </select><br>';
            echo ' <label for="ciudadP2" class="gotham_p_un4">Ciudad / Municipio</label><br>';
            echo ' <input class="gotham_p_un5 input-2" name="ciudadP2" id="ciudadP2" value="' . $ciudadP2 . '" required><br>';
            echo ' <button type="submit" name="buttonDP2">CONFIRMAR Y CONTINUAR</button>';
            echo '  </form>';
        }
        ?>
    </div>
</div>

<div class="bg-modal-7">
    <div class="modal-contents-3">
        <button type="button" onclick="clickClose('.bg-modal-7')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p_un3"><i class="fa fa-map-marker phone_custom"></i> Dirección Temporal</p>
        <?php
        $data = get_info('direccion', 'DT',  'addressType');
        if (!$data) {
            $_SESSION['dirT'] = 'No registra';
        ?> <form method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">
                <label for="direccionT" class="gotham_p_un4">Dirección Completa</label><br>
                <input type="text" class="gotham_p_un5 input-2" placeholder="Direccion Principal" id="direccionT" name="direccionT" value='' required><br>
                <input type="text" class="gotham_p_un5 input-2" placeholder="Direccion Principal" id="complementoT" name="complementoT" value='' required><br>
                <label for="barrioT" class="gotham_p_un4">Barrio</label><br>
                <input type="text" class="gotham_p_un5 input-2" placeholder="Barrio" id="barrioT" name="barrioT" value='' required><br>
                <label for="paisT" class="gotham_p_un4">País</label><br>
                <select class="custom-select-3 gotham_p_un5" name="paisT" id="paisT" required>
                    <option value='COL' selected="true">Colombia</option>
                    <?php
                    $data_pais = json_decode(file_get_contents('../../assets/paises.json'), true);
                    foreach ($data_pais as $key => $value) {
                        if ($value['codigo'] != 'COL') ?>
                        <option value='<?php echo $value['codigo']; ?>'><?php echo $value['descripcion']; ?></option>
                    <?php }
                    ?>

                </select><br>
                <label for="departamentoT" class="gotham_p_un4">Estado / Departamento</label><br>
                <select class="custom-select-3 gotham_p_un5" name="departamentoT" id="departamentoT" required>
                    <option value='08' selected="true">Atlántico</option>
                    <?php
                    $data_dpto = json_decode(file_get_contents('../../assets/dpto.json'), true);
                    foreach ($data_dpto as $key => $value) {
                        if ($value['codigo'] != '08') ?>
                        <option value='<?php echo $value['codigo']; ?>'><?php echo $value['descripcion']; ?></option>
                    <?php }
                    ?>

                </select><br>
                <label for="ciudadT" class="gotham_p_un4">Ciudad / Municipio</label><br>
                <input class="gotham_p_un5 input-2" placeholder="Ciudad/Municipio" name="ciudadT" id="ciudadT" value='' required><br>
                <button type="submit" name="buttonDT">CONFIRMAR Y CONTINUAR</button>
            </form>
            <?php
        } else {
            $_SESSION['dirT'] = $data[0]['line1'] . "<br>" . $data[0]['line2'] . "<br>" . $data[0]['city'] .  "<br>" . buscarDpto($data[0]['state'])['descripcion'] . "<br>" . buscarPais($data[0]['nation'])['descripcion'] . "<br>";
            $direccionT2 = $data[0]['line1'];
            $complementoT2 = $data[0]['line2'];
            $barrioT2 = $data[0]['line3'];
            $paisT2 = buscarPais($data[0]['nation']);
            $dpto2 = buscarDpto($data[0]['state']);
            $ciudadT2 = $data[0]['city'];
            echo ' <form method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">';
            echo ' <label for="direccionT2" class="gotham_p_un4">Dirección Completa</label><br>';
            echo ' <input type="text" class="gotham_p_un5 input-2" id="direccionT2" name="direccionT2" value="' . $direccionT2 . '" required><br>';
            echo ' <input type="text" class="gotham_p_un5 input-2" id="complementoT2" name="complementoT2" value="' . $complementoT2 . '" required><br>';
            echo ' <label for="barrioT2" class="gotham_p_un4">Barrio</label><br>';
            echo ' <input type="text" class="gotham_p_un5 input-2" id="barrioT2" name="barrioT2" value="' . $barrioT2 . '" required><br>';
            echo ' <label for="paisT2" class="gotham_p_un4">País</label><br>';
            echo ' <select class="custom-select-3 gotham_p_un5" name="paisT2" id="paisT2" required>';
            echo ' <option value=' . $paisT2['codigo'] . ' selected="true">' . $paisT2['descripcion'] . '</option>';
            $data_pais = json_decode(file_get_contents("../../assets/paises.json"), true);
            foreach ($data_pais as $key => $value) {
                if ($value["codigo"] != $paisT2['codigo']) ?>
                <option value="<?php echo $value["codigo"]; ?>"><?php echo $value["descripcion"]; ?></option>
            <?php }
            echo ' </select><br>';
            echo ' <label for="departamentoT2" class="gotham_p_un4">Estado / Departamento</label><br>';
            echo ' <select class="custom-select-3 gotham_p_un5" name="departamentoT2" id="departamentoT2" required>';
            echo '     <option value=' . $dpto2['codigo'] . ' selected="true">' . $dpto2['descripcion'] . '</option>';

            $data_dpto = json_decode(file_get_contents("../../assets/dpto.json"), true);
            foreach ($data_dpto as $key => $value) {
                if ($value["codigo"] != $dpto2['codigo']) ?>
                <option value="<?php echo $value["codigo"]; ?>"><?php echo $value["descripcion"]; ?></option>
        <?php }
            echo ' </select><br>';
            echo ' <label for="ciudadT2" class="gotham_p_un4">Ciudad / Municipio</label><br>';
            echo ' <input class="gotham_p_un5 input-2" name="ciudadT2" id="ciudadT2" value="' . $ciudadT2 . '" required><br>';
            echo ' <button type="submit" name="buttonDT2">CONFIRMAR Y CONTINUAR</button>';
            echo '  </form>';
        }
        ?>
    </div>
</div>
<!------------------==========================================---->