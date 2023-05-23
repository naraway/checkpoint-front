import { QueryRequest } from '@nara-way/accent';
import { CitizenWeeklyLoginStatus } from '~/models';

export interface CitizenWeeklyLoginStatusQuery extends QueryRequest<CitizenWeeklyLoginStatus> {
  citizenWeeklyLoginStatusId?: string;
}
