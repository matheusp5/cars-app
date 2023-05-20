import Car from '../cars/models/car.model';
import { DataSource } from 'typeorm';
import {config} from "dotenv"
config()

const USERNAME = process.env.MYSQL_USER || "root"
const PASSWORD = process.env.MYSQL_PASSWORD || "root"
const HOST = process.env.MYSQL_HOST || "localhost"
const DATABASE = process.env.MYSQL_DB || "cars_lorem"

export default new DataSource({
  type: 'mysql',
  host: HOST,
  port: 3306,
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  entities: [Car],
  synchronize: true,
  logging: true,
});
