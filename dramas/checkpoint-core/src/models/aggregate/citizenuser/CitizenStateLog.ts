import { DomainEntity } from '@nara-way/accent';
import { UserState } from './vo';

export interface CitizenStateLog extends DomainEntity {
  readonly dateTime: number;
  readonly state: keyof typeof UserState;
  readonly reason: string;
  remark?: string;
  readonly citizenUserId: string;
}

export const CitizenStateLogUpdatable = ['remark'] as const;
