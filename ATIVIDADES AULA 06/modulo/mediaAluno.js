/******************************************************
 * Objetivo: Exercício de Aprendizagem que calcula a média dos alunos
 * Autor: Felipe Graciano
 * Data: 10/02/2023
 * Versão: 1.0
 ******************************************************/





const calcularMedia = function (nota1, nota2, nota3, nota4) {
    let primeiraNota = Number(String(nota1));
    let segundaNota = Number(String(nota2));
    let terceiraNota = Number(String(nota3));
    let quartaNota = Number(String(nota4));
    let status = true;
    let resultado;
    let exame = false;

    if (primeiraNota < 0 || segundaNota < 0 || terceiraNota < 0 || quartaNota < 0 || primeiraNota > 100 || segundaNota > 100 || terceiraNota > 100 || quartaNota > 100) {
        status = false
    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
        status = false
    } else if (primeiraNota, segundaNota, terceiraNota, quartaNota == '') {
        status = false;
    } else {
        resultado = primeiraNota + segundaNota + terceiraNota + quartaNota / 4;
    }

    if (resultado < 50) {
        console.log('Reprovado')
    } else if (resultado >= 50 || resultado <= 69) {
        exame = true;
    } else {
        console.log('Aprovado');
    }

    
}

module.exports = {
    calcularMedia
}