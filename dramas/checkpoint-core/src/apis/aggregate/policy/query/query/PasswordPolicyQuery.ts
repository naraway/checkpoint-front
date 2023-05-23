import { QueryRequest } from '@nara-way/accent';
import { PasswordPolicy } from '~/models';

export interface PasswordPolicyQuery extends QueryRequest<PasswordPolicy> {
  passwordPolicyId?: string;
}
