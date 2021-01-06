'use strict'

/* Global imports */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

/* Config vars */
const api = express();

/* Config middlewares, plugins and Routes with express */
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.use(cors);

api.get("/", (req, res) => {
    res.send("Hola Mundo");
});

export default api;