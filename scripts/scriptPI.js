//VERIFICANDO A EXISTENCIA DE ALGUM PRODUTO SELECIONADO
function verificarPI(){
	var itens = [];
	
	var tabelaItens = {
		'Nenhum Item': '000',
		'Cama de solteiro': '001',
		'Cama de casal': '002',
		'Fogão 2 bocas': '003',
		'Fogão 4 bocas': '004',
		'Fogão 5 bocas': '005',
		'Fogão 6 bocas': '006',
		'Mesa 4 cadeiras': '007',
		'Mesa 5 cadeiras': '008',
		'Mesa 6 cadeiras': '009',
		'Mesa 8 cadeiras': '010',
		'TV 22 polegadas': '011',
		'TV 32 polegadas': '012',
		'TV 38 polegadas': '013',
		'TV 42 polegadas': '014',
		'TV 64 polegadas': '015',
		'Guarda-roupa 2 portas': '016',
		'Guarda-roupa 4 portas': '017',
		'Guarda-roupa 5 portas': '018',
		'Guarda-roupa 6 portas': '019',
		'Maquina de lava 12L': '020',
		'Maquina de lava 18L': '021',
		'Geladeira uma porta': '022',
		'Geladeira 2 portas': '023',
		'Geladeira 3 portas': '024',
		'Frizzer pequeno': '025',
		'Frizzer médio': '026',
		'Frizzer grande': '027',
		'Armário 2 portas': '028',
		'Armário 4 portas': '029',
		'Armário 6 portas': '030',
		'Armário 8 portas': '031'
	};
	
	var aux = document.getElementById("tipoCama");
	var tmp = aux.options[aux.selectedIndex].value;
	itens.push(tabelaItens[tmp]);
	
	var aux2 = document.getElementById("tipoFogao");
	var tmp2 = aux2.options[aux2.selectedIndex].value;
	itens.push(tabelaItens[tmp2]);
	
	var aux3 = document.getElementById("tipoMesa");
	var tmp3 = aux3.options[aux3.selectedIndex].value;
	itens.push(tabelaItens[tmp3]);
	
	var aux4 = document.getElementById("polTV");
	var tmp4 = aux4.options[aux4.selectedIndex].value;
	itens.push(tabelaItens[tmp4]);
	
	var aux5 = document.getElementById("GRPortas");
	var tmp5 = aux5.options[aux5.selectedIndex].value;
	itens.push(tabelaItens[tmp5]);
	
	var aux6 = document.getElementById("tipoMacLav");
	var tmp6 = aux6.options[aux6.selectedIndex].value;
	itens.push(tabelaItens[tmp6]);
	
	var aux7 = document.getElementById("tipoGel");
	var tmp7 = aux7.options[aux7.selectedIndex].value;
	itens.push(tabelaItens[tmp7]);
	
	var aux8 = document.getElementById("tipoFri");
	var tmp8 = aux8.options[aux8.selectedIndex].value;
	itens.push(tabelaItens[tmp8]);
	
	var aux9 = document.getElementById("tipoArm");
	var tmp9 = aux9.options[aux9.selectedIndex].value;
	itens.push(tabelaItens[tmp9]);
	
	itens.sort();
	
	var indice1 = itens.indexOf('000');
	var indice = itens.lastIndexOf('000');
	
	itens.splice(indice1, indice+1);
	
	if(itens.length !== 0){
		window.location.href = 'formulario.html?' + itens.join('&&');
		return true;
	}else{
		alert("ERRO!\nNenhum item selecionado.");
		return false;
	}
}
