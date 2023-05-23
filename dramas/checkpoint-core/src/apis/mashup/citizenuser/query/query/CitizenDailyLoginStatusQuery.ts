import { QueryRequest } from '@nara-way/accent';
import { CitizenDailyLoginStatus } from '~/models';

export interface CitizenDailyLoginStatusQuery extends QueryRequest<CitizenDailyLoginStatus> {
  citizenDailyLoginStatusId?: string;
}
