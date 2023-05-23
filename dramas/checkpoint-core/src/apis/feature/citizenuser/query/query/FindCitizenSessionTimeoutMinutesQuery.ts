import { QueryRequest } from '@nara-way/accent';

export interface FindCitizenSessionTimeoutMinutesQuery extends QueryRequest<number> {
  pavilionId: string;
}
