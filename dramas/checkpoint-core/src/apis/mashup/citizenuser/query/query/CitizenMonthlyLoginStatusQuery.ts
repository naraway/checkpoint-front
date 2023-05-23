import { QueryRequest } from '@nara-way/accent';
import { CitizenMonthlyLoginStatus } from '~/models';

export interface CitizenMonthlyLoginStatusQuery extends QueryRequest<CitizenMonthlyLoginStatus> {
  citizenMonthlyLoginStatusId?: string;
}
