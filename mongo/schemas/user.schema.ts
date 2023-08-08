
import { collection } from '../utils';
import { MBase } from './base-model.schema';
import { Gender } from './types';
import { CustomLogger } from '../../types';


const collectionName = 'users';

export interface MTokens {
   resetPassword?: string;

   forgotPassword?: string;
}

export interface MUser extends MBase {
   email: string;

   password: string;

   firstName: string;

   lastName: string;

   profileImage?: string;

   gender?: Gender;

   tokens?: MTokens;
}

export const getUserModel = (logger: CustomLogger) => {
   const col = collection<MUser>(collectionName, logger);
   return col;
};
