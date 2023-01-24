<?php
////////////////////GET//////////////////
//Pidm, Type=tipo de dato que se quiere obtener, typeInfo= {correo,telefono,direccion}, atributeType={emailType,AddressType,PhoneType}
function get_info($typeInfo, $type = '', $atributeType = '')
{
    $opts = array('http'=>array('header' => "User-Agent:MyAgent/1.0\r\n"));
    $context = stream_context_create($opts);
    $header = file_get_contents('https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/' . get_pidm('lgalviz') . '/' . $typeInfo, false, $context);
    $data = json_decode($header, true);
    if ($type != '' && $atributeType != '') {
        $temp = 0;
        $newData = [];
        foreach ($data as $key => $value) {
            if ($data[$key][$atributeType] == $type) {
                $newData[$temp] = $data[$key];
                $temp++;
            }
        }
        if (!$newData) {
            return false;
        }

        return $newData;
    } else if ($typeInfo == 'estadolaboral') { //DEVUELVE EL ESTADO LABORAL DEL USUARIO
        if ($data) {
            return $data[0]['employmentStatus'];
        } else { //Si no encuentra estado devuelve NA
            return 'NA';
        }
    }
}
