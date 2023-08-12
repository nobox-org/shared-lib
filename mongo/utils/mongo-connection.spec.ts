import { MongoClient } from 'mongodb';
import { mongoDbConnection } from './mongo-connection';
import { CustomLogger } from '../../types';

describe('mongoDbConnection', () => {
   let mockLogger: CustomLogger = {
      sLog: jest.fn(),
      log: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn(),
      error: jest.fn(),
      verbose: jest.fn()
   };

   afterEach(() => {
      jest.clearAllMocks();
   });

   describe('should create and return a new MongoClient instance', () => {
      const connOptions = {};
      const connString = 'mongodb://127.0.0.1:27019/?directConnection=true&replicaSet=nobox-replica-set';
      const connection = mongoDbConnection({ connOptions, connString, logger: mockLogger });

      test("connection.client is instance of MongoClient", () => {
         expect(connection.client).toBeInstanceOf(MongoClient);
      })
   });
});
