import { CommandRequest } from '@nara-way/accent';
import { PasswordLetterRule, PasswordPeriodRule, PasswordSimilarityRule } from '~/models';

export interface RegisterPolicyCommand extends CommandRequest {
  pavilionId?: string;
  loginRetryCount?: number;
  noneLoginPeriod?: number;
  sessionTimeoutMinutes?: number;
  passwordLetterRule?: PasswordLetterRule;
  passwordSimilarityRule?: PasswordSimilarityRule;
  passwordPeriodRule?: PasswordPeriodRule;
}
