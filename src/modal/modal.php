<div>
    <div class="bg-modal">
        <div class="modal-contents" onkeypress="return event.keyCode != 13;">
            <button onclick="clickClose('.bg-modal')" class="close"><i class="fa-solid fa-chevron-left"></i></button>
            <h5 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h5>
            <p class="yellow_p center_text"><i class="fa fa-envelope"></i> Correo Personal</p>
            <div class="container">
                <label for="correoContacto">Correo de contacto</label>
                <div id='correoPartAjax'></div>
            </div>
            <button class="button_agregar" onclick="modal('.inputPostEmailP')">AGREGAR CORREO</button>
            <button class="button_confirmar" id="postEmailP" onclick="greenInputConfirm('#button .gotham_p5','.bg-modal')">CONFIRMAR</button>

        </div>
    </div>
    <div class="inputPostEmailP" style='display: none'>
        <div class="modal-contents" onkeypress="return event.keyCode != 13;">
            <button onclick="clickClose('.inputPostEmailP')" class="close"><i class="fa-solid fa-chevron-left"></i></button>
            <h5 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h5>
            <p class="yellow_p center_text"><i class="fa fa-envelope"></i> Correo Personal</p>
            <div id="formularioEmailP">
                <input type="email" placeholder="Nuevo correo de contacto" id='emailPajax' value='' onkeypress="return event.keyCode != 13;" required>
                <div id="errorMessageEmailP" style="display:none;" class="alert alert-warning" role="alert">
                    Ingresa un correo válido
                </div>
                <button class="button_confirmar" id='postEmailAjax' onclick="validateEmail('emailPajax','errorMessageEmailP','PART','.inputPostEmailP')">GUARDAR</button>
            </div>
        </div>
    </div>
</div>
<div>
    <div class="bg-modal-2">
        <div class="modal-contents" onkeypress="return event.keyCode != 13;">
            <button onclick="clickClose('.bg-modal-2')" class="close"><i class="fa-solid fa-chevron-left"></i></button>
            <h5 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h5>
            <p class="yellow_p center_text"><i class="fa fa-envelope"></i> Correo Corporativo</p>
            <div class="container">
                <label for="correoContacto2">Correo de contacto</label>
                <div id='correoFuncAjax'></div>
            </div>
            <button class="button_confirmar" onclick="greenInputConfirm('#button2 .gotham_p5','.bg-modal-2')">CONFIRMAR</button>

        </div>
    </div>
</div>
<div>
    <div class="bg-modal-3">
        <div class="modal-contents" onkeypress="return event.keyCode != 13;">
            <button onclick="clickClose('.bg-modal-3')" class="close"><i class="fa-solid fa-chevron-left"></i></button>
            <h5 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h5>
            <p class="yellow_p center_text"><i class="fa fa-phone phone_custom"></i> Teléfono Celular</p>
            <div>
                <div class="container">
                    <label for="numeroContacto">Número de contacto</label>
                    <div id='telPartAjax'></div>
                </div>
                <button class="button_agregar" id="postTelPart" onclick="modal('.inputPostTelPart')">AGREGAR TELEFONO</button>
                <button class="button_confirmar" onclick="greenInputConfirm('#button3 .gotham_p5','.bg-modal-3')">CONFIRMAR</button>
            </div>
        </div>
    </div>

    <div>
        <div class="inputPostTelPart" style='display: none'>
            <div class="modal-contents" onkeypress="return event.keyCode != 13;">
                <button onclick="clickClose('.inputPostTelPart')" class="close"><i class="fa-solid fa-chevron-left"></i></button>
                <h5 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h5>
                <p class="yellow_p center_text"><i class="fa fa-envelope"></i> Telefono Personal</p>
                <div>
                    <div class="row"><select id="inputCodPartAjax" class="col-2 form-select-tel">
                            <option value="57" selected>57</option>
                        </select> <input class="col-8" type="number" placeholder="Nuevo telefono de contacto" id="inputTelPartAjax" onkeypress="return event.keyCode != 13;" required></div>
                    <div id="errorMessageTelPart" style="display:none;" class="alert alert-warning" role="alert">
                        Ingresa un número válido
                    </div>
                    <button class="button_confirmar" id="postTelPartAjax" onclick="validateTel('inputTelPartAjax','inputCodPartAjax','0','errorMessageTelPart','CELU','.inputPostTelPart')">GUARDAR</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div>
    <div class="bg-modal-4">
        <div class="modal-contents" onkeypress="return event.keyCode != 13;">
            <button onclick="clickClose('.bg-modal-4')" class="close"><i class="fa-solid fa-chevron-left"></i></button>
            <h5 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h5>
            <p class="yellow_p center_text"><i class="fa fa-phone phone_custom"></i> Teléfono Fijo</p>
            <div class="container">
                <label for="numeroContacto2">Número de contacto</label>
                <div id="telTepAjax"></div>
            </div>
            <button class="button_agregar" id="postTelTepe" onclick="modal('.inputPostTelTepe')">AGREGAR TELEFONO</button>
            <button class="button_confirmar" onclick="greenInputConfirm('#button4 .gotham_p5','.bg-modal-4')">CONFIRMAR</button>

        </div>
    </div>
    <div class="inputPostTelTepe" style='display: none'>
        <div class="modal-contents" onkeypress="return event.keyCode != 13;">
            <button onclick="clickClose('.inputPostTelTepe')" class="close"><i class="fa-solid fa-chevron-left"></i></button>
            <h5 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h5>
            <p class="yellow_p center_text"><i class="fa fa-envelope"></i> Telefono Fijo</p>
            <div>
                <div class="row"> <select class="col-2 form-select-tel" id="inputCodTepeAjax"></select>
                    <input class="col-8" type="number" placeholder="Nuevo telefono de contacto" id="inputTelTepeAjax" onkeypress="return event.keyCode != 13;" required>
                </div>
                <div id="errorMessageTelTepe" style="display:none;" class="alert alert-warning" role="alert">
                    Ingresa un número válido
                </div>
                <button id="postTelTepeAjax" class="button_confirmar" onclick="validateTel('inputTelTepeAjax','0','inputCodTepeAjax','errorMessageTelTepe','TEPE','.inputPostTelTepe')">GUARDAR</button>
            </div>
        </div>
    </div>
