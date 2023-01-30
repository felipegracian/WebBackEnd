/******************************************************
 * Objetivo: Exercício de Aprendizagem que simula uma calculadora com apenas 2 valores
 * Autor: Felipe Graciano
 * Data: 27/01/2023
 * Versão: 1.0
 ******************************************************/

// Import da biblioteca readline (entrada de dados).

var readline = require('readline');

// Cria objeto para ser especialista em entrada de dados pelo teclado.

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * var -> cria um espaço memória de escopo global para o projeto, ou seja essa variável poderá ser utilizada em qualquer parte do arquivo (várias functions).
 * let -> cria um espaço memória de escopo local para o projeto, ou seja essa variável somente poderá ser utilizada dentro da função que foi criada.
 * const -> cria um espaço memória de escopo global ou local para o projeto, ou seja essa constante poderá ser utilizada em qualquer parte do projeto e nunca sofrerá alterção.
 */


 entradaDados.question('Qual o primeiro valor? \n' , function (valor1) {
     // recebe valor digitado pelo teclado

     let primeiroValor = valor1.replace(',' , '.');

     entradaDados.question('Qual o segundo valor? \n' , function (valor2) {

        let segundoValor = valor2.replace(',' , '.' );

        

        entradaDados.question('Qual a operação desejada : 1- Soma \n 2 - Subtração \n 3 - Multiplicação \n 4- Divisão \n' , function (operacao) {

            let operacaoDesejada = operacao;

            
            
            
            

            if(primeiroValor == '') {
                console.log('O primeiro valor é obrigatório')
            } else if(segundoValor == '') {
                console.log('O segundo valor é obrigatório')
            } else if (isNaN(primeiroValor)) {
                console.log('Caractére inválido : Digite apenas números nos valores')
            } else if (isNaN(segundoValor)) {
                console.log('Caractére inválido : Digite apenas números nos valores')
            }
               else if (operacao == 1){
                console.log(Number(primeiroValor) + Number(segundoValor));
            }
              else if (operacao == 2) {
                console.log(Number(primeiroValor) - Number(segundoValor));
            } else if (operacao == 3) {
                console.log(Number(primeiroValor) * Number(segundoValor));
            } else if (operacao == 4 && valor2 == 0) {
                console.log('Divisões não podem ser feitas pelo número 0')
            } else if (operacao == 4) { 
                console.log(Number(primeiroValor) / Number(segundoValor));
            }
               else {
                console.log('ERRO: Escolha uma opção.')
            }
        });

     });
 });