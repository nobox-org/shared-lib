import { CustomLogger } from '../../types';
import { mongoDbConnection } from './mongo-connection';

export const createCollectionInstance = <T>(
   collectionName: string,
   logger: CustomLogger,
) => {
   const client = mongoDbConnection(logger).client;
   return client.db().collection<T>(collectionName);
};
