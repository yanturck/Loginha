//DESCODIFICANDO OS INTES
var loc = location.search.substring(1, location.search.length)

var tabelaItens = {
		001: 'Cama de solteiro',
		002: 'Cama de casal',
		003: 'Fogão 2 bocas',
		004: 'Fogão 4 bocas',
		005: 'Fogão 5 bocas',
		006: 'Fogão 6 bocas',
		007: 'Mesa 4 cadeiras',
		008: 'Mesa 5 cadeiras',
		009: 'Mesa 6 cadeiras',
		010: 'Mesa 8 cadeiras',
		011: 'TV 22 polegadas',
		012: 'TV 32 polegadas',
		013: 'TV 38 polegadas',
		014: 'TV 42 polegadas',
		015: 'TV 64 polegadas',
		016: 'Guarda-roupa 2 portas',
		017: 'Guarda-roupa 4 portas',
		018: 'Guarda-roupa 5 portas',
		019: 'Guarda-roupa 6 portas',
		020: 'Maquina de lava 12L',
		021: 'Maquina de lava 18L',
		022: 'Geladeira uma porta',
		023: 'Geladeira 2 porta',
		024: 'Geladeira 3 porta',
		025: 'Frizzer pequeno',
		026: 'Frizzer médio',
		027: 'Frizzer grande',
		028: 'Armário 2 portas',
		029: 'Armário 4 portas',
		030: 'Armário 6 portas',
		031: 'Armário 8 portas'
	};
var aux = loc.split('&&');
var itens = [];

for(i=0; i<aux.length; i++){
	itens.push(tabelaItens[aux[i]]);
}
document.getElementById('itens').value = itens.join('\n');

//FUNCOES PARA DEIXAR A ESCRITA DO FORMULARIO MINUSCULAS OU MAIUSCULAS
function maiuscula(aux){
  var tmp = document.getElementById(aux).value;
  tmp = tmp.toUpperCase();
  document.getElementById(aux).value = tmp;
}

function minuscula(aux){
  var letra = document.getElementById(aux).value;
  letra = letra.toLowerCase();
  document.getElementById(aux).value = letra;
}

//MASCARAS DE ALGUNS INPUTS
function mascaraCPF(){
	var aux = document.getElementById("cpf").value;
	document.getElementById("cpf").style.borderColor = "#ffffff";
	document.getElementById("cpf").style.backgroundColor = "#ffffff";
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
	document.getElementById("fone").style.borderColor = "#ffffff";
	document.getElementById("fone").style.backgroundColor = "#ffffff";
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
	document.getElementById("cep").style.borderColor = "#ffffff";
	document.getElementById("cep").style.backgroundColor = "#ffffff";
	if(aux.length == 5){
		aux += "-";
		document.getElementById("cep").value = aux;
	}else if(aux.length == 9){
		document.getElementById("endereco").focus();
	}
}

//FUNCOES RESPONSAVEIS POR VERIFICAR A VALIDADE DE ALGUNS DADOS
function validarCPF(){
	var cpf = document.getElementById("cpf").value;
	if(cpf == "" || cpf.length != 14){
		document.getElementById("cpf").style.borderColor = "red";
		document.getElementById("cpf").style.backgroundColor = "#ffe5e5";
		return false;
	}else{
		var tmp = cpf.split("-");
		var cpfInvalidos = ["000.000.000", "111.111.111", "222.222.222", "333.333.333", "444.444.444", "555.555.555", "666.666.666", "777.777.777", "888.888.888", "999.999.999"];
		
		if(cpfInvalidos.indexOf(tmp[0]) != -1){
				document.getElementById("cpf").style.borderColor = "red";
				document.getElementById("cpf").style.backgroundColor = "#ffe5e5";
				return false;	
			}
			
	var aux = tmp[0].split(".").join("") + tmp[1];
	var add1 = 0;
	for (i=0; i<9; i++){
		add1 += (parseInt(aux.charAt(i)) * (10-i));
	}
	var rev1 = 11 - (add1 % 11);
	if(rev1 == 10 || rev1 == 11){
		rev1 = 0;
	}
	if(rev1 != parseInt(aux.charAt(9))){
		document.getElementById("cpf").style.borderColor = "red";
		document.getElementById("cpf").style.backgroundColor = "#ffe5e5";
		return false;
	}else{
		var add2 = 0;
		for (i=0; i<10; i++){
			add2 += (parseInt(aux.charAt(i)) * (11-i));
		}
		var rev2 = 11 - (add2 % 11);
		if(rev2 == 10 || rev2 == 11){
			rev2 = 0;
		}
		if(rev2 != parseInt(aux.charAt(10))){
			document.getElementById("cpf").style.borderColor = "red";
			document.getElementById("cpf").style.backgroundColor = "#ffe5e5";
			return false;
		}else{
				return true;
			}
		}
	}
}

