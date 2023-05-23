import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenStateLog } from '~/models';

export interface CitizenStateLogsDynamicQuery extends DynamicQueryRequest<CitizenStateLog[]> {}
