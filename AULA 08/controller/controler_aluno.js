//Modelo MVC (Model View controller)
/*****
 * Objetivo: Responsável pela regra de negócios referente ao crud de alunos
 * Data : 14/04/2023
 * Autor: Felipe Graciano
 * Versão : 1.0
 * ******************************************************************************************* */

 //inserir aluno no banco de dados
 const inserirNovoAluno = function (dadosDoAluno){
    
 }


 //atualizar dados do aluno
 const atualizarAluno = function (dadosDoAluno){
    
 }


 //deletar aluno pelo id
 const deletarAluno = function (id){
    
 }


 //Retorna a lista de todos os alunos
 const getAlunos = async function (){

    let dadosAlunoJson = {};

    //import do arquivo DAO para acessar dados do aluno no BD
    let alunoDAO = require('../model/dao/alunoDAO.js');

    //chama a funçao que ira retornar todos os registros do banco de dados
    let dadosAluno = await alunoDAO.selectAllAlunos();

    if(dadosAluno){
        //criando um JSon com o atributo alunos, para encaminhar um array de alunos
        dadosAlunoJson.quantidade = dadosAluno.length
        dadosAlunoJson.alunos = dadosAluno
        return dadosAlunoJson
    } else{
        return false
    }
 }


 //Retorna os dados de um aluno filtrando pelo id
 const getAlunosByID = async function (id){

    let dadosAlunoJson = {};

    let alunoDAO = require('../model/dao/alunoDAO.js')

    let dadosAluno = await alunoDAO.selectByIdAluno(id)

    if(dadosAluno){
        //criando um JSon com o atributo alunos, para encaminhar um array de alunos
        dadosAlunoJson.aluno = dadosAluno
        return dadosAlunoJson
    } else{
        return false
    }
    
 }

 const getAlunosByName = async function (nome){
     let dadosAlunoJson = {}

     let alunoDAO = require('../model/dao/alunoDAO.js')

     let dadosAluno = await alunoDAO.selectByNameAluno(nome)

     if(dadosAluno){
        //criando um JSon com o atributo alunos, para encaminhar um array de alunos
        dadosAlunoJson.aluno = dadosAluno
        return dadosAlunoJson
    } else{
        return false
    }
 }

 module.exports = {
     getAlunos,
     getAlunosByID,
     getAlunosByName
 }