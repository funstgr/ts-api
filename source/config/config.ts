import dotenv from 'dotenv';

dotenv.config();

const { POSTGRES_HOST } = process.env;
// DB_USER=postgres_user
// DB_PASSWORD=12345678
// DB_HOST=127.0.0.1
// DB_PORT=5432
// DB_DATABASE=xyconic
// NODE_ENV=development

const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 1337;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const config = {
  SERVER,
};

export default config;
