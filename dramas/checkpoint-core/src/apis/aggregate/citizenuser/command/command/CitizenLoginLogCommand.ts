import { CommandRequest, NameValueList } from '@nara-way/accent';
import { CitizenLoginLogCdo } from '~/models';

export interface CitizenLoginLogCommand extends CommandRequest {
  citizenLoginLogCdo?: CitizenLoginLogCdo;
  citizenLoginLogCdos?: CitizenLoginLogCdo[];
  multiCdo?: boolean;
  citizenLoginLogId?: string;
  nameValues?: NameValueList;
}
