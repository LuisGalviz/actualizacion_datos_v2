<?php
require_once '../../util/get/get.php';
require_once '../../util/get/getPidm.php';
require_once '../../util/get/getDpto.php';
require_once '../../util/get/getPais.php';
require_once '../../util/post/postEstado.php';
require_once '../../util/put/putEstado.php';
?>
<div class="bg-modal" style='display: none'>
    <div class="modal-contents">
        <button type="button" onclick="clickClose('.bg-modal')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-envelope"></i> Correo Personal</p>
        <form>
            <label for="correoContacto" class="gotham_p4">Correo de contacto</label><br>
            <?php
            $data = get_info('correo', 'PART', 'emailType'); // correo particular con pidm
            if ($data) {
                $_SESSION['emailP'] = $data[0]['emailAddress'];
                foreach ($data as $key => $value) {
                    $email = $data[$key]['emailAddress'];
                    echo   '<input class="right" type="email" readonly  placeholder="Correo de contacto" name="correoContacto" value=' . $email . '>';
                }
            } else {
                $_SESSION['emailP'] = 'NA';
            }
            ?>
            <button type="button" id="postEmailP" onclick="modal('postEmailP','.inputPostEmailP')">NUEVO CORREO</input>
        </form>
    </div>
</div>
<div class="bg-modal-2">
    <div class="modal-contents">
        <button type="button" onclick="clickClose('.bg-modal-2')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-envelope"></i> Correo Corporativo</p>
        <form>
            <label for="correoContacto2" class="gotham_p4">Correo de contacto</label><br>
            <?php
            $data = get_info('correo', 'FUNC', 'emailType');
            if ($data) {
                $_SESSION['emailF'] = $data[0]['emailAddress'];
                foreach ($data as $key => $value) {
                    $email = $data[$key]['emailAddress'];
                    echo   '<input class="right" type="email" placeholder="Correo de contacto" name="correoContacto2"  value=' . $email . '>';
                }
            } else {
                $_SESSION['emailF'] = 'NA';
            }
            ?>
            <!---BUTTON DISABLED------------------------------------------->
            <button class="disabled" type="button" id="postEmailF" onclick="modal('postEmailF','.inputPostEmailF')" disabled>NUEVO CORREO</button>
        </form>

    </div>
</div>
<div class="bg-modal-3">
    <div class="modal-contents">
        <button type="button" onclick="clickClose('.bg-modal-3')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-phone phone_custom"></i> Teléfono Celular</p>
        <form>
            <div style="max-height: 500px; overflow-y:auto;">
                <label for="numeroContacto" class="gotham_p4 padding_left_10">Número de contacto</label><br>
                <?php
                $data = get_info('telefono', 'CELU', 'phoneType'); // todos los telefonos celulares
                if ($data) {
                    $_SESSION['telP'] = $data[0]['phoneNumber'];
                    foreach ($data as $key => $value) {
                        $codePhone = $data[$key]['intlAccess'];
                        $phone = $data[$key]['phoneNumber'];
                        echo    '<div class="row">';
                        echo   '<div class="column-2 left"><select class="custom-select">';
                        echo          '<option value=' . $codePhone . '>' . $codePhone . '</option>';
                        echo      '</select></div>';
                        echo   '<div class="column-2 right"> <input class="right" type="number" placeholder="Número de contacto" name="numeroContacto" value=' . $phone . '></div>';
                        echo '</div>';
                    }
                } else {
                    $_SESSION['telP'] = 'NA';
                }
                ?>
            </div>
            <button type="button" id="postTelPart" onclick="modal('postTelPart','.inputPostTelPart')">Agregar Teléfono Celular</button>
        </form>
    </div>
</div>
<div class="bg-modal-4">
    <div class="modal-contents">
        <button type="button" onclick="clickClose('.bg-modal-4')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-phone phone_custom"></i> Teléfono Fijo</p>
        <form>
            <label for="numeroContacto2" class="gotham_p4 padding_left_10">Número de contacto</label><br>
            <?php
            $data = get_info('telefono', 'TEPE', 'phoneType'); //Todos los telefonos fijos
            if ($data) {
                $_SESSION['telF'] = $data[0]['phoneNumber'];
                foreach ($data as $key => $value) {
                    # code...
                    $codePhone = $data[$key]['phoneArea'];
                    $phone = $data[$key]['phoneNumber'];
                    echo    '<div class="row">';
                    echo   '<div class="column-2 left"><select class="custom-select" name="numeroPais" id="numeroPais">';
                    echo          '<option value=' . $codePhone . '>' . $codePhone . '</option>';
                    echo      '</select></div>';
                    echo   '<div class="column-2 right"> <input class="right" type="number" placeholder="Número de contacto" name="numeroContacto2" value=' . $phone . '></div>';
                    echo '</div>';
                }
            } else {
                $_SESSION['telF'] = 'NA';
            }
            ?>
            <button type="button" id="postTelTepe" onclick="modal('postTelTepe','.inputPostTelTepe')">Agregar Teléfono Fijo</button>
        </form>
    </div>
