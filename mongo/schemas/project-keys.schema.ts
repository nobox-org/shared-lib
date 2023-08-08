import { collection } from '../utils';
import { MBase } from './base-model.schema';
import { CustomLogger } from '../../types';

const collectionName = 'project-keys';

export interface Postmark {
   apiKey: string;

   senderEmail: string;
}

export interface Firebase {
   privateKey: string;
   projectId: string;
   clientEmail: string;
}

export interface MProjectKeys extends MBase {
   projectId: string;
   postmark?: Postmark;
   firebase?: Firebase;
}

export const getProjectKeysModel = (logger: CustomLogger) => {
   const col = collection<MProjectKeys>(collectionName, logger);
   return col;
};
