import pkg from 'pg';
const { Client } = pkg;

export const db = new Client({
    host: "selflessly-deep-minivet.data-1.use1.tembo.io",
    user: "postgres",
    password: "VsRehw9umHEDVNY2",
    database: "tserriednich",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

db.connect()
    .then(() => console.log("Conectado ao banco de dados com sucesso!"))
    .catch(err => console.error("Erro ao conectar ao banco de dados:", err.stack));
