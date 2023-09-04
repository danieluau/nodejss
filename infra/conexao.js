import mysql from 'mysql';


//cria a conexao
const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: '',
    password: '',
    database: 'bdmusicos'
});

export default conexao;