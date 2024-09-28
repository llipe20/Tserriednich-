import express from "express"
import { getusers } from "../controllers/user.js"

const router = express.Router()
router.get("/", getusers)

export default router