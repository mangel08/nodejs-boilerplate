/* Global Imports */
import api from './api';
import Debug from 'debug';
import chalk from 'chalk';
import dotenv from 'dotenv';

/* Config Vars */
dotenv.config();
const debug = new Debug('nodejs-boilerplate:root');

async function start() {
    api.listen(process.env.APP_PORT, () => {
        debug(chalk `{green.bold API Server listening on http://localhost:${process.env.APP_PORT} 🆗}`);
        debug(chalk `{magenta.bold ProcessID: ${process.pid}}`);
    });
}

start();