import mysql from 'mysql';


//cria a conexao
const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: ''
});

conexao.connect

export default conexao;