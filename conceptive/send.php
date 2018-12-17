<?php
	$userName = $_POST['userName'];
	$userEmail = $_POST['userEmail'];
	$userCompany = $_POST['userCompany'];
	$message = $_POST['message'];

	$userName = htmlspecialchars($userName);
	$userEmail = htmlspecialchars($userEmail);
	$userCompany = htmlspecialchars($userCompany);
	$message = htmlspecialchars($message);

	$userName = urldecode($userName);
	$userEmail = urldecode($userEmail);
	$userCompany = urldecode($userCompany);
	$message = urldecode($message);

	$userName = trim($userName);
	$userEmail = trim($userEmail);
	$userCompany = trim($userCompany);
	$message = trim($message);


	if (mail("vorynkavetal@hotmmail.com", "Application from the site", "Name:".$userName.". E-mail: ".$userEmail ,"From: example2@gmail.com \r\n" ". Company:".$userCompany."Message".$message))
	 {     echo "Message sent successfully"; 
	} else { 
	    echo "Errors occurred while sending the message";
}?>