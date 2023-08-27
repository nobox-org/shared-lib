import { MongoClient } from 'mongodb';
import { CustomLogger } from '../../types';

let cachedConnection: MongoClient;
let acquiringConnection = false;

export const mongoDbConnection = (args: {
   connOptions?: Record<string, boolean>;
   connString?: string;
   logger?: CustomLogger;
   logAll?: boolean;
}) => {
   const { logger, connString, connOptions, logAll = false } = args;
   const connectToMongoServer = (args?: {
      init: boolean;
      restart?: boolean;
   }) => {

      const { init = false, restart = false } = args || {};
      logAll && logger.sLog({ init }, "mongoDbConnection:: connection To MongoServer requested");

      if (acquiringConnection && init) {
         logAll && logger.sLog({ init }, "mongoDbConnection:: connection already in progress, initialization not needed");
         return;
      }

      acquiringConnection = true;

      if (!restart && cachedConnection) {
         logAll && logger.sLog({ init }, "mongoDbConnection:: found existing connection");

         return cachedConnection;
      }

      logger.sLog({}, "mongoDbConnection::Acquiring new DB connection....");

      try {
         logAll && logger.sLog({ connString, connOptions }, "mongoDbConnection:: MongoDb connection string and options", "green")
         const client = new MongoClient(connString, connOptions);
         client.connect();
         client.on('open', () => {
            logger.sLog({}, 'mongoDbConnection:: MongoDb connection created');
         });
         cachedConnection = client;
         return cachedConnection;
      } catch (error) {
         logger.sLog({ error }, 'mongoDbConnection:: MongoDb connection error');
         throw error;
      }
   };

   return {
      init() {
         connectToMongoServer({ init: true });
      },
      client: connectToMongoServer(),
   };
};
