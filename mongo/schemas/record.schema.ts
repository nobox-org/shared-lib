import { collection } from '../utils';
import { MBase } from './base-model.schema';
import { CustomLogger } from '../../types';


const collectionName = 'records';

export interface MRecordFieldContent {
   textContent: string;
   numberContent: string;
   booleanContent: string;
   arrayContent: string;
   field: string;
}

export interface MRecord extends MBase {
   recordSpace: string;
   fieldsContent: MRecordFieldContent[];
   user: string;
   createdAt: Date;
   updatedAt: Date;
}

export const getRecordModel = (logger: CustomLogger) => {
   const col = collection<MRecord>(collectionName, logger);
   return col;
};
