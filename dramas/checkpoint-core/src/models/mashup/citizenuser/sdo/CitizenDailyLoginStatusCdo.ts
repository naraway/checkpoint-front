import { CreationDataObject } from '@nara-way/accent';

export interface CitizenDailyLoginStatusCdo extends CreationDataObject {
  citizenUserId: string;
  date: Date;
}
