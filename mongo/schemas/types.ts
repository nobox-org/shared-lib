import { ObjectId } from "../resources";
import { MUser } from "./user.schema";

export enum Gender {
   male = 'male',
   female = 'female',
}

export interface Tokens {
   resetPassword?: string;
   forgotPassword?: string;
}

export interface AccountStatus {
   confirmed?: boolean;
}

export enum RecordStructureType {
   TEXT = 'TEXT',
   NUMBER = 'NUMBER',
   BOOLEAN = 'BOOLEAN',
   ARRAY = 'ARRAY',
}


export interface RecordSpaceWebhooks {
   onInsertUrl: string;
   onUpdateUrl: string;
}

export type ObjectIdOrString = string | ObjectId;

export type RecordSpaceType = 'key-value' | 'rowed';

export type ScreenedUserType = Omit<MUser, 'passwords' | 'tokens' | '__v'>;