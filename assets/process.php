<?php
if ((isset($_POST['name'])) && (strlen(trim($_POST['name'])) > 0)) {
	$name = stripslashes(strip_tags($_POST['name']));
} else {$name = 'No name entered';}
if ((isset($_POST['email'])) && (strlen(trim($_POST['email'])) > 0)) {
	$email = stripslashes(strip_tags($_POST['email']));
} else {$email = 'No email entered';}
if ((isset($_POST['phone'])) && (strlen(trim($_POST['phone'])) > 0)) {
  $phone = stripslashes(strip_tags($_POST['phone']));
} else {$phone = 'No phone number entered';}
if ((isset($_POST['message'])) && (strlen(trim($_POST['message'])) > 0)) {
	$message = stripslashes(strip_tags($_POST['message']));
} else {$message = 'No message entered';}
ob_start();
?>
<html>
<head>
<style type="text/css">
</style>
</head>
<body style="background:url(http://hospitalitysss.com/assets/img/tile-light.gif)">
<img src="http://hospitalitysss.com/assets/img/logo-email.png">
<h1>Contact from <strong>hospitalitysss.com</strong></h1>
<h3>Hello Mike, this is a message from the contact engine on your website. Do not reply to this message, but rather, grab the contact information below and contact the person directly. Have a great day.</h3>
<h2>Name: <?=$name;?></h2>
<h2>Email: <?=$email;?></h2>
<h2>Phone: <?=$phone;?></h2>
<h2>Message: <?=$message;?></h2>
</body>
</html>
<?
$body = ob_get_contents();

$to = 'mikecazel@hospitalitysss.com';
$email = 'mikecazel@hospitalitysss.com';
$fromaddress = "contact@hospitalitysss.com";
$fromname = "Contact";

require("phpmailer.php");

$mail = new PHPMailer();

$mail->From     = "contact@hospitalitysss.com";
$mail->FromName = "Contact";
$mail->AddAddress("mikecazel@hospitalitysss.com","Mike"); //Repeat this line to add new recipients

$mail->WordWrap = 50;
$mail->IsHTML(true);

$mail->Subject  =  "Someone has contacted HSSS!";
$mail->Body     =  $body;
$mail->AltBody  =  "";

if(!$mail->Send()) {
	$recipient = 'mikecazel@hospitalitysss.com';
	$subject = 'Contact form failed';
	$content = $body;	
  mail($recipient, $subject, $content, "From: contact@hospitalitysss.com\r\nReply-To: $email\r\nX-Mailer: DT_formmail");
  exit;
}
?>