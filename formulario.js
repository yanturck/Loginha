function maiuscula(){
  var letra = document.getElementById("nomeC").value;
  letra = letra.toUpperCase();
  document.getElementById("nomeC").value = letra;
}

function minuscula(){
  var letra = document.getElementById("email").value;
  letra = letra.toLowerCase();
  document.getElementById("email").value = letra;
}

function pontCPF(){
	var aux = document.getElementById("cpf").value;
	if(aux.length == 3){
		aux += ".";
		document.getElementById("cpf").value = aux;
	}else if(aux.length == 7){
		aux += ".";
		document.getElementById("cpf").value = aux;
	}else if(aux.length == 11){
		aux += "-";
		document.getElementById("cpf").value = aux;
	}
}

function pontFone(){
	var aux = document.getElementById("fone").value;
	if(aux == ""){
		aux += "(";
		document.getElementById("fone").value = aux;
	}else if(aux.length == 3){
		aux += ") ";
		document.getElementById("fone").value = aux;
	}else if(aux.length == 10){
		aux += "-";
		document.getElementById("fone").value = aux;
	}
}

function pontCEP(){
	var aux = document.getElementById("cep").value;
	if(aux.length == 5){
		aux += "-";
		document.getElementById("cep").value = aux;
	}
}

function campVazio(){
	if(document.getElementById("nomeC").value=="" ||
		document.getElementById("cpf").value=="" ||
		document.getElementById("fone").value=="" ||
		document.getElementById("cep").value=="" ||
		document.getElementById("endereco").value=="")
			alert("Preencha todos os campos OBRIGATORIOS!");
			return false;
	return true;
}

function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			alert("CPF Inválido!");
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))
			alert("CPF Inválido!");		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		alert("CPF Inválido!");
		return false;		
	return true;   
}

function salvar(){
	if (campVazio()==true)
		if (validarCPF(document.getElementById("cpf").value)==true)
			return true;
	return false;
}