</div>
<div>
    <div class="bg-modal-5">
        <div class="modal-contents-2" onkeypress="return event.keyCode != 13;">
            <button onclick="clickClose('.bg-modal-5')" class="close"><i class="fa-solid fa-chevron-left"></i></button>
            <h5 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h5>
            <p class="yellow_p center_text"><i class="fa fa-id-card-o"></i> Estado Laboral</p>
            <div class="container">
                <div class="row"><input class="col-2" type="radio" name="choice" value="Desempleado" id="Desempleado">
                    <label class="col-7" for="Desempleado">Desempleado</label>
                </div>
                <div class="row"><input class="col-2" type="radio" name="choice" value="Independiente" id="Independiente">
                    <label class="col-7" for="Independiente">Independiente</label>
                </div>
                <div class="row"><input class="col-2" type="radio" name="choice" value="Empleado" id="Empleado">
                    <label class="col-7" for="Empleado">Empleado</label>
                </div>
                <div class="row"><input class="col-2" type="radio" name="choice" value="Empresario" id="Empresario">
                    <label class="col-7" for="Empresario">Empresario</label>
                </div>
                <div class="row"><input class="col-2" type="radio" name="choice" value="Estudiante" id="Estudiante">
                    <label class="col-7" for="Estudiante">Estudiante</label>
                </div>
                <div class="row"><input class="col-2" type="radio" name="choice" value="Inactivo" id="Inactivo">
                    <label class="col-7" for="Inactivo">Inactivo Laboralmente</label>
                </div>
                <div class="row"><input class="col-2" type="radio" name="choice" value="Jubilado" id="Jubilado">
                    <label class="col-7" for="Jubilado">Jubilado</label>
                </div>
            </div>
            <button class="button_confirmar" id="buttonEstado">CONFIRMAR Y CONTINUAR</button>
        </div>
    </div>
