import { DynamicQueryRequest } from '@nara-way/accent';
import { PasswordPolicy } from '~/models';

export interface PasswordPolicysDynamicQuery extends DynamicQueryRequest<PasswordPolicy[]> {}
