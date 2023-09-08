import conexao from "../database/conexao.js"


class repository{
    // crud
    create(musico) {
        const sql = "INSERT INTO musicos SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, musico, (erro, resultado) =>{
                if(erro) return reject('nao foi possivel cadastrar', erro)
                // fazer parse dos resultados
                const rows= JSON.parse(JSON.stringify(resultado))
                return resolve(rows)
            })
        })
    }


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

    findById(id) {
        const sql = "SELECT * FROM musicos WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) =>{
                if(erro) return reject('deu erro', erro)
                // fazer parse dos resultados
                const rows= JSON.parse(JSON.stringify(resultado))
                return resolve(rows)
            })
        })
    }
    update() {}
    delete() {}
}


export default new repository();