</div>
<div class="bg-modal-5">
    <div class="modal-contents-2">
        <button type="button" onclick="clickClose('.bg-modal-5')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-id-card-o"></i> Estado Laboral</p>
        <?php
        $data = get_info('estadolaboral'); //TRAE INFORMACION DEL ESTADO LABORAL DESDE LA API 
        $_SESSION['estadoLaboral'] = $data;

        if (isset($_POST['buttonEstado'])) { //Cuando se oprima el boton con name=buttonEstado toma las 'choice' del form de abajo con method POST. se ejecuta esto
            if ($data == 'NA') {
                echo $data;
                postEstado($_POST['choice']);
            } else {
                putEstado($_POST['choice']);
            }
        }
        ?>
        <form method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">
            <div class="container-estado-laboral">
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
<div class="bg-modal-6">
    <div class="modal-contents-3">
        <button type="button" onclick="clickClose('.bg-modal-6')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-map-marker phone_custom"></i> Dirección Permanente</p>
        <form>
            <?php
            $data = get_info('direccion', 'DP', 'addressType');
            if (!$data) {
                $_SESSION['dirP'] = 'No registra';
            ?>
                <label for="direccionCompleta3" class="gotham_p4">Dirección Completa</label><br>
                <input type="text" class="gotham_p5 input-2" id="direccionCompleta" name="direccionCompleta" value=''><br>
                <input type="text" class="gotham_p5 input-2" id="direccionCompleta2" name="direccionCompleta2" value=''><br>
                <label for="barrio" class="gotham_p4">Barrio</label><br>
                <input type="text" class="gotham_p5 input-2" id="barrio" name="barrio" value=''><br>
                <label for="pais" class="gotham_p4">País</label><br>
                <select class="custom-select-3 gotham_p5" name="pais" id="pais">
                    <option value=''></option>
                </select><br>
                <label for="departamento" class="gotham_p4">Estado / Departamento</label><br>
                <select class="custom-select-3 gotham_p5" name="departamento" id="departamento">
                    <option value=''></option>
                </select><br>
                <label for="ciudad" class="gotham_p4">Ciudad / Municipio</label><br>
                <select class="custom-select-3 gotham_p5" name="ciudad" id="ciudad">
                    <option value=''></option>
                </select><br>
            <?php
            } else {
                $_SESSION['dirP'] = $data[0]['line1'] . "<br>" . $data[0]['line2'] . "<br>" . $data[0]['city'] .  "<br>" . buscarDpto($data[0]['state']) . "<br>" . buscarPais($data[0]['nation']) . "<br>";
                foreach ($data as $key => $value) {
                    $pais = buscarPais($data[$key]['nation']);
                    $dpto = buscarDpto($data[$key]['state']);

                    //Mostrar direccion permanente

                    $direccionCompleta = $data[$key]['line1'];
                    $barrio = $data[$key]['line2'];
                    $ciudad = $data[$key]['city'];
                    echo   ' <label for="direccionCompleta" class="gotham_p4">Dirección Completa</label><br>';
                    echo   ' <label type="text" class="gotham_p5 input-2" id="direccionCompleta" name="direccionCompleta">' . $direccionCompleta . '</label><br>';
                    echo   ' <input type="text" class="gotham_p5 input-2" id="direccionCompleta2" name="direccionCompleta2" value=' . $barrio . '><br>';
                    echo   ' <label for="barrio" class="gotham_p4">Barrio</label><br>';
                    echo   '<input type="text" class="gotham_p5 input-2" id="barrio" name="barrio" value=' . $barrio . '><br>';
                    echo   '<label for="pais" class="gotham_p4">País</label><br>';
                    echo   '<select class="custom-select-3 gotham_p5" name="pais" id="pais">';
                    echo ' <option value=' . $pais . '>' . $pais . '</option>';
                    echo ' </select><br>';
                    echo ' <label for="departamento" class="gotham_p4">Estado / Departamento</label><br>';
                    echo ' <select class="custom-select-3 gotham_p5" name="departamento" id="departamento">';
                    echo '     <option value=' . $dpto . '>' . $dpto . '</option>';
                    echo ' </select><br>';
                    echo '  <label for="ciudad" class="gotham_p4">Ciudad / Municipio</label><br>';
                    echo ' <select class="custom-select-3 gotham_p5" name="ciudad" id="ciudad">';
                    echo '     <option value=' . $ciudad . '>' . $ciudad . '</option>';
                    echo ' </select><br>';
                }
            }
            ?>
            <button type="button">CONFIRMAR Y CONTINUAR</button>
    </div>
    </form>
