import { CommandRequest } from '@nara-way/accent';

export interface LoginCitizenUserCommand extends CommandRequest {
  pavilionId?: string;
  username?: string;
  password?: string;
  location?: string;
  deviceIp?: string;
}
