import { db } from "../db.js";

// OPERAÇÕES GETTES - buscar todos os USUÁRIOS do banco
export const getUsers = (_, res) => {
    const query = "SELECT * FROM users";

    db.query(query, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result.rows);
    });
};

// OPERAÇÕES GETTES - buscar todos os PRODUTOS do banco
export const getProduts = (_, res) => {
    const query = "SELECT * FROM produts";

    db.query(query, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result.rows);
    });
};

// OPERAÇÕES POST - Adicionar USUÁRIOS no banco
export const addUser = (req, res) => {
    const query = "INSERT INTO users (nome, cpf, email, senha, foto, fone) VALUES ($1, $2, $3, $4, $5, $6)";
    const values = [
        req.body.nome,
        req.body.cpf,
        req.body.email,
        req.body.senha,
        req.body.foto,
        req.body.fone,
    ];

    db.query(query, values, (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Usuário criado com sucesso");
    });
};

// OPERAÇÕES POST - Adicionar PRODUTOS no banco
export const addProduts = (req, res) => {
    const query = "INSERT INTO produts (nome, descricao, categoria, foto1, foto2, foto3, foto4, valor, vendido, datacriacao, idusuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.categoria,
        req.body.foto1,
        req.body.foto2,
        req.body.foto3,
        req.body.foto4,
        req.body.valor,
        req.body.vendido,
        req.body.dataCriacao,
        req.body.idUsuario,
    ];

    db.query(query, values, (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Produto adicionado com sucesso");
    });
};

// OPERAÇÕES PUT - Atualizar USUÁRIO especifico no banco
export const UpdateUser = (req, res) => {
    const query = "UPDATE users SET nome = $1, cpf = $2, email = $3, senha = $4, foto = $5, fone = $6 WHERE id = $7";
    const values = [
        req.body.nome,
        req.body.cpf,
        req.body.email,
        req.body.senha,
        req.body.foto,
        req.body.fone,
        req.params.id,
    ];

    db.query(query, values, (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Atualizado com sucesso!");
    });
};

// OPERAÇÕES PUT - Atualizar PRODUTO especifico no banco
export const UpdateProduts = (req, res) => {
    const query = "UPDATE produts SET nome = $1, descricao = $2, categoria = $3, foto1 = $4, foto2 = $5, foto3 = $6, foto4 = $7, valor = $8, vendido = $9, dataCriacao = $10, idUser = $11 WHERE id = $12";
    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.categoria,
        req.body.foto1,
        req.body.foto2,
        req.body.foto3,
        req.body.foto4,
        req.body.valor,
        req.body.vendido,
        req.body.dataCriacao,
        req.body.idUsuario,
        req.params.id,
    ];

    db.query(query, values, (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Atualizado com sucesso!");
    });
};

// OPERAÇÕES DELETE - Apagar USUÁRIO especifico no banco
export const deleteUser = (req, res) => {
    const query = "DELETE FROM users WHERE id = $1";

    db.query(query, [req.params.id], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Deletado com sucesso");
    });
};

// OPERAÇÕES DELETE - Apagar PRODUTO especifico no banco
export const deleteProduts = (req, res) => {
    const query = "DELETE FROM produts WHERE id = $1";

    db.query(query, [req.params.id], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Deletado com sucesso");
    });
};
