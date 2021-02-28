let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
	if (n >= 1 && n <= 100) {
		return true;
	} else {
		return false;
	}
}

function inLista(n, l) {
	if (l.indexOf(n) != -1) {
		return true;
	} else {
		return false;
	}
}

// criar uma funcao que adiciona valores de uma string ao presssionar o adicionar
function add() {
	let valorAdd = num.value;
	// adicionar(valorAdd)
	// separar os valores da string usando o split
	function stringSplit(stringToSplit, separator) {
		var arrayOfString = stringToSplit.split(separator);
		// console.log(stringToSplit)
		// console.log(separator)
		// console.log(arrayOfString.length)
		valorAdd = arrayOfString.map(function (valorAtual) {
			return parseFloat(valorAtual, 10);
		});
		// converter os valores da string separada para Number

		// criar uma estrutura de repeticao para adicionar os valores separados dentro do option e do array valores
		for (var i = 0; i < valorAdd.length; i++) {
			if (!(Number(valorAdd[i]) && isNumero(parseInt(valorAdd[i], 10)))) {
				window.alert('Digite somente números de 1 a 100 burrao');
				num.value = '';
				return false;
			}
		}
		for (var i = 0; i < valorAdd.length; i++) {
			var newRes = valorAdd[i];
			console.log(newRes);
			// parseInt(newRes[i],10)
			if (Number(newRes) && isNumero(parseInt(newRes, 10))) {
				adicionar(newRes);
			}
		}
		num.value = '';
		num.focus();
	}

	space = ' ';

	stringSplit(valorAdd, space);
	// console.log(valorAdd.join(' / '))
}

function adicionar(valor) {
	// if(isNumero(valor) && !inLista(valor, valores)){
	if (!inLista(valor, valores)) {
		valores.push(valor);
		let item = document.createElement('option');
		item.text = `Valor ${valor} adicionado.`; // interpolação de string
		item.value = valor;
		lista.appendChild(item);
		res.innerHTML = '';
	} else {
		window.alert(` ${valor} é invalido ou ja encontrado na lista`);
	}
}

function finalizar() {
	// adicionar(num.value)
	if (valores.length == 0) {
		window.alert('Adicione valores antes de finalizar');
	} else {
		let tot = valores.length;
		let maior = valores[0];
		let menor = valores[0];
		let soma = 0;
		let media = 0;
		for (let pos in valores) {
            console.log(pos)
			soma += valores[pos];
			if (valores[pos] > maior) maior = valores[pos];
			if (valores[pos] < menor) menor = valores[pos];
		}
		console.log(valores);
		media = soma / tot;
		res.innerHTML = '';
		res.innerHTML += `<p>Ao todo, temos ${tot} número(s) cadastrados.</p>`;
		res.innerHTML += `<p>Maior valor informado foi ${maior}.</p>`;
		res.innerHTML += `<p>Menor valor informado foi ${menor}.</p>`;
		res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
		res.innerHTML += `<p>Media dos valores digitados é ${media}.</p>`;
	}
}

function remover() {
	// Pegar o select usando o id
	var elementSelect = document.getElementById('flista');
	// // Selecionar todas as linhas que foram clicadas no select ( select.options )
	var lSelecionadas = elementSelect.selectedOptions;
	if (lSelecionadas.length == 0) {
		window.alert('Selecione algum valor a ser removido');
	}
	console.log('Quantidade de option selecionada', lSelecionadas.length);
	console.log(elementSelect);
	// // Percorrer as linhas selecionadas e pegar o atributo value ( options.getAttribute('value'))
	for (var i = 0; i < lSelecionadas.length; i++) {
		//         // Pegar o valor do option
		var vOption = lSelecionadas[i].getAttribute('value');
		//         // Pegar o indice do value no array valores ( valores.indexOf(value) )
		var indexSelecionado = valores.indexOf(parseFloat(vOption));
		//         // Remover o valor selecionado no array de valores ( valores.splice(index,1))
		valores.splice(indexSelecionado, 1);
	}
	//     // Remover options selecionando a partir do index e removendo-o enquanto i for >= 0
	for (var i = lSelecionadas.length - 1; i >= 0; i--) {
		lSelecionadas[i].remove();
	}
	console.log('remover', valores);
	res.innerHTML = '';

	// var selectv = document.getElementById('flista')

	// var index = selectv.selectedIndex
	// selectv.remove(index)
	// value = valores[index]

	// console.log(selectv)

	// console.log('O valor removido foi ' +value )

	// USANDO SPLICE

	// console.log(index)
	// console.log(valores)
	// valores.splice(index,1)

	// USANDO FILTER

	// function filterValue(fValue, dx,array){
	//     console.log(fValue)
	//     console.log(dx)
	//     console.log(array)
	//     return fValue != value
	// }

	// var filtred = valores.filter(filterValue)
	// console.log(filtred)
	// valores = filtred
}
