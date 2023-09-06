import express from 'express';

import controller from './app/controllers/controller.js';

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
app.get('/musicos', controller.index);
// listar por id
app.get('/musicos/:id', controller.show)
// criar 
app.post('/musicos',  controller.store)
// deletar
app.delete('/musicos/:id', controller.delete)
// atualizar
app.put('/musicos/:id', controller.update)

export default app;