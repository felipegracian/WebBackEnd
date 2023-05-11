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
const atualizarAluno = async function (dadosAluno, id) {

    //Validaçao de campos obrigatorios e limite de cracteres
    if (dadosAluno.nome == ''                || dadosAluno.nome == undefined             || dadosAluno.nome.length > 100
        || dadosAluno.rg == ''               || dadosAluno.rg == undefined               || dadosAluno.rg.length > 15
        || dadosAluno.cpf == ''              || dadosAluno.cpf == undefined              || dadosAluno.cpf.length > 18
        || dadosAluno.data_nascimento == ''  || dadosAluno.data_nascimento == undefined  || dadosAluno.data_nascimento.length > 10
        || dadosAluno.email == ''            || dadosAluno.email == undefined            || dadosAluno.email.length > 255
    ) {
        return message.ERROR_REQUIRED_FIELDS
    } else if(id == null || id == undefined || isNaN(id)){
        return message.ERROR_INVALID_ID
    } else {
        //Adiciona o ID do aluno no JSON dos dados
        dadosAluno.id = idALuno

        let resultDadosAlunos = await alunoDao.mdlUpdateAluno(dadosAluno)

        //Valida se o BD inseriu corretamente
        if(resultDadosAlunos){
            return message.SUCCESS_UPDATED_ITEM
        }else{
            return message.ERROR_SYSTEM_INTERNAL_SERVER
        }
    }
    
}


//deletar aluno pelo id
const deletarAluno = async function (id) {

    if (id == null || id == undefined || id == '' || isNaN(id)) {
        return message.ERROR_REQUIRED_FIELDS
    } else {

        let dadosAluno = await alunoDAO.deleteAluno(id)

        if(dadosAluno){
            return message.SUCCESS_DELETED_ITEM
        }else{
            return message.ERROR_SYSTEM_INTERNAL_SERVER
        }
    }
    
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
    inserirNovoAluno,
    atualizarAluno,
    deletarAluno
}