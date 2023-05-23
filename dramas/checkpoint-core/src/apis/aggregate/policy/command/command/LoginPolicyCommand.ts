import { CommandRequest, NameValueList } from '@nara-way/accent';
import { LoginPolicyCdo } from '~/models';

export interface LoginPolicyCommand extends CommandRequest {
  loginPolicyCdo?: LoginPolicyCdo;
  loginPolicyCdos?: LoginPolicyCdo[];
  multiCdo?: boolean;
  loginPolicyId?: string;
  nameValues?: NameValueList;
}
