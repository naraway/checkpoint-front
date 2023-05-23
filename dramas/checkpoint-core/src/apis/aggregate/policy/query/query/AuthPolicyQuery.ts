import { QueryRequest } from '@nara-way/accent';
import { AuthPolicy } from '~/models';

export interface AuthPolicyQuery extends QueryRequest<AuthPolicy> {
  authPolicyId?: string;
}
