/******************************************************
 * Objetivo: Exercício de Aprendizagem que simula uma calculadora com apenas 2 valores
 * Autor: Felipe Graciano
 * Data: 27/01/2023
 * Versão: 1.0
 ******************************************************/

// Import da biblioteca readline (entrada de dados).

var readline = require('readline');
var matematica = require('./AULA 04/modulo/calculadora.js');

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


entradaDados.question('Qual o primeiro valor? \n', function (valor1) {
    // recebe valor digitado pelo teclado

    let primeiroValor = valor1.replace(',', '.');

    entradaDados.question('Qual o segundo valor? \n', function (valor2) {

        let segundoValor = valor2.replace(',', '.');



        entradaDados.question('Qual a operação desejada : 1- Somar \n 2 - Subtrair \n 3 - Multiplicar \n 4- Dividir \n', function (operacao) {

            let operacaoDesejada = operacao;
            let resultado;


            if (primeiroValor == '' || segundoValor == '' || operacaoDesejada == '') {
                console.log('Todos valores são obrigatórios')
                entradaDados.close();
            } else if (isNaN(primeiroValor) || isNaN(segundoValor)) {
                console.log('Caractére inválido : Digite apenas números nos valores')
                entradaDados.close();
            } else {
               resultado = matematica.calculadora(primeiroValor, segundoValor, operacaoDesejada);
               if(resultado == false && typeof(resultado) == 'boolean'){
                entradaDados.close();
               }
               
            }
        });

    });
});