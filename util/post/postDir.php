<?php
function postDir($dirType, $dir)
{
    $url = 'https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/' . get_pidm('lgalviz') . '/direccion';

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $headers = array(
        "Accept: application/json",
        "Content-Type: application/json",
    );
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

    $data = json_encode(array("pidm" => get_pidm('lgalviz'), "addressType" => $dirType, "city" => "Polonuevo", "state" => "08", "nation" => "COL", "dataOrigin" => "CAMEL", "zip" => "08558000", "county" => "08558", "line1" => $dir, "line2" => "casa 2 pisos", "line3" => "El pradito"));

    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

    $resp = curl_exec($curl);
    curl_close($curl);
}
