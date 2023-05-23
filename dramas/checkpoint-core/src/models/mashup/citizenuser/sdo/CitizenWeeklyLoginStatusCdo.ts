import { CreationDataObject } from '@nara-way/accent';

export interface CitizenWeeklyLoginStatusCdo extends CreationDataObject {
  citizenUserId: string;
  yearWeek: string;
}
