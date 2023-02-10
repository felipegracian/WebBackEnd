/******************************************************
 * Objetivo: Exercício de Aprendizagem que calcula a média dos alunos - parte da entrada de dados
 * Autor: Felipe Graciano
 * Data: 10/02/2023
 * Versão: 1.0
 ******************************************************/
// Import da biblioteca readline (entrada de dados).

var readLine = require('readline');
var matematica = require('./modulo/mediaAluno.js');
const { calcularMedia } = require('./modulo/mediaAluno.js');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDados.question('Seja Bem vindo, qual o seu nome? \n', function (nomeAluno) {
    let alunoName = nomeAluno;

    entradaDados.question('Qual o seu sexo?: 1-Masculino 2-Feminino \n', function (generoAluno) {
        let alunoGender = generoAluno;


        entradaDados.question('Qual o nome do seu Professor(a)? \n', function (nomeProfessor) {
            let teacherName = nomeProfessor


            entradaDados.question('Qual o sexo do Professor(a)?: 1-Masculino 2-Feminino \n', function (generoProfessor) {
                let teacherGender = generoProfessor;


                entradaDados.question('Qual sua primeira nota? \n', function (nota1) {
                    let primeiraNota = nota1;


                    entradaDados.question('Qual sua segunda nota? \n', function (nota2) {
                        let segundaNota = nota2;


                        entradaDados.question('Qual sua terceira nota? \n', function (nota3) {
                            let terceiraNota = nota3;


                            entradaDados.question('Qual sua quarta nota? \n', function (nota4) {
                                let quartaNota = nota4;


                                calcularMedia(primeiraNota, segundaNota, terceiraNota, quartaNota)
                                

                                
                            })
                        })
                    })
                })
            })
        })
    })
})
