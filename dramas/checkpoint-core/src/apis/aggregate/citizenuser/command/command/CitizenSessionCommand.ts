import { CommandRequest, NameValueList } from '@nara-way/accent';
import { CitizenSessionCdo } from '~/models';

export interface CitizenSessionCommand extends CommandRequest {
  citizenSessionCdo?: CitizenSessionCdo;
  citizenSessionCdos?: CitizenSessionCdo[];
  multiCdo?: boolean;
  citizenSessionId?: string;
  nameValues?: NameValueList;
}
