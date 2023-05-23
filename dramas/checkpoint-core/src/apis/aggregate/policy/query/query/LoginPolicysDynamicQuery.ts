import { DynamicQueryRequest } from '@nara-way/accent';
import { LoginPolicy } from '~/models';

export interface LoginPolicysDynamicQuery extends DynamicQueryRequest<LoginPolicy[]> {}
