import app from './src/app.js';
import conexao from './infra/conexao.js';

const PORT = 1337

// fazer a conexao
conexao.connect((error) => {
  if(error){
    console.log(`conexao falhou o erro foi o seguinte: ${error}`)
  }else{
    console.log('conexao com bd feita com sucesso')
    // escuta a porta
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  }
})

