import express from 'express'
import userRouter from './routers/user.js'
import cors from 'cors'

const app = express()
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(express.json())
app.use(cors())
app.use("/", userRouter)
app.listen(8800)
