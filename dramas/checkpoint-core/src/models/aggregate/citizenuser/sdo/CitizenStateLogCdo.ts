import { CreationDataObject } from '@nara-way/accent';
import { UserState } from '../vo';

export interface CitizenStateLogCdo extends CreationDataObject {
  dateTime: number;
  state: keyof typeof UserState;
  reason: string;
  citizenUserId: string;
}
