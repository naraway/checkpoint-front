import { CommandRequest } from '@nara-way/accent';

export interface CheckCitizenUserStateCommand extends CommandRequest {
  pavilionId?: string;
  username?: string;
}
