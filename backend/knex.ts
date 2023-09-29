const knex = require('knex');
require('dotenv').config({ path: './.env.test' });;
import { Process } from "../globals";

declare const process: Process;

const config = require('../knexfile')[process.env.NODE_ENV];
const db = knex(config);

export default db;
//module.exports = db

