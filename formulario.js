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

function mascaraCPF(){
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
	}else if(aux.length == 14){
		document.getElementById("email").focus();
	}
}

function mascaraFone(){
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
	}else if(aux.length == 15){
		document.getElementById("cep").focus();
	}
}

function mascaraCEP(){
	var aux = document.getElementById("cep").value;
	if(aux.length == 5){
		aux += "-";
		document.getElementById("cep").value = aux;
	}else if(aux.length == 9){
		document.getElementById("endereco").focus();
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

function salvar(){
	if (campVazio()==true)
		if (validarCPF(document.getElementById("cpf").value)==true)
			return true;
	return false;
}
