//Modelo MVC (Model View controller)
/*****
 * Objetivo: Responsável pela manipulação de dados dos Alunos no banco de Dados
 * Data : 14/04/2023
 * Autor: Felipe Graciano
 * Versão : 1.0
 * ******************************************************************************************* */

//Import da biblioteca do prisma client
let { PrismaClient } = require('@prisma/client');

const insertAluno = function (dadosAluno) {

}
const updateAluno = function (dadosAluno) {

}
const deleteAluno = function (id) {

}

const selectAllAlunos = async function () {
    //Instancia da classe prisma client
    let prisma = new PrismaClient();

    //script para buscar todos os itens no banco de dados
    let sql = 'select * from tbl_aluno';

    // $queryraw('select * from tbl_aluno') 
    // $queryRawUnsafe() - Permite interpretar uma variável como sendo um scriptSQL
    let rsAluno = await prisma.$queryRawUnsafe(sql);

    //Valida se o banco de dados retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno;
    } else {
        return false
    }
}
const selectByIdAluno = async function (id) {

    let prisma = new PrismaClient();

    let sql = `select * from tbl_aluno where id = ${id}`

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if (rsAluno.length > 0) {
        return rsAluno;
    } else {
        return false
    }

}

const selectByNameAluno = async function(nome){
    let prisma = new PrismaClient();

    let nomeFormatado = `'%${nome}%'`

    let sql = `select * from tbl_aluno where nome like '%${nome}%'`

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if (rsAluno.length > 0) {
        return rsAluno;
    } else {
        return false
    }
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByNameAluno
}