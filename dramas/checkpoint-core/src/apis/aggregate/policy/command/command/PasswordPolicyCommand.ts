import { CommandRequest, NameValueList } from '@nara-way/accent';
import { PasswordPolicyCdo } from '~/models';

export interface PasswordPolicyCommand extends CommandRequest {
  passwordPolicyCdo?: PasswordPolicyCdo;
  passwordPolicyCdos?: PasswordPolicyCdo[];
  multiCdo?: boolean;
  passwordPolicyId?: string;
  nameValues?: NameValueList;
}
