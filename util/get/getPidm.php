<?php
//function get pidm
function get_pidm($user)
{   /*
    $opts = array('http'=>array('header' => "User-Agent:MyAgent/1.0\r\n"));
    $context = stream_context_create($opts);
    $header = file_get_contents('https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/usuario/' . $user, false, $context);
    $obj = json_decode($header);*/
    $obj = json_decode(file_get_contents('https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/usuario/' . $user));
    return $obj->{'pidm'};
}
