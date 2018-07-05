# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(retorno){
		return retorno ? true : false;
  }

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(NaN);
isTruthy('');
isTruthy("");
isTruthy(null);
isTruthy(false);


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(10);
isTruthy(true);
isTruthy("Testando");
isTruthy('Outro teste qualquer');
isTruthy('aaaaaaaaaaaa');
isTruthy("123456789");
isTruthy("Teste 7");
isTruthy("bbbbbbbbbbbb");
isTruthy("999999999999");
isTruthy("Fim!");

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
marca: 'Fiat',
modelo: 500,
placa: 'AAA0088',
ano: 2016,
cor: 'Branco',
quantasPortas: 2,
assentos: 5,
quantidadedePessoas: 0}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
mudaCor = function(){
cor = 'Preto';
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
obterCor = function(){
	return carro.cor;

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
obterModelo = function(){
	return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
obterMarca = function(){
	return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
obterMarcaModelo = function(){
	return 'Esse carro é um ' + carro.marca + ' '+ carro.modelo;
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.colocarPessoa = function(n){
	var totalPessoas = carro.quantidadedePessoas + n;
	if (carro.quantidadedePessoas === carro.assentos){
		return "O carro ja está lotado!"
    } 
	if (totalPessoas > carro.assentos){
		var pessoasCabem = carro.assentos - carro.quantidadedePessoas;
		var tipoPessoa = carro.quantidadedePessoas === 1 ? " pessoa" : "pessoas"
		return "Só cabem mais " + pessoasCabem + " " + tipoPessoa;
    }
	
	carro.quantidadedePessoas += n;		
	return "Já temos " + carro.quantidadedePessoas + " pessoas no carro!"	
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor; //Branco

// Mude a cor do carro para vermelho.
carro.cor = "vermelho";

// E agora, qual a cor do carro?
carro.cor; //Vermelho

// Mude a cor do carro para verde musgo.
carro.cor ="Verde musgo";

// E agora, qual a cor do carro?
carro.cor; //Verde musgo

// Qual a marca e modelo do carro?
carro.marca; //Fiat
carro.modelo; //500

// Adicione 2 pessoas no carro.
carro.colocarPessoa(2); //"Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.
carro.colocarPessoa(4); //"Só cabem mais 3 pessoas"

// Faça o carro encher.
carro.colocarPessoa(3); //"Já temos 5 pessoas no carro!"
carro.colocarPessoa(1); //"O carro ja está lotado!"

// Tire 4 pessoas do carro.
carro.colocarPessoa = function(n){
	var totalPessoas = carro.quantidadedePessoas + n;
	if (carro.quantidadedePessoas === carro.assentos && totalPessoas >= carro.assentos)		{
		return "O carro ja está lotado!"
    } 
	if (totalPessoas > carro.assentos){
		var pessoasCabem = carro.assentos - carro.quantidadedePessoas;
		var tipoPessoa = carro.quantidadedePessoas === 1 ? " pessoa" : "pessoas"
		return "Só cabem mais " + pessoasCabem + " " + tipoPessoa;
    }
	
	carro.quantidadedePessoas += n;		
	return "Já temos " + carro.quantidadedePessoas + " pessoas no carro!"	
};

carro.quantidadedePessoas = 0;
carro.colocarPessoa(5); //"Já temos 5 pessoas no carro!"
carro.colocarPessoa(-4); //"Já temos 1 pessoas no carro!"


// Adicione 10 pessoas no carro.
carro.colocarPessoa(10); //"Só cabem mais 4  pessoa"

// Quantas pessoas temos no carro?
carro.quantidadedePessoas; //1
```
