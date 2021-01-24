/* Global imports */
import express from 'express';
import bodyParser from 'body-parser';
import cors from './config/cors'

/* Config vars */
const api = express();

/* Config middlewares, plugins and Routes with express */
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.use(cors);

api.get("/", (req, res) => {
    res.status(200).send("Hola Mundo");
});

export default api;