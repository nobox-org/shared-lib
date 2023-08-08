import { collection } from '../utils';
import { MBase } from './base-model.schema';
import { RecordStructureType } from './types';
import { CustomLogger } from '../../types';


const collectionName = 'record-fields';

export interface MRecordField extends MBase {
   recordSpace: string;

   description: string;

   comment: string;

   defaultValue?: string;

   name: string;

   slug: string;

   type: RecordStructureType;

   required: boolean;

   unique: boolean;

   hashed: boolean;
}

export const getRecordFieldModel = (logger: CustomLogger) => {
   const col = collection<MRecordField>(collectionName, logger);
   return col;
};
