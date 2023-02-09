/**************************************************************************
 * Objetivo: Arquivo destinado ao processamento do calculo de uma tabuada
 * Data : 09/02/2023
 * Autor: Felipe Graciano
 * Versão: 1.0
 **************************************************************************/


//retorna o processamento de uma tabuada e um contador qualquer
const calcularTabuada = function (multiplicando, maxMultiplicador) {
    let tabuada = Number(String(multiplicando).replace(',', '.'));
    let maxContador = Number(String(maxMultiplicador).replace(',', '.'));
    let status = true;
    let cont = 0;
    let resultado;

    if (tabuada == 0 || maxContador == 0)
        status = false
    else if (isNaN(tabuada) || isNaN(maxContador))
        status = false
    else {
         while (cont <= maxContador) {
             resultado = tabuada * cont;
             console.log(tabuada + 'x' + cont + '=' + resultado);
             cont = cont + 1;
             //outra maneira cont++;
             //outra maneira cont +=1
         }

        // for(let cont = 0; cont <= maxContador; cont++){
        //     console.log(tabuada + 'x' + cont + '=' + resultado);
        // }
    }
    return status
}


module.exports = {
    calcularTabuada
}