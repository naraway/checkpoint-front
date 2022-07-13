import { PasswordLetterRule, PasswordPeriodRule, PasswordSimilarityRule } from '~/comp';


class PasswordPolicyCdo {
  passwordLetterRule: PasswordLetterRule;
  passwordSimilarityRule: PasswordSimilarityRule;
  passwordPeriodRule: PasswordPeriodRule;
  authPolicyId: string;

  constructor(passwordLetterRule: PasswordLetterRule, passwordSimilarityRule: PasswordSimilarityRule, passwordPeriodRule: PasswordPeriodRule, authPolicyId: string) {
    this.passwordLetterRule = passwordLetterRule;
    this.passwordSimilarityRule = passwordSimilarityRule;
    this.passwordPeriodRule = passwordPeriodRule;
    this.authPolicyId = authPolicyId;
  }

  static new(): PasswordPolicyCdo {
    return new PasswordPolicyCdo(PasswordLetterRule.new(), PasswordSimilarityRule.new(), PasswordPeriodRule.new(), '');
  }

}

export default PasswordPolicyCdo;

