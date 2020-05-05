import { ConnectionOptions } from "typeorm";

export const connection_options: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root', 
    password: 'password',
    database: 'recipe_db', 
    synchronize: false,
    migrationsRun: false,
    logging: false,
}