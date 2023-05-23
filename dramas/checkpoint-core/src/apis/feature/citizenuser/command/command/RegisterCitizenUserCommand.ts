import { CommandRequest } from '@nara-way/accent';

export interface RegisterCitizenUserCommand extends CommandRequest {
  pavilionId?: string;
  username?: string;
  password?: string;
  email?: string;
  displayName?: string;
  additionalInformation?: { [key: string]: any };
}
