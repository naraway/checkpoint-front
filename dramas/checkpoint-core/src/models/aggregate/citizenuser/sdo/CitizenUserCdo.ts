import { CreationDataObject } from '@nara-way/accent';

export interface CitizenUserCdo extends CreationDataObject {
  username: string;
  password: string;
  email: string;
  displayName: string;
  pavilionId: string;
}
