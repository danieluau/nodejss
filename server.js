import app from './src/app.js';
import conexao from './infra/conexao.js';

const PORT = 1337

// fazer a conexao

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

