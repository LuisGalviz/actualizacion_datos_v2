<?php
function postDir($dirType, $direccion, $complemento, $barrio, $pais, $dpto, $ciudad)
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

    $data = json_encode(array("pidm" => get_pidm('lgalviz'), "addressType" => $dirType, "city" => $ciudad, "state" => $dpto, "nation" => $pais, "dataOrigin" => "CAMEL", "zip" => "08558000", "county" => "08558", "line1" => $direccion, "line2" => $complemento, "line3" => $barrio));

    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

    $resp = curl_exec($curl);
    curl_close($curl);
}
