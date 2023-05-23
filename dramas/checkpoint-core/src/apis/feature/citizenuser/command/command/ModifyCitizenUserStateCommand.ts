import { CommandRequest } from '@nara-way/accent';
import { UserState } from '~/models';

export interface ModifyCitizenUserStateCommand extends CommandRequest {
  citizenUserId?: string;
  userState?: keyof typeof UserState;
  reason?: string;
  remark?: string;
}
