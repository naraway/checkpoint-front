import { DomainEntity } from '@nara-way/accent';

export interface CitizenDailyLoginStatus extends DomainEntity {
  readonly citizenUserId: string;
  readonly date: Date;
  loginCount: number;
  failCount: number;
}

export const CitizenDailyLoginStatusUpdatable = ['loginCount', 'failCount'] as const;
