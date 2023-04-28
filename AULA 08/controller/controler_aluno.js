//Modelo MVC (Model View controller)
/*****
 * Objetivo: Responsável pela regra de negócios referente ao crud de alunos
 * Data : 14/04/2023
 * Autor: Felipe Graciano
 * Versão : 1.0
 * ******************************************************************************************* */

 var message = require('./modulo/config.js')

 //import do arquivo DAO para acessar dados do aluno no BD
 var alunoDAO = require('../model/dao/alunoDAO.js');

//inserir aluno no banco de dados
const inserirNovoAluno = async function (dadosAluno) {

    //Validaçao de campos obrigatorios e limite de cracteres
    if (dadosAluno.nome == ''                || dadosAluno.nome == undefined             || dadosAluno.nome.length > 100
        || dadosAluno.rg == ''               || dadosAluno.rg == undefined               || dadosAluno.rg.length > 15
        || dadosAluno.cpf == ''              || dadosAluno.cpf == undefined              || dadosAluno.cpf.length > 18
        || dadosAluno.data_nascimento == ''  || dadosAluno.data_nascimento == undefined  || dadosAluno.data_nascimento.length > 10
        || dadosAluno.email == ''            || dadosAluno.email == undefined            || dadosAluno.email.length > 255
    ) {
        return message.ERROR_REQUIRED_FIELDS
    } else{
        //Envia os dados para a model inserir no Banco de Dados
       let resultDadosAluno = await alunoDAO.insertAluno(dadosAluno)
       if(resultDadosAluno){
           return message.SUCCESS_CREATED_ITEM
       } else{
           return message.ERROR_SYSTEM_INTERNAL_SERVER
       }
    }
}


//atualizar dados do aluno
const atualizarAluno = function (dadosAluno) {

}


//deletar aluno pelo id
const deletarAluno = function (id) {

}


//Retorna a lista de todos os alunos
const getAlunos = async function () {

    let dadosAlunoJson = {};


    //chama a funçao que ira retornar todos os registros do banco de dados
    let dadosAluno = await alunoDAO.selectAllAlunos();

    if (dadosAluno) {
        //criando um JSon com o atributo alunos, para encaminhar um array de alunos
        dadosAlunoJson.quantidade = dadosAluno.length
        dadosAlunoJson.alunos = dadosAluno
        return dadosAlunoJson
    } else {
        return false
    }
}


//Retorna os dados de um aluno filtrando pelo id
const getAlunosByID = async function (id) {

    let dadosAlunoJson = {};

    let dadosAluno = await alunoDAO.selectByIdAluno(id)

    if (dadosAluno) {
        //criando um JSon com o atributo alunos, para encaminhar um array de alunos
        dadosAlunoJson.aluno = dadosAluno
        return dadosAlunoJson
    } else {
        return false
    }

}

const getAlunosByName = async function (nome) {
    let dadosAlunoJson = {}

    let dadosAluno = await alunoDAO.selectByNameAluno(nome)

    if (dadosAluno) {
        //criando um JSon com o atributo alunos, para encaminhar um array de alunos
        dadosAlunoJson.aluno = dadosAluno
        return dadosAlunoJson
    } else {
        return false
    }
}

module.exports = {
    getAlunos,
    getAlunosByID,
    getAlunosByName,
    inserirNovoAluno
}