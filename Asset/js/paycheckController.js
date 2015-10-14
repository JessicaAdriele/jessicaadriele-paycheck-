var paycheckController = {
	
	init: function() {
		paycheckController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		var callbackInss = function(value){
		paycheckController.showResultINSS(value);

			}
        
        var callbackSalary = function(value){
            paycheckController.showResultSalLiquid(value);
        
        }
		var callbackIrpf = function(value){
            paycheckController.showResultIRPF(value);
			}

        
		form.addEventListener('submit', function(event) {
			var salary = parseFloat(form.salary.value);
            
			paycheckServices.calculateINSS(salary, callbackInss);
			paycheckServices.calculateIRPF(salary, callbackIrpf);
            paycheckServices.calculateSalaryLiquid(salary, callbackSalary);

			
		

			event.preventDefault();
		});
	},

	showResultINSS: function(inss) {
		var spanResult = document.getElementById('inss');        
		spanResult.setAttribute("value",  inss.toFixed(2));
	},

	showResultIRPF: function(irpf) {
		var spanResult = document.getElementById('irpf');
		spanResult.setAttribute("value", irpf.toFixed(2));
	},
    showResultSalLiquid:function(salario){
        var spanResult = document.getElementById("liquidSalary");
        spanResult.setAttribute("value", salario.toFixed(2));
    
    }

}

paycheckController.init();