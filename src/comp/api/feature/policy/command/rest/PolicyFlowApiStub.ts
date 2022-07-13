import { CommandResponse, NameValueList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { PasswordLetterRule, PasswordPeriodRule, PasswordSimilarityRule } from '~/comp';
import { ModifyPolicyCommand, RegisterPolicyCommand } from '../command';


class PolicyFlowApiStub {
  static _instance: PolicyFlowApiStub;

  private readonly client = new ApiClient('/api/checkpoint/feature/policy');

  static get instance() {
    if (!PolicyFlowApiStub._instance) {
      PolicyFlowApiStub._instance = new PolicyFlowApiStub();
    }
    return PolicyFlowApiStub._instance;
  }

  async registerPolicy(pavilionId: string, loginRetryCount: number, noneLoginPeriod: number, sessionTimeoutMinutes: number, passwordLetterRule: PasswordLetterRule | null, passwordSimilarityRule: PasswordSimilarityRule | null, passwordPeriodRule: PasswordPeriodRule | null): Promise<CommandResponse> {
    const command = RegisterPolicyCommand.new(
      pavilionId,
      loginRetryCount,
      noneLoginPeriod,
      sessionTimeoutMinutes,
    );
    command.passwordLetterRule = passwordLetterRule;
    command.passwordSimilarityRule = passwordSimilarityRule;
    command.PasswordSimilarityRule = PasswordSimilarityRule;

    return this.client.postNotNull<CommandResponse>(CommandResponse, '/register-policy/command', command);
  }

  async modifyPolicy(pavilionId: string, nameValues: NameValueList): Promise<CommandResponse> {
    const command = ModifyPolicyCommand.new(
      pavilionId,
      nameValues,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/modify-policy/command', command);
  }

}

export default PolicyFlowApiStub;

