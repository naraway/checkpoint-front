import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenSession } from '~/models';

export interface CitizenSessionsDynamicQuery extends DynamicQueryRequest<CitizenSession[]> {}
