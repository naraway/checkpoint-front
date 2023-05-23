import { CommandRequest } from '@nara-way/accent';

export interface SendMailForCitizenUserPasswordCommand extends CommandRequest {
  pavilionId?: string;
  username?: string;
  email?: string;
}