</div>
<div>
    <div class="bg-modal-6">
        <div class="modal-contents-3" onkeypress="return event.keyCode != 13;">
            <button onclick="clickClose('.bg-modal-6')" class="close"><i class="fa-solid fa-chevron-left"></i></button>
            <h5 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h5>
            <p class="yellow_p center_text"><i class="fa fa-map-marker phone_custom"></i> Dirección Permanente</p>
            <div class="container">
                <label for="direccionP">Dirección Completa</label>
                <input type="text" placeholder="Direccion Principal" class="gotham_p_un5 form-control" id="direccionP" value='' onkeypress="return event.keyCode != 13;" required><br>
                <input type="text" placeholder="Direccion Principal" class="gotham_p_un5 form-control" id="complementoP" value='' onkeypress="return event.keyCode != 13;" required>
                <label for="barrioP">Barrio</label>
                <input type="text" placeholder="Barrio" class="gotham_p_un5 form-control" id="barrioP" value='' onkeypress="return event.keyCode != 13;" required>
                <label for="paisP">País</label>
                <select class="form-select gotham_p_un5" id="paisP" onkeypress="return event.keyCode != 13;" required>
                    <option value='COL' selected>Colombia</option>
                </select>
                <label for="departamentoP">Estado / Departamento</label>
                <select class=" form-select gotham_p_un5" id="departamentoP" onkeypress="return event.keyCode != 13;">
                    <option value='0' selected>Seleccione un departamento</option>
                </select>
                <label for="ciudadP">Ciudad / Municipio</label>
                <select class="form-select gotham_p_un5" id="ciudadP" onkeypress="return event.keyCode != 13;" required>
                    <option value='0' selected>Seleccione una ciudad</option>
                </select>
                <input type="hidden" id="seqP" value="">
                <div id="errorMessageDirP" style="display:none;" class="alert alert-warning" role="alert">
                    Completa todos los campos
                </div>

            </div> <button class="button_confirmar" type="button" id="buttonDP" onclick="validateDir('errorMessageDirP','P')">CONFIRMAR Y CONTINUAR</button>
        </div>
    </div>
</div>
<div>
    <div class="bg-modal-7">
        <div class="modal-contents-3" onkeypress="return event.keyCode != 13;">
            <button onclick="clickClose('.bg-modal-7')" class="close"><i class="fa-solid fa-chevron-left"></i></button>
            <h5 class="gotham_title_un">¡Ayúdanos a estar en contacto contigo!</h5>
            <p class="yellow_p center_text"><i class="fa fa-map-marker phone_custom"></i> Dirección Temporal</p>
            <div class="container">
                <label for="direccionT" class="form-label">Dirección Completa</label>
                <input type="text" class="gotham_p_un5 form-control" placeholder="Direccion Principal" id="direccionT" value='' onkeypress="return event.keyCode != 13;" required><br>
                <input type="text" class="gotham_p_un5 form-control" placeholder="Direccion Principal" id="complementoT" value='' onkeypress="return event.keyCode != 13;" required>
                <label for="barrioT">Barrio</label>
                <input type="text" class="gotham_p_un5 form-control" placeholder="Barrio" id="barrioT" value='' onkeypress="return event.keyCode != 13;" required>
                <label for="paisT" class="form-label">País</label>
                <select class=" form-select gotham_p_un5" id="paisT" onkeypress="return event.keyCode != 13;" required>
                    <option value='COL' selected>Colombia</option>
                </select>
                <label for="departamentoT">Estado / Departamento</label>
                <select class=" form-select gotham_p_un5" id="departamentoT" onkeypress="return event.keyCode != 13;" required>
                    <option value='0' selected>Seleccione una departamento</option>
                </select>
                <label for="ciudadT">Ciudad / Municipio</label>
                <select class="form-select gotham_p_un5" id="ciudadT" onkeypress="return event.keyCode != 13;" required>
                    <option value='0' selected>Seleccione una ciudad</option>
                </select>
                <input type="hidden" id="seqT" value="">
                <div id="errorMessageDirT" style="display:none;" class="alert alert-warning" role="alert">
                    Completa todos los campos
                </div>

            </div> <button class="button_confirmar" type="button" id="buttonDT" onclick="validateDir('errorMessageDirT','T')">CONFIRMAR Y CONTINUAR</button>
        </div>
    </div>
</div>
<script src="../../assets/api.js"></script>
<script src="../../assets/const.js"></script>
<script src="../../util/get/pidmAjax.js"></script>
<script src="../../util/get/ciudadAjax.js"></script>
<script src="../../util/get/dptoAjax.js"></script>
<script src="../../util/get/paisAjax.js"></script>
<script src="../../util/get/correosAjax.js"></script>
<script src="../../util/get/telefonosAjax.js"></script>
<script src="../../util/get/estadoLaboralAjax.js"></script>
<script src="../../util/get/dirAjax.js"></script>
<script src="../../util/post/postEmailAjax.js"></script>
<script src="../../util/post/postTelAjax.js"></script>
<script src="../../util/post/postEstadoAjax.js"></script>
<script src="../../util/post/postDirAjax.js"></script>
<script src="../../util/update/updateTelAjax.js"></script>