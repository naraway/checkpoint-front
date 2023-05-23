import { DynamicQueryRequest } from '@nara-way/accent';
import { PasswordStateLog } from '~/models';

export interface PasswordStateLogsDynamicQuery extends DynamicQueryRequest<PasswordStateLog[]> {}
