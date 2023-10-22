import { MongoClient } from 'mongodb';

export const createCollectionInstance = <T>(
   collectionName: string,
   client?: MongoClient
) => {
   return client.db().collection<T>(collectionName);
};
