import express from 'express';
import conexao from '../infra/conexao.js'
const app = express();

// indicar para o express ler body com json
app.use(express.json())

// criando rotas   
app.get('/musicos', (req, res)=>{
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
    const id = req.params.id;
    const sql = "SELECT * FROM musicos WHERE id=?;"
    conexao.query(sql, id, (error, result) => {
        const linha = result[0]
        if(error){
          console.log(error)
          res.status(404).json({'error': error})
        }else{
          res.status(200).json(linha)
        }
    })
})

app.post('/musicos', (req, res)=>{
  const musico = req.body
  const sql = "INSERT INTO musicos SET ?;"
  conexao.query(sql, musico, (error, result) => {
      if(error){
        console.log(error)
        res.status(400).json({'error': error})
      }else{
        res.status(201).json(result)
      }
  })
} )

app.delete('/musicos/:id', (req, res) =>{
  const id = req.params.id;
  const sql = "DELETE FROM musicos WHERE id=?;"
  conexao.query(sql, id, (error, result) => {
      if(error){
        console.log(error)
        res.status(404).json({'error': error})
      }else{
        res.status(200).json(result)
      }
  })
})

app.put('/musicos/:id', (req, res) =>{
  const id = req.params.id
  const musico = req.body
  const sql = "UPDATE musicos SET ? WHERE id=?;"
  conexao.query(sql, [musico, id], (error, result) => {
      if(error){
        console.log(error)
        res.status(400).json({'error': error})
      }else{
        res.status(200).json(result)
      }
  })
})

export default app;