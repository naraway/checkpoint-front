import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenLoginLog } from '~/models';

export interface CitizenLoginLogsDynamicQuery extends DynamicQueryRequest<CitizenLoginLog[]> {}
