/******************************************************
 * Objetivo: Realizar a parte de entrada de dados do arquivo tabuada.js
 * Autor: Felipe Graciano
 * Data: 09/02/2023
 * Versão: 1.0
 ******************************************************/

// Import da biblioteca readline (entrada de dados).

var readline = require('readline');
var matematica = require('./modulo/tabuada.js')
const { calcularTabuada } = require('.AULA 05/modulo/tabuada.js');

// Cria objeto para ser especialista em entrada de dados pelo teclado.

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Deseja a tabuada de qual número? \n' , function(tabuada) {
    let tabuadaDesejada = tabuada;

    entradaDados.question('Deseja multiplicar até qual número? \n' , function(maxContador){
        let ultimoMultiplicador = maxContador;
    
    
    if(tabuadaDesejada == '' || ultimoMultiplicador == '' || tabuadaDesejada <= 0)
        console.log('Erro: Todos os valores devem ser escritos e a tabuada desejada tem que ser a patir do número 0')
     else {
        resultado = calcularTabuada(tabuadaDesejada, ultimoMultiplicador);
        console.log(resultado)
    }}
)})

