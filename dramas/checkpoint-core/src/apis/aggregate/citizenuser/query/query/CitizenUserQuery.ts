import { QueryRequest } from '@nara-way/accent';
import { CitizenUser } from '~/models';

export interface CitizenUserQuery extends QueryRequest<CitizenUser> {
  citizenUserId?: string;
}
