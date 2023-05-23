import { QueryRequest } from '@nara-way/accent';
import { LoginPolicy } from '~/models';

export interface LoginPolicyQuery extends QueryRequest<LoginPolicy> {
  loginPolicyId?: string;
}
