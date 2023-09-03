import express from 'express';
const app = express();

// mock
const musicos= [
  {id: 1, musico: 'ed motta', banda: 'legal'},
  {id: 2, musico: 'ed motta', banda: 'legal'},
  {id: 3, musico: 'ed motta', banda: 'legal'},
  {id: 4, musico: 'ed motta', banda: 'legal'},
  {id: 5, musico: 'ed motta', banda: 'legal'}
  
]

// criando rota padrao/raiz     
app.get('/', (req, res) => {
    res.send('please listen to ed motta')
  })

app.get('/musicos', (req, res)=>{
  res.status(200).send(JSON.stringify(musicos))
} )

export default app;