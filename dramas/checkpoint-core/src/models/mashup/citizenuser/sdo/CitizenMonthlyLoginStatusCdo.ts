import { CreationDataObject } from '@nara-way/accent';

export interface CitizenMonthlyLoginStatusCdo extends CreationDataObject {
  citizenUserId: string;
  yearMon: string;
}
