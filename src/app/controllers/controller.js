import conexao from '../database/conexao.js'
import repository from '../repositories/repository.js';

class controller {
    
    // listar tudo
    async index (req, res){
       const result = await repository.findAll()
       res.json(result) 
      } 

    async show(req, res){
        const id = req.params.id;  
        const result = await repository.findById(id);
        res.json(result)

    }  // mostrar
    async store(req, res){
        const musico = req.body
        const row = await repository.create(musico)
        res.json(row)

      } // criar dados
    update(req, res) {
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

export default new controller();