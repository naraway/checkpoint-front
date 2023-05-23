import { CommandRequest } from '@nara-way/accent';

export interface LogoutCitizenUserCommand extends CommandRequest {
  pavilionId?: string;
  username?: string;
  citizenSessionId?: string;
  location?: string;
  deviceIp?: string;
}
