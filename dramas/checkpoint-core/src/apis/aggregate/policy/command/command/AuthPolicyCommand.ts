import { CommandRequest, NameValueList } from '@nara-way/accent';
import { AuthPolicyCdo } from '~/models';

export interface AuthPolicyCommand extends CommandRequest {
  authPolicyCdo?: AuthPolicyCdo;
  authPolicyCdos?: AuthPolicyCdo[];
  multiCdo?: boolean;
  authPolicyId?: string;
  nameValues?: NameValueList;
}
