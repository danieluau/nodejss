import express from 'express';
import conexao from '../infra/conexao.js'
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

app.get('/musicos', (req, res)=>{

  //res.status(200).send(musicos)
  const sql = "SELECT * FROM musicos;"
  conexao.query(sql, (error, result) => {
      if(error){
        console.log(error)
        res.status(404).json({'error': error})
      }else{
        res.status(200).json(result)
      }
  })
} )

app.get('/musicos/:id', (req, res) => {
    // let index = req.params.id;
    // console.log(index);
    res.json(buscarPorId(req.params.id))
})
app.post('/musicos', (req, res)=>{
  musicos.push(req.body)
  res.status(201).send('cadastrado com sucesso');
} )

app.delete('/musicos/:id', (req, res) =>{
  let index = buscaIndice(req.params.id);
  musicos.splice(index, 1);
  res.send(`elemento ${index} deletado`)
})

app.put('/musicos/:id', (req, res) =>{
  let index = buscaIndice(req.params.id);
  musicos[index].musico = req.body.musico;
  musicos[index].banda = req.body.banda;
  res.json(musicos)
})

export default app;