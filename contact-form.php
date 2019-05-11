<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email; = $_POST['e-mail'];
    $date = $_POST['date'];
    $comment = $_POST['comment'];

    $mailTo = "12sebastian@gmail.com";
    $headers = "From: ".$email."\n On: ".$date;
    $txt = "You have recieved an email from: ".$name.".\n\n".$comment;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");
}