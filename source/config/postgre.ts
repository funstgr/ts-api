import pg from 'pg';
import config from './config';

const params = {
    user: config.pg.user,
    password: config.pg.pass,
    host: config.pg.host,
    database: config.pg.database
};

const Connect = async () =>
    new Promise<pg.Connection>((resolve, reject) => {
        const connection = pg.createConnection(params);

        connection.connect((error) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(connection);
        });
    });

const Query = async (connection: pg.Connection, query: string) =>
    new Promise((resolve, reject) => {
        connection.query(query, connection, (error, result) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(result);
        });
    });

export { Connect, Query };