import { QueryRequest } from '@nara-way/accent';
import { CitizenLoginLog } from '~/models';

export interface CitizenLoginLogQuery extends QueryRequest<CitizenLoginLog> {
  citizenLoginLogId?: string;
}
