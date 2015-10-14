<?php

require 'paycheckServices.php';

   $salary = $_POST['salary'];
   $inss = 0.0;
   $irpf = 0.0;

	$inss = paycheckServices::calcINSS($salary);   
   	$irpf = paycheckServices::calcIRPF($salary-$inss);

   	echo $salary-$inss-$irpf;
?>