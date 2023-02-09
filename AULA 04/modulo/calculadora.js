/*******************************************************
 * Objetivo: Arquivo de funções para calcúlos matemáticos
 * Autor: Felipe Graciano
 * Data: 03/02/2023
 * Versão: 1.0
 ******************************************************/

//Forma Tradicional de se criar a função
// function calculadora(numero1, numero2, tipoCalculo) {

//     let valor1 = Number(numero1);
//     let valor2 = Number(numero2);
//     let operacao = tipoCalculo.toUpperCase();
//     let resultado;
//     let status = true;

//     // if (operacao == 1 || operacao.toUpperCase() == 'SOMAR') {
//     //     resultado = valor1 + valor2;
//     // }
//     // else if (operacao == 2 || operacao.toUpperCase() == 'SUBTRAIR') {
//     //     resultado = valor1 - valor2;
//     // } else if (operacao == 3 || operacao.toUpperCase() == 'MULTIPLICAR') {
//     //     resultado = valor1 * valor2;
//     // } else if (operacao == 4 && valor2 == 0) {
//     //     console.log('Divisões não podem ser feitas pelo número 0')
//     //     status = false;
//     // } else if (operacao == 4 || operacao.toUpperCase() == 'DIVIDIR') {
//     //     resultado = valor1 / valor2;
//     // }
//     // else {
//     //     console.log('ERRO: Escolha uma opção.')
//     //     status = false;
//     // }

//     switch (operacao) {
//         case '1':
//             resultado = valor1 + valor2;
//             break;
//         case '2':
//             resultado = valor1 - valor2;
//             break;
//         case '3':
//             resultado = valor1 * valor2;
//             break;
//         case '4':
//             if (valor2 == 0) {
//                 console.log('Divisões não podem ser feitas pelo número 0')
//                 status = false;
//             } else{
//                 resultado = valor1 / valor2;

//             }
//             break;

//         default:
//             console.log('ERRO: Escolha uma opção.')
//             status = false;
//     }

//          if (resultado == undefined) {
//           status = false;
//          }
//          else {
//            return resultado;
//          }



// }


// A 02 maneira, atualmente a mais utilizada seria: const calculadora = function(){}
const calculadora = function (numero1, numero2, tipoCalculo) {
    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;
    let status = true;

    // if (operacao == 1 || operacao.toUpperCase() == 'SOMAR') {
    //     resultado = valor1 + valor2;
    // }
    // else if (operacao == 2 || operacao.toUpperCase() == 'SUBTRAIR') {
    //     resultado = valor1 - valor2;
    // } else if (operacao == 3 || operacao.toUpperCase() == 'MULTIPLICAR') {
    //     resultado = valor1 * valor2;
    // } else if (operacao == 4 && valor2 == 0) {
    //     console.log('Divisões não podem ser feitas pelo número 0')
    //     status = false;
    // } else if (operacao == 4 || operacao.toUpperCase() == 'DIVIDIR') {
    //     resultado = valor1 / valor2;
    // }
    // else {
    //     console.log('ERRO: Escolha uma opção.')
    //     status = false;
    // }

    switch (operacao) {
        case '1':
            resultado = SOMAR(valor1, valor2);
            break;
        case '2':
            resultado = SUBTRAIR(valor1, valor2);
            break;
        case '3':
            resultado = MULTIPLICAR(valor1, valor2);
            break;
        case '4':
            if (valor2 == 0) {
                console.log('Divisões não podem ser feitas pelo número 0')
                status = false;
            } else {
                resultado = DIVIDIR(valor1, valor2);

            }
            break;

        default:
            console.log('ERRO: Escolha uma opção.')
            status = false;
    }

    if (resultado == undefined) {
        status = false;
    }
    else {
        return resultado;
    }
}

//Forma 03 de criar uma função baseado em arrow function
const SOMAR = (valor1, valor2) => valor1 + valor2;
const SUBTRAIR = (valor1, valor2) => valor1 - valor2;
const MULTIPLICAR = (valor1, valor2) => valor1 * valor2;
const DIVIDIR = (valor1, valor2) => valor1 / valor2;



//Permite tornar as funções public(java) ou seja no escopo global
//As funções que não estiverem no .exports serão tratadas como local
module.exports = {
    calculadora
}
