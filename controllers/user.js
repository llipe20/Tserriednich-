// Operações no banco de dados

import {db} from "../db.js"

export const getusers = (_, res) => {
    const req = "SELECT * FROM users"

    db.query(req, ((err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    }))
}

export const addUser = (req, res) => {
    const query = "INSERT INTO users (`useraname`, `pass`, `image`) VALUES (?)"

    const values = [
        req.body.nome,
        req.body.senha,
        req.body.image
    ]

    db.query(query, [values], (err) => {
        if(err) return res.json(err)
        return res.status(200).json("Usuário criado com sucesso")
    })
}

export const UpdateUser = (req, res) => {
    const query = "UPDATE users SET `useraname` = ?, `pass` = ?, `image` = ? WHERE `id` = ?"
    const values = [
        req.body.nome,
        req.body.senha,
        req.body.image 
    ]

    db.query(query, [...values, req.params.id], (err) => {
        if(err) return res.json(err)
        return res.status(200).json("Atualizado com sucesso!")
    }) 
} 

export const deleteUser = (req, res) => {
    const query = "DELETE FROM users WHERE `id` = ?"

    db.query(query, [req.params.id], (err) => {
        if(err) return res.json(err)
        return res.status(200).json("Deletado com sucesso")
    })
}