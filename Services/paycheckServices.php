<?php
    class paycheckServices{
        public static function calcINSS($salary){
        	if($salary<=1399.12){ //salário Até 1.399,12
            return    $salary*0.08;
        	} else if(($salary>=1399.13)&&($salary<=2331.88)){ //De 1.399,13 até 2.331,88
        return 		$salary*0.09;
        	} else if(($salary>=2331.89)&&($salary<=4663.75)){ //De 2.331,89 até 4.663,75
        return 		$salary*0.11;
        	} else{ //salário ultrapassar os R$ 4.663,75
        return 		513.02;
        	}    
       	    
        }
    
        public static function calcIRPF($salary){      	
        	if($salary<=1903.98){ //Até 1.903,98
        		$irpf = 0.00;
        	} else if(($salary>=1903.99)&&($salary<=2826.65)){ //De 1.903,99 até 2.826,65
        		$irpf = ($salary*0.075)-142.80;
        	} else if(($salary>=2826.66)&&($salary<=3751.05)){ //De 2.826,66 até 3.751,05
        		$irpf = ($salary*0.15)-354.80; 
        	} else if(($salary>=3751.06)&&($salary<=4664.68)){ //De 3.751,06 até 4.664,68
        		$irpf = ($salary*0.225)-636.13; 
        	} else{
        		$irpf = ($salary*0.275)-869.36; 
        	}
        	return $irpf;
        }


    }
?>