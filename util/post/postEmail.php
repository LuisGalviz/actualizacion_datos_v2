<?php
function postEmail($emailType, $email)
{
    $url = 'https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/' . get_pidm('lgalviz') . '/correo';

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $headers = array(
        "Accept: application/json",
        "Content-Type: application/json",
    );
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

    $data = json_encode(array('pidm' => get_pidm('lgalviz'), 'emailType' => $emailType, 'emailAddress' => $email, 'dataOrigin' => 'CAMEL'));

    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

    $resp = curl_exec($curl);
    curl_close($curl);
}
