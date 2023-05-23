import { CommandRequest } from '@nara-way/accent';

export interface ChangeCitizenUserPasswordCommand extends CommandRequest {
  pavilionId?: string;
  username?: string;
  location?: string;
  deviceIp?: string;
  password?: string;
  newPassword?: string;
}
