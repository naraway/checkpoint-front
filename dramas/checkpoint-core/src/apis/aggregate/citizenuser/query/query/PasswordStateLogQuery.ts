import { QueryRequest } from '@nara-way/accent';
import { PasswordStateLog } from '~/models';

export interface PasswordStateLogQuery extends QueryRequest<PasswordStateLog> {
  passwordStateLogId?: string;
}
