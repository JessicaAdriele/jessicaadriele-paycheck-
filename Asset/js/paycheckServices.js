var paycheckServices = {
	calculateINSS: function(salary, callbackINSS){
		 $.ajax({
                    url:"Services/paycheckControllerINSS.php", 
                    type:"POST",			
                    data:'salary'+'='+salary,
                    success: function (value){
                            callbackINSS(parseFloat(value)); 
                    }
                
                });   
	},

	calculateIRPF: function(salary, callbackIRPF){
		 $.ajax({
                    url:"Services/paycheckControllerIRPF.php", 
                    type:"POST",			
                    data:'salary'+'='+salary,
                    success: function (value){
                            callbackIRPF(parseFloat(value));                        
                    }
                
                });  

	},
    calculateSalaryLiquid: function(salary, callbackSalary){
		 $.ajax({
                    url:"Services/paycheckControllerSalary.php", 
                    type:"POST",			
                    data:'salary'+'='+salary,
                    success: function (value){
                            callbackSalary(parseFloat(value));                        
                    }
                
                });  

	}
    
}