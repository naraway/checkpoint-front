import { DynamicQueryRequest } from '@nara-way/accent';
import { AuthPolicy } from '~/models';

export interface AuthPolicysDynamicQuery extends DynamicQueryRequest<AuthPolicy[]> {}
