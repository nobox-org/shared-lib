import { collection } from '../utils';
import { MBase } from './base-model.schema';
import { MRecord } from './record.schema';
import { CustomLogger } from '../../types';

const collectionName = 'record-dump';

export interface MRecordDump extends MBase {
   record: MRecord;
   recordId: string;
   [x: string]: any;
}

export const getRecordDumpModel = (logger: CustomLogger) => {
   const col = collection<MRecordDump>(collectionName, logger);
   return col;
};
