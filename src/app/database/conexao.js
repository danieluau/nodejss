import mysql from 'mysql';


//cria a conexao
// adicionar os campos do banco utilizado
const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: '',
    password: '',
    database: ''
});

conexao.connect

export default conexao;