function verificFone(){
	var fone = document.getElementById("fone").value;
	if(fone == "" || fone.length != 15){
		document.getElementById("fone").style.borderColor = "red";
		document.getElementById("fone").style.backgroundColor = "#ffe5e5";
		return false;
	}
	else{
		var numInvalidos = ["(00) 00000-0000", "(11) 11111-1111", "(22) 22222-2222", "(33) 33333-3333", "(44) 44444-4444", "(55) 55555-5555", "(66) 66666-6666", "(77) 77777-7777", "(88) 88888-8888", "(99) 99999-9999"];
		
		if (numInvalidos.indexOf(fone) != -1){
			document.getElementById("fone").style.borderColor = "red";
			document.getElementById("fone").style.backgroundColor = "#ffe5e5";
			return false;
		}
		else{
			return true;
		}
	}
}

function verificCEP(){
	var cep = document.getElementById("cep").value;
	if(cep == "" || cep.length != 9){
		document.getElementById("cep").style.borderColor = "red";
		document.getElementById("cep").style.backgroundColor = "#ffe5e5";
		return false;
	}
	else{
		var cepValidos = ["65074-115", "65270-000", "65065-510", "65130-000"];
		if(cepValidos.indexOf(cep) != -1){
		return true;
		}
		else {
			document.getElementById("cep").style.borderColor = "red";
			document.getElementById("cep").style.backgroundColor = "#ffe5e5";
			alert("Infelizmente não atendemos nesse local!");
			return false;
		}
	}
}

function campVazio(){
	if(document.getElementById("nomeC").value=="" | 		document.getElementById("cpf").value=="" ||
		document.getElementById("fone").value=="" ||
		document.getElementById("cep").value=="" ||
		document.getElementById("endereco").value=="" ||
		document.getElementById("num").value==""){
			return false;
	}
	else{
		return true;
	}
}

function verificAll(){
	if (campVazio() == true){
		if (validarCPF() == true){
			if(verificFone() == true){
				if(verificCEP() == true){
					return true;
				}
				else{
					alert("Informe um CEP valido!");
					return false;
				}
			}
			else{
				alert("informe um telefone valido!");
				return false;
			}
		}
		else{
			alert("Informe um CPF valido!");
			return false;
		}
	}
	else{
		alert("Preencha todos os campos!");
		return false;
	}
}

//ACOES DOS BOTOES "SALVAR" E "CANCELAR"
function salvar(){
	var pedido;
	if(verificAll() == true){
		var id = ["nomeC", "nomeS", "cpf", "fone", "email", "itens", "cep", "num", "endereco", "complemento", "obs"];
		for(i=0; i<id.length; i++){
			pedido.push(document.getElementById(id[i]).value);
		}
		return pedido.join("\n");
	}
}

function cancelar(){
	var conf = confirm("Você tem certeza que deseja cancelar?");
	if (conf == true){
		window.location.href = "index.html";
		return true;
	}
}
