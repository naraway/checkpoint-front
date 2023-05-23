import { DomainEntity } from '@nara-way/accent';

export interface CitizenMonthlyLoginStatus extends DomainEntity {
  readonly citizenUserId: string;
  readonly yearMon: string;
  loginCount: number;
  failCount: number;
}

export const CitizenMonthlyLoginStatusUpdatable = ['loginCount', 'failCount'] as const;
