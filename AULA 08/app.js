//Modelo MVC (Model View controller)
/*****
 * Objetivo: Api para integração entre Back e Banco de Dados (GET, POST, PUT, DELETE)
 * Data : 14/04/2023
 * Autor: Felipe Graciano
 * Versão : 1.0
 * ******************************************************************************************* */


//import das bibliotecas para API
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


//Cria o objeto app conforme a classe do express
const app = express();


//Permissões do cors
app.use((request, response, next) => {
    //Define quem poderá acessar a Api - '*' = Todos
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET , POST, PUT, DELETE, OPTIONS');

    app.use(cors());
    next();
});

//CRUD (Create, Read, Update, Delete)

//Endpoints de alunos {


//Endpoint: retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function(request, response){

})


//Endpoint: retorna todos os dados do aluno filtrando pelo id
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){

})


//Insere um aluno novo
app.post('/v1/lion-school/aluno', cors(), async function(request, response){

})

//Atualiza um aluno existente filtrando pelo id
app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response){

})

//Exclui um aluno filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){

})


// }

app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080');
})