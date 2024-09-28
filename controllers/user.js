import {db} from "../db.js"

export const getusers = (_, res) => {
    const req = "SELECT * FROM users"

    db.query(req, ((err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    }))
}
