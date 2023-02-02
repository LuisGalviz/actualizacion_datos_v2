<?php
function putDir($dirType, $direccion, $complemento, $barrio, $pais, $dpto, $ciudad, $sequence)
{
    $json = json_encode(array(
        "pidm" => get_pidm('lgalviz'), "addressType" => $dirType, "sequence" => $sequence, "city" => $ciudad, "state" => $dpto, "nation" => $pais,
        "dataOrigin" => "CAMEL", "zip" => "0", "county" => "0", "line1" => $direccion, "line2" => $complemento, "line3" => $barrio
    ));
    $url = 'https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/' . get_pidm('lgalviz') . '/direccion';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    $result = json_decode($result);
    curl_close($ch);

    return $result;
}
