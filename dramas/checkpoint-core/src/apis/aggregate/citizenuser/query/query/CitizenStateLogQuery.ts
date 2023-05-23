import { QueryRequest } from '@nara-way/accent';
import { CitizenStateLog } from '~/models';

export interface CitizenStateLogQuery extends QueryRequest<CitizenStateLog> {
  citizenStateLogId?: string;
}
