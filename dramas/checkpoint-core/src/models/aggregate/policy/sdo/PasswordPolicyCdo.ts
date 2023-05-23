import { CreationDataObject } from '@nara-way/accent';
import { PasswordLetterRule, PasswordPeriodRule, PasswordSimilarityRule } from '../vo';

export interface PasswordPolicyCdo extends CreationDataObject {
  passwordLetterRule: PasswordLetterRule;
  passwordSimilarityRule: PasswordSimilarityRule;
  passwordPeriodRule: PasswordPeriodRule;
  authPolicyId: string;
}
