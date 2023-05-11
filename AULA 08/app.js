//Modelo MVC (Model View controller)
/*****
 * Objetivo: Api para integração entre Back e Banco de Dados (GET, POST, PUT, DELETE)
 * Data : 14/04/2023
 * Autor: Felipe Graciano
 * Versão : 1.0
 * ******************************************************************************************* */

 
// (Para termos a conexão do projeto com o banco de dados, devemos utilizar a biblioteca prisma, sempre utilizar os comandos)
 // npm install prisma --save
 //npx prisma
 //npx prisma init
 //npm install @prisma/client --save
 //npx prisma migrate dev

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


//Import do arquivo controller que irá solicitar a model os dados do Banco
let controllerAluno = require('./controller/controler_aluno.js')
//Define que os dados que irão chegar no body da requisição será no padrao json
const bodyParserJSON = bodyParser.json();

var message = require('./controller/modulo/config.js')

//Endpoints de alunos {


//Endpoint: retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function(request, response){

    

    //Recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getAlunos()

    //Valida se existem registros de aluno
    if(dadosAluno){
        response.json(dadosAluno)
        response.status(200)
    } else{
        response.json()
        response.status(404)
    }
})


//Endpoint: retorna todos os dados do aluno filtrando pelo id
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    let idAluno = request.params.id

   

    let dadosAluno = await controllerAluno.getAlunosByID(idAluno)

    if(dadosAluno){
        response.json(dadosAluno)
        response.status(200)
    } else{
        response.json()
        response.status(404)
    }

})

app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function(request, response){

    let nomeAluno = request.params.nome

    

    let dadosAluno = await controllerAluno.getAlunosByName(nomeAluno)

    if(dadosAluno){
        response.json(dadosAluno)
        response.status(200)
    } else{
        response.json()
        response.status(404)
    }

})


//Insere um aluno novo
app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async function(request, response){

    //recebe os dados encaminhados na requisição
    let dadosBody = request.body

    let ResultDadosAluno = await controllerAluno.inserirNovoAluno(dadosBody)

    response.status((ResultDadosAluno).status)
    response.json(ResultDadosAluno)

})

//Atualiza um aluno existente filtrando pelo id
app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJSON, async function(request, response){

    //Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    //Validação para receber dados apenas no formato JSON
    if (String(contentType).toLowerCase() == 'application/json') {
        //Recebe o ID do aluno pelo parametro
        let id = request.params.id;

        //Recebe os dados dos aluno encaminhado no corpo da requisição
        let dadosBody = request.body

        let ResultDadosAluno = await controllerAluno.atualizarAluno(dadosBody, id)

        response.status((ResultDadosAluno).status)
        response.json(ResultDadosAluno)
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }
})

//Exclui um aluno filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    
    let id = request.params.id;

    let retornoAluno = await controllerAluno.getAlunosByID(id)

    if (retornoAluno.status == 404) {
        response.status(retornoAluno.status)
        response.json(retornoAluno)
    } else {
        let ResultDadosAluno = await controllerAluno.ctlExcluirAluno(id)

        response.status((ResultDadosAluno).status)
        response.json(ResultDadosAluno)
    }
})


// }

app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080');
})