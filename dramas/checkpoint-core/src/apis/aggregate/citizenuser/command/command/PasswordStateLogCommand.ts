import { CommandRequest, NameValueList } from '@nara-way/accent';
import { PasswordStateLogCdo } from '~/models';

export interface PasswordStateLogCommand extends CommandRequest {
  passwordStateLogCdo?: PasswordStateLogCdo;
  passwordStateLogCdos?: PasswordStateLogCdo[];
  multiCdo?: boolean;
  passwordStateLogId?: string;
  nameValues?: NameValueList;
}
