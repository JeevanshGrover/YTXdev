import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express()

//-----configuring the app---------
// app.use(cors()) -----this is also sufficient but we can also pass options to cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({ limit: '20kb' }))

app.use(express.urlencoded({ extended: true, limit: '20kb' }))

app.use(express.static("public"))

app.use(cookieParser())

export { app }