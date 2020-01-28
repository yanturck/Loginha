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
	var aux1 = document.getElementById("cpf").value;
	document.getElementById("cpf").style.borderColor = "#ffffff";
	document.getElementById("cpf").style.backgroundColor = "#ffffff";
	if(aux1.length == 11){
		var aux2 = aux1.split("");
		var tmp = aux2[0] + aux2[1] + aux2[2] + "." + aux2[3] + aux2[4] + aux2[5] + "." + aux2[6] + aux2[7] + aux2[8] + "-" + aux2[9] + aux2[10];
		document.getElementById("cpf").value = tmp;
		document.getElementById("email").focus();
	}else if(aux1.length == 14){
		document.getElementById("email").focus();
	}
}

function validarCPF(){
	var tmp = document.getElementById("cpf").value;
	if(tmp == "" || tmp.length != 14){
		document.getElementById("cpf").style.borderColor = "red";
		document.getElementById("cpf").style.backgroundColor = "#ffe5e5";
		return false;
	}else{
		var tmp1 = tmp.split("-");
		if(tmp1[0] == "000.000.000" || tmp1[0] == "111.111.111" ||
			tmp1[0] == "222.222.222" || tmp1[0] == "333.333.333" ||
			tmp1[0] == "444.444.444" || tmp1[0] == "555.555.555" ||
			tmp1[0] == "666.666.666" || tmp1[0] == "777.777.777" ||
			tmp1[0] == "888.888.888" || tmp1[0] == "999.999.999"){
				document.getElementById("cpf").style.borderColor = "red";
				document.getElementById("cpf").style.backgroundColor = "#ffe5e5";
				alert("CPF invalido!");
				return false;	
			}
		var aux = tmp1[0].split(".");
		var aux1 = aux[0] + aux[1] + aux[2] + tmp1[1];
		var add1 = 0;
		for (i=0; i<9; i++){
			add1 += (parseInt(aux1.charAt(i)) * (10-i));
		}
		var rev1 = 11 - (add1 % 11);
		if(rev1 == 10 || rev1 == 11){
			rev1 = 0;
		}
		if(rev1 != parseInt(aux1.charAt(9))){
			document.getElementById("cpf").style.borderColor = "red";
			document.getElementById("cpf").style.backgroundColor = "#ffe5e5";
			alert("CPF invalido!");
			return false;
		}else{
			var add2 = 0;
			for (i=0; i<10; i++){
				add2 += (parseInt(aux1.charAt(i)) * (11-i));
			}
			var rev2 = 11 - (add2 % 11);
			if(rev2 == 10 || rev2 == 11){
				rev2=0;
			}
			if(rev2 != parseInt(aux1.charAt(10))){
				document.getElementById("cpf").style.borderColor = "red";
				document.getElementById("cpf").style.backgroundColor = "#ffe5e5";
				alert("CPF invalido!");
				return false;
			}else{
				document.getElementById("cpf").style.borderColor = "green";
				return true;
			}
		}
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
	if(document.getElementById("nomeC").value=="" | 		document.getElementById("cpf").value=="" ||
		document.getElementById("fone").value=="" ||
		document.getElementById("cep").value=="" ||
		document.getElementById("endereco").value==""){
			alert("Preencha todos os campos OBRIGATORIOS!");
			return false;
	}
	return true;
}

function salvar(){
	if (campVazio()==true){
		if (validarCPF(document.getElementById("cpf").value)==true){
			return true;
		}
	}
	return false;
}
