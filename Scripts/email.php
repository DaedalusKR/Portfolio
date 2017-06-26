<?php
echo "testing";
  $to = "ken@kenroberts.xyz";
  $subject = "My subject";
  $txt = $_POST['message_body_text']
  $headers = "From: kr26633z@gmail.com";

  mail($to,$subject,$txt,$headers);
?>
