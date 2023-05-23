import { DomainEntity } from '@nara-way/accent';
import { PasswordLetterRule, PasswordPeriodRule, PasswordSimilarityRule } from './vo';

export interface PasswordPolicy extends DomainEntity {
  passwordLetterRule: PasswordLetterRule;
  passwordSimilarityRule: PasswordSimilarityRule;
  passwordPeriodRule: PasswordPeriodRule;
  readonly authPolicyId: string;
}

export const PasswordPolicyUpdatable = ['passwordLetterRule', 'passwordSimilarityRule', 'passwordPeriodRule'] as const;
