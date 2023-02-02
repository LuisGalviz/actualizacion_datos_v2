<?php
//Sacar pais por codigo
function buscarPais($arg)
{
    $data_pais = json_decode(file_get_contents('../../assets/paises.json'), true);
    foreach ($data_pais as $key => $value) {
        if ($data_pais[$key]['codigo'] == $arg) {
            $pais = $data_pais[$key]['descripcion'];
            return $pais;
        }
    }
}
?>