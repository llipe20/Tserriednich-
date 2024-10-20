import mysql from 'mysql'

export const db = mysql.createConnection({
    host: "junction.proxy.rlwy.net",
    user: "root",
    password: "xjkwJvKPLJXcQKVSzpBMhXUDtXaGqLVJ",
    database: "tserriednich"
})