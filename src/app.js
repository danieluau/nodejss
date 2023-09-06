import express from 'express';

import selecaoController from './app/controllers/controller.js';

const app = express();

// indicar para o express ler body com json
app.use(express.json())


//  o retorno vai ser um objeto(se o id do musico igual o que ta buscando)

function buscarPorId(id){
  return musicos.filter(musico => musico.id == id)
}

// pegar a posição ou index do elemnto no array por id
function buscaIndice(id) {
  return musicos.findIndex(musico => musico.id == id)
}

// criando rotas    

// listar todos
app.get('/musicos', selecaoController.index);
// listar por id
app.get('/musicos/:id', selecaoController.show)
// criar 
app.post('/musicos',  selecaoController.store)
// deletar
app.delete('/musicos/:id', selecaoController.delete)
// atualizar
app.put('/musicos/:id', selecaoController.update)

export default app;