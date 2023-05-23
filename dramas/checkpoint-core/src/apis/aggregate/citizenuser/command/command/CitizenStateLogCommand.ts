import { CommandRequest, NameValueList } from '@nara-way/accent';
import { CitizenStateLogCdo } from '~/models';

export interface CitizenStateLogCommand extends CommandRequest {
  citizenStateLogCdo?: CitizenStateLogCdo;
  citizenStateLogCdos?: CitizenStateLogCdo[];
  multiCdo?: boolean;
  citizenStateLogId?: string;
  nameValues?: NameValueList;
}
