import { CommandRequest, NameValueList } from '@nara-way/accent';
import { UsernamePolicyCdo } from '~/models';

export interface UsernamePolicyCommand extends CommandRequest {
  usernamePolicyCdo?: UsernamePolicyCdo;
  usernamePolicyCdos?: UsernamePolicyCdo[];
  multiCdo?: boolean;
  usernamePolicyId?: string;
  nameValues?: NameValueList;
}
