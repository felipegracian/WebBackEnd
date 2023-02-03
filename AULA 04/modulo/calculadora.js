/*******************************************************
 * Objetivo: Arquivo de funções para calcúlos matemáticos
 * Autor: Felipe Graciano
 * Data: 03/02/2023
 * Versão: 1.0
 ******************************************************/

function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;

    if (operacao == 1 || operacao.toUpperCase() == 'SOMAR') {
        resultado = valor1 + valor2;
    }
    else if (operacao == 2 || operacao.toUpperCase() == 'SUBTRAIR') {
        resultado = valor1 - valor2;
    } else if (operacao == 3 || operacao.toUpperCase() == 'MULTIPLICAR') {
        resultado = valor1 * valor2;
    } else if (operacao == 4 && valor2 == 0) {
        console.log('Divisões não podem ser feitas pelo número 0')
        entradaDados.close();
    } else if (operacao == 4 || operacao.toUpperCase() == 'DIVIDIR') {
        resultado = valor1 / valor2;
    }
    else {
        console.log('ERRO: Escolha uma opção.')
        entradaDados.close();
    }

    if (resultado == undefined) {
        return false;
    }
    else {
        return resultado;
    }

    //Permite tornar as funções public(java) ou seja no escopo global
    //As funções que não estiverem no .exports serão tratadas como local
    module.exports = {
        calculadora
    }

}