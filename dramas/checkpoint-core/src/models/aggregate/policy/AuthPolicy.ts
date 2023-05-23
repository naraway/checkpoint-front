import { DomainEntity } from '@nara-way/accent';

export interface AuthPolicy extends DomainEntity {
  updateDate: Date;
  validThru: Date;
  readonly pavilionId: string;
}

export const AuthPolicyUpdatable = ['updateDate', 'validThru'] as const;
