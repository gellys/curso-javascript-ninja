/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var recebeArray = ["Nascimento",{a: 9},22,44,89];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myfunction(arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myfunction(recebeArray[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myfunction2(arr,i){
	return arr[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayCinco = ["AAAAA",true,9.8,null,9999];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myfunction2(arrayCinco, 0));
console.log(myfunction2(arrayCinco, 1))
console.log(myfunction2(arrayCinco, 2))
console.log(myfunction2(arrayCinco, 3))
console.log(myfunction2(arrayCinco, 4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nameBook){
	var todosLivros = {
		"Livro da capa 1":{
			quantidadePaginas:40,
			autor: "Maria dos Santos",
			editora: "Editora Palmares"},
		"Livro da capa 2":{
			quantidadePaginas:189,
			autor: "Joao Matheus",
			editora: "Editorazinha"},
		"Livro da capa 3":{
			quantidadePaginas:500,
			autor: "Carla Luize",
			editora: "Editora Céu Azul"}
	}
	
	return !nameBook ? todosLivros : todosLivros [ nameBook ]; 
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log ("O livro Livro da capa 1 tem " + book("Livro da capa 1").quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
