import { CommandRequest, CommandType } from '@nara-way/accent';
import { PasswordLetterRule, PasswordPeriodRule, PasswordSimilarityRule } from '~/comp';


class RegisterPolicyCommand extends CommandRequest {
  pavilionId: string;
  loginRetryCount: number;
  noneLoginPeriod: number;
  sessionTimeoutMinutes: number;
  passwordLetterRule: PasswordLetterRule | null = null;
  passwordSimilarityRule: PasswordSimilarityRule | null = null;
  passwordPeriodRule: PasswordPeriodRule | null = null;

  constructor(pavilionId: string, loginRetryCount: number, noneLoginPeriod: number, sessionTimeoutMinutes: number) {
    super(CommandType.UserDefined);
    this.pavilionId = pavilionId;
    this.loginRetryCount = loginRetryCount;
    this.noneLoginPeriod = noneLoginPeriod;
    this.sessionTimeoutMinutes = sessionTimeoutMinutes;
  }

  static new(pavilionId: string, loginRetryCount: number, noneLoginPeriod: number, sessionTimeoutMinutes: number) {
    const command = new RegisterPolicyCommand(
      pavilionId,
      loginRetryCount,
      noneLoginPeriod,
      sessionTimeoutMinutes,
    );

    return command;
  }

}

export default RegisterPolicyCommand;

