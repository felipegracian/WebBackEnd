/******************************************************
 * Objetivo: Calcular média de 4 notas escolares
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

entradaDados.question('Digite seu nome: \n', function (nome) {
    // recebe valor digitado pelo teclado
    // função de callback para entrar nome do aluno

    let nomeAluno = nome;

    // função de callback para entrar nota1

    entradaDados.question('Digite a nota 1: \n', function (nota1) {
        let valor1 = nota1;

        // função de callback para entrar nota2

        entradaDados.question('Digite a nota 2: \n', function (nota2) {
            let valor2 = nota2;

            // função de callback para entrar nota3

            entradaDados.question('Digite a nota 3: \n', function (nota3) {
                let valor3 = nota3;

                // função de callback para entrar nota4

                /**
                 * parseint() = converte string to int
                 * parsefloat() = converte string to real
                 * Number converte uma string para número, conforme a entrada do valor
                 * o JS define se será inteiro ou real
                 */

                /**
                 * Operadores de comparação:
                 * == -> igual
                 * === -> igualdade e tipo de dado
                 * !== -> Verifica se o valor da esquerda e o da direita não são idênticos entre si
                 * != -> diferente
                 * <= -> menor igual
                 * >= -> maior igual
                 */
                entradaDados.question('Digite a nota 4: \n', function (nota4) {
                    let valor4 = nota4;
                    //let media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3)+ parseFloat(valor4))/4;
                    if(valor1 == '' || valor2 == '' || valor3 == '' || valor4 == ''){
                        console.log('Voce deixou entradas vazias')
                
                    } else if (
                         isNaN(valor1) ||  isNaN(valor2) ||  isNaN(valor3) ||  isNaN(valor4)
                        )
                    {
                        console.log('Você não digitou um número válido')
                     //Validação para entrada de dados somente entre 0 e 10   
                    }else if(
                        valor1 < 0 || valor1 > 10 || valor2 < 0 || valor2 > 10 || valor3 < 0 || valor3 > 10 || valor4 < 0 || valor4 > 10
                        
                    )
                    {
                        console.log('As notas variam apenas de 0 a 10')
                    } else {
                        media = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4)) /4;
                        if (media < 7)
                        {
                            console.log('Aluno REPROVADO!!')
                        }
                        else {
                            console.log('Aluno APROVADO!!')
                        }

                        console.log('Média do Aluno ' + media.toFixed(1));
                    }
                

                    //console.log(nome + nota1 + nota2 + nota3 + nota4);
                   // console.log(nome, valor1 , valor2 , valor3 , valor4);
                   // console.log('Essa é sua média: ' + media)
                   
                });
            });
        });
    });
});

