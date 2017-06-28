<?php
  $to = "ken@kenroberts.xyz";
  $subject = "New Email - kenroberts.xyz";
  $sender_name = $_POST['sender_name'];
  $sender_email = $_POST['sender_email'];
  $txt = $_POST['message_body_text'];
  $headers = 'From: ' . $sender_email . ' < ' . $sender_name . '> ';
  mail($to,$subject,$txt, $headers);
?>
