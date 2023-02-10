<?php
function delTel($type, $tel)
{

    $json = json_encode(array("pidm" => '218436', "phoneType" => $type, "sequence" => $tel, "dataOrigin" => ""));
    $url = 'https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/telefono';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    $result = json_decode($result);
    curl_close($ch);

    return $result;
}
