import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenUser } from '~/models';

export interface CitizenUsersDynamicQuery extends DynamicQueryRequest<CitizenUser[]> {}
