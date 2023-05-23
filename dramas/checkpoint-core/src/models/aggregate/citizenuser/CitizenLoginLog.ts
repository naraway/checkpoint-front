import { DomainEntity } from '@nara-way/accent';
import { LoginType } from './vo';

export interface CitizenLoginLog extends DomainEntity {
  readonly dateTime: number;
  readonly login: keyof typeof LoginType;
  location?: string;
  deviceIp?: string;
  readonly failed: boolean;
  remark?: string;
  readonly citizenUserId: string;
}

export const CitizenLoginLogUpdatable = ['location', 'deviceIp', 'remark'] as const;
