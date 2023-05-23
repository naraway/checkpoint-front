import { DomainEntity } from '@nara-way/accent';

export interface CitizenWeeklyLoginStatus extends DomainEntity {
  readonly citizenUserId: string;
  readonly yearWeek: string;
  loginCount: number;
  failCount: number;
}

export const CitizenWeeklyLoginStatusUpdatable = ['loginCount', 'failCount'] as const;
