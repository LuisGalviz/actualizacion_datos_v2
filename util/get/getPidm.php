<?php
//function get pidm
function get_pidm($user)
{
    $obj = json_decode(file_get_contents('https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/usuario/' . $user));
    return $obj->{'pidm'};
}
?>