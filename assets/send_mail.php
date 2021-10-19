<?php
if(isset($_POST)){
    error_reporting(0);
    $name=$_POST["name"];
    $email=$_POST["email"];
    $subject=$_POST["subject"];
    $comments=$_POST["comments"];
    $domain=$_SERVER["HTTP_HOST"];

    $to="icarlosdan8@gmail.com";
    $subject_mail="Contacto desde el formulario del sitio $domain: $subject";
    $message="
        <p>
            Datos enviados desde el formulario de sitio <b>$domain</b>
        </p>
        <ul>
            <li><b>$name</b></li>
            <li><b>$email</b></li>
            <li><b>$subject</b></li>
            <li><b>$comments</b></li>
        </ul>
    ";
    $headers="MIME-Version: 1.0\r\n"."Content-Type: text/html;charset=utf-8\r\n"."From: Envío Automático No Responder <no-reply@$domain>";

    $send_mail=mail($to,$subject_mail,$message,$headers);

    if($send_mail){
        $res=[
            "err"=>false,
            "message"=>"Tus datos han sido enviados"
        ];
    }else{
        $res=[
            "err"=>true,
            "message"=>"Error al enviar tus datos. Intenta nuevamente"
        ];
    }
}

header('Content-type:application/json');
echo json_encode($res);
exit;
?>

