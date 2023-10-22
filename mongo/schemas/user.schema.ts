
import { collection } from '../utils';
import { MBase } from './base-model.schema';
import { Gender } from './types';
import { CustomLogger } from '../../types';


const collectionName = 'users';

export interface MTokens {
   resetPassword?: string;

   forgotPassword?: string;
}

export interface ApiToken {
   createdOn: Date;
   expired: boolean;
   expiredOn?: boolean;
   token: string;
}

export interface MUser extends MBase {
   email: string;

   password: string;

   firstName: string;

   lastName: string;

   profileImage?: string;

   gender?: Gender;

   tokens?: MTokens;

   apiToken?: ApiToken;
}

export const getUserModel = (logger: CustomLogger) => {
   const col = collection<MUser>(collectionName, logger, {
      indexes: [
         {
            key: { apiToken: 1, _id: 1 },
            name: 'unique_apiToken_id',
            unique: true
         },
      ],
   });
   return col;
};
