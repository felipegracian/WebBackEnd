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
    let resultadoMedia;
    
    if (primeiraNota < 0 || segundaNota < 0 || terceiraNota < 0 || quartaNota < 0 || primeiraNota > 100 || segundaNota > 100 || terceiraNota > 100 || quartaNota > 100) {
        console.log('Os valores devem estar entre 0 a 100')
    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
        console.log('Caractér inválido: Digite apenas números')
    } else if (primeiraNota === '' || segundaNota === '' || terceiraNota === '' || quartaNota === '') {
        console.log('ERRO: Todas as notas são obrigatórias')
    } else {
        
        resultadoMedia = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;
        if (resultadoMedia >= 70) {
            console.log('Parabéns , você foi Aprovado(a)!! Sua média foi de : \n' + resultadoMedia)
        } else if (resultadoMedia >= 50 && resultadoMedia <= 69) {
            return true;
        } else {
            console.log('Você foi Reprovado(a)!! Sua média foi de : \n' + resultadoMedia);
        }
    } 

    


}

const calcularMediaComExame = function (nota1, nota2, nota3, nota4, notaExame) {
    let primeiraNota = Number(String(nota1));
    let segundaNota = Number(String(nota2));
    let terceiraNota = Number(String(nota3));
    let quartaNota = Number(String(nota4));
    let notaDoExame = Number(String(notaExame));

    let mediaComOExame;
    mediaComOExame = (primeiraNota + segundaNota + terceiraNota + quartaNota + notaDoExame) / 5;
    
    if(notaDoExame > 100 || notaDoExame < 0){
        console.log('Os valores devem estar entre 0 a 100')
    } else if(notaDoExame === ''){
        console.log('ERRO: Todas as notas são obrigatórias')
    } else if(isNaN(notaDoExame)){
        console.log('Caractér inválido: Digite apenas números')
    } else {
        if(mediaComOExame < 60){
            console.log('A sua média foi de : \n' + mediaComOExame + ' \n Você foi reprovado(a)')
        } else{
            console.log('A sua média foi de : \n' + mediaComOExame + ' \n Você foi aprovado(a)')
        }
    }
}

module.exports = {
    calcularMedia,
    calcularMediaComExame
}