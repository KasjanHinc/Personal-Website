
<?php

$message_sent = false;
if (isset($_POST['email']) && $_POST['email'] != '') {

  if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $messageSubject = 'New email';
    $message = $_POST['message'];

    $to = "kasjan.hinc@gmail.com";
    $body = "";

    $body .= "From: " . $userName . "\r\n";
    $body .= "Email: " . $userEmail . "\r\n";
    $body .= "Message: " . $message . "\r\n";


    mail($to, $messageSubject, $body);

    $message_sent = true;
  } else {
    $invalid = "form-invalid";
  }
}



?>
