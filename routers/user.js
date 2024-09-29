import express from "express"
import { addUser, deleteUser, getusers, UpdateUser } from "../controllers/user.js"

const router = express.Router()
router.get("/", getusers)
router.post("/", addUser)
router.put("/:id", UpdateUser)
router.delete("/:id", deleteUser)

export default router