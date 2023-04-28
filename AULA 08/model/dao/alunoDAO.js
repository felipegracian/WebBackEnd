//Modelo MVC (Model View controller)
/*****
 * Objetivo: Responsável pela manipulação de dados dos Alunos no banco de Dados
 * Data : 14/04/2023
 * Autor: Felipe Graciano
 * Versão : 1.0
 * ******************************************************************************************* */

//Import da biblioteca do prisma client
var { PrismaClient } = require('@prisma/client');
var prisma = new PrismaClient();

const insertAluno = async function (dadosAluno) {

    //Script SQL para inserir dados
    let sql = `insert into tbl_aluno (
                            nome, 
                            rg,
                            cpf,
                            data_nascimento,
                            email
                        ) values (
                            '${dadosAluno.nome}',
                            '${dadosAluno.rg}',
                            '${dadosAluno.cpf}',
                            '${dadosAluno.data_nascimento}',
                            '${dadosAluno.email}'
                        )`;

    //Sempre que não formos utilizar um select, devemos usar o metodo executeRawUnsafe                        
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }
}
const updateAluno = function (dadosAluno) {

}
const deleteAluno = function (id) {

}

const selectAllAlunos = async function () {

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


    let sql = `select * from tbl_aluno where id = ${id}`

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if (rsAluno.length > 0) {
        return rsAluno;
    } else {
        return false
    }

}

const selectByNameAluno = async function (nome) {

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
    selectByNameAluno,
    insertAluno
}