import conexao from "../database/conexao.js"

class repository {
        // listar tudo
        findAll (){
            const sql = "SELECT * FROM musicos;"
            conexao.query(sql, (error, result) => {
                if(error){
                  console.log(error)
                  res.status(404).json({'error': error})
                }else{
                  res.status(200).json(result)
                }
            })
          } 
        findById(){
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
        }  // mostrar
        create(){
            const musico = req.body
            const sql = "INSERT INTO musicos SET ?;"
            conexao.query(sql, musico, (error, result) => {
                if(error){
                  console.log(error)
                }else{
                  retur
                }
            })
          } // criar dados
        update() {
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
          } // atualizar
        delete(req, res){
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
          } // apagar
}

export default new repository();