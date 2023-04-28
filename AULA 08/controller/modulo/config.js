/*****
 * Objetivo: Arquivo Responsável por padronizar as mensagens de erro , sucesso , funções e variaveis de forma global
 * Data : 28/04/2023
 * Autor: Felipe Graciano
 * Versão : 1.0
 * ******************************************************************************************* */

const ERROR_REQUIRED_FIELDS = { status: 400, message: 'Campos obrigatórios não preenchidos'}

const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso'}

const ERROR_SYSTEM_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno no servidor, não foi possível processar a requisição.'}

module.exports = {
    ERROR_REQUIRED_FIELDS,
    SUCCESS_CREATED_ITEM,
    ERROR_SYSTEM_INTERNAL_SERVER
}