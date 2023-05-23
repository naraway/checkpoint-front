import { DomainEntity } from '@nara-way/accent';
import { PasswordState } from './vo';

export interface PasswordStateLog extends DomainEntity {
  readonly state: keyof typeof PasswordState;
  readonly dateTime: number;
  remark?: string;
  readonly citizenUserId: string;
}

export const PasswordStateLogUpdatable = [] as const;
