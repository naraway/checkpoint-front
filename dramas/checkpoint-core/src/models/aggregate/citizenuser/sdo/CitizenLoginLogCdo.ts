import { CreationDataObject } from '@nara-way/accent';
import { LoginType } from '../vo';

export interface CitizenLoginLogCdo extends CreationDataObject {
  dateTime: number;
  login: keyof typeof LoginType;
  failed: boolean;
  citizenUserId: string;
}
