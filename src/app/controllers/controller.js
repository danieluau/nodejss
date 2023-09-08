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
    async update(req, res) {
        const id = req.params.id
        const musico = req.body
        const row = await repository.update(musico, id)
        res.json(row)
      } // atualizar
    
    
    async delete(req, res){
        const id = req.params.id;
        const row = await repository.delete(id)
        res.json(row)

      } // apagar
}

export default new controller();