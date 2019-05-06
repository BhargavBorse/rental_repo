<?php
require('textlocal.class.php');

$textlocal = new Textlocal('bhargavborse4898@gmail.com','23be6e4b4fc0f638e0a57cc6e15f76b9a8f7e8d8c2372ed4ef763a0405ba211b');

$numbers = array(8160606663);
$sender = 'TXTLCL';
$message = 'Please Check the Request';

try {
    $result = $textlocal->sendSms($numbers, $message, $sender);
    if($result){
		echo "SMS sent successfully";
	}
} catch (Exception $e) {
    die('Error: ' . $e->getMessage());
}
?>