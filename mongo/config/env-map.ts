export const MONGO_HOST = process.env.MONGO_HOST || '';
export const MONGO_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME || '';
export const MONGO_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD || '';
export const MONGO_REPLICA_SET = process.env.MONGO_REPLICA_SET || '';
export const MONGO_REPLICA_INIT_PORT =
   process.env.MONGO_REPLICA_INIT_PORT || '';
export const MONGO_PORT = parseInt(process.env.PORT) || 0;
export const MONGO_DB_NAME = process.env.MONGO_INITDB_DATABASE || '';
export const MONGO_AUTH_SOURCE = process.env.MONGO_AUTH_SOURCE || '';
export const MONGO_SSL_BOOL = process.env.MONGO_SSL === 'true';
export const MONGO_PROTOCOL = process.env.MONGO_PROTOCOL || 'mongodb';
