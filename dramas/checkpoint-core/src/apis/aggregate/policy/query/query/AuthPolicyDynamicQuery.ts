import { DynamicQueryRequest } from '@nara-way/accent';
import { AuthPolicy } from '~/models';

export interface AuthPolicyDynamicQuery extends DynamicQueryRequest<AuthPolicy> {}
