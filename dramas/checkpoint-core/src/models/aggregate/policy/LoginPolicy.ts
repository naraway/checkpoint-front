import { DomainEntity } from '@nara-way/accent';

export interface LoginPolicy extends DomainEntity {
  loginRetryCount: number;
  noneLoginPeriod: number;
  sessionTimeoutMinutes: number;
  readonly authPolicyId: string;
}

export const LoginPolicyUpdatable = ['loginRetryCount', 'noneLoginPeriod', 'sessionTimeoutMinutes'] as const;
