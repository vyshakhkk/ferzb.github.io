<?php 
if (!empty($_POST['user-name']) AND !empty($_POST['user-email']) AND !empty($_POST['user-message'])) 
{
    $headers = 'From: Воринка Виталий\r\n' .
                'Reply-To: vorynkavetal@gmail.com\r\n' .
                'X-Mailer: PHP/' . phpversion();
         
    $theme = "Новое сообщение с сайта";             
             
    $letter = "Данные сообщения:";
    $letter .="\n\n";
    $letter .="Имя: ".$_POST['user-name'];
    $letter .="\nEmail: ".$_POST['user-email'];
    $letter .="\nКомпания: ".$_POST['user-subject'];
    $letter .="\nСообщение: ".$_POST['user-message'];
    
    if (mail('durgoisvet@gmail.com', $theme, $letter, $headers)){
        echo "Сообщение отправлено!";
    } else {
        echo "Ошибка при отправке!";
    }
    } else {
        echo "Ошибка: Заполните все поля!";
    }