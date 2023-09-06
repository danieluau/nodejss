import conexao from '../database/conexao.js'
import repository from '../repositories/repository.js'

class controller {
    index (req, res){
      const result = repository.findAll()
      res.send(result)
    }

    show(req, res){
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
  }

    store(req, res){

    }
    delete(req, res){

    }

    update(req, res){
      
    }

}




export default new controller();