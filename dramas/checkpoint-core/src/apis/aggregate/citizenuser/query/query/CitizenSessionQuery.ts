import { QueryRequest } from '@nara-way/accent';
import { CitizenSession } from '~/models';

export interface CitizenSessionQuery extends QueryRequest<CitizenSession> {
  citizenSessionId?: string;
}
