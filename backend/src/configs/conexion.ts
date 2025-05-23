import mysql from 'mysql2';

export const conexion = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'invitations'
}).promise();