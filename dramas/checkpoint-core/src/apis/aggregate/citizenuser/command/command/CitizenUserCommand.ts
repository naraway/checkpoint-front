import { CommandRequest, NameValueList } from '@nara-way/accent';
import { CitizenUserCdo } from '~/models';

export interface CitizenUserCommand extends CommandRequest {
  citizenUserCdo?: CitizenUserCdo;
  citizenUserCdos?: CitizenUserCdo[];
  multiCdo?: boolean;
  citizenUserId?: string;
  nameValues?: NameValueList;
}
