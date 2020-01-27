function campVazio(){
	if(document.getElementById("nomeC").value=="" || document.getElementById("cpf").value=="" || document.getElementById("fone").value=="" || document.getElementById("cep").value=="" || document.getElementById("endereco").value==""){
		alert("Preencha todos os campos OBRIGATORIOS!");
		return false;
	}else{
		return true;
	}
}
function salvar(){
	if (campVazio()==false){
		return false;
	}else{
		return true;
	}
}
