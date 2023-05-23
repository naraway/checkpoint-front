import { CommandRequest } from '@nara-way/accent';

export interface ResetCitizenUserPasswordCommand extends CommandRequest {
  pavilionId?: string;
  username?: string;
  password?: string;
  secretCode?: string;
}
