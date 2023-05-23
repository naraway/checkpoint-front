import { DomainEntity } from '@nara-way/accent';

export interface CitizenSession extends DomainEntity {
  readonly pavilionId: string;
  readonly username: string;
  location?: string;
  deviceIp?: string;
  readonly token: string;
  readonly loginTime: number;
  latestSyncTime: number;
  expired: boolean;
}

export const CitizenSessionUpdatable = ['location', 'deviceIp', 'token', 'lastestSyncTime', 'expired'] as const;
