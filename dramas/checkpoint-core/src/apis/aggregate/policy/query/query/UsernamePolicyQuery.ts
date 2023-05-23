import { QueryRequest } from '@nara-way/accent';
import { UsernamePolicy } from '~/models';

export interface UsernamePolicyQuery extends QueryRequest<UsernamePolicy> {
  usernamePolicyId?: string;
}
