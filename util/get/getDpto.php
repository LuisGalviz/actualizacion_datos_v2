<?php
//Sacar departamento por codigo
function buscarDpto($arg)
{
    $data_dpto = json_decode(file_get_contents('../../assets/dpto.json'), true);
    foreach ($data_dpto as $key => $value) {
        if ($data_dpto[$key]['codigo'] == $arg) {
            $dpto = $data_dpto[$key]['descripcion'];
            return $dpto;
        }
    }
}
