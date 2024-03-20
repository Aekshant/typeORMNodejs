import "reflect-metadata";
import { DataSource } from "typeorm";

import * as dotenv from "dotenv";
import { User } from "./entity/User.entity";
import { Movie } from "./entity/Movies.entity";
import { Tweets } from "./entity/Tweets.entity";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } = process.env;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: parseInt(DB_PORT || "3306"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: NODE_ENV === "dev" ? false : false,
  logging: NODE_ENV === "dev" ? true : false,
  entities: [ User, Movie, Tweets ],
  migrations: [__dirname + "/migration/*.ts"],
  subscribers: [],
});
