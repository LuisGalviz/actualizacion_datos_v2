<?php
////////////////////GET//////////////////


//Pidm, Type=tipo de dato que se quiere obtener, typeInfo= {correo,telefono,direccion}, atributeType={emailType,AddressType,PhoneType}
function get_info($typeInfo, $type = '', $atributeType = '')
{
    $data = json_decode(file_get_contents('https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/' . get_pidm('lgalviz') . '/' . $typeInfo), true);
    if ($type != '' && $atributeType != '') {
        $temp = 0;
        $newData = [];
        foreach ($data as $key => $value) {
            if ($data[$key][$atributeType] == $type) {
                $newData[$temp] = $data[$key];
                $temp++;
            }
        }
        return $newData;
    } else if ($typeInfo == 'estadolaboral') { //DEVUELVE EL ESTADO LABORAL DEL USUARIO
        if ($data) {
            return $data[0]['employmentStatus'];
        } else {
            return 'NA';
        }
    }
}
