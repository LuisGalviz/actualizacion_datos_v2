<?php
function putEstado($estado)
{
    $json = json_encode(array("pidm" => get_pidm('lgalviz'), "employmentStatus" => $estado));
    $url = 'https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/' . get_pidm('lgalviz') . '/estadolaboral';
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
