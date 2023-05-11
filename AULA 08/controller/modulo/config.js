/*****
 * Objetivo: Arquivo Responsável por padronizar as mensagens de erro , sucesso , funções e variaveis de forma global
 * Data : 28/04/2023
 * Autor: Felipe Graciano
 * Versão : 1.0
 * ******************************************************************************************* */

const ERROR_REQUIRED_FIELDS = { status: 400, message: 'Campos obrigatórios não preenchidos'}

const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso'}

const ERROR_SYSTEM_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno no servidor, não foi possível processar a requisição.'}


const ERROR_INVALID_CONTENT_TYPE = {status: 415, message: 'O TIPO DE MÍDIA CONTENT-TYPE DA SOLICITAÇÃO NÃO É COMPATÍVEL COM O SERVIDOR. Tipo aceito: [application/json]'}

const ERROR_INVALID_ID = {status: 400, message: 'O ID INFORMADO NA REQUISIÇÃO NÃO É VALIDADO, OU NÃO FOI ENCAMINHADO'}

const ERROR_INVALID_NOME = {status: 400, message: 'O NOME INFORMADO NA REQUISIÇÃO NÃO É VALIDADO, OU NÃO FOI ENCAMINHADO'}

const ERROR_REGISTER_NOT_FOUND= {status: 404, message: 'O SERVIDOR NÃO PODE ENCONTRAR O RECURSO SOLICITADO.'}

const SUCCESS_UPDATED_ITEM = {status: 200, message: 'ITEM ATUALIZADO COM SUCESSO'}

const SUCCESS_DELETED_ITEM = {status: 200, message: 'ITEM DELETADO COM SUCESSO'}

module.exports = {
    ERROR_REQUIRED_FIELDS,
    SUCCESS_CREATED_ITEM,
    ERROR_SYSTEM_INTERNAL_SERVER,
    ERROR_INVALID_ID,
    ERROR_INVALID_CONTENT_TYPE,
    ERROR_INVALID_NOME,
    ERROR_REGISTER_NOT_FOUND,
    SUCCESS_UPDATED_ITEM,
    SUCCESS_DELETED_ITEM
}