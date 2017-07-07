<?php
  $to = "ken@kenroberts.xyz";
  $subject = "New Email - kenroberts.xyz";
  $sender_name = $_POST['name'];
  $sender_email = $_POST['email'];
  $txt = $_POST['message_body_text'];
  $headers = 'From: ' . $sender_email . ' < ' . $sender_name . '> ';
  mail($to,$subject,$txt, $headers);
?>
