import { CreationDataObject } from '@nara-way/accent';

export interface CitizenSessionCdo extends CreationDataObject {
  pavilionId: string;
  username: string;
  loginTime: number;
}
