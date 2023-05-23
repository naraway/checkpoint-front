import { CreationDataObject } from '@nara-way/accent';
import { PasswordState } from '../vo';

export interface PasswordStateLogCdo extends CreationDataObject {
  dateTime: number;
  state: keyof typeof PasswordState;
  citizenUserId: string;
}