</div>
<div class="bg-modal-7">
    <div class="modal-contents-3">
        <button type="button" onclick="clickClose('.bg-modal-7')" class="close"><i class="fa fa-arrow-left"></i> Regresar</button>
        <h1 class="gotham_title">¡Ayúdanos a estar en contacto contigo!</h1>
        <p class="yellow_p gotham_p3"><i class="fa fa-map-marker phone_custom"></i> Dirección Temporal</p>
        <form>
            <?php
            //$data = json_decode(file_get_contents('https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/24421/direccion/tipo/DT'), true); // direcion temporal
            $data = get_info('direccion', 'DT',  'addressType');

            if (!$data) {
                $_SESSION['dirT'] = 'No registra';
            ?>
                <label for="direccionCompleta3" class="gotham_p4">Dirección Completa</label><br>
                <input type="text" class="gotham_p5 input-2" id="direccionCompleta" name="direccionCompleta" value=''><br>
                <input type="text" class="gotham_p5 input-2" id="direccionCompleta2" name="direccionCompleta2" value=''><br>
                <label for="barrio" class="gotham_p4">Barrio</label><br>
                <input type="text" class="gotham_p5 input-2" id="barrio" name="barrio" value=''><br>
                <label for="pais" class="gotham_p4">País</label><br>
                <select class="custom-select-3 gotham_p5" name="pais" id="pais">
                    <option value=''></option>
                </select><br>
                <label for="departamento" class="gotham_p4">Estado / Departamento</label><br>
                <select class="custom-select-3 gotham_p5" name="departamento" id="departamento">
                    <option value=''></option>
                </select><br>
                <label for="ciudad" class="gotham_p4">Ciudad / Municipio</label><br>
                <select class="custom-select-3 gotham_p5" name="ciudad" id="ciudad">
                    <option value=''></option>
                </select><br>
            <?php
            } else {
                $_SESSION['dirT'] = $data[0]['line1'] . "<br>" . $data[0]['line2'] . "<br>" . $data[0]['city'] .  "<br>" . buscarDpto($data[0]['state']) . "<br>" . buscarPais($data[0]['nation']) . "<br>";
                foreach ($data as $key => $value) {
                    $pais = buscarPais($data[0]['nation']);
                    $dpto = buscarDpto($data[0]['state']);

                    //Mostrar direccion temporal

                    $direccionCompleta = $data[$key]['line1'];
                    $barrio = $data[$key]['line2'];
                    $ciudad = $data[$key]['city'];
                    echo  '<label for="direccionCompleta3" class="gotham_p4">Dirección Completa</label><br>';
                    echo   ' <input type="text" class="gotham_p5 input-2" id="direccionCompleta" name="direccionCompleta" value=' . $direccionCompleta . '><br>';
                    echo   ' <input type="text" class="gotham_p5 input-2" id="direccionCompleta2" name="direccionCompleta2" value=' . $barrio . '><br>';
                    echo   ' <label for="barrio" class="gotham_p4">Barrio</label><br>';
                    echo   '<input type="text" class="gotham_p5 input-2" id="barrio" name="barrio" value=' . $barrio . '><br>';
                    echo   '<label for="pais" class="gotham_p4">País</label><br>';
                    echo   '<select class="custom-select-3 gotham_p5" name="pais" id="pais">';
                    echo ' <option value=' . $pais . '>' . $pais . '</option>';
                    echo ' </select><br>';
                    echo ' <label for="departamento" class="gotham_p4">Estado / Departamento</label><br>';
                    echo ' <select class="custom-select-3 gotham_p5" name="departamento" id="departamento">';
                    echo '     <option value=' . $dpto . '>' . $dpto . '</option>';
                    echo ' </select><br>';
                    echo '  <label for="ciudad" class="gotham_p4">Ciudad / Municipio</label><br>';
                    echo ' <select class="custom-select-3 gotham_p5" name="ciudad" id="ciudad">';
                    echo '     <option value=' . $ciudad . '>' . $ciudad . '</option>';
                    echo ' </select><br>';
                }
            }
            ?>
            <button type="button" id="postDirT" onclick="clickMe('postDirT','.inputPostDirT')">Agregar direccion temporal</button>
        </form>
    </div>
</div>
<!-- END Modal Section -->