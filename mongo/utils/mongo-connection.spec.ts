import { ObjectId } from 'mongodb';
import { createCollectionInstance } from './create-collection-instance';
import { mongoDbConnection } from './mongo-connection';

describe("mongoDbConnection", () => {
   const mockLogger = {
      sLog: jest.fn(),
      log: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn(),
      error: jest.fn(),
      verbose: jest.fn(),
   };

   let result: any;

   const args = {
      connOptions: {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      },
      connString: "mongodb://127.0.0.1:27019/?directConnection=true&replicaSet=nobox-replica-set",
      logger: mockLogger,
   };

   beforeAll(async () => {
      result = mongoDbConnection(args);
   })

   afterAll(async () => {
      result.client.close()
   })

   describe("init and client is always returned", () => {

      test("returns init", () => {
         expect(result.init).toBeDefined();
      })

      test("returns client", () => {
         expect(result.client).toBeDefined();
      })
   })

   describe("collectionInstance uses cached connection always", () => {
      let collection: any, insert: any, found: any;

      beforeAll(async () => {
         collection = createCollectionInstance<{ _id: ObjectId, a: string }>("akin", args.logger);
         insert = await collection.insertOne({ _id: new ObjectId(), a: "2" });
         found = await collection.findOne({ _id: insert.insertedId });
      })

      test("collectionInstance uses cached connection always", () => {
         expect(collection).toBeDefined();
      })

      test("insert works", () => {
         expect(insert.acknowledged).toEqual(true);
      })


      test("find works", () => {
         expect(found.a).toEqual("2");
      })
   })
})

