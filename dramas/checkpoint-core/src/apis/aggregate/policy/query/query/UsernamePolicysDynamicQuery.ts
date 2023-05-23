import { DynamicQueryRequest } from '@nara-way/accent';
import { UsernamePolicy } from '~/models';

export interface UsernamePolicysDynamicQuery extends DynamicQueryRequest<UsernamePolicy[]> {}
