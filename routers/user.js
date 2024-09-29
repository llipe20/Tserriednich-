import express from "express"
import { addUser, deleteUser, getUsers, UpdateUser, getProduts, addProduts, UpdateProduts, deleteProduts} from "../controllers/user.js"

const router = express.Router()

// METHODS GET
router.get("/users", getUsers)
router.get("/produts", getProduts)

// METHODS POST
router.post("/users", addUser)
router.post("/produts", addProduts)

// METHODS PUT
router.put("/users/:id", UpdateUser)
router.put("/produts/:id", UpdateProduts)

// METHOD DELETE
router.delete("/users/:id", deleteUser)
router.delete("/produts/:id", deleteProduts)

export default router