<?php

require 'paycheckServices.php';

   $salary = $_POST['salary'];
   $inss = 0.0;
   

	$inss = paycheckServices::calcINSS($salary);   
   	echo $inss;
?>