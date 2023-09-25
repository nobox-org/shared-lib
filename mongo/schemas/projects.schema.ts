import { collection } from '../utils';
import { MBase } from './base-model.schema';
import { Firebase, Postmark } from './project-keys.schema';
import { CustomLogger } from '../../types';

const collectionName = 'projects';

export interface Keys {
   postmark?: Postmark;
   firebase?: Firebase;
}

export interface BusinessDetails {
   address?: string;
   name?: string;
}

export interface MProject extends MBase {
   name: string;

   description?: string;

   slug: string;

   siteUrl?: string;

   user: string;

   keys?: Keys;

   businessDetails?: BusinessDetails;
}

export const getProjectModel = (logger: CustomLogger) => {
   const col = collection<MProject>(collectionName, logger, {
      indexes: [
         {
            key: { slug: 1, user: 1 },
            name: 'slug1User1',
         },
      ],
   });
   return col;
};
