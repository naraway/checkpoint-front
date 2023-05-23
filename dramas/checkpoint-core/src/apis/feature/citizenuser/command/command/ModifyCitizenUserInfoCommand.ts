import { CommandRequest } from '@nara-way/accent';

export interface ModifyCitizenUserInfoCommand extends CommandRequest {
  citizenUserId?: string;
  password?: string;
  email?: string;
  displayName?: string;
  additionalInformation?: { [key: string]: any };
}
