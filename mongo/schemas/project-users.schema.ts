import { collection } from '../utils';
import { MBase } from './base-model.schema';
import { CustomLogger } from '../../types';

const collectionName = 'project-users';

export interface MProjectUser extends MBase {
   projectId: string;
   email: string;
}

export const getProjectUsersModel = (logger: CustomLogger) => {
   return collection<MProjectUser>(collectionName, logger);
};
