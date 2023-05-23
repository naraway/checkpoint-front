import { DomainEntity } from '@nara-way/accent';

export interface CitizenUser extends DomainEntity {
  readonly pavilionId: string;
  readonly username: string;
  password: string;
  email: string;
  displayName: string;
  additionalInformation: { [key: string]: any };
  active: boolean;
}

export const CitizenUserUpdatable = ['password', 'email', 'displayName', 'additionalInformation', 'active'] as const;
