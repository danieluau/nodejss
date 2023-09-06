import conexao from "../database/conexao.js"


class repository{
    // crud
    create() {}


    findAll() {
        // instrução SQL
        const sql = "SELECT * FROM musicos;"
        // retorna uma nova Promise com resolve e reject
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) =>{
                if(erro) return reject('deu erro', erro)
                // fazer parse dos resultados
                const rows= JSON.parse(JSON.stringify(resultado))
                return resolve(rows)
            })
        })
    }
    findById() {}
    update() {}
    delete() {}
}


export default new repository();