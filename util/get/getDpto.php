<?php
//Sacar departamento por codigo
function buscarDpto($arg)
{
    try {
        $data_dpto = json_decode(file_get_contents('../../assets/dpto.json'), true);
        foreach ($data_dpto as $key => $value) {
            if ($data_dpto[$key]['codigo'] == $arg) {
                $dpto = $data_dpto[$key];
                return $dpto;
            }
        }
    } catch (\Throwable $th) {

        echo $th;
        throw $th;
    }
}
